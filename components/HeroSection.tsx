import Link from "next/link"

import {Niconne} from "next/font/google";


const FontNic = Niconne (
  {
    subsets : ["latin"],
    weight: ['400']
  }
)

export default function Section() {
   
    return (
        <div> 
            {/* Hero Section */}
            <div className="mt-10 bg-[url('/images/1.jpg')] bg-cover bg-centerr bg-no-repeat h-[50vh] md:h-[50vh] lg:h-[80vh] flex justify-center items-center text-center">
                <div className="flex flex-col justify-center items-center text-center gap-6 ">
                    <h1 className={`font-bold text-7xl ${FontNic.className}`}>Asfaa Khan</h1>
                    <p className="font-bold text-5xl ">Web Developer</p>
                    <Link href="/projectPage" className="font-bold hover:border-[1px] border-primary text-2xl hover:text-white shadow-md p-4">View Projects</Link> 
                </div>
            </div>

        </div>
    )
}