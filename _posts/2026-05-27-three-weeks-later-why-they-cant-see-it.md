---
layout: post
title: "Three Weeks Later: Why They Can't See It"
date: 2026-05-27
author: Bobby Koritala
categories: [ai, thought-leadership, frankenstein-stack, aictrlnet]
excerpt: "I finished the Frankenstein Stack series three weeks ago. The diagnosis held up. The market pattern only accelerated. What I didn't expect: the buyers most equipped to recognize the pattern are the ones least likely to. Six structural reasons why — including Crossing the Chasm and the sunk-cost defense."
series: "The Frankenstein Stack"
series_part: 9
---

## Three Weeks Later

I finished publishing the Frankenstein Stack series three weeks ago. Eight posts over a month, arguing that enterprises were assembling AI wrong — one procurement decision at a time, five vendors deep, with nobody governing the seams. I called it the Frankenstein stack. The name stuck.

The diagnosis held up. The market pattern has only accelerated. While the series was running, Anthropic launched Claude Managed Agents with tool-level approval tiers. AWS shipped Bedrock AgentCore. Databricks made Agent Bricks generally available with multi-agent supervision. Microsoft made Copilot Studio the default agent surface for enterprise. Five layers of the Frankenstein stack now have hyperscaler weight behind them. The integration tax got worse. The seams got wider.

And yet — and this is the part I wasn't expecting — the buyers most equipped to recognize the pattern are the ones least likely to.

I've spent the last sixty days in rooms with Heads of AI, Chief Data Officers, CIOs, AI governance leaders. People whose entire job description, on paper, is to see exactly what the series diagnosed. Most of them can't. Not because they're not smart — most are very smart. Not because the diagnosis is wrong — the diagnosis is more visible now than it was a month ago.

The reason they can't see it is structural. And it's worth naming, because the structure is what's going to govern the next eighteen months of enterprise AI procurement.

---

## What's Happened Since

Four observations on where the market is in late May 2026:

- **The AI assistant ceiling held.** Copilot expanded; the per-seat ROI math hasn't fundamentally changed. Enterprises hit the cross-system ceiling and started layering — Copilot plus a connector platform plus a governance tool plus an agent pilot. Exactly the Frankenstein pattern this series predicted.
- **The governance vendors raised more money and launched more dashboards.** The "monitor AI from outside" architecture is better-funded than ever. The Knight Capital lesson — $440 million in 45 minutes because no external monitor was fast enough to intervene — hasn't reached procurement.
- **The hyperscalers entered the agent layer.** Anthropic Managed Agents. Bedrock AgentCore. Vertex AI Agent Builder. Databricks Agent Bricks. Each one credible. Each one designed to keep customers on one hyperscaler's stack. Each one structurally unable to govern agents running elsewhere.
- **The autonomous-agent narrative got louder.** More C-suite slides used the word "autonomous." The number actually running autonomous agents end-to-end in regulated environments is still very small.

The pattern is more entrenched, not less. So why isn't the diagnosis spreading?

---

## Six Reasons Sophisticated Buyers Can't See It

I want to be careful here. The buyers I'm describing are not naive. Many are former engineers, former operators, former vendor-side product leaders. They read the same research, attend the same conferences, sit on the same panels. The reason the Frankenstein pattern is invisible to them is not ignorance. It's structural — six structures, specifically.

| # | Reason | What's actually happening |
|---|---|---|
| 1 | Vendor-default reflex | Copilot is the procurement-approved hedge — choosing it carries near-zero career risk |
| 2 | Category-shaped procurement | Each AI layer is evaluated against its own quadrant; no quadrant exists for "the whole stack" |
| 3 | Buyer career age | Most "AI leaders" are 18-24 months into roles that didn't exist pre-2023; learning from the vendors selling the stack |
| 4 | "Another tool" reflex | Pattern recognition fires on "new vendor demo" before architectural analysis on "stack-collapsing layer" |
| 5 | Pain hasn't accumulated | Most enterprises at 2-3 AI tools; the seams break loudly at 5+ |
| 6 | Sunk-cost defense | Buyers who already assembled four of the five layers can't accept the diagnosis without re-litigating their own track record |

### 1. The vendor-default reflex

Earlier this spring I attended a CIO panel at an industry conference. The panelists were CIOs running AI portfolios at regulated mid-market enterprises — sharp, experienced people in hard jobs, all of whom I respect. The moderator opened with the question I've now heard at every CIO event this year: *"What's your AI strategy?"*

Every panelist's opening word was the same: *Copilot.*

Then they layered in nuances. *We started with Copilot, now we're piloting agents. Copilot for productivity, Bedrock for back-office. Copilot, then we'll evaluate Salesforce Agentforce next quarter.* The opening word was always the same.

This isn't a Microsoft conspiracy. It's how enterprise procurement works under pressure. When the CFO asks "what's our AI strategy?" and the board asks "are we using AI?", the CIO needs a defensible answer. Copilot is the defensible answer — bundled with M365, security review done, procurement category established. The political risk of choosing it is roughly zero. The political risk of *not* choosing it, in May 2026, is much higher than zero.

So "Copilot" became the AI strategy, the same way "Microsoft Office" became the productivity strategy in 1998. Vendor-default isn't a decision. It's the absence of a decision the buyer can't yet make.

### 2. Category-shaped procurement

A Fortune 500 healthcare payer recently posted a public job for their AI governance team. The role description was thoughtful — accountability for responsible AI, policy authoring, cross-departmental coordination, regulator engagement, framework adoption (NIST AI RMF, ISO 42001).

It was also revealing in what it left out.

There was no mention of cross-system coordination. No mention of the seams between AI systems. No mention of cross-vendor audit, or responsibility for agents the team didn't build, or operational accountability for the integration tax. The role was scoped to the *governance vendor's view of the world* — write policies, run frameworks, generate reports. The job description matched the procurement category.

This is the deepest reason the Frankenstein stack assembles itself. Enterprises evaluate AI in categories that match how vendors sell, not how AI is actually used. Each category has its own analyst quadrant, its own RFP template, its own buying committee. Governance vendors compete against other governance vendors. Automation platforms compete against other automation platforms. AI assistants compete against other AI assistants.

Nobody compares the whole stack — because the whole stack isn't a category. There's no quadrant for "the integrated operation of AI plus humans plus existing systems." So the integrated operation is nobody's job to evaluate. The job description writes itself to fit the analyst quadrant.

### 3. Buyer career age

Most "Heads of AI" and "AI Governance Leaders" I meet today are eighteen to twenty-four months into their roles. Their roles didn't exist before late 2023. Many were promoted from adjacent disciplines — analytics, data governance, security, ops — based on demonstrated capability there, not deep AI background.

This is not a criticism. The roles had to be filled and the talent pool had to come from somewhere. But it has a consequence: the cohort of people whose job title says they own AI is, on average, learning the field as the field is being assembled.

What does learning look like in 2026? Vendor blogs. LinkedIn posts. Hyperscaler conference keynotes. Analyst webinars. The same content layer that's *selling* the Frankenstein stack is also where most of the people responsible for *procuring* the Frankenstein stack are learning about AI.

This produces a specific kind of literacy gap. I routinely meet AI leaders who use *LLM*, *agent*, *orchestration*, and *governance* as roughly interchangeable terms. They know all four matter. They cannot reliably tell you the architectural difference between an LLM call and an agent loop, or between policy applied at runtime versus design-time, or between an orchestration layer and a connector catalog.

When the buyer can't draw the architectural distinctions, the buyer can't see the Frankenstein pattern. The pattern only becomes visible *as* the architectural distinctions — five vendors doing five categorically different things, in five disconnected execution paths.

### 4. The "another tool" reflex

Some of the sharpest people I've shown the platform to have responded with the same sentence. A senior IT leader at a regional bank — someone who reviews AI tools regularly, who's seen everything — sat through an evaluation conversation, watched the demo, and at the end said, *"Looks like another integration we'd have to build."*

I want to be fair to that response. From inside the Frankenstein stack, *every* new vendor is another integration to build. It's a learned reflex, and the reflex is mostly right.

But it's wrong here.

A unification layer doesn't *add* an integration. It collapses several. The bank in question already had Copilot, two automation platforms, an RPA estate, a governance vendor, and an agent pilot. The integration burden was already six layers deep. A unification layer doesn't make that seven. It makes it one — *if* the buyer can see that's what's happening.

The reflex misfires because pattern recognition runs faster than architectural analysis. The buyer recognizes "new vendor demo" before they recognize "the answer to the stack problem they've been complaining about." The recognition fails at the category-shape, not at the substance.

This is, in my experience, the single most common reason sophisticated buyers reject the diagnosis even when they're living its consequences. It is not a product failure. It is a category-recognition failure — and category recognition is the hardest thing to change in B2B enterprise sales.

### 5. The pain hasn't accumulated yet

The Frankenstein stack hurts most at five-plus AI tools in production with a real incident report on the table. That's when the seams become visible — when the customer got the wrong refund, the compliance team got the wrong audit trail, the regulator asked a question that required correlating logs from four vendors and one custom integration.

Most enterprises in May 2026 are not yet at five tools. They are at two to three. Copilot, a pilot of agent X, an automation platform from the previous wave. The pain is real but not acute. The seams exist but haven't broken loudly enough to demand attention.

This is the cruelest of the five structures, because it has to play out in real time. The buyer who can't see the pattern at three tools is the same buyer who *will* see it at six tools, with an incident report in their hand and a board meeting on Friday. The diagnostic clarity arrives after the cost is sunk.

When I started writing this series, I assumed the diagnosis itself would speed up that recognition. It hasn't, in any meaningful number of cases. The series got read, shared, cited — and the same readers went back to their organizations and bought the next vendor in the next category, on the next category-shaped procurement cycle.

### 6. The sunk-cost defense

The first five structures above explain why a buyer who hasn't yet bought the Frankenstein stack might not see it forming. They don't fully explain why a buyer who *has* already assembled four of the five layers can't see it either.

That one is sunk cost.

Once an enterprise has signed the three-year contract with the governance vendor, rolled Copilot to 5,000 seats, built six custom integrations between the automation platform and the CRM, and stood up an AI governance team with five FTEs and a charter — the cost of admitting "we got the architecture wrong" is no longer financial. It's professional.

The CIO who recommended the governance vendor to the board needs that vendor to be the right answer. The Head of AI who hired the governance team needs that team to be necessary, not redundant. The procurement team that ran the eight-month RFP for the automation platform needs that RFP to have been the right exercise. Behavioral economics has a clean name for this — sunk-cost fallacy — and it applies to enterprise architecture decisions as forcefully as it applies to individual choices.

When the diagnosis says *"your stack is structurally wrong and the way forward is to consolidate,"* the buyer who has already spent two years assembling that stack hears something different: *"you wasted two years and millions of dollars, and we'd like you to admit it publicly."* That is not a diagnosis a sunk-cost-defensive buyer can accept without admitting they were wrong. So they reject the diagnosis, often without consciously knowing why. The architecture argument lands as a personal indictment, and the personal indictment is easier to reject than to engage with.

This is the most charitable reading of why even sharp, technically credentialed buyers reject the diagnosis when they have heard it and understood it. They cannot accept it without re-litigating their own track record. The five structural reasons above explain why they can't *see* the pattern; sunk cost explains why, even once they see it, they can't *say* it.

---

## The Crossing the Chasm Frame

Geoffrey Moore named this pattern in 1991. Pragmatist buyers — the dominant cohort in enterprise procurement — do not recognize problems from first principles. They recognize problems from confirmation by other pragmatists they trust. A pattern only becomes a "real problem" once a critical mass of peers in the reference set have publicly admitted to having it.

The implication is uncomfortable. The Frankenstein stack is, in May 2026, sitting in the chasm — not because the diagnosis is wrong, but because no pragmatist in the reference set has yet had the public "we got this wrong, we need to consolidate" moment. The early-adopter buyers who *can* see it from first principles are already on the other side. The pragmatist majority is waiting for permission to see it. They are waiting for a peer at a similarly-sized, similarly-regulated, similarly-cautious enterprise to stand up at a conference and say *"we bought five AI vendors and we're collapsing it to one."*

That conference talk has not happened yet. So the diagnosis remains invisible to the cohort that most needs to see it. Not because they're not paying attention. Because pattern recognition in this cohort requires social confirmation, and the social confirmation has not yet arrived.

It will. In my experience the social-confirmation moment in B2B always arrives — but it arrives twelve to twenty-four months after the early-adopter cohort has already moved. The cost of that lag is paid by the pragmatist majority, in extra vendor contracts and integration debt and incident reports that wouldn't have happened on a unified stack.

---

## The Eighteen-Month Forecast

A year from now — eighteen months at the outside — pragmatist enterprise buyers will be doing a small set of things differently. I'm willing to make this prediction publicly because I'm watching the early-adopter cohort do it already, and the pattern usually crosses the chasm on roughly that timeline.

Here's what will be standard practice by late 2027:

**An honest portfolio audit.** Today, when you ask a CIO how many AI tools are in production, the typical answer is "two or three." The real answer — once you include shadow deployments, departmental tools central IT didn't approve, and embedded AI features inside platforms the enterprise already owns — is typically five to eight. The audit will become standard procurement hygiene. *We do not add the next AI vendor until we know what we already have.*

**The "who governs the seams" question.** Today this question doesn't exist in most RFP templates. By late 2027 it will be a standard requirement: *show us how your tool participates in cross-vendor audit. Show us how an incident report would be assembled across the five vendors in our current stack.*

**Cross-category evaluation.** Today, governance vendors are compared against other governance vendors. By late 2027, a critical mass of buyers will run cross-category evaluations: *show us how one platform handles what these three categories handle separately.* The category-shape of procurement will start to break, because the cost of category-shape will have become visible in the budget line.

**"We use Copilot" as the start, not the end.** Copilot, Gemini, ChatGPT Enterprise will be table stakes — table stakes, not strategies. The real strategy conversation will start one layer up: *given that we use Copilot for individual productivity, what runs the multi-step process work it can't? What audits both as a single trace?* Rare in May 2026. Dominant by late 2027.

**A pragmatist will stand up at a conference.** Someone at a Fortune-500 enterprise will publicly describe what their old five-vendor AI stack looked like, what the consolidation looked like, and what the incident report that drove it contained. After that talk, the chasm closes for the cohort that watches it. After that, the diagnosis becomes a meme. After that, a procurement requirement.

None of this is gloating. It is the standard B2B chasm timing. I am writing it down now so that, eighteen months from now, the buyers who wish they'd moved earlier have a record of when the diagnosis was available.

---

## What I Know From Inside

I built AICtrlNet because I saw this pattern coming, from inside a prior generation of it.

In 2003, the data quality industry was in roughly the position the AI governance industry is in today. Quality was a category. There were quality vendors. Enterprises bought quality tools and bolted them onto data pipelines that hadn't been designed with quality in mind. The vendors monitored the pipelines from outside. They generated reports. They flagged issues after the data had already moved.

The lesson, which the data quality industry paid roughly twenty years and trillions of dollars to learn, was that quality belongs *in* the pipeline, not bolted on from outside. The vendors that survived rebuilt around that lesson. The vendors that didn't were absorbed, repositioned, or quietly wound down.

AI is, structurally, the same category at year two of the same cycle. Most of the same arguments are being made — *governance is its own thing, it should be a separate purchase, the vendor that monitors from outside has the cleanest objectivity.* Most of those arguments are wrong, the same way they were wrong in 2003. They will be unwound in roughly the same way, on roughly the same timeline, with roughly the same number of zeroes attached to the cost of the lesson.

The cycle is going to happen. The only variable is who lives inside it and who watches it from the other side.

Be the person who saw it coming.

Or be the person who has to clean it up.

---

*This is Part 9 / Coda of the Frankenstein Stack series. The original 8-part series ran April–May 2026; this follow-up reflects on the weeks since. Read the series starting with [The Frankenstein Stack: How Enterprises Are Assembling AI Wrong](/blog/2026/04/the-frankenstein-stack/).*

---

**About the author**: Bobby Koritala is the founder of AICtrlNet and HitLai. Previously, he led product development at Infogix (now part of Precisely), building enterprise data integrity platforms for financial services and healthcare. He has spent 10 years building AI systems, including several patented ones.

**References**:
1. Moore, Geoffrey A. *Crossing the Chasm*. HarperBusiness, 1991 (revised 2014).
2. Gartner. "Top Strategic Technology Trends 2024: AI TRiSM." October 2023.
3. McKinsey & Company. "The State of AI in 2024." Global Survey.
4. NIST. "AI Risk Management Framework (AI RMF 1.0)." January 2023.
5. European Parliament. "Regulation (EU) 2024/1689 — Artificial Intelligence Act." August 2024.
6. ISO/IEC 42001:2023. "Artificial intelligence management system."
7. Anthropic. Claude Managed Agents launch announcement, April 2026.
8. Bloomberg. Coverage of Microsoft Copilot enterprise adoption and renewal rates, 2024.
