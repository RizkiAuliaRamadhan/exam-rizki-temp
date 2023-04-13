import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Question from 'App/Models/Question';
import CreateQuestionValidator from 'App/Validators/CreateQuestionValidator';
import UpdateQuestionValidator from 'App/Validators/UpdateQuestionValidator';

export default class QuestionsController {
  public async index({ response, auth, params }: HttpContextContract) {
    try {
      const id_auth = auth.user!.id

      const data = await Question
        .query()
        .select('pertanyaan', 'pilihan_a', 'pilihan_b', 'pilihan_c', 'pilihan_d', 'jawaban', 'is_private', 'question_bank_id', 'user_id')
        .where('user_id', '=', id_auth)
        .where('question_bank_id', '=', params.question_bank_id)
        .orWhere('is_private', '=', false)
        .preload('trainer', query => query.select('id', 'nama_lengkap'))
        .preload('questionBank', query => query.select('id', 'nama'))

      response.ok({
        message: "Berhasil mengambil data Questions",
        data
      })
    } catch (err) {
      const message = "QuestionC23: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal mengambil data Questions",
        error: message,
        error_data: err
      })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(CreateQuestionValidator)

      const data = await Question.create(payload)

      response.created({
        message: "berhasil menyimpan data Question",
        data
      })
    } catch (err) {
      const message = "QuestionC45: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal menyimpan data Questions",
        error: message,
        error_data: err
      })
    }
  }

  public async show({ params, response, auth }: HttpContextContract) {
    try {
      const { id = " " } = params
      const id_auth = auth.user!.id

      const data = await Question
        .query()
        .where('id', '=', id)
        .andWhere('user_id', '=', id_auth)
        .select('*')

      if (data.length == 0) {
        return response.status(403).json({ message: 'You are not authorized to access this data' })
      } else {
        return response.ok({
          message: "Berhasil mengambil data detail Question",
          data
        })
      }

    } catch (err) {
      const message = "QuestionC72: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal mengambil data Questions",
        error: message,
        error_data: err
      })
    }
  }

  public async update({ params, request, response, auth }: HttpContextContract) {
    try {
      const { id } = params
      const { user_id } = request.body()
      const id_auth = auth.user!.id

      if (user_id == id_auth) {
        const payload = await request.validate(UpdateQuestionValidator)

        const data = await Question.findOrFail(id)

        await data.merge(payload).save()

        response.ok({
          message: "berhasil mengubah data",
          data
        })
      } else {
        response.badRequest({
          message: "Gagal mengubah data Questions",
        })
      }
    } catch (err) {
      const message = "QuestionC98: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal mengubah data Questions",
        error: message,
        error_data: err
      })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const { id } = params

      const data = await Question.findOrFail(id)
      await data.delete()

      response.ok({
        message: 'data berhasil dihapus',
      })
    } catch (err) {
      const message = "QuestionC122: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal menghapus data Questions",
        error: message,
        error_data: err
      })
    }
  }
}
