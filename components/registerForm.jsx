"use client"

import Link from "next/link";

import { useActionState } from "react";
import { createRegister } from "../app/controllers/userControllers";


const RegisterForm =()=>{
    const[formState, formAction] = useActionState( createRegister, {});
    return( 
        <>
      
      <form action={formAction} className="form-group p-2 lr-form">
{formState.success && (
    <div className ="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Hurray!</strong> You have sucessfully registered. You can now <b><Link className="text-decoration-none " href= "/login">login</Link></b>
  <button type="button" className ="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    ) }
{formState.error?.exist && (<div className="alert alert-warning" role="alert">{formState.error.exist}. You can<b><Link className="text-decoration-none " href= "/login"> login</Link></b></div>) }   

          <div>
             <label>Name</label>
               <input className="form-control" name="name" placeholder="Ehiemaun Sylvester"></input>
               {formState.error?.name && (<div className="alert alert-danger" role="alert">{formState.error.name}</div>) }
           </div>
           <div>
               <label>Email</label>
               <input className="form-control " name="email" type="" placeholder="example@user.com"></input>
               {formState.error?.email && (<div className="alert alert-danger" role="alert">{formState.error.email}</div>) }
           </div>
         
           <div>
               <label>Password</label>
               <input type="password" name="password" className="form-control "></input>
               {formState.error?.password && (<div className="alert alert-danger" role="alert">{formState.error.password}</div>) }
           </div>
           <div>
               <label>Confirm Password</label> 
               <input type="password"name="confirmPassword" className="form-control "></input>
               {formState.error?.confirmPassword && (<div className="alert alert-danger" role="alert">{formState.error.confirmPassword}</div>) }
           </div>
           <div>
               <button style={{backgroundColor:' rgb(221, 74, 221)'}}  className="btn btn-default w-100 mt-4">register</button>
           
           </div>
       </form>
       <div className="mt-3">
               <Link className="text-decoration-none p-4" href ="/login">login</Link>
               <Link  className="text-decoration-none p-4" href ="#">Forget Password</Link>

           
               
           </div>

        </>
    );
}
export default RegisterForm ;