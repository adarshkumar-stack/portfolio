"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

export default function About() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })
    const opacityContent = useTransform(scrollYProgress, [0,0.2,0.8,1], [0,1,1,0])
    const scaleValue = useTransform(scrollYProgress, [0,0.2,0.8,1], [0.8,1,1, 0.8])

    return (
        <motion.div
            ref={ref} 
            style={{
                opacity: opacityContent,
                scale: scaleValue,
            }}
            initial={{

            }}
            className="mt-20">
            <h1 className="text-6xl mx-auto w-fit font-extrabold text-black [-webkit-text-stroke:1px_#e5e5e5] ">
                About me
            </h1>
        </motion.div>
    )
}