import { Visibility, Weather } from "enums/enums";

export interface IDiary {
  _id: string;
  date: Date;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

export type INewDiary = Omit<IDiary, "_id" | "date">;

export type IUpdateDiary = Omit<IDiary, "_id">;

export type IDiaryWithoutComment2 = Pick<
  IDiary,
  "_id" | "date" | "visibility" | "weather"
>;

export type IDiaryWithoutComment = Omit<IDiary, "comment">;
