"use client"
import { motion } from "motion/react"
import { FaLinkedin } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"
import Image from "next/image"

export default function Banner() {
    return (
        <div
            className="w-full h-70 bg-linear-to-r from-[#3A1C71] via-[#D76D77] to-[#FFAF7B] flex justify-between pl-10 items-center">
            <div className="w-1/2 relative z-10">
                <motion.h1 
                    initial={{
                        y: -100,
                        opacity: 0
                    }}
                    animate={{
                        y:0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "linear"
                    }}
                    className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-br from-[#DBDBDB] to-[#EAEAEA]">
                    Want me to work with your team?
                </motion.h1>
                <motion.h1 
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 0.3
                    }}
                    className="mt-3 text-3xl font-semibold text-neutral-800">
                    DM me here !!
                </motion.h1>
                <span className="flex gap-8 mt-8">
                    <button className="w-20 py-1 rounded-md bg-white opacity-70 text-neutral-600 text-xs flex justify-center items-center gap-1 backdrop-blur-3xl">
                        Github
                        <FiGithub></FiGithub>
                    </button>
                    <button className="w-20 py-1 rounded-md bg-white opacity-70 text-neutral-600 text-xs flex justify-center items-center gap-1 backdrop-blur-3xl">
                        Linkedin
                        <FaLinkedin></FaLinkedin>
                    </button>
                </span>
            </div>
            <motion.div
                initial={{
                    opacity: 0,
                    filter: "blur(5px)"
                }}
                animate={{
                    opacity: 1,
                    filter: "blur(0px)"
                }}
                transition={{
                    duration: 0.5
                }}>
                <Image
                    src="/banner_showoff.svg"
                    alt="banner"
                    height={100}
                    width={100}
                    className="pt-2 h-250 w-fit">

                </Image>
            </motion.div>
        </div>
    )
}