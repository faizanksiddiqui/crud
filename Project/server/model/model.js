const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    f_name : {
        type : String,
        required: true
    },
    l_name : {
        type : String,
        required: true
    },

    email : {
        type: String,
        required: true,
        unique: true
    },
    mobile:{
        type:String,
        required:true,
        unique:true

    },
    gender:{
        type:String
    },
    designation:{
        type:String
    },
    dateofjoining:{
        type:Date
    },
    reportingmanager:{
        type:String
    },
    salary:{
        type:Number
    },
    employeecode:{
        type:Number
    },
    location:{
        type:String
    },
    state:{
        type:String
    },
    country:{
        type:String
    },
    department:{
        type:String
    },
    deletedat:{
        type:Date
    },
    status : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;