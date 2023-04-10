import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Class from 'App/Models/Class';

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    console.log("=====> START SEEDER CLASS");

    await Class.createMany([
      {
        id: "9d6236eb-0915-449b-a561-5c5e43a87f41",
        nama_kelas: "10 IPA",
        deskripsi: "Kelas 10 IPA SMAN 1 Banjarnegara"
      },
      {
        id: "f9bbf600-57d5-4717-9920-3fc609b64b26",
        nama_kelas: "11 IPA",
        deskripsi: "Kelas 11 IPA SMAN 1 Banjarnegara"
      },
      {
        id: "08cc4b48-0b27-4cac-b82f-7b5e626fb671",
        nama_kelas: "12 IPA",
        deskripsi: "Kelas 12 IPA SMAN 1 Banjarnegara"
      },
    ])

    console.log("=====> DONE SEEDER CLASS");
  }
}
