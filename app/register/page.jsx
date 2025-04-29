
import Link from "next/link";
import { createRegister } from "../controllers/userControllers";
import { InputIcon } from "@radix-ui/react-icons";
import RegisterForm from "../../components/registerForm";

export const metadata = {title : "Register"}

const register =()=>{
    
    return(
        <>
        <div className="form-container row">
            <div className="col-md-4 d-none d-md-block"></div>

            <div className="col-md-4 shadow mt-3">
            <h5 className="text-center">register</h5>
            <hr />
        <h4 className="offset-5"><InputIcon /></h4>
    
         
       <RegisterForm />
            </div>

            <div className="col-md-4 d-none d-md-block"></div>
        
          

        </div>
        </>
    );
}

export default register;