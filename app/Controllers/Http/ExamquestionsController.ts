import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ExamQuestion from 'App/Models/ExamQuestion';
import Question from 'App/Models/Question';
import CreateExamQuestionValidator from 'App/Validators/CreateExamQuestionValidator';
import UpdateExamQuestionValidator from 'App/Validators/UpdateExamQuestionValidator';
// import UpdateExamQuestionValidator from 'App/Validators/UpdateExamQuestionValidator';

export default class ExamquestionsController {
  public async index({ response, params }: HttpContextContract) {
    try {
      const data = await ExamQuestion
        .query()
        .select('id', 'question_id')
        .where('exam_id', '=', params.exam_id)
        .preload('soal', query => query.select('pertanyaan', 'pilihan_a', 'pilihan_b', 'pilihan_c', 'pilihan_d'))

      response.ok({
        message: "Berhasil mengambil data ExamQuestions",
        data
      })
    } catch (err) {
      const message = "EXAM_CON_21: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal mengambil data ExamQuestions",
        error: message,
        error_data: err
      })
    }
  }

  public async store({ auth, request, params, response }: HttpContextContract) {
    try {
      const user_id = auth.user!.id;

      const questionIdParams = request.body().question_id

      const question = await Question
        .query()
        .where('id', '=', questionIdParams)

      const examQuestion = await ExamQuestion
        .query()
        .select('id', 'question_id')
        .where('exam_id', '=', params.exam_id)

      let questionId: String
      let userIdQUestion: String
      let is_private: Boolean

      examQuestion.map(value => {
        questionId = value.questionId
      })

      question.map(value => {
        userIdQUestion = value.userId
        is_private = value.is_private
      })

      if (userIdQUestion! === user_id || is_private! == false) {
        if (questionId! !== questionIdParams) {
          const payload = await request.validate(CreateExamQuestionValidator)
          payload['exam_id'] = params.exam_id

          const data = await ExamQuestion.create(payload)
          console.log(payload);

          response.created({
            message: "berhasil menambahkan data Exam",
            data
          })
        }else {
          response.badRequest({
            message: "Gagal menambahkan data ExamQuestions, Soal sudah ada"
          })
        }
      } else {
        response.badRequest({
          message: "Gagal menambahkan data ExamQuestions, Soal harus punya sendiri atau is_private bernilai false"
        })
      }

    } catch (err) {
      const message = "EXAM_CON_84: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal menambahkan data ExamQuestions",
        error: message,
        error_data: err
      })
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const { id } = params

      const data = await ExamQuestion
        .query()
        .where('id', '=', id)
        .select('question_id')
        .preload('soal', query => query.select('pertanyaan', 'pilihan_a', 'pilihan_b', 'pilihan_c', 'pilihan_d'))

      response.ok({
        message: "Berhasil mengambil data ExamQuestions",
        data
      })
    } catch (err) {
      const message = "EXAM_CON_110: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal mengambil data ExamQuestions",
        error: message,
        error_data: err
      })
    }
  }

  public async update({params, response, request}: HttpContextContract) {
    try {
      const { id } = params

      const payload = await request.validate(UpdateExamQuestionValidator)

      const data = await ExamQuestion.findOrFail(id)
      await data.merge(payload).save()

      response.ok({
        message: "berhasil mengubah data ExamQuestion",
        data
      })
    } catch (err) {
      const message = "EXAM_CON_136: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal mengubah data ExamQuestion",
        error: message,
        error_data: err
      })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const { id } = params

      const data = await ExamQuestion.findOrFail(id)
      await data.delete()

      response.ok({
        message: `data berhasil dihapus`,
      })
    } catch (err) {
      const message = "EXAM_CON_158: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal menghapus data Exam",
        error: message,
        error_data: err
      })
    }
  }
}
