import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ExamAnswer from 'App/Models/ExamAnswer'
import UpdateExamAnswerValidator from 'App/Validators/UpdateExamAnswerValidator'

export default class ExamAnswersController {
  public async index({ auth, response, params }: HttpContextContract) {
    try {
      const data = await ExamAnswer
        .query()
        .select('id', 'jawaban', 'is_ragu', 'exam_question_id')
        .where('user_id', '=', auth.user!.id)
        .preload('examQuestion',
          query => query.select('id', 'question_id', 'exam_id',).where('exam_id', '=', params.exam_id))

      response.ok({
        message: "Berhasil mengambil semua data",
        data
      })
    } catch (err) {
      const message = "EXAM_ANSWER_20: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal mengubah data Exam",
        error: message,
        error_data: err
      })
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const { id } = params

      const payload = await request.validate(UpdateExamAnswerValidator)

      const data = await ExamAnswer.findOrFail(id)
      await data.merge(payload).save()

      response.ok({
        message: "berhasil mengubah data Exam Answer",
        data
      })
    } catch (err) {
      const message = "EXAM_ANSWER_45: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal mengubah data Exam",
        error: message,
        error_data: err
      })
    }
  }
}
