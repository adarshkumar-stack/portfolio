"use client"

import { motion, useMotionValue, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

export default function About() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })
    const opacityContent = useTransform(scrollYProgress, [0,0.2,0.6,1], [0,1,1,0])
    const scaleValue = useTransform(scrollYProgress, [0,0.2,0.6,1], [0.5,1,1, 0.5])
    const blurValue = useTransform(
        scrollYProgress,
        [0, 0.2, 0.6, 1],
        ["blur(3px)", "blur(0px)", "blur(0px)", "blur(3px)"]
    )
    const scaleHeight = useTransform(scrollYProgress, [0,1], [150,-150])

    return (
        <motion.div
            ref={ref} 
            style={{
                opacity: opacityContent,
                scale: scaleValue,
                filter: blurValue
            }}
            initial={{

            }}
            className="m-20 mx-10">
            <h1 className="text-6xl mx-auto w-fit font-extrabold text-black [-webkit-text-stroke:2px_#ad2200] ">
                About me
            </h1>
            <div className="mx-auto mt-10 flex w-full max-w-5xl flex-col gap-8 px-4 text-neutral-200 sm:px-6">
                <motion.section
                    style={{
                        y: scaleHeight
                    }}
                    className="rounded-lg border border-neutral-800 bg-black shadow-[0_0_20px_rgba(251,84,43,0.3)]">
                    <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-3">
                        <div className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-red-700" />
                            <span className="h-2.5 w-2.5 rounded-full bg-green-700" />
                            <span className="h-2.5 w-2.5 rounded-full bg-blue-700" />
                        </div>
                        <div className="flex rounded-md border bg-neutral-200 py-[3px] px-2 text-xs text-neutral-800">
                            about.txt
                        </div>
                    </div>
                    <div className="min-h-[220px] px-5 py-6 sm:px-7">
                        <div className="space-y-8 text-base leading-8 text-neutral-300 sm:text-lg p-2">
                            <p className="text-sm font-mono">
                                I am a full-stack developer who likes turning messy ideas into clean, usable products that feel sharp from database to interface.
                            </p>
                            <p className="text-sm font-mono">
                                My current curiosity lives where Web3, Solana, and AI meet: fast systems, better tools, and experiences that make new technology feel approachable.
                            </p>
                            <p className="text-sm font-mono">
                                I care about craft, clear problem-solving, and building software with enough polish that the details quietly do their job.
                            </p>
                        </div>
                    </div>
                </motion.section>
            </div>
        </motion.div>
    )
}

