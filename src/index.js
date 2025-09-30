// require('dotenv').config({path: './env'});


/*
import express from "express";

const app = express();

;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("ERROR", (error) => {
            console.log("ERROR app", error);
            throw error;
        })
        app.listen(process.env.PORT, () => {
            console.log(`APP is listening on port ${process.env.PORT}`)
        })
        console.log("CONNECT")
    } catch (error) {
        console.error("ERROR", error);
        throw error;
    }
})()
*/


import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running at port ${process.env.PORT}`);
    })
})
.catch((error) => {
    comsole.log("Mongodb connection failed ", error);
});