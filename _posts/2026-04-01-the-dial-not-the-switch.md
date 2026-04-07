---
layout: post
title: "The AI Dial, Not the Switch: Why AI Autonomy Shouldn't Be Binary"
date: 2026-04-01
author: Bobby Koritala
categories: [ai, thought-leadership, working-with-ai]
excerpt: "Most AI platforms give you two options: off or on. But no organization actually wants binary automation. You want AI to auto-process routine invoices but flag unusual ones. You want AI to respond to simple tickets but escalate complaints. That's not a switch. That's the AI Dial."
series: "Working with AI"
series_part: 3
---

## The Problem Nobody Talks About

Here's a conversation I've had dozens of times:

**CTO**: "We want to automate our claims processing."
**Me**: "All of it? Or parts of it?"
**CTO**: "Well... the routine stuff. Simple claims, auto-adjudicate. Complex ones, we still want human reviewers."
**Me**: "And the ones in between?"
**CTO**: *long pause*

That pause is where most AI projects stall. Not because the technology can't handle the task, but because the infrastructure doesn't support the nuance.

The CTO knows exactly what they want: AI handles the straightforward cases, humans handle the complex ones, and there's a rational process for everything in between. But the tools they're evaluating offer two modes: on or off. Automated or manual. The switch.

What they need is a dial.

---

## Why "On or Off" Doesn't Work

Parasuraman, Sheridan, and Wickens published a foundational paper in 2000 that defined 10 levels of automation — from "the human does everything" to "the computer decides everything, acts autonomously, ignores the human." Their research across aviation, process control, and military systems produced a critical finding: **the optimal level of automation is different for different functions within the same system.**

A pilot might want full automation for maintaining altitude (Level 9) but manual control for landing in crosswinds (Level 2). An air traffic controller might want automated conflict detection (Level 8) but human decision-making on rerouting (Level 4).

The same system needs different autonomy levels for different tasks. This isn't a preference — it's a design requirement. The research showed that forcing a single automation level across all functions led to either complacency (over-automation) or fatigue (under-automation). Both degraded performance.

The automotive industry internalized this. SAE J3016 defines six levels of driving automation (0-5), and nobody thinks it's strange that a car might be Level 2 on highways and Level 0 on a dirt road. The level matches the context.

Business AI hasn't caught up. Most platforms still offer Level 0 or Level 5 with nothing in between.

---

## What the AI Dial Actually Looks Like

Lee and See's comprehensive review of trust in automation ("Trust in Automation: Designing for Appropriate Reliance," Human Factors, 2004) identified the core design challenge: the goal isn't maximum automation or minimum automation. It's *calibrated* automation — where the level of AI autonomy matches the AI's actual reliability in that specific context.

Calibrated automation means the AI Dial has multiple positions, and you set it per task:

```
┌─────────────────────────────────────────────────────────────────┐
│                    THE AUTONOMY DIAL                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1          2          3          4          5          6        │
│  │──────────│──────────│──────────│──────────│──────────│        │
│  ▼          ▼          ▼          ▼          ▼          ▼        │
│                                                                  │
│  SHOW ME    SUGGEST    DO IT,     DO IT,     ANTICIPATE  JUST   │
│             TO ME      I'LL       ASK ME     MY NEEDS    RUN    │
│                        CHECK      SOMETIMES              IT     │
│                                                                  │
│  AI shows   AI         AI acts,   AI learns   AI acts    Full   │
│  insights.  recommends.human      preferences,proactively.auto. │
│  Human      Human      approves   reduces     Predicts   Human  │
│  does all.  decides.   before     approval    needs.     reviews│
│                        action.    frequency.             only   │
│                                                          excep- │
│                                                          tions. │
│                                                                  │
│  ◄─── Lower risk, more human ──── Higher trust, more AI ───►   │
│                                                                  │
│  EXAMPLE: Claims processing at a mid-size insurer               │
│                                                                  │
│  Auto-deny  Route to    Auto-pay    Auto-pay    Predict    Full │
│  obviously  reviewer    under $500  under $5K   fraud      auto │
│  fraudulent with AI     with daily  with weekly before it  with │
│  claims.    summary.    batch       spot-check. happens.   human│
│                         review.                            audit│
│                                                            only.│
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

The key insight: these aren't six products or six configurations. They're six positions on *the same AI Dial* — and different tasks within the same organization sit at different positions simultaneously.

---

## The Companies That Got the AI Dial Right

**Stitch Fix** built their entire business model on calibrated automation. Their AI processes millions of data points to select candidate clothing items, but human stylists make the final curation decision. Over the years, more of the initial filtering has been automated as the algorithms demonstrated reliability, but the final human touch has remained — because that's where the AI's accuracy drops and human judgment adds the most value.

The AI Dial position shifted over time. Early on, humans were deeply involved in every step. As the AI proved itself on specific sub-tasks (size prediction, style clustering), those sub-tasks moved toward higher autonomy. Other sub-tasks (occasion matching, personal context) stayed human-led. Same system, multiple AI Dial positions, adjusted based on demonstrated performance.

**Google Search** has incrementally increased AI's role over two decades: from PageRank (algorithmic, rule-based) to RankBrain (2015, ML for ~15% of queries) to BERT (2019, understanding intent) to MUM (2021, multimodal understanding). Each step increased AI autonomy *gradually*, with human quality raters continuously evaluating outputs. They didn't flip a switch from manual to AI. They turned the AI Dial, one notch at a time, validating at each step.

**JPMorgan's COiN** started with AI extracting specific clause types from loan documents — tasks where accuracy was measurable and errors were catchable. As the system demonstrated reliability on simple clauses, it was given more complex extraction tasks. The human review shifted from "check everything" to "check flagged items" to "spot-check monthly." The AI Dial moved based on evidence, not desire.

---

## The Companies That Flipped the Switch

The failures are equally instructive.

**Zillow Offers**: Switch flipped to full autonomy on home purchasing. No graduated ramp-up per market condition, no different autonomy levels for different price ranges or regions. $304 million loss.

**Knight Capital**: Switch flipped on a new trading algorithm. No staged rollout, no human checkpoint at scale, no mechanism to dial back when behavior deviated from expectations. $440 million loss in 45 minutes.

**Microsoft Tay**: Switch flipped on a conversational AI in an adversarial environment. No graduated exposure, no content review at intermediate autonomy levels. Shut down in 16 hours.

In every case, the organization had the technology to automate. What they lacked was the infrastructure to *graduate* automation — to start at position 2 on the AI Dial, observe performance, and move to position 3 only when the evidence supported it.

---

## Why the Infrastructure Matters More Than the Model

The NIST AI Risk Management Framework (AI RMF 1.0, January 2023) explicitly advocates for proportional governance — where the level of oversight scales with the risk profile of the AI application. This isn't "more governance is better." It's "matched governance is better." Low-risk tasks get light oversight. High-risk tasks get heavy oversight. The framework scales with the context.

The EU AI Act (Regulation 2024/1689) took the same approach: risk-based requirements where governance obligations scale with the AI system's risk level. Unacceptable risk is prohibited. High risk requires conformity assessments and human oversight. Limited risk requires transparency obligations. Minimal risk requires nothing beyond existing law.

Both frameworks assume something that most platforms don't deliver: **the ability to set different autonomy and oversight levels for different AI applications within the same organization.**

This is the infrastructure gap. It's not that organizations don't know they want the AI Dial. It's that most tools don't give them one. So they're forced into a binary: automate fully and accept the risk, or keep humans involved in everything and accept the inefficiency.

```
┌─────────────────────────────────────────────────────────────────┐
│                 WHAT MOST PLATFORMS OFFER                        │
│                                                                  │
│            OFF ──────────────────────────── ON                  │
│             │                                │                   │
│             ▼                                ▼                   │
│        Manual process                  Full automation          │
│        (no AI value)                   (full AI risk)           │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│                 WHAT ORGANIZATIONS NEED                          │
│                                                                  │
│        1 ──── 2 ──── 3 ──── 4 ──── 5 ──── 6                   │
│        │      │      │      │      │      │                     │
│        ▼      ▼      ▼      ▼      ▼      ▼                    │
│      Show   Suggest  Human  Smart  Proact- Full                │
│      me     to me    approves escal- ive    auto               │
│                              ation                              │
│                                                                  │
│  Per task. Per team. Per workflow. Adjustable over time.        │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## What This Means for Your AI Strategy

If your organization is evaluating AI platforms, or stuck in pilot mode trying to figure out how to scale, the question isn't "should we automate?" It's:

**Can we set different autonomy levels for different tasks?**

Can your finance team auto-process invoices under $500 while requiring human approval above $10K? Can your support team auto-respond to Tier 1 while escalating Tier 3? Can your sales team let AI handle lead scoring while keeping pricing decisions human? All within the same platform?

If the answer is "we'd need different tools for different autonomy levels," you don't have the AI Dial. You have multiple switches. And managing multiple switches across an organization doesn't scale.

**Can the AI Dial move over time?**

Can you start with AI suggesting and gradually shift to AI acting as it demonstrates reliability? Can you pull back autonomy on a specific task without disrupting everything else? Can the system track what the AI got right and what it got wrong, so you have evidence for when to turn the AI Dial?

**Can different teams have different settings?**

Can Marketing run at position 5 while Legal runs at position 2? Can the same workflow have different autonomy levels for different step types? Can you set a policy that says "auto-approve under these conditions, escalate under those conditions"?

The technology to answer "yes" to all three exists. The question is whether your platform supports it — or whether you're stuck with a switch.

---

*This is Part 3 of a 4-part series on Working with AI. Next: [When You Work With AI Well, Governance Takes Care of Itself](/blog/2026/04/governance-takes-care-of-itself/).*

---

**References**:
1. Parasuraman, R., Sheridan, T.B., and Wickens, C.D. "A Model for Types and Levels of Human Interaction with Automation." IEEE Transactions on Systems, Man, and Cybernetics, 2000.
2. Lee, J.D. and See, K.A. "Trust in Automation: Designing for Appropriate Reliance." Human Factors, Vol. 46, No. 1, 2004, pp. 50-80.
3. SAE International. "J3016: Taxonomy and Definitions for Terms Related to Driving Automation Systems for On-Road Motor Vehicles."
4. National Institute of Standards and Technology. "AI Risk Management Framework (AI RMF 1.0)." January 2023.
5. European Parliament. "Regulation (EU) 2024/1689 — Artificial Intelligence Act." August 2024.
6. Dell'Acqua, F., et al. "Navigating the Jagged Technological Frontier." Harvard Business School Working Paper 24-013, September 2023.
