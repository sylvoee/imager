"use client"

import Link from "next/link";
import { useActionState } from "react";
import { signin } from "../app/controllers/userControllers";

const LoginForm =()=>{
   
    const[formState, formAction] = useActionState(signin, {});
    // console.log(formState);

    return(             
        <>
      
    <form action={formAction} className="form-group p-2 lr-form">
    {formState.error?.auth && (<div className="alert alert-danger mt-3" role="alert">{formState.error.auth}</div>) }
{formState.success && (
    <div className ="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Hurray!</strong> login sucessfully
  <button type="button" className ="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    ) }
              <div>
               <label>Email</label>
               <input className="form-control " name="email" type="" placeholder="example@user.com"></input>
            
             </div>
         
           <div>
               <label>Password</label>
               <input type="password" name="password" className="form-control "></input>
              
           </div>
           
           <div>
               <button style={{backgroundColor:' rgb(221, 74, 221)'}}  className="btn btn-default w-100 m-3">login</button>
           </div>
          
          
         

       </form>

        </>
    );
}
export default LoginForm ;