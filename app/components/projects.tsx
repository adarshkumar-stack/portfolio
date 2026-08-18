"use client"
import { motion, useTransform, useScroll } from "motion/react"
import { useRef } from "react"
import { IoLinkOutline, IoLogoGithub  } from "react-icons/io5"
import { MdArrowRightAlt } from "react-icons/md"
import { projects, type Project } from "../data/projects"

export default function Projects () {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })
    const opacityContent = useTransform(scrollYProgress, [0,0.2,0.6,1], [0,1,1,0])
    const scaleValue = useTransform(scrollYProgress, [0,0.2,0.6,1], [0.7,1,1, 0.7])
    const blurValue = useTransform(
        scrollYProgress,
        [0, 0.2, 0.6, 1],
        ["blur(3px)", "blur(0px)", "blur(0px)", "blur(3px)"]
    )

    return (
        <motion.div 
            ref={ref} 
            style={{
                opacity: opacityContent,
                scale: scaleValue,
                filter: blurValue,
            }}
            className="my-15 px-10">
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
            <button className="flex justify-center items-center mx-auto mt-6 gap-2 px-4 py-2  rounded-lg cursor-pointer text-sm text-neutral-200 bg-red-100/10 hover:scale-[1.02] ">
                show all
                <MdArrowRightAlt className=" size-4"></MdArrowRightAlt>
            </button>
        </motion.div>
    )
}

