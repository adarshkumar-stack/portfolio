"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { IoLogoGithub } from "react-icons/io5"
import { projects } from "../data/projects"

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const opacityContent = useTransform(
    scrollYProgress,
    [0, 0.2, 0.6, 1],
    [0, 1, 1, 0],
  )

  return (
    <motion.div
      ref={ref}
      style={{ opacity: opacityContent }}
      className="my-15 px-10"
    >
      <div className="mx-auto grid grid-cols-1 gap-6 pt-10 md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="rounded-xl border border-neutral-800 bg-neutral-950 p-6 text-neutral-200"
          >
            <p className="text-xs uppercase tracking-widest text-neutral-500">
              {project.subtitle}
            </p>
            <h2 className="mt-3 text-2xl font-semibold">{project.title}</h2>
            <p className="mt-3 text-sm leading-6 text-neutral-400">
              {project.description}
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-neutral-400">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-5 text-neutral-500">
              {project.techStack.join(" · ")}
            </p>
            <a
              aria-label={`View ${project.title} source code on GitHub`}
              href={project.githubLink}
              rel="noreferrer"
              target="_blank"
              className="mt-5 inline-flex items-center gap-2 text-sm hover:text-lime-300"
            >
              Source code <IoLogoGithub aria-hidden="true" />
            </a>
          </motion.article>
        ))}
      </div>
    </motion.div>
  )
}
