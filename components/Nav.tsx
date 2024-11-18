import { NAV_LINKS } from "@/constant"
import Link from "next/link"
import Image from "next/image"
const Nav = () => {
  return (
    <nav className=" fixed flexEnd max-container bg-blue-900 text-white padding-container w-full z-30 py-5">
    <ul className=" hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
            <Link className="regular-16 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold" href={link.href} key={link.key}>{link.label}</Link>
        ))}
    </ul>

    <Image src='/menu.svg' alt="menu" width={32} height={32} className=" inline-block cursor-pointer lg:hidden "/>

    </nav>
  )
}

export default Nav