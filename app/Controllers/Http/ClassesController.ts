import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Class from 'App/Models/Class'
import CreateClassValidator from 'App/Validators/CreateClassValidator'
import UpdateClassValidator from 'App/Validators/UpdateClassValidator'

export default class ClassesController {
  public async index({ response }: HttpContextContract) {
    try {
      const data = await Class
        .query()
        .select('id', 'nama_kelas', 'deskripsi')
        .preload('trainerClass', query => query.select('user_id')
          .preload('user', query => query.select('nama_lengkap'))
        )

      response.ok({
        message: "Berhasil mengambil data Class",
        data
      })
    } catch (err) {
      const message = "CLASS_CON_21: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal mengambil data Class",
        error: message,
        error_data: err
      })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(CreateClassValidator)

      const data = await Class.create(payload)

      response.created({
        message: "berhasil menyimpan data Class",
        data
      })
    } catch (err) {
      const message = "CLASS_CON_43: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal menyimpan data Classs",
        error: message,
        error_data: err
      })
    }
  }

  public async show({ response, params, auth }: HttpContextContract) {
    try {
      const { id } = params

      const data = await Class
        .query()
        .where('id', '=', id)
        .select('id', 'nama_kelas', 'deskripsi')
        .preload('trainerClass', query => query.select('user_id')
          .preload('user', query => query.select('nama_lengkap'))
        )

      const result = response.ok({
        message: "Berhasil mengambil detail data Class",
        data
      })

      if (auth.user?.classId && auth.user?.role === 'student') {
        if (id == auth.user?.classId) {
          return result
        } else {
          return response.status(403).json({ message: 'Masuk kelas yang telah ditentukan ya' })
        }
      }

    } catch (err) {
      const message = "CLASS_CON_78: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal mengambil detail data Class",
        error: message,
        error_data: err
      })
    }
  }


  public async update({ params, request, response }: HttpContextContract) {
    try {
      const { id } = params

      const payload = await request.validate(UpdateClassValidator)

      const data = await Class.findOrFail(id)

      await data.merge(payload).save()

      response.ok({
        message: "berhasil mengubah data",
        data
      })
    } catch (err) {
      const message = "CLASS_CON_107: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal mengubah data Classs",
        error: message,
        error_data: err
      })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const { id } = params

      const data = await Class.findOrFail(id)
      await data.delete()

      response.ok({
        message: 'data berhasil dihapus',
      })
    } catch (err) {
      const message = "CLASS_CON_129: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal menghapus data Classs",
        error: message,
        error_data: err
      })
    }
  }
}
