import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ExamQuestion from 'App/Models/ExamQuestion';

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    console.log("=====> START SEEDER EXAM QUESTION");

    await ExamQuestion.createMany([
      {
        id: "c8880bea-d747-11ed-b41b-325096b39f47",
        examId: "7f3b847c-d73c-11ed-8c16-325096b39f47",
        questionId: "d4fe1541-c245-4df2-ad61-75797f9141d1",
      },
      {
        id: "c8880dac-d747-11ed-bb15-325096b39f47",
        examId: "7f3b847c-d73c-11ed-8c16-325096b39f47",
        questionId: "3dc94ee0-88e0-4c85-b178-6bb676600d9c",
      },
      {
        id: "c8880e1a-d747-11ed-9b8b-325096b39f47",
        examId: "7f3b847c-d73c-11ed-8c16-325096b39f47",
        questionId: "c82e4698-6f09-47f0-a9e0-75be432f564d",
      },
      {
        id: "c8880e74-d747-11ed-938c-325096b39f47",
        examId: "7f3b847c-d73c-11ed-8c16-325096b39f47",
        questionId: "0f13464f-8770-42d4-bd90-d66163f33b6c",
      },
      {
        id: "c8880eba-d747-11ed-937c-325096b39f47",
        examId: "7f3b847c-d73c-11ed-8c16-325096b39f47",
        questionId: "1547ed9e-a21b-4d88-ba12-e01e0a652eca",
      },
      {
        id: "c8880f00-d747-11ed-aeee-325096b39f47",
        examId: "7f3b847c-d73c-11ed-8c16-325096b39f47",
        questionId: "6d0da817-8847-49e9-86c0-53aeeee532fc",
      },
      {
        id: "c8880f46-d747-11ed-bd4c-325096b39f47",
        examId: "7f3b847c-d73c-11ed-8c16-325096b39f47",
        questionId: "56d569ae-d4a9-4da5-a44f-535dec48a6e6",
      },
      {
        id: "c8880f82-d747-11ed-bfdd-325096b39f47",
        examId: "7f3b847c-d73c-11ed-8c16-325096b39f47",
        questionId: "fda84875-57cf-4045-874c-b474aeb73db2",
      },
      {
        id: "c8880fc8-d747-11ed-a124-325096b39f47",
        examId: "7f3b847c-d73c-11ed-8c16-325096b39f47",
        questionId: "c2e292f4-d739-11ed-8058-325096b39f47",
      },
      {
        id: "c888100e-d747-11ed-85d0-325096b39f47",
        examId: "7f3b847c-d73c-11ed-8c16-325096b39f47",
        questionId: "c2e2a596-d739-11ed-b35a-325096b39f47",
      },


      {
        id: "36d54d82-d749-11ed-9e52-325096b39f47",
        examId: "7f3b86de-d73c-11ed-a706-325096b39f47",
        questionId: "c2e2a8fc-d739-11ed-a4d3-325096b39f47"
      },
      {
        id: "36d54fb2-d749-11ed-98d7-325096b39f47",
        examId: "7f3b86de-d73c-11ed-a706-325096b39f47",
        questionId: "c2e2a88e-d739-11ed-8400-325096b39f47"
      },
      {
        id: "36d55052-d749-11ed-9124-325096b39f47",
        examId: "7f3b86de-d73c-11ed-a706-325096b39f47",
        questionId: "c2e2a82a-d739-11ed-abe3-325096b39f47"
      },
      {
        id: "36d550c0-d749-11ed-8ea9-325096b39f47",
        examId: "7f3b86de-d73c-11ed-a706-325096b39f47",
        questionId: "c2e2a596-d739-11ed-b35a-325096b39f47"
      },
      {
        id: "36d55124-d749-11ed-aee3-325096b39f47",
        examId: "7f3b86de-d73c-11ed-a706-325096b39f47",
        questionId: "c2e295c4-d739-11ed-a380-325096b39f47"
      },
      {
        id: "36d55188-d749-11ed-b122-325096b39f47",
        examId: "7f3b86de-d73c-11ed-a706-325096b39f47",
        questionId: "c2e292f4-d739-11ed-8058-325096b39f47"
      },
      {
        id: "36d551ce-d749-11ed-8713-325096b39f47",
        examId: "7f3b86de-d73c-11ed-a706-325096b39f47",
        questionId: "c82e4698-6f09-47f0-a9e0-75be432f564d"
      },
      {
        id: "36d55214-d749-11ed-ad07-325096b39f47",
        examId: "7f3b86de-d73c-11ed-a706-325096b39f47",
        questionId: "3dc94ee0-88e0-4c85-b178-6bb676600d9c"
      },
      {
        id: "36d55250-d749-11ed-8161-325096b39f47",
        examId: "7f3b86de-d73c-11ed-a706-325096b39f47",
        questionId: "0b02c1e8-4c8c-46fb-85fe-12fa64abd2dc"
      },
      {
        id: "36d55296-d749-11ed-ae84-325096b39f47",
        examId: "7f3b86de-d73c-11ed-a706-325096b39f47",
        questionId: "d4fe1541-c245-4df2-ad61-75797f9141d1"
      },
    ])

    console.log("=====> DONE SEEDER EXAM QUESTION");
  }
}
