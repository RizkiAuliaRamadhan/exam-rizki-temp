import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import QuestionBank from 'App/Models/QuestionBank';

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    console.log("=====> START SEEDER QUESTION BANKS");
    
    await QuestionBank.createMany([
      {
        id: "01457dd2-acf9-4b3c-a567-95f2c391d772",
        nama: "TIK Kelas 10",
      },
      {
        id: "bc8e2e21-29ba-484a-94d9-49005365e164",
        nama: "TIK Kelas 11",
      },
      {
        id: "5fe43eb3-c770-462a-8809-0eca03fb1438",
        nama: "TIK Kelas 12",
      },
    ])

    console.log("=====> DONE SEEDER QUESTION BANKS");
  }
}
