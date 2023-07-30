import diaryModel from "@models/Diary";
import { IDiary } from "./../types.d";

export const getAllDiaries = async (): Promise<IDiary[]> => {
  const diaries = await diaryModel.find();
  console.log("services: ", diaries);

  return diaries;
};

export const addDiary = async (diary: IDiary) => {
  const newDiary = new diaryModel(diary);
  console.log(newDiary);

  /* const savedDiary =  */ await newDiary.save();
};
