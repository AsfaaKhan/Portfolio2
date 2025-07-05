import Image from "next/image";
import {Niconne} from "next/font/google";

const FontNic = Niconne (
  {
    subsets : ["latin"],
    weight: ['400']
  }
)

export default function MainAbout(){
    return(
        <div className="pt-24 py-10 bg-white text-black ">

            {/* Container 1 */}
            <div className="flex flex-col justify-center items-center text-center mt-10 text-black">
             <h1 className={`${FontNic.className} text-black font-bold text-8xl pb-1 `}>About</h1>

                <div className=" mt-4 flex flex-col md:flex-row justify-between md:gap-32">

                <div className="flex flex-col  justify-center items-center text-center gap-10">
                    <div className="font-bold text-2xl underline text-black "><h1>Hey, What Do You Want to Know?</h1>
                    </div>

                    <div className="w-[300px] text-xl">
                        <p>
                        I create cover pages, professional CVs, websites, and portfolios using HTML and CSS . I additionally acquired knowledge of how to build a website using Next.JS. I additionally concentrate on graphic design .
                        </p>
                    </div>
                </div>

                {/* Image */}
                <div>
                    <Image src={"/images/abt1.png"}
                    alt="aboutpic"
                    width={350}
                    height={200}
                    ></Image>
                </div>
                </div>
            </div>

            {/* Container 2 */}
            <div className="flex flex-col justify-center items-center text-center mt-10">
                             <div className=" mt-4 flex flex-col-reverse md:flex-row justify-between md:gap-32">

                {/* Image */}
                <div>
                    <Image src={"/images/abt2.png"}
                    alt="aboutpic"
                    width={350}
                    height={200}
                    ></Image>
                </div>

                <div className="flex flex-col  justify-center items-center text-center gap-10">
                                       <div className="w-[300px] text-xl">
                        <p>
                        I am currently a student specializing in Artificial Intelligence and Web 3.0, with a strong foundation in various web development technologies.
                        My learning journey includes gaining proficiency in HTML and CSS, which form the core of web design and layout. Additionally, I am expanding my skills in TypeScript, a superset of JavaScript that enhances the development process by providing static typing and better tooling.
                        </p>
                    </div>
                </div>               
                </div>
            </div>

            {/* Container 3 */}
            <div className="flex flex-col justify-center items-center text-center mt-10">

                <div className=" mt-4 flex flex-col md:flex-row justify-between md:gap-32">

                <div className="flex flex-col  justify-center items-center text-center gap-10">
                                       <div className="w-[300px] text-xl">
                        <p>
                        As part of my learning, I am also diving into Next.js, a powerful React framework that helps with server-side rendering and building full-stack applications. To further improve the aesthetics and functionality of my web projects, I am honing my skills in Tailwind CSS, a utility-first CSS framework that enables rapid and responsive design.
                        I am using these technologies to create and develop projects that showcase my growing expertise in both front-end and back-end development, while also keeping up with the latest trends in the world of Artificial Intelligence and Web 3.0.
                        </p>
                    </div>                    
                </div>

                {/* Image */}
                <div>
                    <Image src={"/images/abt3.jpg"}
                    alt="aboutpic"
                    width={300}
                    height={200}
                    ></Image>
                </div>
                </div>
            </div>
        </div>
    )
}