'use client'

import Link from "next/link"
import { FaBars, FaTimes} from 'react-icons/fa'
import { useAppContext } from "@/context/AppContext"

const Nav = () => {
  const {isOpen, toggleOpen, NAV_LINKS} = useAppContext()
  
  return (
    <>
    <nav className=" fixed flexEnd max-container bg-blue-900 text-white padding-container w-full z-30 py-5">
    <ul className=" hidden h-full gap-12 md:flex">
        {NAV_LINKS.map((link) => (
            <Link className="regular-16 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold" href={link.href} key={link.key}>{link.label}</Link>
        ))}
    </ul>
    {!isOpen ? (
          <FaBars onClick={toggleOpen} size={24} className="cursor-pointer md:hidden" />
        ) : (
          <FaTimes onClick={toggleOpen} size={24} className="cursor-pointer md:hidden" />
        )}
      </nav>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40" onClick={toggleOpen}>
          <aside
            className="fixed top-0 left-0 h-full bg-blue-900 text-white w-[70%] p-4 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.key} className="mb-4">
                  <Link href={link.href} className="  text-center mt-5 regular-16 flex flex-col border-b-2 border-gray-400 text-gray-20 cursor-pointer pb-1.5 transition-all hover:border-gray-200 hover:text-gray-10" onClick={toggleOpen}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
          </div>


            )}
     </>
  )
}

export default Nav;