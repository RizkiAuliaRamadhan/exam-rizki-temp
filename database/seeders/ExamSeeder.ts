import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Exam from 'App/Models/Exam';
import { DateTime } from 'luxon';

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    console.log("=====> START SEEDER EXAM");

    const dateTime = (date: string) => {
      return DateTime.fromFormat(date, "yyyy-MM-dd HH:mm:ss")
    }

    await Exam.createMany([
      {
        id: "7f3b847c-d73c-11ed-8c16-325096b39f47",
        nama_ujian: "UTS TIK Kelas 10",
        waktu_mulai: dateTime("2023-04-20 08:00:00"),
        waktu_selesai: dateTime("2023-04-20 11:05:00"),
        durasi: 65,
        userId: "47d65606-4946-495b-b5a1-194f154864a8", //rizki
        classId: "9d6236eb-0915-449b-a561-5c5e43a87f41", //10 A
      },
      {
        id: "7f3b86de-d73c-11ed-a706-325096b39f47",
        nama_ujian: "UAS TIK Kelas 10",
        waktu_mulai: dateTime("2023-06-21 08:00:00"),
        waktu_selesai: dateTime("2023-06-21 11:05:00"),
        durasi: 65,
        userId: "790b4327-0ec7-4e29-b8a9-31a9bbdb1d76", //tolib
        classId: "9d6236eb-0915-449b-a561-5c5e43a87f41", //10 A
      },
    ])
      
  }
}
