"use client"

import { Agbalumo } from "next/font/google"
import { motion } from "motion/react";

const agbalumo = Agbalumo({
  subsets: ['latin'],
  weight: ['400'], 
  style: ['normal'],
});

export default function About() {
    return(
        <div className="px-15 mt-8 ">
            <div className="h-[40px] w-full bg-linear-to-r from-red-300 via-pink-300 to-purple-300">
                <h1 className={`${agbalumo.className} w-full pl-5 h-[39px] text-3xl text-neutral-800 text-shadow-md text-shadow-neutral-400 bg-white`}>
                    About me
                </h1>
            </div>
            <div className="w-full pl-4 pr-20 mt-4">
                {aboutList.map((about, index) => (
                    <motion.div 
                        key={index} 
                        className="flex my-4 items-start gap-4"
                        initial={{
                            x: -100,
                            opacity: 0,
                            filter: "blur(3px)"
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                            filter: "blur(0px)"
                        }}
                        transition={{
                            duration: index * 0.3,
                            delay: 0.01,
                            ease: "easeInOut"
                        }}>
                        <span className="text-neutral-600 font-bold">
                            .
                        </span>
                        <span className="text-neutral-600 text-shadow-xs text-shadow-neutral-300">
                            {about}
                        </span>
                    </motion.div>
                ))}
            </div>

        </div>
    )
}

const aboutList: string[] = [
    "Full-stack developer proficient in Next.js, React, TypeScript, Node.js/Bun.js - equally strong in frontend polish and backend infrastructure.",
    "Specialized in WebSockets, Redis, Webrtc Microservices architecture with expertise in real-time communication and distributed systems.",
    "Passionate about exploring new technologies and turning ideas into reality through polished, thoughtfully crafted projects.",
    "Currently exploring GenAi, AI-powered applications and developer tooling."
]