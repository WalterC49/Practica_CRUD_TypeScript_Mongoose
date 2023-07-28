import { connect } from "mongoose";

import { MONGODB_URI } from "@config/env";

export const connectDB = async () => {
  try {
    await connect(MONGODB_URI);
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
