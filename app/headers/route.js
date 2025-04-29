import { NextRequest } from "next/server"

 

 const POSTER = async(NextRequest)=>{
     const headerInfo = await new Headers(NextRequest.Headers);
     console.log(headerInfo);

 }

 export default POSTER;