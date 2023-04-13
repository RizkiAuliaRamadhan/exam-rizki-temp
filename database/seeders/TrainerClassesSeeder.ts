import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import TrainerClass from 'App/Models/TrainerClass';

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    console.log("=====> START SEEDER TRAINERCLASS");

    await TrainerClass.createMany([
      {
        id: "757ae65b-35e2-4e59-b91a-11d212f4593f",
        classId: "9d6236eb-0915-449b-a561-5c5e43a87f41", // 10 A,
        userId: "47d65606-4946-495b-b5a1-194f154864a8" //rizki
      },
      {
        id: "12db7501-521d-45b0-b097-5a8816139a2d",
        classId: "9d6236eb-0915-449b-a561-5c5e43a87f41", // 10 A,
        userId: "790b4327-0ec7-4e29-b8a9-31a9bbdb1d76" //tolib
      },
      {
        id: "fc8b8923-9d9f-4f6b-a8b6-1ae843dd5a9a",
        classId: "f9bbf600-57d5-4717-9920-3fc609b64b26", // 11 A,
        userId: "423879fe-0d1b-4a35-802b-5d5002c63b1f" //alfi
      },
      {
        id: "93c90078-e68a-4bbc-8488-bb47ed14a571",
        classId: "f9bbf600-57d5-4717-9920-3fc609b64b26", // 11 A,
        userId: "47d65606-4946-495b-b5a1-194f154864a8" //rizki
      },
      {
        id: "581ce0b4-60a1-415d-8477-198e461000d6",
        classId: "08cc4b48-0b27-4cac-b82f-7b5e626fb671", // 12 A,
        userId: "423879fe-0d1b-4a35-802b-5d5002c63b1f" //alfi
      },
      {
        id: "ae6dac70-c76a-431c-9111-3ab499a762e7",
        classId: "08cc4b48-0b27-4cac-b82f-7b5e626fb671", // 12 A,
        userId: "47d65606-4946-495b-b5a1-194f154864a8" //rizki
      },
    ])

    console.log("=====> DONE SEEDER TRAINERCLASS");
  }
}
