/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('/register', 'UsersController.register')
Route.post('/login', 'UsersController.login')

Route.group(() => {
  Route.post('/logout', 'UsersController.logout')

  Route.shallowResource('users', 'UsersController').apiOnly().middleware({
    'show': 'checkRole:*',
    'index': 'checkRole:admin,trainer',
    'update': 'checkRole:*',
    'destroy': 'checkRole:admin'
  })

  Route.shallowResource('/classes', 'ClassesController').apiOnly().middleware({
    'show': 'checkRole:*',
    'index': 'checkRole:admin,trainer',
    'create': 'checkRole:admin,trainer',
    'update': 'checkRole:admin,trainer',
    'destroy': 'checkRole:admin,trainer'
  })

  Route.shallowResource('classes.trainer-classes', 'TrainerClassesController').apiOnly().middleware({
    'show': 'checkRole:trainer',
    'index': 'checkRole:trainer',
    'create': 'checkRole:trainer',
    'update': 'checkRole:trainer',
    'destroy': 'checkRole:trainer'
  })

  Route.shallowResource('/question-banks', 'QuestionBanksController').apiOnly().middleware({
    'show': 'checkRole:trainer',
    'index': 'checkRole:trainer',
    'create': 'checkRole:trainer',
    'update': 'checkRole:trainer',
    'destroy': 'checkRole:trainer'
  })

  Route.shallowResource('question-banks.questions', 'QuestionsController').apiOnly().middleware({
    'show': 'checkRole:trainer',
    'index': 'checkRole:trainer',
    'create': 'checkRole:trainer',
    'update': 'checkRole:trainer',
    'destroy': 'checkRole:trainer'
  })

  Route.shallowResource('classes.exams', 'ExamsController').apiOnly().middleware({
    'show': 'checkRole:trainer',
    'index': 'checkRole:trainer',
    'create': 'checkRole:trainer',
    'update': 'checkRole:trainer',
    'destroy': 'checkRole:trainer'
  })
}).middleware(['auth'])