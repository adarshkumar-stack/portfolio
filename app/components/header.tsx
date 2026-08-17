"use client"
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react"
import Image from "next/image"
import { MdVerified, MdDownload } from "react-icons/md"
import { useState, useEffect, useRef } from "react"

export default function Header({title, description, width}: {
    title: string,
    description: string,
    width: number
}) {
    const [index, setIndex] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % roles.length)
        }, 2000);
        return () => clearInterval(interval)
    }, [])
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const opacityContent = useTransform(scrollYProgress, [0,0.5,1], [0, 1, 0])
    const scaleValue = useTransform(scrollYProgress, [0.5,1], [1, 0.8])
    const translateHeight = useTransform(scrollYProgress, [0.5, 1], [16, -200])

    return(
        <motion.div 
            ref = {ref}
            style={{
                marginLeft: 20,
                opacity: opacityContent,
                scale: scaleValue,
            }}
            className="mt-16  mb-30 px-5 flex items-center"
        >
            
            <motion.div
                initial={{
                    x: -100,
                    opacity: 0,
                    filter: "blur(5px)",
                    rotate: 300
                }}
                style={{
                    y: translateHeight
                }}
                animate={{
                    x: 0,
                    rotate: 360,
                    opacity: 1,
                    filter: "blur(0px)"
                }}
                transition={{
                    duration: 0.3,
                }}
                whileHover={{
                    rotateZ: 360,
                    transitionDuration: 1,
                }}
                className="p-0.5 rounded-full bg-conic-180 from-red-700 via-neutral-950 to-red-700">
                <Image
                    src="/pixelated_profile_3_bgremoved.png"
                    alt="programmer"
                    height={800}
                    width={800}
                    className="rounded-full p-4 shadow-[0_0_4px_rgba(255,255,255,1)] mask-b-from-95% hover:mask-b-from-94% bg-black"
                    >
                </Image>
            </motion.div>
            <div className="ml-8">
                <div  className=" gap-2">
                    <motion.h1 
                        initial={{
                            opacity: 0,
                            filter: "blur(3px)"
                        }}
                        animate={{
                            opacity: 1,
                            filter: "blur(0px)"
                        }}
                        transition={{
                            duration: 0.3
                        }}
                        className="tracking-tight flex items-center gap-4  text-shadow-lg text-[50px] text-red-100/50 font-serif">
                            {title}
                            <MdVerified className="text-blue-500 text-xl"></MdVerified>
                    </motion.h1>
                    <motion.div  
                        transition={{
                            duration: 0.3,
                            type: "spring"
                        }}
                        className="px-2 bg-neutral-950 py-1 rounded-md text-neutral-200 w-fit h-fit overflow-hidden text-[10px] ">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={roles[index]}
                                initial={{
                                    y: 40,
                                    opacity: 0,
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                }}
                                exit={{
                                    y: -40,
                                    opacity: 0,
                                }}
                                transition={{
                                    duration: 0.2,
                                    ease: "easeInOut",
                                }}
                                className=""
                            >
                                {roles[index]}
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>
                <div className="leading-5 mt-4">
                    {description.split(" ").map((str, index) => <motion.span
                        initial={{
                            opacity: 0,
                            filter: "blur(2px)",
                            display: "inline-block",
                            y:10,
                            z: 10
                        }}
                        animate={{
                            opacity: 1,
                            filter: "blur(0px)",
                        }}
                        transition={{
                            duration: 0.3,
                            delay: index * 0.03
                        }}
                        
                        key={index}
                        className="text-shadow-xs text-md text-neutral-400">
                            {str} &nbsp;
                    </motion.span>)}
                </div>
                <motion.button 
                    initial={{
                        y:2,
                        opacity: 0,
                        filter: "blur(1px)" 
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        filter: "blur(0px)"
                    }}
                    transition={{
                        duration: 0.3
                    }}
                    className="mt-8 px-6 py-2 bg-red-700 text-blue-100 rounded-xl hover:bg-red-500/75 transition-colors duration-100 cursor-pointer text-xs tracking-wide flex items-center justify-center gap-2">
                    <span>
                        resume
                    </span>
                    <MdDownload className="size-4"></MdDownload>
                </motion.button>
            </div>
        </motion.div>
    )
}

const roles = [
    "WEB3  DEVELOPER",
    "FULL-STACK  DEVELOPER",
    "AI  ENTHUSIAST",
]

