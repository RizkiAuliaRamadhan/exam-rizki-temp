import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CheckRole {
  public async handle({ auth, response, params }: HttpContextContract, next: () => Promise<void>,
    allowedRoles?: string[]) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    const user = await auth.user

    if (user?.role === 'student') {
      if (allowedRoles!.indexOf('*') + 1) {
        if (params.id !== user?.id) {
          return response.status(403).json({ message: 'You are not authorized to access this data' })
        }
        console.log('next');
      } else if (allowedRoles!.indexOf(user.role) < 0) {
        return response.unauthorized({
          message: "Tidak memeiliki izin untuk melakukan operasi ini"
        })
      }
    } else if (user?.role === 'trainer') {
      if (allowedRoles!.indexOf('*') + 1) {
        if (params.id !== user?.id) {
          return response.status(403).json({ message: 'You are not authorized to access this data' })
        }
        console.log('next');
      } else if (allowedRoles!.indexOf(user.role) < 0) {
        return response.unauthorized({
          message: "Tidak memeiliki izin untuk melakukan operasi ini"
        })
      }
    } else if (user?.role === 'admin') {
      if (allowedRoles!.indexOf('*') + 1) {
        console.log('next');
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
