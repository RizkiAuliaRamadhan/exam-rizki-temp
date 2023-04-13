import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ExamQuestion from 'App/Models/ExamQuestion';
// import Question from 'App/Models/Question';
// import CreateExamQuestionValidator from 'App/Validators/CreateExamQuestionValidator';
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
      const message = "EMPC29: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal mengambil data ExamQuestions",
        error: message,
        error_data: err
      })
    }
  }

  public async store({ }: HttpContextContract) {
    // try {
    //   const user_id = auth.user!.id;
    //   const payload = await request.validate(CreateExamQuestionValidator)
    //   payload['class_id'] = params.class_id
    //   payload['user_id'] = user_id

    //   const data = await ExamQuestion.create(payload)

    //   response.created({
    //     message: "berhasil menambahkan data ExamQuestion",
    //     data
    //   })
    // } catch (err) {
    //   const message = "EMPC51: " + err.message || err
    //   console.log(message, err);

    //   response.badRequest({
    //     message: "Gagal menambahkan data ExamQuestions",
    //     error: message,
    //     error_data: err
    //   })
    // }
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
      const message = "EMPC78: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal mengambil data ExamQuestions",
        error: message,
        error_data: err
      })
    }
  }

  public async update({ }: HttpContextContract) {
    // try {
    //   const { id } = params

    //   const payload = await request.validate(UpdateExamQuestionValidator)

    //   const data = await ExamQuestion.findOrFail(id)
    //   await data.merge(payload).save()

    //   response.ok({
    //     message: "berhasil mengubah data ExamQuestion",
    //     data
    //   })
    // } catch (err) {
    //   const message = "EMPC103: " + err.message || err
    //   console.log(message, err);

    //   response.badRequest({
    //     message: "Gagal mengubah data ExamQuestion",
    //     error: message,
    //     error_data: err
    //   })
    // }
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
