import Image from "next/image"
import Link from "next/link";



export default function Project4() {
    return (
        <div className="bg-white text-black">
            <div className=" flex flex-col justify-center items-center text-center pt-10 pb-10">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-10 " >
                    <div className="style  ">
                        <Image src={"/images/5.png"}
                            alt="project Image"
                            width={300}
                            height={300}>
                        </Image>
                        <div className="border-t-[1.5px] border-black">
                        <Link href="https://blogger-website-nine.vercel.app/" className="font-bold text-[25px] hover:underline hover:text-primary   " target="_blank">View</Link>
                        </div>
                    </div>

                    <div className="style">
                        <Image src={"/images/7.png"}
                            alt="project Image"
                            width={300}
                            height={300}>
                        </Image>
                        <div className="border-t-[1.5px] border-black">
                        <Link href="https://e-commerce-website-ten-gamma.vercel.app/" className="font-bold text-[25px] hover:underline hover:text-primary " target="_blank">View</Link>
                    </div>
                    </div>

                    <div className="style">
                        <Image src={"/images/8.png"}
                            alt="project Image"
                            width={300}
                            height={300}>
                        </Image>
                        <div className="border-t-[1.5px] border-black">
                        <Link href="https://practice-of-mock-api.vercel.app/" className="font-bold text-[25px] hover:underline hover:text-primary " target="_blank">View</Link>
                        </div>
                    </div>

                    <div className="style">
                        <Image src={"/images/9.png"}
                            alt="project Image"
                            width={300}
                            height={300}>
                        </Image>
                        <div className="border-t-[1.5px] border-black">
                        <Link href="https://product-detail-website.vercel.app/" className="font-bold text-[25px] hover:underline hover:text-primary " target="_blank">View</Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
