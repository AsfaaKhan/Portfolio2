import Image from "next/image"
import Link from "next/link";


export default function Project3() {
    return (
        <div>
            <div className=" flex flex-col justify-center items-center text-center mt-10 mb-10">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-10 " >
                    <div className="style  ">
                        <Image src={"/images/2.png"}
                            alt="project Image"
                            width={300}
                            height={300}>
                        </Image>
                        <Link href="https://admin-dashboard-chi-green-86.vercel.app/" className="font-bold text-[25px] hover:underline hover:text-primary   " target ="_blank">View</Link>
                    </div>

                    <div className="style">
                        <Image src={"/images/3.png"}
                            alt="project Image"
                            width={300}
                            height={300}>
                        </Image>
                        <Link href="https://e-commerce-fully-functional-website.vercel.app/" className="font-bold text-[25px] hover:underline hover:text-primary " target ="_blank">View</Link>
                    </div>

                    <div className="style">
                        <Image src={"/images/4.png"}
                            alt="project Image"
                            width={300}
                            height={300}>
                        </Image>
                        <Link href="https://data-fetch-side.vercel.app/" className="font-bold text-[25px] hover:underline hover:text-primary " target ="_blank">View</Link>
                    </div>

                    <div className="style">
                        <Image src={"/images/6.png"}
                            alt="project Image"
                            width={300}
                            height={300}>
                        </Image>
                        <Link href="https://blog-post-website-omega.vercel.app/" className="font-bold text-[25px] hover:underline hover:text-primary " target ="_blank">View</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}