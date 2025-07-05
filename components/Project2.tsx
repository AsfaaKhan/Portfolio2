import Image from "next/image"
import Link from "next/link";


export default function Project2() {
    return (
        <div className="bg-white text-black">
            <div className=" flex flex-col justify-center items-center text-center pt-10 pb-10">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-10 " >
                    <div className="style  ">
                        <Image src={"/images/project5.png"}
                            alt="project Image"
                            width={300}
                            height={300}>
                        </Image>
                        <Link href="https://portfolio-website-omega-taupe-58.vercel.app/" className="font-bold text-[25px] hover:underline hover:text-primary   " target ="_blank">View</Link>
                    </div>

                    <div className="style">
                        <Image src={"/images/project6.png"}
                            alt="project Image"
                            width={300}
                            height={300}>
                        </Image>
                        <Link href="https://perfume-website-sigma.vercel.app/" className="font-bold text-[25px] hover:underline hover:text-primary " target ="_blank">View</Link>
                    </div>

                    <div className="style">
                        <Image src={"/images/project7.png"}
                            alt="project Image"
                            width={300}
                            height={300}>
                        </Image>
                        <Link href="https://tour-website-navy.vercel.app/" className="font-bold text-[25px] hover:underline hover:text-primary " target ="_blank">View</Link>
                    </div>

                    <div className="style">
                        <Image src={"/images/project8.png"}
                            alt="project Image"
                            width={300}
                            height={300}>
                        </Image>
                        <Link href="https://portfolio-blue-zeta-68.vercel.app/" className="font-bold text-[25px] hover:underline hover:text-primary " target ="_blank">View</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}