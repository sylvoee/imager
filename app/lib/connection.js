"use server"
let mongoose = require('mongoose');
const { connection } = require("mongoose");


let dbConnection = async()=> {
    // connect o databse and create database
   try {
    mongoose.connect(process.env.DBURL).then((e) => {
        console.log("Connected to database");
        });
   } catch (err) {
    console.log(err)
   }

  }


export default dbConnection;