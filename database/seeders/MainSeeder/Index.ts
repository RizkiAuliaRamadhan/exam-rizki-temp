import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Application from '@ioc:Adonis/Core/Application'

export default class extends BaseSeeder {
  private async runSeeder(seeder: { default: typeof BaseSeeder }) {
    /**
     * Do not run when not in dev mode and seeder is development
     * only
     */
    if (seeder.default.developmentOnly && !Application.inDev) {
      return
    }

    await new seeder.default(this.client).run()
  }

  public async run () {
    // Write your database queries inside the run method
    await this.runSeeder(await import('../ClassSeeder'))
    await this.runSeeder(await import('../UserSeeder'))
    await this.runSeeder(await import('../TrainerClassesSeeder'))
    await this.runSeeder(await import('../QuestionBankSeeder'))
    await this.runSeeder(await import('../QuestionSeeder'))
    await this.runSeeder(await import('../ExamSeeder'))
    await this.runSeeder(await import('../ExamQuestionSeeder'))
  }
}
