import { InputIcon, LetterSpacingIcon, Pencil2Icon, SunIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const metadata = {title : "Create Post"}

const createPost =()=>{
    return(
        <>
        <div className="row mt-2" >
            <div className="col-sm-3 d-none d-sm-block"></div>

            <div className="col-sm-6 shadow">
            <h5 className="text-center">Create Post</h5>
          <hr />
       
        <form className="form-group p-3 lr-form">
         
            <div>
                <label>Title</label>
                <input className="form-control " placeholder="The Cool Cat"></input>
            </div>
            <div>
                <label>Upload Image </label>
                <input type="file" className="form-control "></input>
            </div>

            <div className="mt-3">
            <textarea className="form-control border-2 border-primary" rows={7} placeholder="Post goes in here"></textarea>
            </div>

            <div>
         
                <button style={{backgroundColor:' rgb(221, 74, 221)'}} type="submit" className="btn btn-default w-100 mt-4"> Make Post <Pencil2Icon /> </button>
            </div>
            
        </form>
            </div>

            <div className="col-sm-3 d-none d-sm-block"></div>
        
          

        </div>
        </>
    );
}

export default createPost;