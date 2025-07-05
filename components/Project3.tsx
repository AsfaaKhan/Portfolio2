import Image from "next/image"
import Link from "next/link";

import { Niconne } from "next/font/google";

const FontNic = Niconne(
    {
        subsets: ["latin"],
        weight: ['400']
    }
)

export default function Project3() {
    return (
        <div className=" pt-10  pb-20 bg-white  text-black">
            <div className=" flex flex-col justify-center items-center text-center ">

                <div >
                    <h1 className={`${FontNic.className}  font-bold text-8xl `}>Explore My Projects</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-10 " >
                   <div className="style  ">
                        <Image src={"/images/2.png"}
                            alt="project Image"
                            width={300}
                            height={300}>
                        </Image>
                        <div className="border-t-[1.5px] border-black">
                            <Link href="https://admin-dashboard-chi-green-86.vercel.app/" className="font-bold text-[25px] hover:underline hover:text-primary   " target="_blank">View</Link>
                        </div>

                    </div>

                    <div className="style">
                        <Image src={"/images/3.png"}
                            alt="project Image"
                            width={300}
                            height={300}>
                        </Image>
                        <div className="border-t-[1.5px] border-black">
                            <Link href="https://e-commerce-fully-functional-website.vercel.app/" className="font-bold text-[25px] hover:underline hover:text-primary " target="_blank">View</Link>
                        </div>
                    </div>

                    <div className="style">
                        <Image src={"/images/4.png"}
                            alt="project Image"
                            width={300}
                            height={300}>
                        </Image>
                        <div className="border-t-[1.5px] border-black">
                            <Link href="https://data-fetch-side.vercel.app/" className="font-bold text-[25px] hover:underline hover:text-primary " target="_blank">View</Link>
                        </div>
                    </div>

                    <div className="style">
                        <Image src={"/images/6.png"}
                            alt="project Image"
                            width={300}
                            height={300}>
                        </Image>
                        <div className="border-t-[1.5px] border-black">
                            <Link href="https://blog-post-website-omega.vercel.app/" className="font-bold text-[25px] hover:underline hover:text-primary " target="_blank">View</Link>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}