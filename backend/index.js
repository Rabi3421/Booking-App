import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import auth from "./Routes/auth.js";
import hotels from "./Routes/hotels.js";
import rooms from "./Routes/rooms.js";
import users from "./Routes/users.js";

const app = express();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongodb");
  } catch (err) {
    throw err;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDb disconnected");
});

app.get("/users", (req, res) => {
  res.send("hello first request!");
});

//middlewares
app.use("/auth", auth);
app.use("/hotels", hotels);
app.use("/rooms", rooms);
app.use("/users", users);

app.listen(8080, () => {
  connect();
  console.log("listenning on port 8080");
});
