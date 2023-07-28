import { Schema, model } from "mongoose";

const schema = new Schema({
  _id: { types: Schema.Types.UUID, required: true },
  date: Date,
  weather: String,
  visibility: String,
  comment: String,
});

export default model("Diary", schema);
