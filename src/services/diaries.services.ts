import diaryModel from "@models/Diary";
import {
  IDiary,
  IDiaryWithoutComment,
  INewDiary,
  IUpdateDiary,
} from "./../types.d";
import { v4 } from "uuid";

export const getAllDiaries = async (): Promise<IDiary[]> => {
  const diaries = await diaryModel.find();
  return diaries;
};

export const getAllDiariesWithoutComment = async (): Promise<
  IDiaryWithoutComment[]
> => {
  const diaries = await diaryModel.find();

  const newDiaries = diaries.map(({ _id, date, weather, visibility }) => {
    return { _id, date, weather, visibility };
  });

  return newDiaries;
};

export const getDiaryById = async (id: string): Promise<IDiary | null> => {
  const diary = await diaryModel.findById(id);
  return diary;
};

export const addDiary = async (newDiary: INewDiary): Promise<IDiary> => {
  const diary = new diaryModel({
    _id: v4(),
    date: new Date(),
    ...newDiary,
  });
  await diary.save();
  return diary;
};

export const UpdateDiaryById = async (
  id: string,
  updateDiary: IUpdateDiary,
): Promise<IDiary | null> => {
  await diaryModel.findByIdAndUpdate(id, updateDiary);
  return getDiaryById(id);
};

export const deleteDiaryById = async (id: string) => {
  await diaryModel.findByIdAndDelete(id);
};
