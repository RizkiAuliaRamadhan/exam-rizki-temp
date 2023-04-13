import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Exam from 'App/Models/Exam'
import CreateExamValidator from 'App/Validators/CreateExamValidator'
import UpdateExamValidator from 'App/Validators/UpdateExamValidator'

export default class ExamsController {
  public async index({ response, params }: HttpContextContract) {
    try {
      const data = await Exam
        .query()
        .select('id', 'nama_ujian', 'waktu_mulai', 'waktu_selesai', 'durasi', 'user_id', 'class_id')
        .where('class_id', '=', params.class_id)
        .preload('user', query => query.select('nama_lengkap', 'role'))
        .preload('class', query => query.select('nama_kelas'))

      response.ok({
        message: "Berhasil mengambil data Exams",
        data
      })
    } catch (err) {
      const message = "EMPC29: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal mengambil data Exams",
        error: message,
        error_data: err
      })
    }
  }

  public async store({ request, response, params, auth }: HttpContextContract) {
    try {
      const user_id = auth.user!.id;
      const payload = await request.validate(CreateExamValidator)
      payload['class_id'] = params.class_id
      payload['user_id'] = user_id

      const data = await Exam.create(payload)

      response.created({
        message: "berhasil menambahkan data Exam",
        data
      })
    } catch (err) {
      const message = "EMPC51: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal menambahkan data Exams",
        error: message,
        error_data: err
      })
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const { id } = params

      const data = await Exam
        .query()
        .where('id', '=', id)
        .select('*')

      response.ok({
        message: "Berhasil mengambil data Exams",
        data
      })
    } catch (err) {
      const message = "EMPC78: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal mengambil data Exams",
        error: message,
        error_data: err
      })
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const { id } = params

      const payload = await request.validate(UpdateExamValidator)

      const data = await Exam.findOrFail(id)
      await data.merge(payload).save()

      response.ok({
        message: "berhasil mengubah data Exam",
        data
      })
    } catch (err) {
      const message = "EMPC103: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal mengubah data Exam",
        error: message,
        error_data: err
      })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const { id } = params

      const data = await Exam.findOrFail(id)
      await data.delete()

      response.ok({
        message: `data berhasil dihapus`,
      })
    } catch (err) {
      const message = "EMPC125: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal menghapus data Exam",
        error: message,
        error_data: err
      })
    }
  }
}
