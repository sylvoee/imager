

import { cookies } from 'next/headers';
import { decrypt } from './app/lib/auth';
import { NextResponse } from 'next/server';
import { redirect} from 'next/navigation';
import { NextRequest } from 'next/server';
import { json } from 'stream/consumers';


const protectedRoute = ["/dashboard"];
const publicRoute = ["/login"] ;


export default async function middleware(req){
    const myCookie = (await cookies() )?.get("session") ;
;

    if(typeof myCookie != 'undefined'){
        console.log("You are logged in " + await (myCookie) );
    }else{
        console.log("you are NOT login..");
    }

    return NextResponse.next();


}