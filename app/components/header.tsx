"use client"
import { motion, stagger } from "motion/react"

export default function Header({title, description, width}: {
    title: string,
    description: string,
    width: number
}) {
    return(
        <div style={{
            maxWidth: width,
            marginLeft: 20
        }}>
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
                className="tracking-tight pt-10  pl-5 font-bold text-shadow-lg text-[50px] text-transparent bg-clip-text bg-linear-to-r from-[#003d4d] to-[#00c996]">
                    {title}
            </motion.h1>
            <div className=" pl-5">
                {description.split(" ").map((str, index) => <motion.span
                    style={{
                        color: str === "developer"? "#f4bc24" : ""
                    }}
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
                    className="text-shadow-xs text-xl text-neutral-500">
                        {str} &nbsp;
                </motion.span>)}
            </div>
        </div>
    )
}
