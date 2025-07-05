import Image from "next/image"
import Link from "next/link"
import { Niconne } from "next/font/google";

const FontNic = Niconne(
    {
        subsets: ["latin"],
        weight: ['400']
    }
)

export default function All_Project() {
    return (
        <div className="bg-white text-black">
            <div className="  flex flex-col justify-center items-center text-center pt-10 pb-10">

                <div >
                    <h1 className={`${FontNic.className}  font-bold text-8xl `}>Explore My Projects</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-20 pt-10 " >

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
                       <div className="border-t-[1.5px] border-black mt-10">
                            <Link href="https://practice-of-mock-api.vercel.app/" className="font-bold  text-[25px] hover:underline hover:text-primary" target="_blank">View</Link>
                        </div>
                    </div>

                    <div className="style">
                        <Image src={"/images/9.png"}
                            alt="project Image"
                            width={300}
                            height={300}>
                        </Image>
                        <div className="border-t-[1.5px] border-black mt-10">
                            <Link href="https://product-detail-website.vercel.app/" className="font-bold  text-[25px] hover:underline hover:text-primary " target="_blank">View</Link>
                        </div>
                    </div>


                    <div className="style  ">
                        <Image src={"/images/project5.png"}
                            alt="project Image"
                            width={300}
                            height={300}>
                        </Image>
                        <div className="border-t-[1.5px] border-black">
                        <Link href="https://hackathon-figma-design-black.vercel.app/" className="font-bold text-[25px] hover:underline hover:text-primary   " target="_blank">View</Link>
                    </div>
                    </div>

                    <div className="style">
                        <Image src={"/images/project6.png"}
                            alt="project Image"
                            width={300}
                            height={300}>
                        </Image>
                        <div className="border-t-[1.5px] border-black">
                        <Link href="https://travelling-website-pi.vercel.app/" className="font-bold text-[25px] hover:underline hover:text-primary " target="_blank">View</Link>
                    </div>
                    </div>

                    <div className="style">
                        <Image src={"/images/project7.png"}
                            alt="project Image"
                            width={300}
                            height={300}>
                        </Image>
                        <div className="border-t-[1.5px] border-black">
                        <Link href="https://cake-bake-website-beryl.vercel.app/" className="font-bold text-[25px] hover:underline hover:text-primary " target="_blank">View</Link>
                        </div>
                    </div>

                    <div className="style">
                        <Image src={"/images/project8.png"}
                            alt="project Image"
                            width={300}
                            height={300}>
                        </Image>
                        <div className="border-t-[1.5px] border-black">
                        <Link href="https://portfolio-blue-zeta-68.vercel.app/" className="font-bold text-[25px] hover:underline hover:text-primary " target="_blank">View</Link>
                        </div>
                    </div>


                    <div className="style">
                        <Image src={"/images/project1.png"}
                            alt="project Image"
                            width={300}
                            height={300}>
                        </Image>
                        <div className="border-t-[1.5px] border-black">
                        <Link href="https://perfume-website-sigma.vercel.app//" className="font-bold text-[25px] hover:underline hover:text-primary   " target="_blank">View</Link>
                        </div>
                    </div>

                    <div className="style">
                        <Image src={"/images/project2.png"}
                            alt="project Image"
                            width={300}
                            height={300}>
                        </Image>
                        <div className="border-t-[1.5px] border-black">
                        <Link href="http://portfolio-website-omega-taupe-58.vercel.app/" className="font-bold text-[25px] hover:underline hover:text-primary " target="_blank">View</Link>
                        </div>
                    </div>

                    <div className="style">
                        <Image src={"/images/project9.png"}
                            alt="project Image"
                            width={300}
                            height={300}>
                        </Image>
                        <div className="border-t-[1.5px] border-black">
                        <Link href="https://portfolio2-kappa-pink.vercel.app/" className="font-bold text-[25px] hover:underline hover:text-primary " target="_blank">View</Link>
                        </div>
                    </div>

                    <div className="style">
                        <Image src={"/images/project4.png"}
                            alt="project Image"
                            width={300}
                            height={300}>
                        </Image>
                        <div className="border-t-[1.5px] border-black">
                        <Link href="https://tour-website-navy.vercel.app/" className="font-bold text-[25px] hover:underline hover:text-primary " target="_blank">View</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}