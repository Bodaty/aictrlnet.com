---
layout: post
title: "RPA Is Running on Borrowed Time"
date: 2026-04-21
author: Bobby Koritala
categories: [ai, thought-leadership, frankenstein-stack, rpa]
excerpt: "UiPath went public at $56 per share, peaked near $90, and has since collapsed to the $12-20 range. When the market leader is running from its own category name, the category has a problem."
series: "The Frankenstein Stack"
series_part: 3
---

## The $90 Stock That Trades at $15

UiPath went public in April 2021 at $56 per share, peaked near $90, and has since collapsed to the $12-20 range. The company that was supposed to be the future of enterprise automation lost over 80% of its peak market value.

The stock tells a story the RPA marketing won't: the model is struggling.

UiPath's founder Daniel Dines stepped down as CEO in mid-2023. His replacement, Rob Enslin, lasted roughly six months before departing. Dines returned to a company that was already pivoting away from the very category it created — rebranding from "Robotic Process Automation" to "AI-powered automation."

When the market leader is running from its own category name, the category has a problem.

---

## What RPA Actually Is

Strip away the marketing and RPA does one thing: **scripted screen interaction.** A bot watches what a human does — click here, type this, copy that, paste there — and replays those actions. It's sophisticated macros. Record the steps, run them on a schedule, handle the simple exceptions.

For structured, repetitive, high-volume tasks — data entry, report generation, invoice processing with consistent formats — this works. It works well enough that UiPath, Blue Prism, and Automation Anywhere built a multi-billion dollar market on it.

But the limitations are inherent to the architecture:

**Brittle by design.** RPA bots interact with user interfaces. When the UI changes — a button moves, a field is renamed, a page layout updates — the bot breaks. Industry estimates suggest 20-40% of total RPA program cost goes to bot maintenance. Deloitte and others have reported that many enterprises stall at 50-100 bots because the maintenance burden grows faster than the value delivered.

**No intelligence.** An RPA bot follows a script. It doesn't understand what it's doing, can't handle exceptions it wasn't programmed for, and can't adapt when conditions change. If an invoice arrives in an unexpected format, the bot fails. If a customer request doesn't match the predefined categories, the bot fails. If the legacy system responds slower than expected, the bot may fail silently — returning partial data without flagging the issue.

**No governance.** RPA bots execute without governance guardrails. There's no inline evaluation of whether an action should proceed. No approval workflow before a bot submits a form or processes a payment. No AI Dial — it's fully automated or off. The governance tool in the Frankenstein stack doesn't typically monitor RPA actions because RPA isn't an "AI system" in the governance vendor's taxonomy.

**Expensive at scale.** License costs per bot, infrastructure to run bots, center of excellence teams to manage bots, developers to fix broken bots, governance teams to audit bot actions. Multiple analyst reports have cited that 30-50% of initial RPA projects fail to meet ROI expectations.

---

## The Squeeze From Both Sides

RPA is being squeezed by two forces simultaneously:

### From Above: Platform-Native Automation

Microsoft Power Automate is bundled with Microsoft 365. For enterprises already on M365 — which is most of them — basic automation is effectively free. Why pay UiPath per-bot licensing for simple task automation when the productivity suite you already own includes it?

Power Automate isn't as capable as UiPath for complex RPA scenarios. But for the 60-70% of RPA use cases that are simple data movement and form filling, it's good enough. And "good enough plus free" beats "better but expensive" every time.

### From Below: AI-Powered Automation

AI fundamentally changes what automation can do. Instead of scripting screen interactions step by step, AI can:

- **Understand documents** — extract data from invoices, contracts, and forms regardless of format, without brittle templates
- **Navigate intelligently** — interact with web applications using contextual understanding, adapting when layouts change
- **Handle exceptions** — make judgment calls on ambiguous inputs instead of failing
- **Self-heal** — detect when a process isn't working and adjust, rather than failing silently

This isn't hypothetical. Browser automation powered by AI (Playwright, similar frameworks) can navigate any web application — the same legacy systems RPA bots interact with — but with intelligence. The AI understands what it's looking at, not just where to click.

**RPA vs. AI-Powered Automation**

| Dimension | RPA | AI-Powered |
|---|---|---|
| Interaction model | Scripted clicks | Contextual navigation |
| Document handling | Template-based | Format-agnostic |
| Exception handling | Fails or skips | Makes judgment calls |
| UI changes | Bot breaks | AI adapts |
| Maintenance | 20-40% of cost | Self-healing |
| Intelligence | None | AI-native |
| Governance | None built-in | Inline (AI Dial) |
| New integrations | Custom development | AI generates adapter |

**Bottom line: RPA automates clicks. AI-powered automation automates work.**

---

## Blue Prism's Quiet Exit

Blue Prism — once positioned as the "enterprise RPA" alternative to UiPath — was acquired by SS&C Technologies in March 2022 for approximately $1.6 billion. SS&C is a financial services technology conglomerate. Blue Prism became one product in a large portfolio.

The significance: a pure-play RPA company couldn't sustain independence. It was absorbed into a larger entity where RPA is a feature, not the product. This is the trajectory of technologies that become commoditized — they don't die, they get absorbed into platforms.

Automation Anywhere, the other major RPA pure-play, has been privately held and reportedly evaluating an IPO for years without executing. Meanwhile, it's pivoting messaging to "AI + Automation" — distancing from "RPA" the same way UiPath is.

When all three major RPA vendors are either losing value (UiPath), absorbed (Blue Prism), or pivoting away from the category name (Automation Anywhere), the market is sending a clear signal.

---

## The RPA-AI Governance Gap

Here's the Frankenstein stack problem specific to RPA: **RPA bots are ungoverned.**

The AI governance tool (Credo AI, Arthur AI, etc.) monitors AI models — LLMs, ML classifiers, recommendation engines. It doesn't monitor RPA bots because they're not "AI" in the governance vendor's taxonomy.

But RPA bots are making consequential decisions every day. They're processing payments, updating customer records, filing regulatory documents, extracting data from systems. These actions have real business impact — and they're executing without:

- Pre-action evaluation
- Approval workflows for high-risk actions
- Audit trails with decision context
- Escalation paths for exceptions
- Any form of the AI Dial

The governance tool watches the AI. The AI assistant has Microsoft's guardrails. But the RPA bot? It runs its script, and nobody in the governance architecture is watching.

This is the seam problem from Part 7 of this series — risk lives in the gaps between systems, and the RPA layer is entirely in the gap.

---

## What Enterprises Should Ask

If your organization uses RPA today — or is evaluating it — here are the questions that matter:

**What's your actual maintenance cost?** Not the license fee — the total cost including developers fixing broken bots, the center of excellence overhead, and the business impact when bots fail silently. Most enterprises dramatically undercount this.

**What happens when the UI changes?** If the answer is "a developer fixes the bot," multiply that by every application your bots touch, and ask how often those applications update. That's your ongoing maintenance liability.

**Can your bots handle exceptions?** Not the exceptions you've pre-programmed — the ones you haven't anticipated. What happens when the input doesn't match the template? When the system responds differently? When data is incomplete? If the answer is "the bot fails and creates a ticket," you're paying for automation that regularly creates manual work.

**Is your RPA governed?** Does anyone audit what the bots are doing? Is there an approval workflow before a bot processes a payment or updates a customer record? Can you reconstruct why a bot took a specific action? If the AI governance tool doesn't monitor RPA, you have an ungoverned automation layer in your stack.

**Could AI-powered automation do this better?** For each RPA workflow, ask: would an intelligent system that understands context, adapts to changes, handles exceptions, and has governance built in — deliver better results at lower maintenance cost?

The answer isn't always yes. There are high-volume, perfectly structured tasks where scripted automation still makes sense. But for the growing majority of enterprise processes that involve variability, judgment, and multiple systems — RPA is a solution from a previous era being maintained past its useful life.

---

## The Path Forward

RPA won't disappear overnight. There are millions of bots running in production, and enterprises won't rip them out tomorrow. But the trajectory is clear:

**Simple automations** are being absorbed by platform-native tools (Power Automate, built-in workflow features in SaaS applications). No need for a separate RPA license.

**Complex automations** are being replaced by AI-powered approaches — browser automation with intelligence, document understanding that doesn't need templates, workflow orchestration that handles exceptions.

**The governance gap** is being addressed by platforms that govern all actions inline — whether those actions are AI decisions, document processing, browser interactions, or API calls. One governance layer. One AI Dial. Not a separate governance tool that monitors some systems and ignores others.

The enterprises that get ahead of this curve won't be the ones adding more bots. They'll be the ones replacing brittle scripts with intelligent automation that governs itself — and reducing their Frankenstein stack by one vendor in the process.

---

*This is Part 3 of an 8-part series on The Frankenstein Stack. Next: [Your AI Assistant Has a Ceiling](/blog/2026/04/your-ai-assistant-has-a-ceiling/).*

---

**About the author**: Bobby Koritala is the founder of AICtrlNet and HitLai. Previously, he led product development at Infogix (now part of Precisely), building enterprise data integrity platforms for financial services and healthcare. He has spent 10 years building AI systems, including several patented ones.

**References**:
1. UiPath SEC filings and stock performance data, 2021-2025.
2. SS&C Technologies. "SS&C Completes Acquisition of Blue Prism." Press release, March 2022.
3. Gartner. "Magic Quadrant for Robotic Process Automation." Various years.
4. Deloitte. "The Robots Are Waiting: RPA Deployment at Scale." Global RPA Survey.
5. Everest Group. Research on RPA program success rates and scaling challenges.
