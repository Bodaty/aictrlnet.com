---
layout: post
title: "I've Seen This Movie Before: What Data Quality Taught Me About AI Governance"
date: 2026-04-08
author: Bobby Koritala
categories: [ai, thought-leadership, working-with-ai, data-quality]
excerpt: "Poor data quality cost the US economy $3 trillion per year. The entire data quality industry existed because enterprises built systems first and bolted on quality later. Now the same pattern is repeating with AI governance — and the costs could be worse."
series: "Working with AI"
series_part: 5
---

## $3 Trillion in Damage, and We're About to Do It Again

In 2016, Thomas Redman published a number in the Harvard Business Review that stopped people in their tracks: poor data quality was costing the US economy approximately $3 trillion per year.

Not billion. Trillion.

The figure came from synthesizing decades of research across industries — financial services, healthcare, retail, government. And while you could argue the methodology, the directional truth was undeniable: enterprises were hemorrhaging money because their data was bad, and the cost of fixing it was staggering.

I didn't need to read that article to believe it. I was living it.

---

## What I Saw at Infogix

I spent years at Infogix — later acquired by Precisely — building enterprise data integrity platforms. Our clients were some of the largest financial institutions and healthcare organizations in the country. And what I saw, over and over, was the same pattern:

1. **Build the operational system.** CRM, claims processing, payment platform, whatever the core system was — it got built with a focus on functionality. Get it running, get it shipped.

2. **Integrate the data.** Connect system A to system B. Build the data warehouse. Start the analytics program. And then...

3. **Discover the data is terrible.** Duplicates. Missing fields. Format mismatches. Records that made it from point A to point B with values changed, lost, or corrupted along the way.

4. **Bolt on a data quality solution.** Bring in Informatica, or Trillium, or Infogix, or IBM's QualityStage. Spend millions on tools that inspect, profile, cleanse, and reconcile data *after the fact*.

This was the entire business model for a multi-billion dollar industry. The data quality tools market grew to an estimated $2-3 billion by the late 2010s, with Gartner maintaining a dedicated Magic Quadrant for years. Enterprises were spending 10-30% of their IT budgets on data quality remediation — not prevention, remediation.

And the costs kept compounding. Gartner analyst Andrew White estimated that poor data quality cost organizations an average of $12.9 million per year. MIT Sloan found that only 3% of companies' data met basic quality standards. Knowledge workers, according to Redman's research, were spending roughly half their time dealing with data quality issues — finding errors, seeking confirmation, correcting records.

Half their time. Not doing their actual job. Cleaning up data that should have been right from the start.

---

## The 1-10-100 Rule

There's a principle in quality management called the 1-10-100 rule, popularized by data quality practitioners like Larry English:

- **$1** to verify and prevent a data error at the point of entry
- **$10** to correct it downstream after it's in the system
- **$100+** if nothing is done and the error propagates through downstream systems, reports, and decisions

<div class="mermaid">
graph LR
    P["<b>$1 — PREVENT</b><br/>Validate at entry.<br/>Schema enforcement.<br/>Input controls.<br/><i>Built into the<br/>operational system</i>"]
    C["<b>$10 — CORRECT</b><br/>Cleanse data downstream.<br/>Profile and reconcile.<br/>Match and deduplicate.<br/><i>Bolt-on tools<br/>Informatica, Trillium, Infogix</i>"]
    F["<b>$100+ — FAILURE</b><br/>Bad decisions from bad data.<br/>Regulatory fines.<br/>Customer impact.<br/>Reputational damage.<br/><i>After-the-fact<br/>consequences</i>"]
    P -->|"cost escalates"| C -->|"cost escalates"| F
</div>

*Where smart orgs invest <--- ---> Where most orgs spend*

The entire data quality industry — the billions spent on tools, the armies of data stewards, the cleansing and reconciliation processes — existed primarily at the $10 level. Correcting errors downstream. The organizations that invested at the $1 level — validation at entry, schema enforcement, quality rules in the pipeline — spent a fraction of the cost for dramatically better results.

This wasn't a secret. DAMA International documented it in the DAMA-DMBOK. TDWI published research on it. Tom Redman wrote books about it. Everybody knew prevention was cheaper than correction.

And yet, for two decades, most enterprises kept bolting on data quality tools after the fact. Because fixing the operational systems was hard, buying a tool was easy, and the pain was distributed across enough departments that nobody owned the root cause.

---

## The Industry Finally Learned

The shift started around 2015-2018, when the modern data stack emerged. Tools like dbt introduced the concept of data tests — assertions embedded directly in data transformation pipelines. If a column should never be null, you write a test. If a value should be within a range, you write a test. The quality check runs *every time the pipeline runs*, not as a separate audit.

Then came data observability. Monte Carlo, founded in 2019, explicitly modeled their approach on site reliability engineering: the same way DevOps teams built monitoring into their application infrastructure, data teams should build quality monitoring into their data infrastructure. Not a separate tool inspecting from the outside — observability woven into the pipeline itself.

Great Expectations, an open-source framework, let data engineers write "expectations" — quality assertions that lived alongside the data code. Data contracts emerged as a concept, arguing that the producers of data should take responsibility for its quality at the point of creation, not leave it for downstream consumers to clean up.

The common thread: **stop bolting on quality after the fact. Build it into the system.**

It took the data industry roughly 20 years to learn this lesson at scale. Twenty years and trillions in cumulative damage.

---

## Now Watch It Happen Again with AI Governance

Here's what I see happening with AI governance right now:

1. **Build the AI system.** Deploy the model, launch the chatbot, automate the process. Focus on capability. Get it running.

2. **Discover governance problems.** Bias in outputs. Hallucinations in customer-facing responses. No audit trail. Compliance gaps. Shadow AI proliferating across departments.

3. **Bolt on a governance solution.** Buy a separate platform that monitors AI behavior, generates compliance reports, and flags issues — *after the AI has already acted*.

Sound familiar? It should. It's the exact same pattern.

| | **Data Quality (2000s)** | **AI Governance (2020s)** |
|---|---|---|
| **Pattern** | Build system first, discover DQ problems later | Deploy AI first, discover governance gaps later |
| **Response** | Bolt on profiling and cleansing tools | Bolt on monitoring and compliance platforms |
| **Organizational** | Separate budget, separate team, separate tools | Separate budget, separate team, separate tools |
| **Cost** | $12.9M/yr per org (Gartner) | TBD (early innings) |
| **Timeline** | Industry took 20 years to shift to embedded quality | Industry is at year 2-3 of the same cycle |
| **The lesson** | Build quality into the pipeline | Build governance into the AI system |
| **Solution** | dbt tests, data observability, data contracts | Governance inline, not on top |

The AI governance market is projected to reach $2-5 billion by the end of this decade. Standalone vendors are multiplying — Holistic AI, Credo AI, ModelOp, Arthur AI, Fiddler, Monitaur, ValidMind — all building tools that sit alongside your AI deployment and monitor it from the outside.

The EU AI Act, taking effect in phases through 2025-2027, is the regulatory accelerant — the same way SOX and Basel II drove data quality spending in the 2000s. And Gartner's AI TRiSM framework (Trust, Risk, and Security Management) is establishing the vocabulary, just like DAMA-DMBOK did for data quality.

Every piece is in place for a $3 trillion repeat.

---

## Why AI Governance Is Potentially Worse as Bolt-On

The data quality bolt-on pattern was bad enough. But at least data is deterministic — a number is right or wrong, a record exists or doesn't. You can profile it, measure it, reconcile it.

AI is non-deterministic. The same input can produce different outputs. Models drift. Context matters. A response that's appropriate for one customer is harmful for another.

This means:

**Point-in-time audits don't work.** Data quality tools could profile a dataset and tell you its quality score. AI governance can't do the equivalent — by the time you audit last week's AI decisions, the model has already made thousands more. Governance has to be continuous and inline, or it's always looking backward.

**The blast radius is larger.** A data quality error in a billing system creates a wrong invoice. An AI governance failure creates a biased hiring decision, a hallucinated medical recommendation, or a customer service interaction that goes viral. The consequences are more visible, more personal, and harder to remediate.

**Regulatory expectations are higher.** The EU AI Act requires documentation, human oversight, and monitoring *during development and deployment* — not just periodic compliance audits. You can't satisfy Article 14 (human oversight) with a quarterly report from a bolt-on governance tool.

The 1-10-100 rule applies here too, but the multipliers might be higher. Preventing a governance issue inline costs a fraction of detecting and remediating it after the fact. And the failure cost — in regulatory fines, reputational damage, and customer harm — can be catastrophic.

---

## The Question That Matters

I spent years watching enterprises pay millions for data quality solutions that inspected data after the fact. The smarter organizations built quality into their operational systems — validation at entry, rules at the pipeline level, exceptions caught in-flight. They spent less and got better results.

Now I'm watching the same pattern repeat with AI governance. Separate tools, separate budgets, separate teams — all monitoring AI behavior from the outside.

The lesson from data quality is clear: **build it into the operational system. Don't bolt it on.**

The organizations that will win at AI governance won't be the ones with the most comprehensive monitoring platforms. They'll be the ones who built governance into how they deploy AI from the start — the same way the data observability movement built quality into data pipelines, and the same way the best manufacturers build quality into the production process rather than inspecting at the end of the line.

Deming said it fifty years ago. The data quality industry proved it over twenty years. The question is whether the AI governance industry learns the lesson — or whether we spend another $3 trillion figuring it out the hard way.

---

*This is Part 5 of a 6-part series on Working with AI. Next: [So We Built the AI Dial](/blog/2026/04/so-we-built-the-dial/).*

---

**References**:
1. Redman, T.C. "Bad Data Costs the U.S. $3 Trillion Per Year." Harvard Business Review, September 22, 2016.
2. Nagle, T., Redman, T.C., and Sammon, D. "Only 3% of Companies' Data Meets Basic Quality Standards." MIT Sloan Management Review, September 11, 2017.
3. Gartner / Andrew White. Data quality cost research, ~2017-2018. Average organizational cost: $12.9M/year.
4. DAMA International. "DAMA-DMBOK: Data Management Body of Knowledge." 2nd Edition, 2017.
5. Labovitz, G. and Chang, Y.S. The 1-10-100 Rule.
6. Precisely. "Precisely Acquires Infogix." Press release, May 2021.
7. Gartner. "Top Strategic Technology Trends 2024: AI TRiSM." October 2023.
8. National Institute of Standards and Technology. "AI Risk Management Framework (AI RMF 1.0)." January 2023.
9. European Parliament. "Regulation (EU) 2024/1689 — Artificial Intelligence Act." August 2024.
