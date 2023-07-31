import { INewDiary } from "./../types";
import { Visibility, Weather } from "@enums/enums";

const isString = (string: any): boolean => {
  return typeof string === "string" || string instanceof String;
};

const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param);
};

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param);
};

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest))
    throw new Error("Incorrect or missing weather");
  return weatherFromRequest;
};

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest))
    throw new Error("Incorrect or missing visibility");
  return visibilityFromRequest;
};

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest))
    throw new Error("Incorrect or missing comment");
  return commentFromRequest;
};

const validateNewDiary = (object: any): INewDiary => {
  const newDiary: INewDiary = {
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility),
    comment: parseComment(object.comment),
  };
  return newDiary;
};

export default validateNewDiary;
