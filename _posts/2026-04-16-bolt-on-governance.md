---
layout: post
title: "Bolt-On Governance Is Expensive Observation"
date: 2026-04-16
author: Bobby Koritala
categories: [ai, thought-leadership, frankenstein-stack, ai-governance]
excerpt: "The AI governance market is booming. Credo AI has raised over $25 million, Arthur AI over $60 million. The market exists for a real reason — but the approach is backwards. Governance that monitors AI after the fact is the same architecture that failed in data quality for two decades."
series: "The Frankenstein Stack"
series_part: 2
---

## A Growing Market for a Backwards Approach

The AI governance market is booming. Credo AI, founded by former Microsoft VP Navrina Singh, has raised over $25 million to build what they describe as a "system of record" for AI governance. Arthur AI, founded by former Capital One VP Adam Wenchel, has raised over $60 million for AI observability and monitoring. Holistic AI, born out of UCL research, is conducting bias audits for enterprises navigating NYC Local Law 144 and the EU AI Act. ModelOp, SurePathAI, Monitaur, ValidMind — the list of vendors grows every quarter.

Gartner formalized the category with their AI TRiSM framework (Trust, Risk, and Security Management), predicting that organizations operationalizing these principles would see significantly better AI adoption outcomes by 2026. The EU AI Act, taking effect in phases through 2025-2027, is the regulatory accelerant driving procurement.

The market exists for a real reason: enterprises are deploying AI faster than their governance practices can keep up. Shadow AI — employees using ChatGPT, Claude, and other tools without IT approval — affects over 50% of organizations according to multiple enterprise surveys. The demand for governance is genuine.

But here's the problem: **the approach is backwards.**

---

## What Governance Vendors Actually Do

Strip away the marketing and most AI governance platforms do three things:

1. **Monitor.** Observe what AI models are doing — track outputs, detect drift, flag anomalies.
2. **Audit.** Generate compliance documentation — model cards, risk assessments, bias reports.
3. **Report.** Dashboard the results for compliance teams, regulators, and executives.

These are valuable activities. The problem isn't what they do. The problem is **where they sit in the architecture.**

| Step | What Happens | Timeline |
|---|---|---|
| **AI System** makes a decision | Action executes immediately | Real-time |
| Logs and metadata sent to **Governance Tool** | Tool receives data after the fact | Minutes to hours |
| Governance tool flags anomalies | Team reviews flagged items | Days |
| Compliance report generated | Report delivered to stakeholders | Weeks |

*The action has already happened by the time governance observes it.*

The governance tool sits *outside* the AI system. It receives logs, metadata, and outputs *after* the AI has already acted. It can tell you what happened. It can flag what went wrong. But it cannot prevent a bad action from executing.

This is the same architecture that failed in data quality for two decades — and I wrote about that pattern in detail in my [previous series](/blog/2026/04/ive-seen-this-movie-before/). Inspect after the fact. Generate reports. Fix the damage downstream. The 1-10-100 rule applies: $1 to prevent, $10 to correct, $100+ when the failure propagates.

Bolt-on AI governance is operating at the $10 level.

---

## The Three Failures of Bolt-On Governance

### 1. It Can't Prevent — Only React

Knight Capital lost $440 million in 45 minutes from an automated trading error. No external monitoring layer could have intervened fast enough. The error was in the execution path — and governance needed to be there too.

AI agents make decisions in milliseconds. A customer service agent crafts and sends a response. A claims processing system approves a payment. A document extraction pipeline feeds data into a downstream decision. By the time an external governance tool flags an anomaly, the action has already been taken.

Enterprise governance vendors acknowledge this implicitly in their architecture — they focus on monitoring and auditing, not prevention. Arthur AI's "Shield" product for LLMs moves closer to inline, but it's a guardrail for a single model, not governance across an orchestrated workflow.

The EU AI Act (Article 14) requires human oversight mechanisms for high-risk AI systems — mechanisms that can "intervene in the operation of the high-risk AI system or interrupt the system." A quarterly compliance dashboard from a governance tool does not satisfy this requirement. Inline evaluation — allow, deny, or escalate before the action proceeds — does.

### 2. It Loses Context

When a governance tool observes an AI output from outside, it sees *what* happened but not *why*. What data did the model consider? What alternatives were evaluated? What confidence level did it have? What was the user's intent?

This is the difference between a security camera and a security guard. The camera records what happened. The guard — who's in the room, with context — can decide whether to intervene in real time.

Governance tools operating from outside the execution path are cameras. They can record and replay. But governance that's built into the execution path has full context — the input, the reasoning, the confidence, the policy that applies — and can make inline decisions.

### 3. It Creates a Governance Tax

When governance is a separate initiative, it competes with productivity. Every governance requirement is perceived as friction — another platform to log into, another review process, another compliance report to generate.

The result: teams route around governance. They use AI tools that aren't monitored. They skip the audit process when deadlines are tight. The governance tool generates beautiful dashboards showing the AI it can see — while shadow AI proliferates in the systems it can't.

Gartner's research on shadow AI found this pattern across enterprises: the more burdensome the governance process, the more employees work around it. Governance that's built into the operational platform doesn't have this problem — you can't route around governance that's in the execution path.

---

## What "Good at Governance" Actually Looks Like

The governance vendors aren't wrong about what needs to happen. The model should be monitored. Bias should be detected. Compliance should be documented. Audit trails should exist.

They're wrong about *where* it should happen.

Governance that works is:

**Inline, not aftermarket.** Every AI action is evaluated against policies *before* it executes. Not monitored after the fact. The evaluation happens in the same system that does the work, with the same context, at the same speed.

**Proportional, not uniform.** Not every AI action needs the same level of oversight. The NIST AI Risk Management Framework explicitly advocates for proportional governance — low-risk tasks get light oversight, high-risk tasks get heavy oversight. A bolt-on governance tool applies the same monitoring to everything because it can't differentiate at the action level. Inline governance can.

**A byproduct, not a project.** When you design AI delegation well — defining which tasks get which autonomy level, building approval workflows for high-risk actions, logging decisions with context — governance emerges naturally. It's not a separate budget line. It's how the system operates.

This is the argument from my [Working with AI series](/blog/2026/03/working-with-ai-not-just-using-it/): governance should be the *outcome* of good delegation, not a separate initiative bolted onto the side.

---

## The Market Incentive Problem

The AI governance vendors have a structural incentive to keep governance separate. Their business model depends on governance being a standalone product — a separate procurement, a separate contract, a separate budget.

If governance were built into the AI platforms themselves — into the orchestration layer, into the execution path — there would be no need for a standalone governance tool. The governance vendors know this, which is why they position as a "horizontal layer" across all AI tools rather than advocating for governance to be embedded in each tool.

This is the same incentive structure that sustained the data quality market for two decades. Standalone data quality tools had every reason to keep quality separate from operational systems. When dbt tests, data observability, and data contracts emerged — building quality *into* the pipeline — the standalone market started consolidating. Gartner retired the standalone Data Quality Solutions Magic Quadrant around 2019 and folded it into broader categories.

The AI governance market will likely follow the same trajectory. The standalone governance tools are solving a real problem with the wrong architecture. The market will consolidate as AI platforms embed governance directly — the same way data integration platforms absorbed data quality.

The question for enterprises is whether they want to spend the next five years on bolt-on governance before learning the lesson — or skip ahead.

---

## What This Means for Enterprises Evaluating Governance

If you're evaluating AI governance vendors, ask these questions:

**Does it prevent or just detect?** Can it stop a bad action before it executes, or does it only flag issues after the fact? If the answer is "we alert your team and they can take corrective action" — that's detection, not prevention.

**Does it have execution context?** When it flags an issue, does it know *why* the AI made that decision — what data, what confidence level, what alternatives? Or does it only see the output?

**Does it create friction or reduce it?** Will your teams use it, or will they route around it? If governance requires a separate login, a separate process, a separate audit — adoption will be a constant battle.

**Is governance the product, or a feature of the platform that does the work?** If you're buying governance separately from the platform that runs your AI, you're building a Frankenstein stack. The governance tool and the AI tool will be stitched together with custom integrations — and the seams will be ungoverned.

Nobody buys airbags from a separate vendor and installs them in their car. The safety is part of the vehicle. AI governance should be part of the AI platform — not a separate purchase from a separate vendor monitored from outside.

---

*This is Part 2 of an 8-part series on The Frankenstein Stack. Next: [RPA Is Running on Borrowed Time](/blog/2026/04/rpa-running-on-borrowed-time/).*

---

**About the author**: Bobby Koritala is the founder of AICtrlNet and HitLai. Previously, he led product development at Infogix (now part of Precisely), building enterprise data integrity platforms for financial services and healthcare. He has spent 10 years building AI systems, including several patented ones.

**References**:
1. Gartner. "Top Strategic Technology Trends 2024: AI TRiSM." October 2023.
2. European Parliament. "Regulation (EU) 2024/1689 — Artificial Intelligence Act." Article 14: Human Oversight. August 2024.
3. NIST. "AI Risk Management Framework (AI RMF 1.0)." January 2023.
4. SEC. "Report on Knight Capital Group LLC's August 1, 2012 Trading Event." October 2013.
5. Redman, T.C. "Bad Data Costs the U.S. $3 Trillion Per Year." Harvard Business Review, September 2016.
