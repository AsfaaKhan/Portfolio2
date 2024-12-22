import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Footer(){
    return(
        <div className=" bg-primary p-10 flex flex-col justify-center items-center gap-6">
            <div className=" flex justify-center items-center text-center gap-5 ">
            <Link href={"https://github.com/AsfaaKhan"}>
            < FaGithub  size={40}/>
            </Link>
           <Link href={"https://www.linkedin.com/in/asfaa-khan-4b80a0267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}><FaTwitter size={40}/></Link>
            <Link href={"https://x.com/KhanAsfaa?s=08"}>
            <FaLinkedin size={40}/>
            </Link>
            
            </div>
            <div>
                <p>Portfolio &copy; 2024. All Rights Reserved</p>
            </div>
        </div>
    )
}