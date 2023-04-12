import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TrainerClass from 'App/Models/TrainerClass';

export default class TrainerClassesController {
  public async index({ response }: HttpContextContract) {
    try {
      const data = await TrainerClass
        .query()
        .select('*')

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

  public async create({ }: HttpContextContract) { }

  public async store({ }: HttpContextContract) { }

  public async show({params, response}: HttpContextContract) {
    try {
      const { id = " " } = params

      const data = await TrainerClass
        .query()
        .where('id', '=', id)
        .select('*')


      response.ok({
        message: "Berhasil mengambil data detail doctor",
        data
      })
    } catch (err) {
      const message = "DOCTORC72: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal mengambil data doctors",
        error: message,
        error_data: err
      })
    }
  }

  public async edit({ }: HttpContextContract) { }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
