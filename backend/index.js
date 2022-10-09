import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();


dotenv.config()

app.listen(8080,()=>{
    console.log("listenning on port 8080");
})