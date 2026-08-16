"use client"
import { motion, stagger } from "motion/react"
import Image from "next/image"
import { MdVerified } from "react-icons/md"

export default function Header({title, description, width}: {
    title: string,
    description: string,
    width: number
}) {
    return(
        <div 
            style={{
                marginLeft: 20
            }}
            className="pt-16 px-5 flex items-center"
        >
            <motion.div
                initial={{
                    x: -30,
                    opacity: 0,
                    filter: "blur(5px)"
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    filter: "blur(0px)"
                }}
                transition={{
                    duration: 0.3
                }}>
                <Image
                    src="/pixelated_profile_2_bgremoved.png"
                    alt="programmer"
                    height={800}
                    width={800}
                    className="rounded-full p-4 ring-2 ring-red-500"
                    >
                </Image>
            </motion.div>
            <div>
                <div  className="flex items-center gap-2 ml-8">
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
                        className="tracking-tight flex items-center gap-4  text-shadow-lg text-[40px] text-neutral-400 font-serif">
                            {title}
                            <MdVerified className="text-blue-500 text-xl"></MdVerified>
                    </motion.h1>
                </div>
                <div className="leading-5 ml-8">
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
                            delay: index * 0.05
                        }}
                        
                        key={index}
                        className="text-shadow-xs text-md text-neutral-500">
                            {str} &nbsp;
                    </motion.span>)}
                </div>
                <button className="m-8 px-6 py-2 bg-blue-700/65 text-blue-100 rounded-xl hover:bg-blue-700/55 transition-colors duration-100 cursor-pointer text-sm tracking-wide ">
                    <span>
                        resume
                    </span>
                </button>
            </div>
        </div>
    )
}
