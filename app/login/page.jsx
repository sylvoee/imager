import { InputIcon, LetterSpacingIcon, SunIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import LoginForm from "../../components/loginForm";


export const metadata = {title : "Login"}


const login =()=>{
    return(
        <>
        <div className="form-container row mt-3">
            <div className="col-md-4 d-none d-md-block"></div>

            <div className="col-md-4 shadow mt-3">
            <h5 className="text-center">Login</h5>
        
        <h4 className="offset-5"><InputIcon /></h4>
        
         {/* Login components */}
        <LoginForm />
         
         <div className="mt-3">
            <Link className="text-decoration-none p-3" href ="/register">Register</Link>
            <Link  className="text-decoration-none p-3" href ="/register">Forget Password</Link>
            
        </div>
            </div>

            <div className="col-md-4 d-none d-md-block"></div>
        
          

        </div>
        </>
    );
}

export default login;