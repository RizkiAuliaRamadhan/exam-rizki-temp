import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CheckRole {
  public async handle({ auth, response, params, route }: HttpContextContract, next: () => Promise<void>,
    allowedRoles?: string[]) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    const user = await auth.user

    if (user?.role === 'student') {
      if (allowedRoles!.indexOf('*') + 1) {
        if (params.id !== user?.id && route?.name === 'users.show') {
          console.log('sini');
          
          return response.status(403).json({ message: 'You are not authorized to access this data' })
        }
        console.log('next 1');
      } else if (allowedRoles!.indexOf(user.role) < 0) {
        return response.unauthorized({
          message: "Tidak memeiliki izin untuk melakukan operasi ini"
        })
      }
    } else if (user?.role === 'trainer') {
      if (allowedRoles!.indexOf('*') + 1) {
        if (params.id !== user?.id && route?.name === 'users.show') {
          return response.status(403).json({ message: 'You are not authorized to access this data' })
        }
        console.log('next 2');
      } else if (allowedRoles!.indexOf(user.role) < 0) {
        return response.unauthorized({
          message: "Tidak memeiliki izin untuk melakukan operasi ini"
        })
      }
    } else if (user?.role === 'admin') {
      if (allowedRoles!.indexOf('*') + 1) {
        console.log('next 3');
      } else if (allowedRoles!.indexOf(user.role) < 0) {
        return response.unauthorized({
          message: "Tidak memeiliki izin untuk melakukan operasi ini"
        })
      }
    } else {
      return response.unauthorized({
        message: "Tidak memeiliki izin untuk melakukan operasi ini"
      })
    }

    await next()
  }
}
