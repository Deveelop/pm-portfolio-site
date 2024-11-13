import { NAV_LINKS } from "@/constant"
import Link from "next/link"
import Image from "next/image"
const Nav = () => {
  return (
    <nav className=" flexEnd max-container padding-container relative z-30 py-5">
    <ul className=" hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
            <Link className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold" href={link.href} key={link.key}>{link.label}</Link>
        ))}
    </ul>

    <Image src='/menu.svg' alt="menu" width={32} height={32} className=" inline-block cursor-pointer lg:hidden "/>

    </nav>
  )
}

export default Nav