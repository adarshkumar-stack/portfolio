import type { Project } from "../data/projects"

export default function ProjectVisual({
  visual,
}: {
  visual: Project["visual"]
}) {
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
