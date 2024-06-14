import mongoose from "mongoose";

export const dbConnection = async (req, res) => {
  console.log("databse connected");
  return await mongoose.connect(process.env.DATABASE_URL);
};
