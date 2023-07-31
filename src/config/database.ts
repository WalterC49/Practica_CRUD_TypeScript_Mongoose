import { connect } from "mongoose";

import { MONGODB_URI } from "@config/env";

export const connectDB = async () => {
  try {
    await connect(MONGODB_URI, {
      family: 4,
    });
    console.log("Connection to database has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }
};
