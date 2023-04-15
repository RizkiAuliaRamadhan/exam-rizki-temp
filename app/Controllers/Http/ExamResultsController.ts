import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ExamResult from 'App/Models/ExamResult';
import UpdateExamResultValidator from 'App/Validators/UpdateExamResultValidator';

export default class ExamResultsController {
  public async index({ auth, response }: HttpContextContract) {
    try {
      const data = await ExamResult
        .query()
        .select('id', 'waktu_mulai', 'waktu_selesai', 'nilai', 'is_finished', 'exam_id')
        .where('user_id', '=', auth.user!.id)
        .preload('exam', query => query.select('nama_ujian'))

      response.ok({
        message: "Berhasil mengambil data hasil ujian",
        data
      })
    } catch (err) {
      const message = "EXAM_RESULT_CON_19: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal mengambil data QuestionBanks",
        error: message,
        error_data: err
      })
    }
  }

  public async show({ params, response, auth }: HttpContextContract) {
    try {
      const { id = " " } = params

      const data = await ExamResult
        .query()
        .select('id', 'waktu_mulai', 'waktu_selesai', 'nilai', 'is_finished', 'exam_id')
        .where('user_id', '=', auth.user!.id)
        .andWhere('id', '=', id)
        .preload('exam', query => query.select('nama_ujian', 'waktu_mulai', 'waktu_selesai'))

      response.ok({
        message: "Berhasil mengambil data detail hasil ujian",
        data
      })
    } catch (err) {
      const message = "EXAM_RESULT_CON_46: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal mengambil data QuestionBanks",
        error: message,
        error_data: err
      })
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const { id } = params

      const payload = await request.validate(UpdateExamResultValidator)

      const data = await ExamResult.findOrFail(id)

      await data.merge(payload).save()

      response.ok({
        message: "berhasil mengubah data",
        data
      })
    } catch (err) {
      const message = "EXAM_RESULT_CON_72: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal mengubah data QuestionBanks",
        error: message,
        error_data: err
      })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const { id } = params

      const data = await ExamResult.findOrFail(id)
      await data.delete()

      console.log('delete');

      response.ok({
        message: 'data berhasil dihapus',
      })
    } catch (err) {
      const message = "EXAM_RESULT_CON_96: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal menghapus data ExamResults",
        error: message,
        error_data: err
      })
    }
  }
}
