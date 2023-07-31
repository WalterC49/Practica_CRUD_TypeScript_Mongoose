import { Schema, model } from "mongoose";
import { IDiary } from "./../types.d";

const schema: Schema = new Schema<IDiary>({
  _id: String,
  date: Date,
  weather: String,
  visibility: String,
  comment: String,
});

export default model<IDiary>("Diary", schema);
