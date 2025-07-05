import { FaUserEdit } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { Niconne } from "next/font/google";

const FontNic = Niconne(
    {
        subsets: ["latin"],
        weight: ['400']
    }
)


export default function About() {
    return (
        <div className="">
            <div className="flex flex-col justify-center items-center text-center mt-10">
                <h1 className={`${FontNic.className} font-bold  text-6xl md:text-8xl pb-1 `}>About</h1>
                <div className=" mt-4 flex flex-col md:flex-row justify-between md:gap-32">

                    <div className="flex flex-col  justify-center items-center text-center gap-10">
                        <div className="font-bold text-2xl underline "><h1>Hey, What Do You Want to Know?</h1>
                        </div>
                        <div className="w-[300px] text-xl">
                            <p>
                                I create cover pages, professional CVs, websites, and portfolios using HTML and CSS . I additionally acquired knowledge of how to build a website using Next.JS. I additionally concentrate on graphic design .
                            </p>
                        </div>
                        <div className="flex gap-3 text-xl ">
                            <div className="flex gap-2 hover:underline hover:text-primary">< FaUserEdit /> <Link href={"/aboutPage"}>About</Link></div>
                            <div className="flex gap-2 hover:underline hover:text-primary" >                            <FaProjectDiagram /><Link href={"/projectPage"}>Projects</Link>
                            </div>
                            <div className="flex gap-2 hover:underline hover:text-primary">
                                <MdConnectWithoutContact /><Link href={"/contactPage"}>Contact </Link>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div>
                        <Image src={"/images/abt.jpg"}
                            alt="aboutpic"
                            width={350}
                            height={200}
                        ></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}