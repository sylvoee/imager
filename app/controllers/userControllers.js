"use server"

import dbConnection from '../lib/connection';
import { NextRequest, NextResponse} from 'next/server';


import { redirect } from 'next/navigation';
import { createSession } from '../lib/auth';

let userModel = require('../model/userSchema');
let bcrypt = require('bcrypt');
const mongoose = require('mongoose');



// connect to database
dbConnection();





// Post Register
const createRegister = async(prevState, formData)=>{
let name = formData.get("name")
let email = formData.get("email").trim();
let password = formData.get("password").trim();
let confirmPassword = formData.get("confirmPassword").trim();

// validation
let error = {};
if( typeof name !='string') name ="" ;
if( typeof email !='string') email ="" ;
if( typeof password !='string') password ="" ;
if( typeof confirmPassword !='string') confirmPassword ="" ;

// regular xpression
let regex = /^[a-zA-Z ]{2,30}$/;
let data = await userModel.findOne({email}).exec();
if(data)error.exist = "User Already exist" ;
if(name.toString().length < 1) error.name ="Name field must not be empty" ;
if(!regex.test(  name.toString() ) ) error.name ="Name field must contain only alphabets and must be more than one character" ;
if(email.toString().length < 3) error.email ="Email must be more than 3 character long" ;
if(password.toString().length < 8) error.password ="Password must be more than 7 character long" ;
if(confirmPassword.toString() != password.toString() ) error.confirmPassword ="Confirm password characters must be the same as password"
if(!email.toString().includes('@') || !email.toString().includes('.') ) error.email ="Invalid Email, password must contain '@ and '.' character " ;


if( Object.keys(error).length < 1){
    
    let salt = bcrypt.genSaltSync(10);
    let hashPassword = bcrypt.hashSync(password, salt);

 try {

    let aUser = new userModel({name,email,password:hashPassword});
    // saving data into database
    aUser.save()
    aUser ? console.log(data) : console.log("failed to save data");
    
 } catch (error) {
    console.log(error);
 }
  
    return{
        error : false,
        success:true
    };

}
else{
    return{
        error :error,
        success : false
    };
}
  
}


// post login
const signin = async(prevState, formData)=>{

    let error ={};
    // getting data from database
    let email = formData.get("email").trim();
    let password = formData.get("password").trim();


    // validation
    if(typeof email == 'undefined') error.email ="Email field must not be empty" ;
    if(typeof password == 'undefined') error.password ="Password must not be empty" ;


if(Object.keys(error).length < 1){
    
let data = await userModel.findOne({email}).exec();
  // if email exist , query the database
 if(data){
  let isMatch = await bcrypt.compare(password, data.password);
  
  // if user exist check for password
      if(isMatch){
        //  using sessions
        //  req.session.Login = true;
         const{_id, name, email,status, createdAt} = data ;
         let aUser = {_id ,name, email, status, createdAt} ;

         // call the createSession method
         await createSession(aUser);

         // redirect
         redirect('/dashboard');

          return{
            success : true,
            error : false,
            userData  : JSON.parse(JSON.stringify(aUser))
          }     

    } else{
        // if password does not exist
        console.log("Incorrect password");

        error.auth = "Incorrect password";
        return{
            success : false,
            error : error
        }
        
    }
        
    }else{
        console.log("email or user does not exist");
        error.auth = "email or user does not exist" ;
        return{
            success : false,
            error : error
        }
    }

}

}

export {
    createRegister,
    signin
}









