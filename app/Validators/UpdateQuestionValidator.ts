import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateQuestionValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    pertanyaan: schema.string.optional({ trim: true }),
    pilihan_a: schema.string.optional({ trim: true }),
    pilihan_b: schema.string.optional({ trim: true }),
    pilihan_c: schema.string.optional({ trim: true }),
    pilihan_d: schema.string.optional({ trim: true }),
    jawaban: schema.string.optional({ trim: true }, ([
      rules.maxLength(1)
    ])),
    is_private: schema.boolean.optional(),
    trainer_id: schema.string.optional({ trim: true }, ([
      rules.uuid(),
      rules.exists({table: 'users', column: 'id'}),
    ])),
    question_bank_id: schema.string.optional({ trim: true }, ([
      rules.uuid(),
      rules.exists({table: 'question_banks', column: 'id'}),
    ])),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {}
}
