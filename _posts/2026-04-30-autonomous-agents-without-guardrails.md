---
layout: post
title: "Autonomous Agents Without Guardrails"
date: 2026-04-30
author: Bobby Koritala
categories: [ai, thought-leadership, frankenstein-stack, ai-agents]
excerpt: "The autonomous agent movement represents a fundamentally different philosophy from governance platforms that only monitor, RPA that only scripts, and automation tools that only move data. These are AI systems designed to act independently. The capability is real. The governance is not."
series: "The Frankenstein Stack"
series_part: 6
---

## The Other Extreme

In the previous articles, I examined tools that don't do enough — governance platforms that only monitor, RPA that only executes scripts, automation tools that only move data between connectors.

Now let's look at the opposite problem: **AI that does too much, too freely.**

The autonomous agent movement — OpenClaw, Perplexity Computer, frameworks like CrewAI and AutoGen — represents a fundamentally different philosophy. Instead of tools that require human orchestration, these are AI systems designed to act independently. Navigate websites. Execute code. Make decisions. Take actions.

The capability is real. The governance is not.

---

## The OpenClaw Story

OpenClaw exploded onto the scene as an open-source autonomous AI agent platform. Over 160,000 developers gave it access to their systems — root-level access, in many cases. The agent could browse the web, execute code, manage files, and interact with services autonomously.

Then its creator, Peter Steinberger, joined OpenAI. The move validated the autonomous agent thesis — if OpenAI wanted the person who built this, the paradigm clearly mattered.

But the validation came with a question nobody was answering: **who governs what these agents do?**

OpenClaw had 15+ messaging adapters, broad integration support, and an active community. What it didn't have was:

- Approval workflows before actions execute
- Configurable autonomy levels (it was full autonomy or nothing)
- Audit trails with decision context
- Escalation paths for high-risk actions
- Any mechanism to graduate autonomy based on demonstrated performance

It was a switch, not the AI Dial. And the switch was stuck on "full auto."

For developers experimenting on their laptops, this was fine. For enterprises considering deploying autonomous agents in production — handling customer data, making financial decisions, interacting with external services — "full auto with no governance" is a non-starter.

---

## Perplexity Computer: When Search Becomes Action

Perplexity started as an AI search engine — a better way to find and synthesize information. But their "Computer" product crossed a significant line: from answering questions to **taking actions**.

AI that searches for information is relatively low-risk. AI that navigates your browser, fills out forms, clicks buttons, and executes transactions on your behalf is fundamentally different. The blast radius of a wrong answer in search is "I read incorrect information." The blast radius of a wrong action in computer use is "AI submitted a form with incorrect data to a government agency" or "AI purchased something I didn't authorize."

Perplexity Computer represents the broader trend of AI breaking out of the chat box and into the operating system. Anthropic's computer use, Google's Project Mariner, and similar initiatives are all pushing in the same direction: AI that doesn't just advise but acts.

The capability is impressive. But the governance model for most of these is essentially: **the user watches the screen and hopes the AI does the right thing.**

That's not governance. That's supervision by a human who can't process information as fast as the AI acts.

---

## The Agent Framework Landscape

Beyond individual products, an entire ecosystem of agent frameworks has emerged:

**CrewAI** — Multi-agent orchestration where specialized AI agents collaborate on tasks. Each agent has a role, a goal, and tools. The framework handles agent-to-agent communication. What it doesn't handle: enterprise-grade governance over what each agent decides and does.

**AutoGen (now AG2)** — Microsoft's multi-agent conversation framework. Agents negotiate, plan, and execute through structured dialogues. Powerful for complex reasoning tasks. But the governance model is coded into each conversation — there's no centralized policy engine that evaluates every action before it executes.

**LangChain / LangGraph agents** — The most widely adopted framework for building AI agent applications. Rich tooling, massive ecosystem. But governance is DIY — every team implements their own approval logic, their own audit trails, their own escalation paths. There's no built-in AI Dial.

The common pattern across all of these: **the frameworks optimize for capability, not for governed capability.**

**Agent Frameworks: Capability vs. Governance**

| Framework | Capability | Governance | Quadrant |
|---|---|---|---|
| CrewAI | High | Low | High capability, low governance |
| AutoGen AG2 | High | Low | High capability, low governance |
| LangChain | High | Low | High capability, low governance |
| Perplexity Computer | Very High | Low | High capability, low governance |
| OpenClaw | High | Low | High capability, low governance |
| **Enterprise need** | **High** | **High** | **Where enterprises need to be** |

*Every framework is in the top-left quadrant: high capability, low governance. Enterprises need the top-right.*

---

## Why "Just Add Governance Later" Doesn't Work

The instinct when looking at these frameworks is: "We'll use CrewAI/LangChain for the agents, then add our governance tool on top."

This is the Frankenstein pattern again. And it fails for the same reasons bolt-on data quality failed:

**The speed problem.** Autonomous agents make decisions in milliseconds. A governance layer monitoring from outside can't evaluate and intervene faster than the agent acts. By the time the monitoring tool flags an issue, the agent has already sent the email, submitted the form, or made the API call. Governance needs to be *in* the execution path, not observing from the outside.

**The context problem.** An external governance tool sees what the agent did — but not why. What data did it consider? What alternatives did it evaluate? What confidence level did it have? Without that context, governance becomes pattern-matching on outputs: "this looks unusual, flag it." When governance is inline, the context travels with the decision.

**The scope problem.** The governance vendor monitors the AI tools it knows about. But autonomous agents are designed to discover and use new tools at runtime — self-extending into services, APIs, and websites that didn't exist when the governance tool was configured. How do you monitor an agent that's accessing a service you don't even know it connected to?

**The autonomy problem.** These frameworks have one mode: autonomous. There's no mechanism to say "handle Tier 1 tasks autonomously but escalate Tier 2 for human review." There's no AI Dial — no graduated autonomy that matches different trust levels to different task types. It's full auto or you don't use agents.

---

## The Enterprise Reality

Enterprise AI leaders face a genuine dilemma:

The autonomous agent paradigm is real and valuable. AI that can research, plan, and execute multi-step tasks — navigating systems, processing documents, making decisions — is the future of enterprise operations. Denying this is like denying the internet in 1998.

But deploying these agents in production without governance is reckless. A customer service agent that autonomously resolves complaints is powerful — until it offers a $10,000 refund on a $100 order because it optimized for customer satisfaction without a policy boundary. A financial agent that processes transactions is efficient — until it executes a trade that violates compliance rules because nobody defined the guardrails.

The question isn't whether to use autonomous agents. It's **how to use them with the right level of human involvement for the right tasks at the right time.**

That's the AI Dial — graduated autonomy per task, per agent, per workflow. Some agents at full autonomy for low-risk, well-understood tasks. Some agents at supervised autonomy for higher-risk decisions. Some tasks always requiring human approval.

But most agent frameworks don't give you the AI Dial. They give you a switch. And if the enterprise flips that switch to "full auto" without the governance infrastructure to match, we get the Zillow story again — at scale, across every department, with AI agents that are faster and more confident than any algorithm Zillow ever deployed.

---

## What's Actually Needed

The autonomous agent movement got the capability right. AI should act, not just advise. The work should get done.

What's missing is the orchestration layer that governs how agents act:

- **Pre-execution evaluation.** Before an agent takes an action, evaluate it against policies. Allow, deny, or escalate — resolved before the action proceeds, not flagged after the fact.
- **Per-agent, per-task autonomy.** Different agents operating at different trust levels. The data extraction agent at full autonomy. The customer communication agent at supervised. The financial transaction agent at human-approval-required.
- **Escalation paths.** When an agent encounters something outside its defined scope, it doesn't guess — it routes to a human with the context needed to decide.
- **Audit with context.** Not just what happened, but why — what the agent considered, what it decided, what autonomy level applied, what the outcome was.

This isn't about limiting what agents can do. It's about creating the infrastructure that lets enterprises actually deploy them — at scale, in production, with the confidence that the AI Dial is set to the right position for every task.

Without that infrastructure, autonomous agents remain a developer tool — impressive in demos, too risky for production.

---

*This is Part 6 of an 8-part series on The Frankenstein Stack. Next: [Who Governs the Seams?](/blog/2026/05/who-governs-the-seams/).*

---

**About the author**: Bobby Koritala is the founder of AICtrlNet and HitLai. Previously, he led product development at Infogix (now part of Precisely), building enterprise data integrity platforms for financial services and healthcare. He has spent 9+ years building AI systems, including several patented ones.

**References**:
1. VentureBeat. Coverage of the OpenClaw phenomenon and autonomous agent adoption, 2024-2025.
2. Gartner. "Top Strategic Technology Trends 2024: AI TRiSM." October 2023.
3. NIST. "AI Risk Management Framework (AI RMF 1.0)." January 2023.
4. European Parliament. "Regulation (EU) 2024/1689 — Artificial Intelligence Act." August 2024.
