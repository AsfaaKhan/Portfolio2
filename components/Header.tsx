"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { CgMenu } from "react-icons/cg";
import { CgMenuMotion } from "react-icons/cg";

export default function Header() {
        const [navbar,setNavbar] =  useState(false)
    const handleNavbar = () =>{
        setNavbar(!navbar)
    }
    return (
        <>
            {/* NAVBAR */}
            <nav className="bg-white w-full z-10 top-0 fixed p-[20px] shadow-lg border-[1px] ">
                <div className="container mx-auto flex justify-between items-center h-8">
                    {/* LOGO */}
                    <div className="text-black  text-2xl flex  justify-center items-center gap-2" > 
                        <Image
                            src="/images/aklogo.png"
                            width={50}
                            height={50}
                            alt="navbar image"
                        >
                        </Image>
                        <h1>
                        Portfolio
                        </h1>
                    </div>    
                    {/* NAVBAR ITEMS */}
                    <div className="hidden md:flex justify-end gap-10 text-xl" >
                        <Link href="/" className="hover:text-primary hover:underline text-black">Home</Link>
                        <Link href="/aboutPage"  className="hover:text-primary hover:underline text-black">About</Link>
                        <Link href="/projectPage"  className="hover:text-primary hover:underline text-black" > Portfolio</Link>
                        <Link href="/contactPage"  className="hover:text-primary hover:underline text-black"> Contact</Link>
                    </div> 
    
                    {/* HAMBURGER NAVBAR */}
                    <div className="md:hidden p-4 flex flex-col justify-center shadow-sm text-black items-center gap-3" onClick={handleNavbar} >
                        {navbar ? <CgMenuMotion  size={40}/> : <CgMenu size={40}/>}
                    </div>
                </div>

                {navbar && (
                    <div className="md:hidden  bg-white p-4 flex flex-col justify-center shadow-sm items-center gap-4 text-center text-xl text-black" >
                        <Link href="/"  
                        className="hover:text-primary hover:underline" onClick={handleNavbar}>Home</Link>
                        <Link href="/aboutPage"  className="hover:text-primary
                         hover:underline" onClick={handleNavbar}>About</Link>
                        <Link href="/projectPage"  className="hover:text-primary hover:underline" onClick={handleNavbar}>Projects</Link>
                        <Link href="/contactPage"  className="hover:text-primary hover:underline" onClick={handleNavbar}>Contact</Link>
                    </div>
                )}
            </nav>
        </>

    );
}