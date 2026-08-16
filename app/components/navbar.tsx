"use client"
import { motion, useMotionValueEvent, useScroll } from "motion/react"
import { MdOutlineModeNight } from "react-icons/md"
import { useState } from "react"

export default function Navbar() {
    const [shrink, setShrink] = useState<boolean>(false)
    const [hovered, setHovered] = useState<null | number>(null)

    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 40) {
            setShrink(true)
        } else {
            setShrink(false)
        }
    })

    return(
        <div className="sticky top-0 z-50 w-full">
            <motion.div
                className="flex w-full items-center justify-between bg-black px-4 py-1  backdrop-blur mx-auto "
                animate={{
                    paddingLeft: shrink? 6 : 16,
                    borderRadius: shrink? "200px": "0px",
                    width: shrink? "80%" : "100%",
                    y: shrink? 6 : 0,
                    background: shrink
                        ? "rgba(0,0,0,0.55)"
                        : "rgba(0,0,0,0.85)",
                    backdropFilter: "blur(5px)",
                    boxShadow: shrink
                        ? "0 0 3px 1px rgba(0,0,0,0.18)"
                        : "",
                }}
                transition={{
                    duration: 0.3
                }}>
                <motion.img
                    src="/portfolio_profile_pic.jpg"
                    alt="profile"
                    height={40}
                    width={40}
                    loading="eager"
                    className="cursor-pointer rounded-full shadow-[0_0_4px_rgba(0,0,0,0.8)] transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:opacity-70"
                    animate={{
                        y: [-200, 0],
                        rotateY: 20
                    }}
                    initial={{
                        y: -800
                    }}
                    transition={{
                        duration: 0.2,
                        type: "spring",

                        ease: "easeInOut",
                    }}
                />
                <div className="flex items-center">
                    {navList.map((item, index) => <a
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                        key={index}
                        href={item.href}
                        className="relative flex h-8 min-w-10 items-center justify-center rounded-full px-3 text-center text-xs font-semibold text-neutral-400 transition-colors hover:text-neutral-800 sm:min-w-20"
                        >
                            {hovered === index && <motion.div layoutId="hover" className="absolute inset-0 rounded-full bg-stone-600 " />}
                            <motion.span 
                                initial={{
                                    opacity: 0
                                }}
                                animate={{
                                    opacity: 1
                                }}
                                transition={{
                                    duration: 0.3
                                }}
                                className="relative">
                                    {item.title}
                            </motion.span>
                    </a>)}
                </div>
            </motion.div>
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
