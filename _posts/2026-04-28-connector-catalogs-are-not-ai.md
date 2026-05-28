---
layout: post
title: "Connector Catalogs Are Not AI Platforms"
date: 2026-04-28
author: Bobby Koritala
categories: [ai, thought-leadership, frankenstein-stack, automation]
excerpt: "Zapier boasts over 7,000 app integrations. Make has 1,500+. n8n has 400+ nodes and growing. These are impressive numbers. They're also the wrong metric. The number of connectors tells you how many apps the platform can connect to — it tells you nothing about what the platform can think about."
series: "The Frankenstein Stack"
series_part: 5
---

## 7,000 Connectors and Still Not Enough

Zapier boasts over 7,000 app integrations. Make (formerly Integromat, acquired by Celonis for ~$1.45 billion) has 1,500+. n8n, the open-source alternative, has 400+ nodes and growing.

These are impressive numbers. They're also the wrong metric.

The number of connectors tells you how many apps the platform can *connect to*. It tells you nothing about what the platform can *think about*. And that's the gap that connector catalogs are trying to close with "AI features" — and failing.

---

## The Architecture of a Connector Catalog

Zapier, Make, and n8n share the same fundamental architecture: **trigger → action chains.** Something happens in App A (trigger), the platform moves data to App B (action). You can chain multiple steps, add filters and conditional logic, and build surprisingly complex workflows.

But the intelligence in these workflows is entirely pre-defined by the human who built them. The workflow doesn't understand what it's doing. It doesn't make decisions. It doesn't handle exceptions it wasn't programmed for. It moves data along a path that a human mapped in advance.

| Step | Type | What Happens |
|---|---|---|
| 1 | **Trigger** | New email arrives |
| 2 | **Filter** | If subject contains "invoice" |
| 3 | **Action** | Extract attachment |
| 4 | **Action** | Send to Google Sheets |
| 5 | **Action** | Notify in Slack |

*This is a pipeline. It moves data. It doesn't understand the data. It doesn't make decisions. It doesn't govern itself. When it fails, it stops.*

This architecture is powerful for well-structured, predictable workflows. Move new leads from Typeform to Salesforce. Post new blog entries to Twitter. Sync calendar events between platforms.

It breaks down when the workflow requires intelligence — understanding context, making judgment calls, handling the unexpected, governing consequential actions.

---

## The "AI Features" Bolt-On

Every connector catalog is rushing to add AI. Zapier has "AI actions" and an AI chatbot builder. n8n has AI nodes for LLM calls, text classification, and embeddings. Make has AI scenarios.

But adding an AI node to a connector catalog is like putting a jet engine on a bicycle. The AI node can do something intelligent at one step in the chain — summarize text, classify an email, extract entities — but the workflow architecture around it is still a rigid, pre-defined pipeline.

The AI doesn't orchestrate the workflow. The workflow orchestrates the AI. The AI is a tool in the pipeline, not the intelligence driving it.

Here's the difference:

**AI as a node in a connector catalog:**
"When a new email arrives, use GPT to classify it as billing/support/sales, then route it to the right Slack channel."

The human designed the routing logic. The AI just classifies. If the email doesn't fit the three categories, the workflow breaks or routes to a default. No judgment. No escalation. No governance.

**AI-native orchestration:**
"When a new customer interaction arrives — from email, WhatsApp, web chat, or phone — understand the intent, assess the complexity, check the customer's history, determine whether to resolve autonomously or escalate based on the configured autonomy level for this interaction type, execute the resolution within governed boundaries, and log the full decision chain."

The AI *is* the orchestration. It understands context, makes decisions, handles exceptions, and operates within governance guardrails. The workflow adapts to the situation rather than following a rigid path.

That's the difference between a connector catalog with AI features and an AI-native orchestration platform. It's not about the number of integrations. It's about whether intelligence is a feature of the pipeline or the architecture of the system.

---

## Zapier's Pricing Problem

Zapier's business model tells the connector catalog story clearly. They charge based on "tasks" — essentially, the number of times data moves through a workflow step. More volume, higher cost.

In 2023-2024, Zapier restructured pricing in ways that drew significant user backlash — removing features from lower tiers and increasing costs. The community response was vocal: for enterprises with high-volume workflows, the task-based pricing becomes expensive quickly.

But the deeper problem isn't the price — it's what you're paying for. You're paying per data movement. Per pipeline execution. Per trigger-action step. The cost scales with volume, but the intelligence doesn't scale at all. Running the same rigid workflow a million times costs a million times more but delivers zero additional insight.

An AI-native platform doesn't charge per data movement because the value isn't in moving data — it's in making decisions. Processing a million customer interactions where 600,000 are resolved autonomously, 300,000 are resolved with human review, and 100,000 are escalated — all governed by the AI Dial — is fundamentally different from running a million identical trigger-action chains.

---

## n8n: Better Architecture, Same Gap

n8n deserves separate mention because its architecture is genuinely better than Zapier's for complex workflows. It's self-hostable (important for data-sensitive enterprises), developer-friendly, and capable of sophisticated branching and error handling. The community is strong and the tool is popular for AI-adjacent workflows — chaining LLM calls, processing documents, building agent-like sequences.

But n8n is still a workflow execution engine, not an AI orchestration platform. The AI nodes are nodes in a workflow — tools you wire up, not intelligence that drives the process. And governance is entirely absent: no approval workflows, no audit trails for compliance, no configurable autonomy levels, no AI Dial.

For developers building AI prototypes and internal tools, n8n is excellent. For enterprises that need governed AI orchestration across production systems — with compliance, audit trails, and graduated autonomy — it's a starting point that requires significant custom development to become production-ready.

We actually integrate with n8n — our platform adapter was tested live against a real n8n instance, 6/6 tests passing. n8n is a good workflow engine. But a workflow engine is one component of what enterprises need, not the complete solution.

---

## What's Actually Missing

The gap in connector catalogs isn't the number of connectors. It's four capabilities that are absent from the architecture:

### 1. Intelligence That Drives the Workflow

AI should determine the path, not just execute a step in a pre-defined path. When an exception occurs, the system should decide how to handle it — not fail and create a support ticket. When context matters, the system should use it — not ignore it because the workflow was designed for the average case.

### 2. Governance at Every Step

Consequential actions — approving a refund, sending a customer communication, updating a financial record — need governance. Not a separate governance tool monitoring from outside. Inline evaluation: should this action proceed? Does it require approval? At what autonomy level is this workflow operating?

Connector catalogs have zero governance. Every action in the pipeline executes without evaluation. There's no mechanism to say "auto-approve under $500, require manager approval over $500" — because the platform doesn't have a concept of governed action.

### 3. The AI Dial

Different workflows need different autonomy levels. A lead routing workflow might be fully automated. A customer complaint resolution workflow might require human review at certain steps. A financial processing workflow might need approval for transactions above a threshold.

Connector catalogs offer one mode: automated. The workflow runs or it doesn't. There's no graduated autonomy, no per-step configuration, no ability to increase or decrease human involvement based on the situation.

### 4. Reach Beyond the Connector Catalog

When the app you need isn't in the catalog, you wait. Zapier adds integrations based on demand. n8n depends on community contributions. Make adds to their marketplace over time.

An AI-native platform doesn't wait. Self-extending agents can research an API, generate an integration, validate it, and activate it — in minutes. Browser automation can interact with any web application that has a URL. The integration ceiling doesn't exist.

---

## What This Means for Enterprises

If your organization is using Zapier, Make, or n8n — or evaluating them — they might be the right fit for simple, well-structured automations between mainstream apps. Not everything needs AI-native orchestration.

But ask these questions:

**Do your workflows need to make decisions?** If the workflow encounters an exception, does it need intelligence to handle it — or is "fail and create a ticket" acceptable?

**Do your workflows need governance?** If the workflow processes financial data, customer information, or compliance-relevant actions, does someone need to approve, audit, or configure the autonomy level? Connector catalogs can't do this.

**Are you hitting the integration ceiling?** If you need to connect to an internal tool, a niche SaaS product, or a legacy system without a connector — are you waiting months for the integration to appear? Or do you need it now?

**What's the total cost?** The connector catalog plus the AI tools you added for intelligence plus the RPA for legacy systems plus the governance tool for compliance. That assembled stack might cost more — and deliver less — than a single platform that handles orchestration, intelligence, governance, and reach in one layer.

The connector catalog solved the problem of connecting apps. The next problem — AI-native orchestration with governance — requires a different architecture, not more connectors.

---

*This is Part 5 of an 8-part series on The Frankenstein Stack. Next: [Autonomous Agents Without Guardrails](/blog/2026/04/autonomous-agents-without-guardrails/).*

---

**About the author**: Bobby Koritala is the founder of AICtrlNet and HitLai. Previously, he led product development at Infogix (now part of Precisely), building enterprise data integrity platforms for financial services and healthcare. He has spent 10 years building AI systems, including several patented ones.

**References**:
1. Celonis. "Celonis Acquires Make." Press release, 2022. Reported acquisition price ~$1.45B.
2. Zapier. Pricing page and community forums, 2023-2024. User feedback on pricing changes.
3. n8n. Product documentation and community growth data.
4. McKinsey & Company. "The State of AI in 2024." Global Survey.
