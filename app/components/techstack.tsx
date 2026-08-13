"use client"
import { Audiowide } from "next/font/google"
import React from "react"
import { BiLogoTypescript, BiLogoTailwindCss  } from "react-icons/bi"
import { BsJavascript } from "react-icons/bs"
import { FaRust, FaPython, FaReact, FaNodeJs  } from "react-icons/fa"
import { RiNextjsFill } from "react-icons/ri"

const audiowide = Audiowide({
    weight: "400",
    subsets: ["latin"],
    style: "normal"
})

export default function Stack() {
    return (
        <div className="px-18  mt-10 pt-10 w-full bg-linear-to-br from-[#FFCC4D] to-[#FF9137]">
            <h1 className={`${audiowide.className} text-3xl w-fit mx-auto text-transparent bg-clip-text bg-linear-to-br from-pink-500 via-purple-500 to-blue-500`}>
                Tech Stack
            </h1>
            <div>

            </div>
        </div>
    )
}

type Stack = {
    png: React.ReactNode,
    name: string
}

type DescStack = {
    title: string,
    stackList: Stack[]
}

const myStackList: DescStack[] = [
    {
        title: "Language",
        stackList: [
            {
                png: <BiLogoTypescript></BiLogoTypescript>,
                name: "typescript"
            },
            {
                png: <BsJavascript></BsJavascript>,
                name: "javascript"
            },
            {
                png: <FaRust></FaRust>,
                name: "rust"
            },
            {
                png: <FaPython></FaPython>,
                name: "python"
            }
        ]
    },
    {
        title: "Frontend",
        stackList: [
            {
                png: <FaReact></FaReact>,
                name: "React"
            },
            {
                png: <RiNextjsFill></RiNextjsFill>,
                name: "Next.js"
            },
            {
                png: <BiLogoTailwindCss></BiLogoTailwindCss>,
                name: "Tailwind CSS"
            },
            {
                png: <FaPython></FaPython>,
                name: "motion"
            }
        ]
    },
    {
        title: "Backend & Databases",
        stackList: [
            {
                png: <FaNodeJs></FaNodeJs>,
                name: "Node.js"
            },
            {
                png: <RiNextjsFill></RiNextjsFill>,
                name: "Bun"
            },
            {
                png: <BiLogoTailwindCss></BiLogoTailwindCss>,
                name: "Websocket"
            },
            {
                png: <FaPython></FaPython>,
                name: "Prisma"
            },
            {
                png: <FaPython></FaPython>,
                name: "Postgres"
            },
            {
                png: <FaPython></FaPython>,
                name: "Redis"
            },
            {
                png: <FaPython></FaPython>,
                name: "Turborepo"
            },
            {
                png: <FaPython></FaPython>,
                name: "Drizzel"
            }
        ]
    },
    {
        title: "Cloud/Devops",
        stackList: [
            {
                png: <FaReact></FaReact>,
                name: "Github"
            },
            {
                png: <RiNextjsFill></RiNextjsFill>,
                name: "Kubernetes"
            },
            {
                png: <BiLogoTailwindCss></BiLogoTailwindCss>,
                name: "AWS"
            },
            {
                png: <FaPython></FaPython>,
                name: "CI/CD"
            }
        ]
    }
]