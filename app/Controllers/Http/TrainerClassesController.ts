import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Class from 'App/Models/Class';
import TrainerClass from 'App/Models/TrainerClass';
import CreateTrainerClassValidator from 'App/Validators/CreateTrainerClassValidator';

export default class TrainerClassesController {
  public async index({ response, params }: HttpContextContract) {
    try {
      const data = await TrainerClass
        .query()
        .select('*')
        .where('class_id', '=', params.class_id)
        .preload('class', query => query.select('nama_kelas'))
        .preload('user', query => query.select('nama_lengkap'))

      response.ok({
        message: "Berhasil mengambil data TrainerClass",
        data
      })
    } catch (err) {
      const message = "EMPC78: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal mengambil data TrainerClass",
        error: message,
        error_data: err
      })
    }
  }

  public async store({ request, response, params }: HttpContextContract) {
    try {
      const { class_id } = params

      await Class.findOrFail(class_id)

      const payload = await request.validate(CreateTrainerClassValidator)

      const payloadFix = {
        userId: payload.user_id,
        class_id
      }

      const data = await TrainerClass.create(payloadFix)

      response.created({
        message: "berhasil menyimpan data TrainerClass",
        data
      })
    } catch (err) {
      const message = "TrainerClassC47: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal menyimpan data TrainerClass",
        error: message,
        error_data: err
      })
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const { id = " " } = params

      const data = await TrainerClass
        .query()
        .where('id', '=', id)
        .select('*')
        .preload('class', query => query.select('nama_kelas'))
        .preload('user', query => query.select('nama_lengkap'))


      response.ok({
        message: "Berhasil mengambil data detail TrainerClass",
        data
      })
    } catch (err) {
      const message = "TrainerClassC72: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal mengambil data TrainerClass",
        error: message,
        error_data: err
      })
    }
  }

  public async edit({ }: HttpContextContract) { }

  public async update({ }: HttpContextContract) { }

  public async destroy({params, response}: HttpContextContract) {
    try {
      const { id } = params

      const data = await TrainerClass.findOrFail(id)
      await data.delete()

      console.log('delete');

      response.ok({
        message: 'data berhasil dihapus',
      })
    } catch (err) {
      const message = "TrainerClassC122: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal menghapus data TrainerClasss",
        error: message,
        error_data: err
      })
    }
  }
}
