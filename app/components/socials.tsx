"use client"

import {  useRef } from 'react'
import { motion, useMotionValue, useTransform, useScroll, useSpring, type MotionValue } from 'motion/react'
import type { IconType } from 'react-icons'
import { FaGithub, FaTwitter, FaLinkedin, FaMediumM } from 'react-icons/fa'

export default function Socials() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })
    const mouseX = useMotionValue(Infinity)
    const opacityContent = useTransform(scrollYProgress, [0,0.2,0.6,1], [0,1,1,0])
    const scaleValue = useTransform(scrollYProgress, [0,0.2,0.6,1], [0.5,1,1, 0.5])
    const blurValue = useTransform(
        scrollYProgress,
        [0, 0.2, 0.6, 1],
        ["blur(3px)", "blur(0px)", "blur(0px)", "blur(3px)"]
    )
    const scaleHeight = useTransform(scrollYProgress, [0,0.2, 0.8,1], [-50,0,0,50])

    return (
        <motion.div
            ref={ref} 
            style={{
                opacity: opacityContent,
                scale: scaleValue,
                filter: blurValue,
                y: scaleHeight
            }}
            className='m-10 flex flex-col justify-center items-center'>
            <div className=" text-xl text-neutral-100 pl-10  font-mono lowercase flex gap-2 items-center justify-center">
                My socials...
                <span className='bg-neutral-900 border border-yellow-900 p-1 text-[12px] rounded-sm text-yellow-500'>
                    connect with me here
                </span>
            </div>
            <div
                onMouseMove={(e) => mouseX.set(e.pageX)}
                onMouseLeave={() => mouseX.set(Infinity)}
                className="flex items-center justify-between mx-auto m-4 h-20 bg-black border-2 border-neutral-800 rounded-full w-85"
            >
                <DockIcon index={0} mouseX={mouseX} icon={FaGithub} label="GitHub" href="https://github.com/adarshkumar-stack" />
                <DockIcon index={1} mouseX={mouseX} icon={FaTwitter} label="Twitter / X" href="https://x.com/adarsh_345" />
                <DockIcon index={2} mouseX={mouseX} icon={FaLinkedin} label="LinkedIn" href="https://linkedin.com/12adarshkumar12" />
                <DockIcon index={3} mouseX={mouseX} icon={FaMediumM} label="Medium" href="https://medium.com/@12adarshkumar12" />
            </div>
        </motion.div>
    )
}

function DockIcon({ mouseX, icon: Icon, label, href, index }: DockIconProps) {
    const ref = useRef<HTMLAnchorElement>(null)
    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
        return val - bounds.x - bounds.width / 2
    })
    const widthSync = useTransform(distance, [-120, 0, 120], [44, 58, 44])
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 200, damping: 15 })

    return (
        <motion.a
            ref={ref}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{
                x: -20 * index,
                opacity: 0
            }}
            animate={{
                x: 0,
                opacity: 1
            }}
            transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeInOut"
            }}
            style={{ 
                width, 
                height: width 
            }}
            className="relative m-4 flex items-center justify-center bg-neutral-900 border border-neutral-800 rounded-full text-white hover:text-white/30 transition-colors group"
            >
            <Icon className="text-xl" />
            <span className="absolute -top-9 opacity-0 group-hover:opacity-100 transition-opacity bg-black border border-neutral-800 text-neutral-300 text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none">
                {label}
            </span>
        </motion.a>
    )
}

type DockIconProps = {
    mouseX: MotionValue<number>
    icon: IconType
    label: string
    href: string
    index: number
}