import diaryModel from "@models/Diary";

export const getAllDiaries = async () => {
  const diaries = await diaryModel.find();
  return diaries;
};

export const addDiary = async () => {
  const newDiary = new diaryModel();
  await newDiary.save();
};
