import Image from "next/image"
import Link from "next/link";
import { Niconne } from "next/font/google";

const FontNic = Niconne(
    {
        subsets: ["latin"],
        weight: ['400']
    }
)


export default function Project() {
    return (
        <div>
            <div className="  flex flex-col justify-center items-center text-center mt-10 mb-10">
                <div >
                    <h1 className={`${FontNic.className}  font-bold text-8xl `}>Explore My Projects</h1>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-10 " >
                    <div className="style">
                        <Image src={"/images/project1.png"}
                            alt="project Image"
                            width={300}
                            height={300}>
                        </Image>
                        <Link href="https://portfolio-website-omega-taupe-58.vercel.app/" className="font-bold text-[25px] hover:underline hover:text-primary   " target ="_blank">View</Link>
                    </div>

                    <div className="style">
                        <Image src={"/images/project2.png"}
                            alt="project Image"
                            width={300}
                            height={300}>
                        </Image>
                        <Link href="https://perfume-website-sigma.vercel.app/" className="font-bold text-[25px] hover:underline hover:text-primary " target ="_blank">View</Link>
                    </div>

                    <div className="style">
                        <Image src={"/images/project9.png"}
                            alt="project Image"
                            width={300}
                            height={300}>
                        </Image>
                        <Link href="https://tour-website-navy.vercel.app/" className="font-bold text-[25px] hover:underline hover:text-primary " target ="_blank">View</Link>
                    </div>

                    <div className="style">
                        <Image src={"/images/project4.png"}
                            alt="project Image"
                            width={300}
                            height={300}>
                        </Image>
                        <Link href="https://perfume-website-sigma.vercel.app/" className="font-bold text-[25px] hover:underline hover:text-primary " target ="_blank">View</Link>
                    </div>
                    <Link href="/projectPage" className="font-bold hover:border-[1px] border-primary text-2xl hover:text-white shadow-md p-4">View Projects</Link> 
                </div>

              

            </div>

        </div>
    )
}