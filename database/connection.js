import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "PersonalPortfolio",
    })
    .then(() => {
      console.log("Connected to Database!!");
    })
    .catch((err) => {
      console.log("Some error occurred while connecting to database:", err);
    });
};
