"use client"

import {  useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring, type MotionValue } from 'motion/react'
import type { IconType } from 'react-icons'
import { FaGithub, FaTwitter, FaLinkedin, FaMedium } from 'react-icons/fa6'

export default function Socials() {
  const mouseX = useMotionValue(Infinity)

  return (
    <div className='m-16 flex flex-col justify-center items-center'>
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
            <DockIcon index={0} mouseX={mouseX} icon={FaGithub} label="GitHub" href="https://github.com" />
            <DockIcon index={1} mouseX={mouseX} icon={FaTwitter} label="Twitter / X" href="https://x.com" />
            <DockIcon index={2} mouseX={mouseX} icon={FaLinkedin} label="LinkedIn" href="https://linkedin.com" />
            <DockIcon index={3} mouseX={mouseX} icon={FaMedium} label="Medium" href="https://medium.com" />
        </div>
    </div>
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