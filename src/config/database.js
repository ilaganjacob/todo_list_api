import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.uri);
    console.log("Connected to database!");
  } catch (err) {
    console.log("Error connecting to database", err);
    process.exit(1); // exit app manually because we can't run it without DB
  }
};
