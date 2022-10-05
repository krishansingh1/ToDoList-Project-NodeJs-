const mongoose = require("mongoose");

const listSchema= new mongoose.Schema({
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
    }
})