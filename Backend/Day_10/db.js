const mongoose = require('mongoose')
require('dotenv').config();


const connection = mongoose.connect(process.env.MongoDB_URL);

const userSchema = new mongoose.Schema({
        name:String,
        age:Number,
        married:Boolean,
        organization:String,
        hobbies:Object
    },
    {
        versionKey:false,
    },
); 

const UserModel = new mongoose.model('user', userSchema);

module.exports={connection,UserModel}