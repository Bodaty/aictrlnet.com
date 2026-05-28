---
layout: post
title: "Your AI Assistant Has a Ceiling"
date: 2026-04-23
author: Bobby Koritala
categories: [ai, thought-leadership, frankenstein-stack, copilot]
excerpt: "Microsoft Copilot for M365 costs $30 per user per month. For a 1,000-person enterprise, that's $360,000 per year for AI that drafts emails, summarizes meetings, and generates PowerPoint slides. The AI assistant category isn't failing — but it's hitting a ceiling that no amount of feature updates can fix."
series: "The Frankenstein Stack"
series_part: 4
---

## The $30/Month Question

Microsoft Copilot for M365 costs $30 per user per month — on top of existing Microsoft 365 licensing. For a 1,000-person enterprise, that's $360,000 per year for AI that drafts emails, summarizes meetings, and generates PowerPoint slides.

The early results were mixed. Bloomberg reported that some enterprise customers pulled back after initial pilot phases, reducing seat counts rather than expanding. CIO surveys showed satisfaction below expectations. The pattern: impressive in demos, underwhelming in daily use for many tasks, and difficult to justify the ROI at $30/seat when the productivity gains were incremental.

This isn't a Copilot-specific problem. Google Gemini for Workspace faces similar challenges — lower adoption, similar quality concerns, and a smaller enterprise installed base. ChatGPT Enterprise has hundreds of thousands of users but remains primarily a chat interface — powerful for individual tasks, limited for business process orchestration.

The AI assistant category isn't failing. But it's hitting a ceiling that no amount of feature updates can fix — because the ceiling is architectural.

---

## What AI Assistants Do Well

Credit where it's due. AI assistants are genuinely useful for individual productivity:

- **Drafting**: Emails, documents, presentations. Copilot generates a first draft that's often 70-80% of what you need. Huge time saver for knowledge workers.
- **Summarization**: Meeting notes, long email threads, document summaries. This alone justifies the cost for some users.
- **Search**: Finding information across organizational data. "What was the Q3 revenue discussion?" is much faster than searching Outlook and SharePoint manually.
- **Analysis**: Basic data analysis, chart generation, formula writing in Excel.

BCG's research confirmed the pattern: AI assistants deliver real productivity gains — 10-20% for specific tasks — particularly for knowledge workers doing repetitive content creation and information synthesis.

The problem isn't what they do. It's what they can't do.

---

## The Ceiling: From Assistance to Orchestration

AI assistants help individuals with individual tasks. They don't orchestrate multi-step business processes across systems.

Here's the gap:

**What Copilot can do**: Draft an email summarizing a customer complaint, pull data from a SharePoint document, suggest a response template.

**What Copilot can't do**: Receive the complaint from WhatsApp, pull the customer's history from the CRM, check the return policy in the knowledge base, draft the response, route it for manager approval if the refund exceeds $500, execute the refund in the billing system, update the CRM, and send the confirmation — all as one governed workflow.

That second scenario is what enterprises actually need. It's not individual task assistance. It's multi-system, multi-step orchestration with governance at every decision point.

| | AI Assistance (Copilot, Gemini, ChatGPT) | AI Orchestration |
|---|---|---|
| **Scope** | One user + one task + one system | Multi-step process + multiple systems + governance |
| **Who drives** | Human initiates every action | AI initiates, executes, and manages the workflow |
| **Boundaries** | AI helps within the application | Crosses application boundaries |
| **Governance** | No governance beyond vendor guardrails | Inline governance at every decision point |
| **Autonomy** | Vendor-controlled | The AI Dial: configurable autonomy per step |
| **Value** | 10-20% productivity on individual tasks | Entire processes automated end-to-end |

**The ceiling:** No amount of Copilot features bridges this gap. Assistance and orchestration are different architectures.

McKinsey's 2024 global survey found that 72% of organizations had adopted AI in at least one function — but most usage was at the individual task level, not embedded in processes. The ceiling is visible in the data: organizations adopt AI assistants quickly, then stall when trying to move from individual productivity to process transformation.

---

## The Ecosystem Lock-In Problem

The second ceiling is vendor lock-in. Each AI assistant lives inside its vendor's ecosystem:

**Microsoft Copilot** works across Word, Excel, PowerPoint, Outlook, Teams, and SharePoint. Impressive breadth — within Microsoft. But your CRM might be Salesforce. Your project management is Jira. Your financial system is NetSuite. Your customer support is Zendesk. Copilot can't orchestrate across these boundaries.

**Google Gemini for Workspace** works across Gmail, Docs, Sheets, Slides, and Meet. Same story, different ecosystem. Even less enterprise penetration than Microsoft.

**ChatGPT Enterprise** is ecosystem-agnostic but interaction-limited. It's a chat interface. It can help you think and draft, but it doesn't connect to your business systems, trigger workflows, or execute multi-step processes.

The enterprise doesn't live in one vendor's ecosystem. It lives across 300-400+ SaaS applications (per Productiv and Zylo SaaS management data). An AI assistant that only works inside one vendor's suite is helpful for tasks within that suite. It's irrelevant for cross-system business processes.

This is the Frankenstein stack contribution of AI assistants: they handle one layer (individual productivity within one ecosystem) but force the enterprise to add other tools (automation platforms, RPA, custom integrations) for everything else. The AI assistant becomes one more tool in the stack, not a replacement for the stack.

---

## Governance: Whatever the Vendor Decides

The third ceiling is governance. With AI assistants, governance is whatever the vendor decides it should be.

Microsoft determines what Copilot can and can't do. Google determines Gemini's guardrails. OpenAI sets ChatGPT Enterprise's usage policies. The enterprise has limited ability to customize these guardrails to their specific compliance requirements, risk tolerance, or industry regulations.

For example:
- You can't configure Copilot to require manager approval before sending an AI-drafted email to a customer above a certain account value.
- You can't set different autonomy levels for different departments — Marketing at full AI autonomy while Legal requires human review on every output.
- You can't create an audit trail that shows the AI's reasoning, the data it considered, and the policy that applied — because the governance is inside Microsoft's black box.

The AI Dial — configurable, per-task, per-department autonomy that adjusts over time — doesn't exist in the AI assistant model. The vendor sets the dial position. You get what you get.

For regulated industries — financial services, healthcare, insurance — this is a fundamental problem. The EU AI Act requires enterprises to maintain human oversight mechanisms that they control. Relying on a vendor's built-in guardrails, which the enterprise can't audit or customize, may not satisfy regulatory requirements.

---

## The "Copilot Plus Connector" Pattern

Many enterprises hit the AI assistant ceiling and respond by adding an automation platform — Zapier, n8n, Make — to bridge the gap. Copilot handles the individual tasks. The automation platform handles the cross-system workflows.

This is the Frankenstein stack assembling itself in real time:

1. Copilot for individual productivity
2. Zapier/n8n for cross-system automation
3. RPA for legacy systems
4. Governance tool to monitor it all
5. (Eventually) Autonomous agents for complex tasks

Each addition is logical in isolation. Together, they create the five-vendor, five-audit-trail, five-governance-story stack from Part 1 of this series.

The root cause: the AI assistant was never designed to be an orchestration platform. It was designed to help individuals within one vendor's ecosystem. When the enterprise needs more — cross-system workflows, graduated governance, multi-step processes — the AI assistant doesn't scale up. The enterprise scales out, adding tools.

---

## What Enterprises Should Ask

If your organization is using AI assistants — or evaluating expansion — here are the questions:

**What percentage of your AI use is individual tasks vs. process orchestration?** If most of your value comes from "draft this email" and "summarize this meeting," the AI assistant is working. If you need "process this claim end-to-end across four systems with governance," you've hit the ceiling.

**What happens when you need to cross ecosystem boundaries?** Can the AI assistant trigger actions in your CRM, your billing system, your legacy apps? Or do you need another tool for that? Every additional tool is another layer in the Frankenstein stack.

**Who controls the governance?** Can you set different autonomy levels for different departments? Can you require approval workflows for high-risk AI actions? Can you audit the AI's reasoning? If the vendor controls all of this, your governance is someone else's product decision.

**What's the total stack cost?** Not just $30/seat for Copilot — the full cost including the automation platform you added to bridge the gaps, the RPA you kept for legacy systems, and the governance tool you bought to monitor everything. That total is the real cost of the AI assistant ceiling.

The AI assistant isn't the problem. It's a good tool for individual productivity within a single ecosystem. The problem is expecting it to be the enterprise AI strategy when it was never designed for orchestration, governance, or cross-system automation.

---

*This is Part 4 of an 8-part series on The Frankenstein Stack. Next: [Connector Catalogs Are Not AI Platforms](/blog/2026/04/connector-catalogs-are-not-ai/).*

---

**About the author**: Bobby Koritala is the founder of AICtrlNet and HitLai. Previously, he led product development at Infogix (now part of Precisely), building enterprise data integrity platforms for financial services and healthcare. He has spent 10 years building AI systems, including several patented ones.

**References**:
1. McKinsey & Company. "The State of AI in 2024." Global Survey.
2. Bloomberg. Coverage of Microsoft Copilot enterprise adoption and renewal rates, 2024.
3. BCG. "How People Can Create — and Destroy — Value with Generative AI." Research on AI productivity gains.
4. Productiv / Zylo. SaaS management research on enterprise application sprawl.
5. European Parliament. "Regulation (EU) 2024/1689 — Artificial Intelligence Act." August 2024.
