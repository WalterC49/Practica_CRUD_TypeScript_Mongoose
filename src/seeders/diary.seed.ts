import diaryModel from "./../models/Diary";
import { connect, disconnect } from "mongoose";
import { MONGODB_URI } from "./../config/env";
import { v4 } from "uuid";

(async () => {
  const diaries = [
    new diaryModel({
      _id: v4(),
      date: new Date(),
      weather: "rainy",
      visibility: "poor",
      comment: "Pretty scary flight, I'm glad I'm alive.",
    }),
    new diaryModel({
      _id: v4(),
      date: new Date(),
      weather: "sunny",
      visibility: "good",
      comment: "Everything went than expected, I'm learning a lot.",
    }),
    new diaryModel({
      _id: v4(),
      date: new Date(),
      weather: "windy",
      visibility: "good",
      comment: "I'm getting pretty confident although I hit a flock of birds.",
    }),
    new diaryModel({
      _id: v4(),
      date: new Date(),
      weather: "cloudy",
      visibility: "good",
      comment: "I almost failed the landing but I survived.",
    }),
  ];

  try {
    await connect(MONGODB_URI, {
      family: 4,
    });
    console.log("Connection to database has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }

  await diaryModel.insertMany(diaries);

  console.log("Migration DONE!");

  disconnect();
})();
