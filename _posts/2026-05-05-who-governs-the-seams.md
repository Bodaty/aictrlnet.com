---
layout: post
title: "Who Governs the Seams?"
date: 2026-05-05
author: Bobby Koritala
categories: [ai, thought-leadership, frankenstein-stack]
excerpt: "Five tools, five audit trails, one failure. A customer claim is approved and paid. Three weeks later, audit discovers the recommendation was based on incomplete data. Which system is accountable? Everyone is right within their silo. The failure happened in the seam between them."
series: "The Frankenstein Stack"
series_part: 7
---

## Five Tools, Five Audit Trails, One Failure

Picture this scenario at a mid-size financial institution:

A customer submits a complex insurance claim. Here's what the Frankenstein stack does:

1. **Copilot** drafts an initial assessment summary based on the claim documents.
2. The summary is passed to an **automation platform** (Zapier/n8n) that routes it to the right department.
3. An **RPA bot** pulls the customer's history from a legacy system that has no API.
4. An **autonomous agent** evaluates the claim against policy rules and generates a recommendation.
5. The **AI governance tool** logs that an AI-generated recommendation was produced.

The claim is approved and paid. Three weeks later, audit discovers the recommendation was based on incomplete data — the RPA bot failed silently on step 3, returning partial records. The autonomous agent didn't know the data was incomplete. The governance tool logged the recommendation but not the data quality issue. The automation platform just passed data through. Copilot's initial summary was fine.

Now: **which system is accountable?**

The governance tool says it logged everything it was configured to monitor. The RPA vendor says the bot executed its script correctly (it did — the legacy system returned partial data). The automation platform says it routed correctly. The agent says it evaluated the data it received.

Everyone is right within their silo. The failure happened in the seam between them.

---

## The Seams Are Where Risk Lives

Every enterprise integration creates a seam — a boundary between systems where data, decisions, and context cross from one vendor's domain to another. In the Frankenstein stack, these seams multiply:

| From | SEAM | To |
|---|---|---|
| Copilot | custom integration | Automation Platform |
| Automation Platform | custom integration | RPA |
| Automation Platform | custom integration | AI Agent |
| AI Agent | custom integration | Governance Tool |

**4 seams in a 5-tool stack.** Each seam is: a custom integration that can break, a governance gap that nobody owns, a context loss where decision rationale disappears, and an audit trail discontinuity. Nobody's job to govern the seams.

The governance tool monitors what happens *inside* the AI tools it knows about. But the decisions that matter — "should this data be trusted?", "is this handoff complete?", "does this agent have the full context?" — happen *between* tools. In the seams.

---

## Three Kinds of Seam Failures

### 1. Context Loss

When a decision crosses from one system to another, context gets stripped. The automation platform passes a data payload to the AI agent, but the payload doesn't include *why* Copilot flagged the claim as complex, or *which* policy rules the human reviewer was concerned about. The agent makes a decision without the full picture — and nobody knows context was lost, because nobody's monitoring the seam.

In a unified system, context travels with the decision through every step. In the Frankenstein stack, each handoff is a lossy compression.

### 2. Silent Failures

The RPA bot in the scenario above didn't throw an error. It returned data — just not all of it. The legacy system timed out on a query and returned a partial result set. The bot faithfully passed that partial data along. No alert. No flag. No governance event.

Silent failures at seams are the most dangerous because they look like success. Every system reports healthy. Every action logged. The failure only surfaces weeks later when a human catches the downstream consequence.

### 3. Accountability Gaps

When an outcome involves five systems, accountability diffuses. The CISO asks "how did this happen?" and gets five vendor-specific answers that each explain their piece but none explain the whole. The incident response becomes a forensic exercise in stitching together five audit trails that were never designed to correlate.

The EU AI Act (Article 14) requires human oversight of high-risk AI systems. But which system in the Frankenstein stack is "the AI system"? The governance tool? The autonomous agent? The automation platform that orchestrated the workflow? When regulators ask "who was responsible for this AI decision?", the answer can't be "five vendors, collectively, sort of."

---

## The Integration Tax

Beyond governance gaps, the Frankenstein stack imposes a compounding maintenance burden:

**Custom integrations between every layer.** Each connection between vendors is a custom integration — API calls, data transformations, authentication handshakes. When any vendor updates their product, the integrations can break. A team of engineers whose full-time job is keeping the stitches intact.

**Version coupling.** When the governance vendor releases a new API version, does the automation platform still connect? When the RPA vendor changes their bot execution model, does the orchestration layer still trigger correctly? Every vendor moves at their own pace, and the enterprise absorbs the coordination cost.

**Testing the whole stack.** Each vendor tests their own product. Nobody tests the assembled stack end-to-end. The enterprise has to build and maintain integration test suites that span all five systems — or accept that they're flying without a net at the seams.

Research consistently shows that integration costs consume a disproportionate share of enterprise IT budgets. When the integration is between five AI/automation vendors — each with their own data models, authentication schemes, and governance assumptions — the cost compounds.

---

## Why a Governance Tool Can't Fix This

The instinct is to put the governance vendor in charge of the seams. "That's what we bought them for — govern everything."

But governance tools are designed to monitor AI behavior within their configured scope. They observe model outputs, flag anomalies, generate compliance reports. They're not designed to:

- **Validate data completeness at handoff points** between systems
- **Maintain decision context** across vendor boundaries
- **Enforce policies at the execution boundary** of an agent operating inside a different vendor's framework
- **Correlate audit trails** across five different logging formats with five different schemas

A governance tool monitoring the Frankenstein stack from the outside is like a security camera watching a building with five different lock systems — it can record what happens, but it can't prevent a failure that occurs in the handshake between two systems it doesn't control.

---

## The Alternative: One Execution Path, One Governance Layer

The seam problem disappears when there's one system instead of five.

When the same platform that orchestrates the workflow also:
- Executes the AI actions
- Processes the documents
- Handles the legacy system interaction (through browser automation or API)
- Evaluates every action against governance policies before it executes
- Logs every decision with full context

...there are no seams. No handoffs between vendors. No context loss at boundaries. No silent failures in custom integrations. No accountability gaps when something goes wrong.

One execution path means one audit trail. One governance layer means every action — whether it's an AI decision, a document extraction, a legacy system interaction, or a human approval — is evaluated through the same policy engine with the same context.

The AI Dial works because it's one dial for the whole system, not five dials for five systems that nobody calibrates together.

---

## The Real Question for Enterprise IT Leaders

If you're assembling — or have already assembled — a Frankenstein stack, here are the questions worth asking:

**Who owns the seams?** Not who owns each tool — who owns the spaces between them? Who's accountable when a failure crosses vendor boundaries?

**Can you reconstruct a decision end-to-end?** If a customer complaint leads to a regulatory inquiry, can you show the full decision chain — from initial data to final action — in a single, coherent audit trail? Or do you need to stitch together five vendors' logs?

**What's your integration maintenance budget?** Not the vendor licenses — the engineers keeping the connections alive. That number tends to grow faster than anyone expects.

**Is the assembled stack simpler than a unified platform would be?** Five vendors, each simple individually, can produce a system that's far more complex than one platform that handles multiple layers. Complexity hides at the boundaries.

The Frankenstein stack looks rational in procurement — each vendor won their category evaluation. But the system-level costs — governance gaps, integration tax, accountability diffusion, silent seam failures — often exceed the cost of any individual vendor.

The question isn't whether each tool is good at its job. It's whether five good tools make a good system.

---

*This is Part 7 of an 8-part series on The Frankenstein Stack. Next: [One Platform, One AI Dial](/blog/2026/05/one-platform-one-ai-dial/).*

---

**About the author**: Bobby Koritala is the founder of AICtrlNet and HitLai. Previously, he led product development at Infogix (now part of Precisely), building enterprise data integrity platforms for financial services and healthcare. He has spent 10 years building AI systems, including several patented ones.

**References**:
1. European Parliament. "Regulation (EU) 2024/1689 — Artificial Intelligence Act." Article 14: Human Oversight. August 2024.
2. Gartner. "Top Strategic Technology Trends 2024: AI TRiSM." October 2023.
3. NIST. "AI Risk Management Framework (AI RMF 1.0)." January 2023.
