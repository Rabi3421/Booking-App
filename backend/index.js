import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const app = express();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongodb");
  } catch (err) {
    throw err;
  }
};

mongoose.connection.on("connected",()=>{
    console.log("MongoDb connected")
})
mongoose.connection.on("disconnected",()=>{
    console.log("MongoDb disconnected")
})

app.listen(8080, () => {
  connect();
  console.log("listenning on port 8080");
});
