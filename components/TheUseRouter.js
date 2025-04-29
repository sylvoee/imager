
"use client"

import { useRouter } from "next/navigation"

export default function TheUseRouter(){
 let path = useRouter();
 console.log("This is the " + path);
}