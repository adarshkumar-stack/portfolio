"use client"

import Image from "next/image"
import { MotionConfig, motion } from "motion/react"
import { projects } from "./data/projects"

const skillGroups = [
  {
    title: "Languages",
    skills: ["C", "C++", "JavaScript", "TypeScript", "Python", "Rust"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "React Motion", "Tailwind CSS"],
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "REST APIs",
      "Microservices",
      "RPC-based service communication",
      "Event-driven architecture",
      "WebSockets",
    ],
  },
  {
    title: "Databases & Infrastructure",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Prisma ORM",
      "Docker",
      "Kubernetes",
      "AWS",
      "CI/CD",
    ],
  },
  {
    title: "Observability",
    skills: ["Grafana", "Prometheus"],
  },
  {
    title: "Generative AI",
    skills: [
      "LLM integration",
      "RAG",
      "Prompt engineering",
      "LangChain",
      "LangGraph",
      "Vector databases",
      "Tool calling",
      "MCP",
      "Guardrails",
      "Harness engineering",
      "Evaluation (evals)",
    ],
  },
  {
    title: "Core CS",
    skills: [
      "Data Structures and Algorithms",
      "OOP",
      "Operating Systems",
      "DBMS",
      "Computer Networks",
    ],
  },
]

const education = [
  {
    qualification: "Bachelor of Technology",
    subject: "Computer Science and Engineering",
    school: "Gurukul Kangri Vishwavidyalaya",
    location: "Haridwar",
    period: "2023 — 2027",
    result: "Expected · SGPA 8.2",
  },
  {
    qualification: "Senior Secondary",
    subject: "Class XII",
    school: "Valley View School",
    location: "Jamshedpur, Jharkhand",
    period: "",
    result: "75%",
  },
  {
    qualification: "High School",
    subject: "Class X",
    school: "Xavier Public School",
    location: "Jamshedpur, Jharkhand",
    period: "",
    result: "88%",
  },
]

const achievements = [
  {
    number: "01",
    title: "Hackathon finalist",
    description:
      "Selected as a finalist in an Odoo-organized hackathon with 20,000+ participants across India.",
  },
  {
    number: "02",
    title: "Client projects",
    description:
      "Delivered four major client projects, covering design, development, and deployment.",
  },
  {
    number: "03",
    title: "Problem solving",
    description:
      "Solved 500+ coding problems across LeetCode, GeeksforGeeks, and other platforms.",
  },
]

function ProjectVisual({ visual }: { visual: (typeof projects)[number]["visual"] }) {
  if (visual === "payroll") {
    return (
      <div aria-hidden="true" className="project-art project-art-payroll">
        <div className="art-window-bar">
          <span className="art-window-mark">P</span>
          <span>PeoplePay360</span>
          <span className="art-window-label">WORKFORCE</span>
        </div>
        <div className="payroll-art-body">
          <p>YOUR WORKSPACE</p>
          <strong>People, pay &amp; schedules.</strong>
          <div className="payroll-art-cards">
            <div>
              <span className="art-card-icon">↗</span>
              <span>Payroll</span>
            </div>
            <div>
              <span className="art-card-icon">▦</span>
              <span>Schedules</span>
            </div>
            <div>
              <span className="art-card-icon">◎</span>
              <span>Team</span>
            </div>
          </div>
          <div className="payroll-art-footer">
            <span>PAYROLL</span>
            <span>SCHEDULES</span>
            <span>WORKFORCE</span>
          </div>
        </div>
      </div>
    )
  }

  if (visual === "routing") {
    return (
      <div aria-hidden="true" className="project-art project-art-routing">
        <div className="routing-art-heading">
          <span className="routing-art-mark">↗</span>
          <span>One interface. Multiple models.</span>
        </div>
        <div className="routing-flow">
          <div className="routing-node routing-node-request">
            <span>01</span>
            <strong>APP REQUEST</strong>
          </div>
          <div className="routing-connector">
            <span />
          </div>
          <div className="routing-node routing-node-judge">
            <span>02</span>
            <strong>JUDGE MODEL</strong>
          </div>
          <div className="routing-fork">
            <span />
            <span />
          </div>
          <div className="routing-models">
            <div className="routing-node">
              <span>A</span>
              <strong>MODEL</strong>
            </div>
            <div className="routing-node">
              <span>B</span>
              <strong>MODEL</strong>
            </div>
          </div>
        </div>
        <span className="routing-art-caption">UNIFIED LLM ROUTING SDK</span>
      </div>
    )
  }

  return (
    <div aria-hidden="true" className="project-art project-art-wallet">
      <div className="wallet-art-top">
        <span>NON-CUSTODIAL</span>
        <span>WEB WALLET / 01</span>
      </div>
      <div className="wallet-visual-card">
        <div className="wallet-card-orbit wallet-card-orbit-one" />
        <div className="wallet-card-orbit wallet-card-orbit-two" />
        <div className="wallet-card-top">
          <span className="wallet-card-mark">A</span>
          <span>WEB WALLET</span>
        </div>
        <div className="wallet-card-center">⌁</div>
        <div className="wallet-card-bottom">
          <span>KEYS STAY YOURS</span>
          <span>↗</span>
        </div>
      </div>
      <div className="wallet-art-caption">
        <span>KEY MANAGEMENT</span>
        <span>TRANSACTION VALIDATION</span>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <main>
        <header className="site-header page-shell">
          <a aria-label="Adarsh Kumar Singh, home" className="wordmark" href="#">
            <span aria-hidden="true" className="wordmark-mark">
              A<span />
            </span>
            <span className="wordmark-copy">
              <span className="wordmark-name">adarsh</span>
              <span className="wordmark-caption">SOFTWARE DEVELOPER</span>
            </span>
            <span aria-hidden="true" className="wordmark-spark">
              ↗
            </span>
          </a>
          <nav aria-label="Main navigation" className="main-nav">
            <a href="#about">Summary</a>
            <a href="#education">Education</a>
            <a href="#work">Projects</a>
            <a href="#stack">Skills</a>
            <a href="#highlights">Highlights</a>
            <a className="nav-contact" href="#contact">
              Contact <span aria-hidden="true">↘</span>
            </a>
          </nav>
        </header>

        <div className="page-shell">
          <section aria-labelledby="intro-title" className="hero">
            <div className="hero-copy">
              <motion.p
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="eyebrow"
              >
                <span aria-hidden="true" className="availability-dot" />
                FINAL-YEAR B.TECH STUDENT
                <span className="eyebrow-divider">/</span>
                COMPUTER SCIENCE
              </motion.p>
              <motion.h1
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 24 }}
                transition={{
                  duration: 0.75,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                id="intro-title"
              >
                Full-stack
                <br />
                software
                <br />
                <span className="headline-accent">developer.</span>
              </motion.h1>
              <motion.p
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="hero-description"
              >
                Building full-stack applications, backend services, and
                AI-powered systems with a focus on clean architecture and
                maintainable software.
              </motion.p>
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.55, delay: 0.3, ease: "easeOut" }}
                className="hero-actions"
              >
                <motion.a
                  className="button button-dark"
                  href="#work"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View selected projects <span aria-hidden="true">↘</span>
                </motion.a>
                <a className="text-link" href="mailto:adarshkumar.stack@gmail.com">
                  Get in touch <span aria-hidden="true">↗</span>
                </a>
              </motion.div>
            </div>

            <motion.div
              animate={{ opacity: 1, y: 0, rotate: 2 }}
              initial={{ opacity: 0, y: 28, rotate: 5 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ rotate: 0, y: -5 }}
              className="portrait-card"
            >
              <div className="portrait-card-top">
                <span>ADARSH KUMAR SINGH</span>
                <span aria-hidden="true" className="portrait-spark">
                  *
                </span>
              </div>
              <Image
                alt="Pixel-art portrait of Adarsh Kumar Singh"
                className="portrait-image"
                height={450}
                priority
                src="/pixelated_profile_3_bgremoved.png"
                width={323}
              />
              <div className="portrait-card-bottom">
                <span>COMPUTER SCIENCE</span>
                <span>2023 — 2027</span>
              </div>
            </motion.div>

            <motion.a
              aria-label="Scroll to professional summary"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="scroll-cue"
              href="#about"
            >
              <span aria-hidden="true">↓</span>
              SCROLL TO EXPLORE
            </motion.a>
          </section>

          <motion.section
            aria-labelledby="about-title"
            className="content-section about-section"
            id="about"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="section-heading"
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              <p className="eyebrow">01 / PROFESSIONAL SUMMARY</p>
              <h2 id="about-title">
                Full-stack, backend
                <br />
                <span>&amp; AI-powered systems.</span>
              </h2>
            </motion.div>
            <motion.div
              className="about-copy"
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p>
                Final-year B.Tech Computer Science student and software
                developer focused on full-stack applications, backend
                services, and AI-powered systems.
              </p>
              <p>
                Skilled in TypeScript, JavaScript, React, Next.js, Node.js,
                PostgreSQL, Redis, Docker, and distributed systems, with
                experience integrating large language models and building LLM
                routing workflows.
              </p>
              <p>
                Interested in clean architecture, performance, and
                maintainable software.
              </p>
            </motion.div>
          </motion.section>

          <motion.section
            aria-labelledby="education-title"
            className="content-section education-section"
            id="education"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-title-row">
              <div>
                <p className="eyebrow">02 / EDUCATION</p>
                <h2 id="education-title">Learning by design.</h2>
              </div>
              <span className="section-index">GKV · HARIDWAR</span>
            </div>
            <div className="education-list">
              {education.map((item, index) => (
                <motion.article
                  className="education-row"
                  key={item.qualification}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <span className="education-index">0{index + 1}</span>
                  <div className="education-primary">
                    <h3>{item.qualification}</h3>
                    <p>{item.subject}</p>
                  </div>
                  <div className="education-school">
                    <span>{item.school}</span>
                    <span>{item.location}</span>
                  </div>
                  <div className="education-result">
                    {item.period && <span>{item.period}</span>}
                    <strong>{item.result}</strong>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>

          <motion.section
            aria-labelledby="work-title"
            className="content-section work-section"
            id="work"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-title-row">
              <div>
                <p className="eyebrow">03 / SELECTED PROJECTS</p>
                <h2 id="work-title">Things I&apos;ve built.</h2>
              </div>
              <span className="section-index">03 PROJECTS</span>
            </div>

            <div className="project-grid">
              {projects.map((project, index) => (
                <motion.article
                  className={`project-card project-card-${index + 1}`}
                  key={project.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -7, transition: { duration: 0.2 } }}
                >
                  <div className={`project-visual project-visual-${project.visual}`}>
                    <ProjectVisual visual={project.visual} />
                    <span className="project-number">
                      0{index + 1} <span> / 03</span>
                    </span>
                  </div>
                  <div className="project-details">
                    <div className="project-copy">
                      <p className="eyebrow">{project.subtitle}</p>
                      <h3>{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      <ul className="project-highlights">
                        {project.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="project-meta">
                      <ul aria-label={`${project.title} technology stack`} className="project-tech">
                        {project.techStack.map((technology) => (
                          <li key={technology}>{technology}</li>
                        ))}
                      </ul>
                      <a
                        aria-label={`View ${project.title} source code on GitHub`}
                        className="project-link"
                        href={project.githubLink}
                        rel="noreferrer"
                        target="_blank"
                      >
                        View source <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>

          <motion.section
            aria-labelledby="stack-title"
            className="content-section stack-section"
            id="stack"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-title-row">
              <div>
                <p className="eyebrow">04 / TECHNICAL SKILLS</p>
                <h2 id="stack-title">Tools &amp; foundations.</h2>
              </div>
              <p className="stack-intro">
                A growing toolkit spanning software engineering and generative
                AI.
              </p>
            </div>
            <div className="skill-list">
              {skillGroups.map((group, index) => (
                <motion.div
                  className="skill-row"
                  key={group.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <span className="skill-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{group.title}</h3>
                  <ul aria-label={group.title}>
                    {group.skills.map((skill) => (
                      <motion.li
                        key={skill}
                        whileHover={{
                          y: -3,
                          backgroundColor: "#cafc03",
                          color: "#20201e",
                        }}
                      >
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            aria-labelledby="highlights-title"
            className="content-section highlights-section"
            id="highlights"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-title-row">
              <div>
                <p className="eyebrow">05 / ACHIEVEMENTS</p>
                <h2 id="highlights-title">Progress, in practice.</h2>
              </div>
            </div>
            <div className="achievement-grid">
              {achievements.map((achievement, index) => (
                <motion.article
                  className="achievement-card"
                  key={achievement.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                >
                  <span className="achievement-number">{achievement.number}</span>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </motion.article>
              ))}
            </div>
            <div className="certification-row">
              <p className="eyebrow">CERTIFICATIONS</p>
              <span>IBM Certified in Cloud Computing</span>
              <span>IBM Certified in Generative AI</span>
            </div>
          </motion.section>

          <motion.footer
            className="contact-section"
            id="contact"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow">06 / CONTACT</p>
            <h2>
              Let&apos;s build
              <br />
              <span>something useful.</span>
            </h2>
            <div className="contact-bottom">
              <div className="contact-direct">
                <a href="mailto:adarshkumar.stack@gmail.com">
                  adarshkumar.stack@gmail.com
                </a>
                <a href="tel:+917857961079">+91 78579 61079</a>
              </div>
              <nav aria-label="Social links" className="social-links">
                <a
                  href="https://github.com/adarshkumar-stack"
                  rel="noreferrer"
                  target="_blank"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://linkedin.com/12adarshkumar12"
                  rel="noreferrer"
                  target="_blank"
                >
                  LinkedIn ↗
                </a>
              </nav>
            </div>
            <div className="footer-note">
              <span>ADARSH KUMAR SINGH</span>
              <span>FULL-STACK · BACKEND · GENERATIVE AI</span>
              <a href="#">BACK TO TOP ↑</a>
            </div>
          </motion.footer>
        </div>
      </main>
    </MotionConfig>
  )
}
