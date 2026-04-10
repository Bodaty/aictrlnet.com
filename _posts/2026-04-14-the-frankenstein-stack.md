---
layout: post
title: "The Frankenstein Stack: How Enterprises Are Assembling AI Wrong"
date: 2026-04-14
author: Bobby Koritala
categories: [ai, thought-leadership, frankenstein-stack]
excerpt: "Five categories. Five vendors. Five governance stories. Five audit trails. Nobody planned this stack. It assembled itself — one procurement decision at a time, each solving the problem in front of it, none considering how it would all work together."
series: "The Frankenstein Stack"
series_part: 1
---

## The Stack Nobody Planned

I recently had a conversation with an enterprise IT leader at a mid-size bank. Over the past year, his team had:

- Signed a contract with an **AI governance vendor** to monitor and audit their AI tools
- Maintained a legacy **RPA platform** for structured process automation
- Rolled out **Microsoft Copilot** across several departments
- Evaluated **three automation platforms** for workflow orchestration
- Started exploring **autonomous AI agents** for customer-facing use cases

Five categories. Five vendors. Five governance stories. Five audit trails.

Nobody planned this stack. It assembled itself — one procurement decision at a time, each solving the problem in front of it, none considering how it would all work together.

He called it "the Frankenstein stack." The name stuck.

---

## How We Got Here

Enterprise AI adoption didn't happen as a coordinated strategy. It happened in waves:

**Wave 1 (2020-2022): RPA.** Automate the structured, repetitive stuff. Screen scraping, data entry, report generation. UiPath, Blue Prism, Automation Anywhere. The promise: "automate manual processes." The reality: brittle scripts that break when a UI changes, expensive to maintain, and no intelligence — just rote execution.

**Wave 2 (2022-2023): AI Assistants.** Microsoft Copilot, Google Gemini, ChatGPT Enterprise. Drop AI into the tools people already use. The promise: "AI for everyone." The reality: locked into one vendor's ecosystem, limited to what that vendor decides AI should do, and no workflow orchestration across systems.

**Wave 3 (2023-2024): Automation Platforms.** Zapier, n8n, Make. Connect everything with workflows. The promise: "automate anything." The reality: connector catalogs, not AI platforms. They move data between apps but don't make decisions, don't govern actions, and adding "AI actions" to a connector catalog doesn't make it intelligent.

**Wave 4 (2024-2025): AI Governance.** The audit and compliance response. SurePathAI, Holistic AI, Credo AI, ModelOp. The promise: "govern your AI." The reality: monitoring layers that observe AI behavior from the outside but don't do any work themselves. Bolt-on governance — the exact pattern that cost the data quality industry trillions.

**Wave 5 (2025-2026): Autonomous Agents.** OpenClaw, Perplexity Computer, CrewAI, LangChain agents. AI that acts independently. The promise: "agents that do the work." The reality: full autonomy with minimal governance guardrails. The opposite extreme from the governance vendors — all action, no oversight.

Each wave solved a real problem. And each wave created a new procurement decision that didn't consider the decisions that came before.

<div class="mermaid">
graph TD
    subgraph stack["THE FRANKENSTEIN STACK"]
        A["AI Governance<br/>(monitors)"]
        B["RPA<br/>(scripts)"]
        C["Copilot<br/>(assistant)"]
        D["Automation<br/>(connectors)"]
        E["Autonomous Agents"]
    end

    style A fill:#f9f,stroke:#333
    style B fill:#bbf,stroke:#333
    style C fill:#bfb,stroke:#333
    style D fill:#fbf,stroke:#333
    style E fill:#ff9,stroke:#333
    style stack fill:none,stroke:#999,stroke-dasharray: 5 5

    F["5 vendors. 5 governance stories. 5 audit trails.<br/>Zero unified view. Nobody governing the seams."]
    stack ~~~ F
</div>

---

## The Cost of the Frankenstein Stack

The visible costs are obvious: five vendor contracts, five implementation projects, five support relationships, five sets of training.

But the invisible costs are worse.

**Integration tax.** Every time data or a decision moves between systems, someone has to build and maintain the connection. The RPA bot extracts data, passes it to the automation platform, which triggers a Copilot action, which the governance tool monitors — each handoff is a custom integration that breaks when any vendor updates their product.

**Governance gaps at the seams.** The AI governance tool monitors the AI tools. But who monitors the RPA? Who governs the handoff between the automation platform and the autonomous agent? Who audits the decision that started in Copilot, was executed by RPA, and was logged by the governance tool? Each vendor governs its own silo. The spaces between silos are ungoverned.

**Conflicting audit trails.** When something goes wrong — and it will — which system's logs do you trust? The governance tool says the action was approved. The automation platform says it was executed. The RPA bot says it completed. But the customer got the wrong result. Reconciling five audit trails to understand one failure is the data quality problem all over again.

**Shadow AI proliferating in the gaps.** When the official stack is too complex to use for everyday tasks, people route around it. They use ChatGPT directly. They build their own automations. They copy-paste between systems. The Frankenstein stack creates the very shadow AI problem the governance tool was bought to prevent.

Gartner's research on AI TRiSM (Trust, Risk, and Security Management) identified this pattern: organizations that treat AI governance as a separate tooling layer — rather than building it into the operational platform — see governance gaps multiply with each new AI capability they adopt.

---

## Why It Keeps Happening

The Frankenstein stack assembles itself for three reasons:

**1. Category-based procurement.** Enterprises buy by category. "We need RPA" → evaluate RPA vendors. "We need AI governance" → evaluate governance vendors. Each buying decision is rational in isolation. But nobody evaluates the whole stack as a system.

**2. Different buyers for each layer.** IT security buys the governance tool. Operations buys the RPA. The CTO's office approves Copilot. Marketing buys the automation platform. Each buyer solves their own problem. Nobody owns the seams between them.

**3. Vendor incentives.** Every vendor wants to own their layer. The governance vendor doesn't want to be a feature of the automation platform. The RPA vendor doesn't want to be displaced by AI agents. The automation platform doesn't want to build governance. Each vendor's incentive is to grow their layer, not to make the whole stack simpler.

The result: an enterprise that wanted "AI-powered operations" ends up with five vendors, five contracts, five audit trails, and a growing team whose job is keeping the Frankenstein stack stitched together.

---

## The Question Nobody's Asking

Every one of these tools was evaluated against competitors in its own category. UiPath was compared to Blue Prism. Copilot was compared to Gemini. The governance vendor was compared to other governance vendors.

But nobody asked: **"Could one platform handle more than one of these layers?"**

That's the question this series explores.

Over the next seven articles, I'll look at each layer of the Frankenstein stack — AI governance, RPA, AI assistants, automation platforms, and autonomous agents — and examine what each does well, where each falls short, and what happens in the gaps between them. Then I'll make the case for a different approach: a unified orchestration layer where the AI does the work and governance is built into how it operates.

Not five vendors. Not five audit trails. One platform. One AI Dial.

---

*This is Part 1 of an 8-part series on The Frankenstein Stack. Next: [Bolt-On Governance Is Expensive Observation](/blog/2026/04/bolt-on-governance/).*

---

**About the author**: Bobby Koritala is the founder of AICtrlNet and HitLai. Previously, he led product development at Infogix (now part of Precisely), building enterprise data integrity platforms for financial services and healthcare. He has spent 9+ years building AI systems, including several patented ones.

**References**:
1. Gartner. "Top Strategic Technology Trends 2024: AI TRiSM (Trust, Risk and Security Management)." October 2023.
2. Gartner. "Magic Quadrant for Robotic Process Automation." Various years.
3. McKinsey & Company. "The State of AI in 2023: Generative AI's Breakout Year." August 2023.
4. NIST. "AI Risk Management Framework (AI RMF 1.0)." January 2023.
