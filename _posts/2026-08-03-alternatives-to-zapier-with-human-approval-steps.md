---
layout: post
title: "Alternatives to Zapier with Human Approval Steps: The Honest List (Including Our Own HitLai)"
date: 2026-08-03
author: Bobby Koritala
categories: [ai, automation, smb, hitlai]
excerpt: "An honest map of the approval-step automation category — Zapier's own built-in approvals, n8n, Lindy, and HitLai — updated for Relay.app's August 2026 shutdown."
---

*Disclosure up front: we make [HitLai](https://hitlai.net/?utm_source=blog&utm_campaign=pillar02), one of the tools on this list. The list is honest anyway — it includes our competitors' genuine strengths, and the option of not switching at all.*

Automation used to mean one thing: connect app A to app B and let it run. Then AI started drafting the actual work — emails, quotes, invoices, customer replies — and business owners discovered a new problem: the automation became good enough to be dangerous. A misrouted data sync is an annoyance. An AI-drafted email sent to the wrong customer is an apology call. So a category grew up around a simple idea: pause before the consequential step and let a person decide. If you searched for Zapier alternatives with approval steps, you're shopping in that category, and this page is the map.

First, what a human approval step actually is — because the term gets stretched. A notification is not an approval step; a notification tells you something already happened. A real approval step stops the run until a person decides. The mechanics are what separate the tools: where the request arrives (email, Slack, a task queue), whether the reviewer can edit the drafted work or only approve and reject, and — the question an accountant or auditor will eventually ask — whether there's a record afterward of who approved what, and when. Every tool below implements a genuine pause-and-decide step. They differ in where the pause lives and what stands behind it.

## Before you switch: Zapier now has approval steps of its own

The honest first entry on any "alternatives to Zapier" list is Zapier. It now ships a built-in Human in the Loop capability: a Request Approval action pauses the Zap while one or more reviewers approve, decline, or change the data submitted for review; a Collect Data action pauses to gather input; and a trigger fires when an approval is requested so you can log or route it. Approval notifications can go to email or Slack. It's available on Pro plans and higher, each Human in the Loop action counts as a task, and reviewers need access to the Zap itself. If your stack already runs on Zapier and you need occasional approvals on a handful of steps, adding the built-in step is far less disruptive than migrating. The honest reason people still switch: in Zapier, approvals are steps added to a data-pipeline product. In the tools below, the pause is closer to the point of the product.

## Relay.app: shutting down (August–September 2026)

Relay.app was the tool most often recommended for this search, and the recommendation was deserved — human-in-the-loop steps were the centerpiece of the product rather than an add-on: a run paused at an approval step, the assignee got an interactive Slack or email notification with the context inline, and they could approve, reject, or edit the result before the run continued, including straight from Slack.

On July 16, 2026, Relay.app announced it is winding down. Free accounts lose access on August 15, 2026 and paying customers on September 14, 2026; new signups and free-to-paid upgrades are already switched off.

We've rewritten this entry rather than quietly deleting it, because if you searched for approval-step automation any time in the past year, Relay.app is probably what you were told to use. If you're on it now, export before your cut-off date rather than after: workflows, sequences and MCP servers come out as JSON along with your AI prompts, run history exports, and tables come out as CSVs. Annual customers are receiving automatic prorated refunds for the unused period.

Where to go next depends on what you were using it for — see the choosing guide below, and [the fuller migration answer](/faq/relay-app-shutting-down-alternatives/) if you're moving now.

## n8n: approval gates for technical teams

n8n is the option for teams with engineering skill who want to run the automation themselves — it's source-available and self-hostable. Its human-in-the-loop design has a detail worth admiring: the gate is enforced at the tool level, not just the workflow level, so an AI agent can freely do safe things like search a knowledge base while risky actions — sending an email, updating a record, deleting data — wait for a person. Approval requests can go out over Gmail, Outlook, Slack, Telegram, WhatsApp, Microsoft Teams, or Discord, and the response can be an approve/deny button, free text, or a custom form the reviewer edits before submitting. The trade is the standard self-hosting trade: total control, and you're the one maintaining it.

## Lindy: an AI assistant that asks first

Lindy sells AI agents — the "AI employee" framing — rather than pipelines. Its approval mechanic is a per-action toggle: turn on Ask for Confirmation for any action with side effects (sending an email, updating a record, creating a calendar event) and the agent prepares the work, parks it as a draft in the task view, and waits. You approve from the task view or from the email it sends you, and only then does the action execute. For a solo operator who wants an assistant that never acts unilaterally, it's a clean model.

## HitLai: governed work, not just gated steps

[HitLai](https://hitlai.net/?utm_source=blog&utm_campaign=pillar02) — ours — starts from the same conviction as everything above: the pause is the feature. The difference is the frame. HitLai's AI drafts the work itself — quotes, customer replies, invoices, purchase orders — from your business's own data. You set the trust dial at the company, the department, the workflow, or the individual agent, and every action crosses that gate before it happens. Approval workflows are ordered and multi-step: each step routes to a named person, a role, or a group, carrying timeouts and conditions, and a reviewer can approve, reject, or delegate — from Slack, Teams, Discord, or email. Every decision lands in a timestamped, tamper-evident audit trail, each one chained to the last with a SHA-256 hash, so "who approved this and when" still has an answer months later.

**And integration is never the roadblock.** Native connectors for the tools you already run — Slack, Teams, Salesforce, HubSpot, Stripe, QuickBooks, Jira, Gmail and more. Your existing Zapier, n8n, Make, Power Automate and IFTTT automations run *as a step* inside a HitLai workflow, so moving doesn't mean rebuilding. And when a connector doesn't exist, HitLai builds one on the fly — against the API, or straight through the browser. There's no catalogue to run out of. And if you're the build-it-yourself type, the orchestration core is open source: [AICtrlNet Community Edition](https://github.com/bodaty/aictrlnet-community?utm_source=blog&utm_campaign=pillar02) is MIT-licensed and self-hostable.

Zapier moves data between apps. HitLai runs work your team approves.

## How to choose, honestly

- **Zapier** has the longest app list in the category — and your Zaps run as a step inside HitLai, so that list isn't a reason to stay put.
- **n8n** is the self-hosting favourite, with gates enforced at the tool level. HitLai's orchestration core is MIT-licensed and self-hostable too — genuinely open source, not source-available with commercial strings.
- **Lindy** sells an assistant that asks before it acts. HitLai ships one as well: your own agent with a personality and a memory, driving the same platform your team runs on, with every action crossing the same gate.
- **Relay.app** is winding down — if you're on it, export before your date.
- **HitLai** is the answer when the work touches customers or money and you need roles, multi-step sign-off, delegation, and a record you can hand an auditor.

The category exists because trust, not capability, is now the constraint on automation. Any of these tools can pause for a human. The question worth asking before you pick one is what you'll be able to say afterward: when a customer, a partner, or an auditor asks why something went out, the answer "a specific person reviewed it, here's the record" is worth more than any feature list. Relay.app's wind-down adds a second question worth asking: whatever you pick, can you get your workflows back out of it? Keep them exportable.

---

**Where to go next.** See how visible your business is to AI answer engines — run the [free AI-visibility audit](https://hitlai.net/audit?utm_source=blog&utm_campaign=pillar02). Building it yourself instead? [AICtrlNet Community Edition](https://github.com/bodaty/aictrlnet-community?utm_source=blog&utm_campaign=pillar02) is free and MIT-licensed. The short version of this post lives in our FAQ: [What are the alternatives to Zapier with human approval steps?](/faq/alternatives-to-zapier-with-human-approval-steps/) — and for the head-to-head, [How does HitLai compare to Relay.app?](/faq/hitlai-vs-relay-app/)
