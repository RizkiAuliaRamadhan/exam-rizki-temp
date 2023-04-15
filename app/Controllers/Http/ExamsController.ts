import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Exam from 'App/Models/Exam'
import ExamAnswer from 'App/Models/ExamAnswer'
import ExamResult from 'App/Models/ExamResult'
import CreateExamValidator from 'App/Validators/CreateExamValidator'
import UpdateExamValidator from 'App/Validators/UpdateExamValidator'
import { DateTime } from 'luxon'

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

  public async show({ params, response, auth }: HttpContextContract) {
    try {
      const { id } = params

      if (auth.user?.role == 'trainer' || auth.user?.role == 'admin') {
        const data = await Exam
          .query()
          .where('id', '=', id)
          .select('id', 'nama_ujian', 'waktu_mulai', 'waktu_selesai', 'durasi', 'class_id')
          .preload('soal_ujian',
            query => query.select('question_id')
              .preload('soal',
                query => query.select('pertanyaan', 'pilihan_a', 'pilihan_b', 'pilihan_c', 'pilihan_d', 'jawaban')))
        response.ok({
          message: "Berhasil mengambil data Exams",
          data
        })

      } else {
        const examresult = await ExamResult
          .query()
          .select('*')
          .where('exam_id', '=', params.id)
          .andWhere('user_id', '=', auth.user!.id)

        if (examresult.length > 0) {
          // console.log(soal);
          const data = await Exam
            .query()
            .where('id', '=', id)
            .select('id', 'nama_ujian', 'waktu_mulai', 'waktu_selesai', 'durasi', 'class_id')

          const examAnswer = await ExamAnswer
            .query()
            .select('id', 'jawaban', 'is_ragu', 'user_id', 'exam_question_id')
            .where('user_id', '=', auth.user!.id)
            .preload('examQuestion',
              query => query.select('id', 'question_id', 'exam_id').where('exam_id', '=', id)
                .preload('soal', query => query.select('id', 'pertanyaan', 'pilihan_a', 'pilihan_b', 'pilihan_c', 'pilihan_d'))
            )

          data.map(value => {
            if (value.waktu_mulai <= DateTime.now() && value.waktu_selesai > DateTime.now()) {
              let durasi = value.durasi
              let sisa_waktu = value.waktu_selesai.diffNow().as('minutes')
              durasi >= sisa_waktu ? durasi = sisa_waktu : console.log(durasi);

              response.ok({
                meesage: "Selamat mengerjakan soal kembali",
                durasi,
                examAnswer
              })
            } else {
              response.badRequest({
                message: 'Masuk ujian pada waktu yang telah ditentukan'
              })
            }
          })

        } else {
          const data = await Exam
            .query()
            .where('id', '=', id)
            .select('id', 'nama_ujian', 'waktu_mulai', 'waktu_selesai', 'durasi', 'class_id')
            .preload('soal_ujian',
              query => query.select('id', 'question_id').orderByRaw('RANDOM()').limit(10)
                .preload('soal',
                  query => query.select('pertanyaan', 'pilihan_a', 'pilihan_b', 'pilihan_c', 'pilihan_d')))

          data.map(value => {
            if (value.waktu_mulai <= DateTime.now() && value.waktu_selesai > DateTime.now()) {
              let durasi = value.durasi
              let sisa_waktu = value.waktu_selesai.diffNow().as('minutes')
              durasi >= sisa_waktu ? durasi = sisa_waktu : console.log(durasi);

              ExamResult.create({
                waktu_mulai: DateTime.now(),
                userId: auth.user!.id,
                examId: value.id
              })
              value.durasi = durasi;

              value.soal_ujian.map(valueSoal => {
                ExamAnswer.create({
                  jawaban: '',
                  is_ragu: false,
                  examQuestionId: valueSoal.id,
                  userId: auth.user!.id
                })

              })

              response.ok({
                message: "Selamat mengerjakan ujian",
                data: value
              })

            } else {
              response.badRequest({
                message: 'Masuk ujian pada waktu yang telah ditentukan'
              })
            }
          })
        }
      }
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
