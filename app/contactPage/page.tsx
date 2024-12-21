import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
    return (
        <div className="my-40 flex flex-col justify-center items-center text-center gap-10" >
            {/* Image */}
            <div>
                <Image src={"/images/contact.jpg"}
                alt="Image"
                width={300}
                height={200}>

                </Image>
            </div>

            {/* Links */}
            <div className="style flex flex-col gap-6 md:flex-row border  p-8 shadow-md ">
                <div>
                    <Link href={"/"} className="flex gap-5 justify-center items-center text-[30px] hover:text-primary">
                        <FaGithub size={60} />

                        <span>GitHub</span>
                    </Link>
                </div>

                <div>
                    <Link href={"/"} className="flex gap-5 justify-center items-center text-[30px] hover:text-primary">
                        <FaTwitter size={60} />
                        Twitter
                    </Link>
                </div>

                <div>
                    <Link href={"/"} className="flex gap-5 justify-center items-center text-[30px] hover:text-primary">
                        <FaLinkedin size={60} />
                        Linkedin
                    </Link>
                </div>
            </div>
        </div>
    )
}