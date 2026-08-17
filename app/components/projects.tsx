"use client"
import { motion } from "motion/react"
import { filter } from "motion/react-client"
import { useState } from "react"
import { IoLinkOutline, IoLogoGithub  } from "react-icons/io5"
import { MdArrowRightAlt } from "react-icons/md"

export default function Projects () {
    const [imghover, setimghover] = useState(false)
    return (
        <div className="p-15 px-10">
             
            <div className="mx-auto grid grid-cols-2 pt-10">
                {projects.slice(0,4).map((project, index) => (
                    <div key={index}>
                        <motion.div  
                            className="flex justify-center py-4"
                            initial={{
                                opacity: 0,
                                filter: "blur(5px)"
                            }}
                            animate={{
                                opacity: 1,
                                filter: "blur(0px)"
                            }}
                            transition={{
                                duration: 0.3,
                                delay: index * 0.1
                            }}>
                            <div className="group relative inline-block cursor-pointer">
                                <motion.img
                                src={project.demoImage}
                                width={380}
                                alt="project"
                                loading="lazy"
                                className="block rounded-xl transition-all duration-300 group-hover:blur-[1px] group-hover:scale-[1.02]"
                                />
                                <div
                                    className="absolute inset-0 flex items-center justify-center gap-2 rounded-xl bg-neutral-900 opacity-0 transition-all duration-200 group-hover:bg-black/50 group-hover:scale-[1.02] group-hover:opacity-100
                                    "
                                >
                                    <a
                                        href={project.liveLink}
                                        className="rounded-full bg-white px-2 py-1 font-mono text-blue-600 hover:text-red-500 text-xl"
                                    >
                                        <IoLinkOutline></IoLinkOutline>
                                    </a>
                                    <a
                                        href={project.githubLink}
                                        className="rounded-full bg-white px-2 py-1 font-mono text-blue-600 hover:text-red-500 text-xl "
                                    >
                                        <IoLogoGithub></IoLogoGithub>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                        <h2 className="tracking-tight text-xl font-semibold text-neutral-600 pb-2 ml-12">{project.title}</h2>
                        <div className="max-w-25 inline-block ml-12 mb-10">
                            {project.description.split(" ").slice(0,10).map((word, index) => (
                                <span key={index}
                                    className="text-neutral-500">
                                    {word} &nbsp;
                                </span>
                            
                            ))}
                            <span className="text-neutral-500">...</span>
                        </div>
                    </div>
                ))}
            </div>
            <button className="flex justify-center items-center mx-auto mt-8 gap-2 px-4 py-1  rounded-lg cursor-pointer text-lg text-red-700/70 border-2 bg-black/50 border-red-700/70 hover:scale-[1.02] ">
                show all
                <MdArrowRightAlt className=" size-7"></MdArrowRightAlt>
            </button>
        </div>
    )
}

type Project = {
    title: string,
    description: string,
    githubLink: string,
    liveLink: string,
    demoImage: string
}

const projects: Project[] = [
    {
        title: "Centralised Exchange",
        description: "This is an centralised whene one  can buy and sell their solana tokens. Its build very secure such that the user funds are kept very secure with ourselves",
        githubLink: "https://github.com/adarshkumar-stack/centralised-exchange",
        liveLink: "",
        demoImage: "/project_demo_image.png"
    },
    {
        title: "Centralised Exchange",
        description: "This is an centralised whene one  can buy and sell their solana tokens. Its build very secure such that the user funds are kept very secure with ourselves",
        githubLink: "https://github.com/adarshkumar-stack/centralised-exchange",
        liveLink: "",
        demoImage: "/project_demo_image.png"
    },
    {
        title: "Centralised Exchange",
        description: "This is an centralised whene one  can buy and sell their solana tokens. Its build very secure such that the user funds are kept very secure with ourselves",
        githubLink: "https://github.com/adarshkumar-stack/centralised-exchange",
        liveLink: "",
        demoImage: "/project_demo_image.png"
    },
    {
        title: "Centralised Exchange",
        description: "This is an centralised whene one  can buy and sell their solana tokens. Its build very secure such that the user funds are kept very secure with ourselves",
        githubLink: "https://github.com/adarshkumar-stack/centralised-exchange",
        liveLink: "",
        demoImage: "/project_demo_image.png"
    },
    {
        title: "Centralised Exchange",
        description: "This is an centralised whene one  can buy and sell their solana tokens. Its build very secure such that the user funds are kept very secure with ourselves",
        githubLink: "https://github.com/adarshkumar-stack/centralised-exchange",
        liveLink: "",
        demoImage: "/project_demo_image.png"
    }
]