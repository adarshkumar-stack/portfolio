export type Project = {
  title: string
  subtitle: string
  description: string
  highlights: string[]
  techStack: string[]
  githubLink: string
  visual: "payroll" | "routing" | "wallet"
}

export const projects: Project[] = [
  {
    title: "PeoplePay360",
    subtitle: "Payroll & Workforce Management System",
    description:
      "A payroll and workforce management platform for managers and employees.",
    highlights: [
      "Manage payroll records, work schedules, and workforce operations.",
      "Centralizes payroll and scheduling workflows for day-to-day visibility.",
    ],
    techStack: [
      "TypeScript",
      "Next.js",
      "Bun",
      "PostgreSQL",
      "Razorpay Payout API",
      "Grafana",
      "Prometheus",
    ],
    githubLink: "https://github.com/adarshkumar-stack/PeoplePay360",
    visual: "payroll",
  },
  {
    title: "OpenRouter",
    subtitle: "Unified LLM Routing SDK",
    description:
      "A TypeScript SDK concept for routing requests across multiple LLM models and providers through one interface.",
    highlights: [
      "Uses a judge model to help select a model based on the task.",
      "Designed to simplify provider integrations and support cost-aware model selection.",
    ],
    techStack: [
      "TypeScript",
      "Next.js",
      "Bun",
      "PostgreSQL",
      "LLM APIs",
      "Judge-model routing",
    ],
    githubLink: "https://github.com/adarshkumar-stack/openrouter",
    visual: "routing",
  },
  {
    title: "Crypto Web Wallet",
    subtitle: "Non-custodial wallet",
    description:
      "A web wallet for managing cryptographic keys and initiating blockchain transactions.",
    highlights: [
      "Implements wallet operations and transaction validation.",
      "Emphasizes secure key handling and reliable transaction execution.",
    ],
    techStack: [
      "TypeScript",
      "Node.js",
      "web3.js",
      "Rust",
      "Actix Web",
      "Cryptography libraries",
    ],
    githubLink: "https://github.com/adarshkumar-stack/hd-web-wallet",
    visual: "wallet",
  },
]
