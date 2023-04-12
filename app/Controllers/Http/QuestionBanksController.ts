import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import QuestionBank from 'App/Models/QuestionBank';
import CreateQuestionBankValidator from 'App/Validators/CreateQuestionBankValidator';
import UpdateQuestionBankValidator from 'App/Validators/UpdateQuestionBankValidator';

export default class QuestionBanksController {
  public async index({ response }: HttpContextContract) {
    try {
      const data = await QuestionBank
        .query()
        .select('id', 'nama')

      response.ok({
        message: "Berhasil mengambil data QuestionBanks",
        data
      })
    } catch (err) {
      const message = "QuestionBankC23: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal mengambil data QuestionBanks",
        error: message,
        error_data: err
      })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(CreateQuestionBankValidator)

      const data = await QuestionBank.create(payload)

      response.created({
        message: "berhasil menyimpan data QuestionBank",
        data
      })
    } catch (err) {
      const message = "QuestionBankC45: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal menyimpan data QuestionBanks",
        error: message,
        error_data: err
      })
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const { id = " " } = params

      const data = await QuestionBank
        .query()
        .where('id', '=', id)
        .select('id', 'nama')

      response.ok({
        message: "Berhasil mengambil data detail QuestionBank",
        data
      })
    } catch (err) {
      const message = "QuestionBankC72: " + err.message || err
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

      const payload = await request.validate(UpdateQuestionBankValidator)

      const data = await QuestionBank.findOrFail(id)

      await data.merge(payload).save()

      response.ok({
        message: "berhasil mengubah data",
        data
      })
    } catch (err) {
      const message = "QuestionBankC98: " + err.message || err
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

      const data = await QuestionBank.findOrFail(id)
      await data.delete()

      console.log('delete');

      response.ok({
        message: 'data berhasil dihapus',
      })
    } catch (err) {
      const message = "QuestionBankC122: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal menghapus data QuestionBanks",
        error: message,
        error_data: err
      })
    }
  }
}
