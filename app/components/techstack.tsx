'use client'

import React, { useState } from 'react'
import { SiTypescript, SiJavascript, SiPython, SiRust, SiReact, SiNextdotjs, SiTailwindcss, SiFramer, SiNodedotjs, SiPrisma, SiPostgresql, SiRedis, SiExpress, SiTurborepo, SiDocker, SiKubernetes, SiGithubactions } from 'react-icons/si'
import { TbNetwork } from 'react-icons/tb'
import { FaAws } from 'react-icons/fa6'
import { FaConnectdevelop } from 'react-icons/fa'

export default function Stack() {
    return (
        <div className='mt-4 mb-16 mx-10'>
            <h1 className='font-bold text-3xl text-neutral-300'>
                Stack
            </h1>
            <div className=' m-4 p-4 w-full'>
                {STACK_DATA.map((data, index) => 
                    <div key={index} className='p-2 w-full flex'>
                        <div className='w-60 shrink-0 px-3 text-neutral-300 text-sm'>
                            {data.title}
                        </div>
                        <div className='flex flex-wrap'>
                            {data.items.map((item, itemindex) => 
                                <span key={itemindex} className='m-1 flex items-center justify-center w-30 p-2 border rounded-xl border-neutral-300 text-neutral-300 gap-2'>
                                    <item.icon></item.icon>
                                    <span className='text-xs font-semibold'>
                                        {item.name}
                                    </span>
                                </span>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
  
}

interface TechItem {
    name: string
    icon: React.ElementType
}

interface TechCategory {
    id: string
    title: string
    items: TechItem[]
}

const STACK_DATA: TechCategory[] = [
    {
        id: '01',
        title: 'Languages',
        items: [
            { name: 'TypeScript', icon: SiTypescript },
            { name: 'JavaScript', icon: SiJavascript },
            { name: 'Python', icon: SiPython },
            { name: 'Rust', icon: SiRust },
        ],
    },
    {
        id: '02',
        title: 'Frontend',
        items: [
            { name: 'React', icon: SiReact },
            { name: 'Next.js', icon: SiNextdotjs },
            { name: 'Tailwind CSS', icon: SiTailwindcss },
            { name: 'Motion', icon: SiFramer },
        ],
    },
    {
        id: '03',
        title: 'Backend & Database',
        items: [
            { name: 'Node.js', icon: SiNodedotjs },
            { name: 'Websocket', icon: FaConnectdevelop },
            { name: 'Prisma', icon: SiPrisma },
            { name: 'Postgres', icon: SiPostgresql },
            { name: 'Redis', icon: SiRedis },
            { name: 'Express.js', icon: SiExpress },
            { name: 'Turborepo', icon: SiTurborepo }
        ],
    },
    {
        id: '04',
        title: 'Cloud / DevOps',
        items: [
            { name: 'Docker', icon: SiDocker },
            { name: 'Kubernetes', icon: SiKubernetes },
            { name: 'AWS', icon: FaAws },
            { name: 'CI/CD', icon: SiGithubactions },
        ],
    },
]