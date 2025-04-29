
const mongoose = require('mongoose');
const { default: dbConnection } = require('../lib/connection');



let userSchema = new mongoose.Schema({
    id: {type:mongoose.Schema.Types.ObjectId},
    name : String,
    email: String,
    password:String,
    forgetPassword : String,
    token: String,
    status : String ,
    createdAt : {type: Date, default: Date.now}
});

const userModel = mongoose.models.User || mongoose.model('User', userSchema);
// const userModel = mongoose.model('User', userSchema);


module.exports = userModel ;
        
        

  












