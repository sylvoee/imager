
import { cookies, headers } from 'next/headers';
import jwt from 'jsonwebtoken' ;
import { NextRequest, NextResponse} from 'next/server';
import {SignJWT, jwtVerify} from 'jose' ;


// Setting cookie secrete
const encodedKey = new TextEncoder().encode('secretearenotmetforkid');

// Encrypting sesssion data
let encrypt = async(aUser) =>{
    return new SignJWT().setProtectedHeader({alg :"HS256"}).
    setIssuedAt().
    setExpirationTime("7d").sign(encodedKey)

}
 
// To Decode the jwt session
let decrypt = async(session) =>{
    try {
        if(typeof session != 'undefined'){
            const{aUser} = await jwtVerify(session, encodedKey, {
                algorithms : ["HS256"] 
            })
            return aUser ;

        }
        
    }
    catch(err){
        console.log(err)
    }

}

// create session
let createSession = async(userId)=>{
    const expireAt = new Date(Date.now() + 1000 * 3600 * 24 * 7 );
    const session = await encrypt({userId, expireAt});

    (await cookies()).set("session", session, {
        httpOnly : true,
          secure : true,
          expires : expireAt
    })
    
}

export {
    createSession,
    decrypt
}