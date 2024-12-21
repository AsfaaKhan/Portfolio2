import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export default function Footer(){
    return(
        <div className=" bg-primary p-10 flex flex-col justify-center items-center gap-6">
            <div className=" flex justify-center items-center text-center gap-5 ">
            < FaGithub  size={40}/>
            <FaTwitter size={40}/>
            <FaLinkedin size={40}/>
            </div>
            <div>
                <p>Portfolio &copy; 2024. All Rights Reserved</p>
            </div>
        </div>
    )
}