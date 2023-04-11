import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    console.log("=====> START SEEDER USERS");
    
    const birthday = (y: number, m: number, d: number) => {
      return new Date(y, m, d)
    }

    await User.createMany([
      {
        id: "47d65606-4946-495b-b5a1-194f154864a8",
        email: "rizki@getnada.com",
        password: "123456",
        nama_lengkap: "rizki aja",
        tanggal_lahir: DateTime.fromJSDate(birthday(1999, 1, 17)),
        jenis_kelamin: "l",
        alamat: "Banjarnegara",
        no_telepon: "085867235654",
        role: "trainer",
      },
      {
        id: "790b4327-0ec7-4e29-b8a9-31a9bbdb1d76",
        email: "tolib@getnada.com",
        password: "123456",
        nama_lengkap: "tolib setiawan",
        tanggal_lahir: DateTime.fromJSDate(birthday(1998, 4, 2)),
        jenis_kelamin: "l",
        alamat: "Banjarnegara",
        no_telepon: "085267235654",
        role: "trainer",
      },
      {
        id: "423879fe-0d1b-4a35-802b-5d5002c63b1f",
        email: "alfi@getnada.com",
        password: "123456",
        nama_lengkap: "alfi nazilah",
        tanggal_lahir: DateTime.fromJSDate(birthday(2002, 7, 20)),
        jenis_kelamin: "p",
        alamat: "Banjarnegara",
        no_telepon: "085817235654",
        role: "trainer",
      },
      {
        id: "225a4970-b3f7-461c-ab9e-e604e8e13768",
        email: "adib@getnada.com",
        password: "123456",
        nama_lengkap: "adib niatno",
        tanggal_lahir: DateTime.fromJSDate(birthday(2010, 7, 20)),
        jenis_kelamin: "l",
        alamat: "Banjarnegara",
        no_telepon: "085817135654",
        role: "student",
        classId: "9d6236eb-0915-449b-a561-5c5e43a87f41" //10 IPA
      },
      {
        id: "0b3a3c52-d66f-473e-853c-472d73949892",
        email: "afid@getnada.com",
        password: "123456",
        nama_lengkap: "afid arifin",
        tanggal_lahir: DateTime.fromJSDate(birthday(2010, 7, 20)),
        jenis_kelamin: "l",
        alamat: "Banjarnegara",
        no_telepon: "0858171312654",
        role: "student",
        classId: "9d6236eb-0915-449b-a561-5c5e43a87f41" //10 IPA
      },
      {
        id: "c16351f5-0daf-489d-8fde-c27b550d326d",
        email: "arifin@getnada.com",
        password: "123456",
        nama_lengkap: "arifin tok",
        tanggal_lahir: DateTime.fromJSDate(birthday(2010, 7, 20)),
        jenis_kelamin: "l",
        alamat: "Banjarnegara",
        no_telepon: "0858171312254",
        role: "student",
        classId: "9d6236eb-0915-449b-a561-5c5e43a87f41" //10 IPA
      },
      {
        id: "32209443-0bba-429e-9733-862f13628111",
        email: "dila@getnada.com",
        password: "123456",
        nama_lengkap: "dila tok",
        tanggal_lahir: DateTime.fromJSDate(birthday(2010, 7, 20)),
        jenis_kelamin: "p",
        alamat: "Banjarnegara",
        no_telepon: "0858171312154",
        role: "student",
        classId: "f9bbf600-57d5-4717-9920-3fc609b64b26" //11 IPA
      },
      {
        id: "9be0dbb0-bb04-41b6-bc45-eb693d07ac25",
        email: "intan@getnada.com",
        password: "123456",
        nama_lengkap: "intan tok",
        tanggal_lahir: DateTime.fromJSDate(birthday(2010, 7, 20)),
        jenis_kelamin: "p",
        alamat: "Banjarnegara",
        no_telepon: "0851271312154",
        role: "student",
        classId: "08cc4b48-0b27-4cac-b82f-7b5e626fb671" //12 IPA
      },
    ])

    console.log("=====> DONE SEEDER USERS");
  }
}
