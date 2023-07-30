export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy";
export type Visibility = "great" | "good" | "ok" | "poor";

export interface IDiary {
  _id: string;
  date: Date;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

export type IDiaryWithoutComment = Pick<
  IDiary,
  "_id" | "date" | "visibility" | "weather"
>;

export type IDiaryWithoutComment2 = Omit<IDiary, "comment">;
