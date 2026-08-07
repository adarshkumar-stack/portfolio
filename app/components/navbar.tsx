"use client"
import Image from "next/image"
import { motion, number } from "motion/react"
import { MdOutlineModeNight } from "react-icons/md"
import { useState } from "react"

export default function Navbar() {
    const [hovered, setHovered] = useState<null | number>(null)
    return(
        <div className="fixed w-full h-10 px-4 py-6 flex justify-between items-center">
            <motion.img
                src="/portfolio_profile_pic.jpg"
                alt="profile"
                height={50}
                width={50}
                loading="lazy"
                className="rounded-full shadow-[0_0_4px_rgba(0,0,0,0.8)]  hover:-translate-y-0.5 transition-all ease-in-out duration-200 hover:opacity-70 cursor-pointer"
                initial={{
                    opacity: 0.8,
                    filter: "blur(1px)"
                }}
                animate={{
                    scale: [0.95, 1.05, 1],
                    opacity: 1,
                    filter: "blur(0px)"
                }}
                transition={{
                    duration: 0.2,
                    ease: "anticipate"
                }}
            ></motion.img>
            <div className="flex justify-center items-center p-1 pr-6">
                {navList.map((item, index) => <a 
                    onMouseEnter={() => setHovered(index)} 
                    onMouseLeave={() => setHovered(null)}
                    key={index} 
                    href={item.href}
                    className="p-2 relative text-xs font-semibold text-neutral-700 hover:text-neutral-800  text-center  w-16 flex items-center justify-center"
                    >
                        {hovered === index && <motion.div layoutId="hover" className="absolute inset-0 w-full h-50px rounded-full bg-neutral-200"></motion.div>}
                        <span className="relative group-hover:text-neutral-100">{item.title}</span>
                </a>)}
            </div>
        </div>
    )
}

type Navitem = {
    title: string | React.ReactNode,
    href: string,
    description: string,
    function?: () => void
}
const navList: Navitem[] = [
    {
        title: <MdOutlineModeNight className="size-5"></MdOutlineModeNight>,
        href: "",
        description: "",
        function: () => {
            
        }
    },
    {
        title: "About",
        href: "",
        description: ""
    },
    {
        title: "Projects",
        href: "",
        description: ""
    },
    {
        title: "About",
        href: "",
        description: ""
    },
    {
        title: "Contact",
        href: "",
        description: ""
    }
]