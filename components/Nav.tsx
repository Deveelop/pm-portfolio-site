'use client'
import { NAV_LINKS } from "@/constant"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
const Nav = () => {
  const [isOpen, setIsOpen] = useState(true);

  const NavHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    <nav className=" fixed flexEnd max-container bg-blue-900 text-white padding-container w-full z-30 py-5">
    <ul className=" hidden h-full gap-12 md:flex">
        {NAV_LINKS.map((link) => (
            <Link className="regular-16 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold" href={link.href} key={link.key}>{link.label}</Link>
        ))}
    </ul>
   

    <Image onClick={NavHandler} src='/menu.svg' alt="menu" width={32} height={32} className=" fill-white inline-block cursor-pointer md:hidden "/>

    </nav>
    <nav className= {!isOpen ? 'fixed left-0 top-0 w-full h-screen flex md:hidden' : 'fixed hidden md:hidden'}>
      <figure className=" w-[70%] h-full pb-4 bg-blue-900 overflow-y-scroll">
       <div>
        <Link href='/'>Home</Link>
        <button>{!isOpen ? <span>cancel</span> : <span>remain</span>}</button>
        <ul>
        {NAV_LINKS.map((link) => (
            <Link className="regular-16 flex flex-col border-b-2 border-gray-400 text-gray-20 cursor-pointer pb-1.5 transition-all hover:border-gray-200 hover:text-gray-10" href={link.href} key={link.key}>{link.label}</Link>
        ))}
        </ul>
       </div>
      </figure>

    </nav>
    </>
  )
}

export default Nav;