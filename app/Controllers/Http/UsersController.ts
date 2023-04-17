import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import CreateUserValidator from 'App/Validators/CreateUserValidator'
import LoginValidator from 'App/Validators/LoginValidator'
import UpdateUserValidator from 'App/Validators/UpdateUserValidator'

export default class UsersController {
  public async register({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(CreateUserValidator)

      const data = await User.create(payload)

      response.created({
        message: "Registered successfully",
        data
      })

    } catch (err) {
      const message = "USERCON20: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal register",
        error: message,
        error_data: err
      })
    }
  }

  public async login({ auth, request, response }: HttpContextContract) {
    const payload = await request.validate(LoginValidator)
    const { email, password } = payload

    try {
      const token = await auth.use('api').attempt(email, password)
      return token
    } catch (err) {
      const message = "USERCO39: " + err.message || err
      console.log(message, err);

      return response.unauthorized({
        message: 'login failed',
        error: message,
        error_data: err
      })
    }
  }

  public async logout({ auth, response }: HttpContextContract) {
    try {
      await auth.use('api').revoke()
      await auth.use('api').logout()
      response.ok({ message: "Berhasil logout" })
    } catch (err) {
      const message = "USERCO56: " + err.message || err
      console.log(message, err);

      return response.unauthorized({
        message: 'login failed',
        error: message,
        error_data: err
      })
    }
  }

  public async index({ response }: HttpContextContract) {
    try {
      const data = await User
        .query()
        .select('id', 'email', 'nama_lengkap', 'no_telepon', 'class_id', 'role')
        .preload('class', query => query.select('id', 'nama_kelas', 'deskripsi'))

      response.ok({
        message: "Berhasil mengambil data user",
        data
      })
    } catch (err) {
      const message = "EMPC79: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal mengambil data user",
        error: message,
        error_data: err
      })
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const { id } = params

      const data = await User
        .query()
        .where('id', '=', id)
        .select('id', 'email', 'nama_lengkap', 'tanggal_lahir', 'jenis_kelamin', 'alamat', 'no_telepon', 'class_id')
        .preload('class', query => query.select('id', 'nama_kelas', 'deskripsi'))

      response.ok({
        message: "Berhasil mengambil detail data user",
        data
      })
    } catch (err) {
      const message = "EMPC105: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal mengambil detail data user",
        error: message,
        error_data: err
      })
    }
  }

  public async update({ params, request, response, auth }: HttpContextContract) {
    try {
      const { id } = params

      const payload = await request.validate(UpdateUserValidator)

      const data = await User.findOrFail(id)

      const result =  response.ok({
        message: "Berhasil update detail data user",
        data
      })

      if (!request.body().role) {
        await data.merge(payload).save()
        return result
      }else {
        if (auth.user?.role === 'admin') {
          await data.merge(payload).save()
          return result
        }else {
          return response.status(403).json({ message: 'data role hanya bisa diubah oleh admin saja' })
        }
      }
    } catch (err) {
      const message = "EMPC141: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal update data user",
        error: message,
        error_data: err
      })
    }
  }

  public async destroy({params, response}: HttpContextContract) {
    try {
      const { id } = params

      const data = await User.findOrFail(id)
      await data.delete()

      response.ok({
        message: 'data berhasil dihapus',
      })
    } catch (err) {
      const message = "USERCO163: " + err.message || err
      console.log(message, err);

      response.badRequest({
        message: "Gagal menghapus data Users",
        error: message,
        error_data: err
      })
    }
  }
}
