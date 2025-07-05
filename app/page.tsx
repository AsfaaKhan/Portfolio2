import Section from "@/components/HeroSection"
import About from "@/components/About"
import Project from "@/components/HomeProject"
import Link from "next/link"

export default function Home() {
  return (
    <div className="pt-20 pb-20 bg-white text-black">
      <Section />
      <About />
      <Project />
      <div className=" flex justify-center content-center items-start">
      <Link href="/projectPage" className="font-bold border-[2px] hover:border-[3px] text-black border-slate-950 p-5 rounded-full   text-2xl  hover:text-primary  hover:border-primary shadow-2xl p-4">View More</Link>

      </div>
    </div>
  )
}
