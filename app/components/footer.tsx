'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiClock, FiGlobe } from 'react-icons/fi'

export default function Footer() {
    const [time, setTime] = useState<string>('')
    useEffect(() => {
        const updateTime = () => {
        const now = new Date()
        setTime(
            now.toLocaleTimeString('en-US', {
            timeZone: 'Asia/Kolkata', 
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
            })
        )
        }

        updateTime()
        const interval = setInterval(updateTime, 1000)
        return () => clearInterval(interval)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <footer id="socials" className="relative w-full border-t border-red-950/60 bg-red-100/10 text-neutral-300 overflow-hidden">
            <div 
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 w-200 h-60" 
            />
            <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-red-950/50">
                <div>
                    <h3 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                    Let's Build Something Great
                    <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    </h3>
                    <p className="text-sm text-neutral-400 mt-1">
                    Open for full-time opportunities and collaborative projects.
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                    <div className="flex items-center gap-12 px-3 py-1.5 rounded-full ">
                        <div className='flex flex-col gap-4 items-start'>
                            <div className='flex items-center justify-center gap-1'>
                                <FiClock className="text-red-400" />
                                <span>{time || '12:00:00 PM'} IST</span>
                            </div>
                            <p className="flex items-center gap-1.5">
                                <FiGlobe className="text-red-400" /> Region: India (IN)
                            </p>
                        </div>
                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ y: -3, scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='p-2 rounded-full  border-[1.5px] border-neutral-600  text-neutral-600 bg-neutral-800'
                        >
                        </motion.button>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    )
}