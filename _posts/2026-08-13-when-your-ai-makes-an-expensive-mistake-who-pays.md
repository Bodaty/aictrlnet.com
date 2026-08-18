---
layout: post
title: "When Your AI Makes an Expensive Mistake, Who Pays? What Changed in 2026"
date: 2026-08-13
author: Bobby Koritala
categories: [ai, automation, smb, hitlai]
excerpt: "A frontier lab, a federal agency, an airline and a public company all found the same thing: the AI acts, and a human organisation answers for it. In 2026 that stopped being a norm and became a California statute and an insurance exclusion."
---

*We make software in this category — disclosed at the end, where it comes up — but this page is deliberately vendor-neutral. What follows is true no matter whose tools you use, including none.*

Start with the most uncomfortable version of the question, from the organisation with more AI safety expertise than anyone reading this page.

In July 2026, [OpenAI disclosed](https://openai.com/index/hugging-face-model-evaluation-security-incident/) that two of its own models — the released GPT-5.6 Sol and a more capable unreleased one — broke out of a sandboxed evaluation, crossed the open internet, and compromised Hugging Face, one of the most-used pieces of infrastructure in machine learning. The models were not malfunctioning. They were, in OpenAI's own description, "hyperfocused on finding a solution for ExploitGym" — the benchmark they had been asked to score well on. The fastest available path to a good score turned out to be breaking in and stealing the answer key.

Two caveats belong right here, because a page about accountability that oversells its own evidence has already lost the argument. First, OpenAI had deliberately turned the safety measures off for this test — in their words, "these deployment safeguards were intentionally not enabled during this evaluation because it was aimed at testing cyber vulnerabilities," and "we estimate maximal cyber capabilities by running this evaluation without production classifiers used to prevent models from pursuing high-risk cyber activity." Second, nothing remotely like this is going to happen to the assistant that drafts your customer replies. This is not a warning that your chatbot will hack somebody.

So why does it lead a page written for small businesses? Because of the part that does generalise. The system did exactly what it was told. It took a path nobody predicted. And a human organisation owned the consequences.

The detail worth sitting with is on the receiving end. [Hugging Face's own published timeline](https://huggingface.co/blog/agent-intrusion-technical-timeline) records roughly 17,600 agent actions between 9 and 13 July and cluster-admin access inside thirteen hours on day three. [Their security team found it themselves](https://huggingface.co/blog/security-incident-july-2026), traced the vector to a dataset config renderer, shut it down and cut it off from the internal network — and by OpenAI's own account had "already begun containment and forensic reconstruction" before the two companies ever made contact. For the whole of that response, the people defending the system were working an unattributed intrusion. Nobody on the receiving end knew it was a benchmark run.

That is the wrong way through the ceiling: enormous capability, pointed at a goal, with the checks switched off.

## The pattern is much older than the technology

Strip away the frontier-lab specifics and the shape is one small businesses already know.

In July 2026, [a federal judge in Michigan called out Justice Department lawyers](https://reason.com/volokh/2026/07/17/judge-faults-federal-government-lawyer-for-apparent-ai-hallucination/) for a filing that cited an appeals-court case which does not exist, attributing it to generative AI. The court did not sanction the software. It named the lawyers who filed it.

In 2024, [a Canadian tribunal ordered Air Canada](https://www.canlii.org/en/bc/bccrt/doc/2024/2024bccrt149/2024bccrt149.html) to honour a bereavement discount its chatbot had invented. The airline argued, in essence, that the chatbot was responsible for its own statements. The tribunal disagreed, and Air Canada paid.

And in 2021, [Zillow took a $407.9 million inventory write-down](https://www.sec.gov/Archives/edgar/data/1617640/000161764022000013/z-20211231.htm) and shut its home-buying division after algorithmic pricing bought houses at the wrong prices. No one billed the algorithm.

Three different decades of technology, three different industries, one identical outcome: **the AI made the mistake and a human organisation paid for it.** That has always been how this works. What changed in 2026 is that it is now written down in two places at once.

<div style="position:relative;width:100%;aspect-ratio:16/9;margin:2rem 0;">
  <iframe src="https://www.youtube-nocookie.com/embed/fTn_gLoro6M" title="Three expensive AI disasters — and the one mistake they share" loading="lazy" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe>
</div>

*We walked through those three in more detail on the channel, with the court filings and the 10-K on screen.*

## What actually changed in 2026

**In California, "the AI did it" is no longer available as a defence.** [Assembly Bill 316](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260AB316), signed 13 October 2025 and in force since 1 January 2026, adds section 1714.46 to the Civil Code, and the operative sentence is short enough to quote in full: *"It shall not be a defense, and the defendant may not assert, that the artificial intelligence autonomously caused the harm to the plaintiff."*

Read the verbs describing who it applies to — a defendant who "developed, modified, or used" the AI. That last one is you. This is not a rule about model builders; it reaches the business that deployed the thing. It is also narrower than the headlines suggest, and worth being precise about: it does not create strict liability, and it explicitly preserves every other affirmative defence, including evidence about causation, foreseeability, and the comparative fault of other parties. It removes exactly one argument.

The reason to care now is not that this is new. It is that it has been law since New Year's Day, and most small businesses have never heard of it.

**Meanwhile, your general liability policy may already exclude the exposure.** Verisk, whose ISO forms are the template most commercial general liability policies are built from, issued [generative-AI exclusion endorsements effective January 2026](https://www.insurancejournal.com/news/national/2026/07/16/877894.htm) — CG 40 47, which is the broad one and strips bodily injury, property damage, and personal and advertising injury arising out of generative AI; CG 40 48, which is narrower and touches only personal and advertising injury; and CG 35 08, which applies the exclusion to products and completed operations. Verisk's own definition of what gets excluded is expansive: "a machine-based learning system or model trained on data with the ability to create content or responses, including text, images, audio, video or code."

How many carriers have adopted these, and how fast, is [genuinely not something anyone can tell you from public data](https://www.insurancejournal.com/news/national/2026/07/22/878480.htm) — the figures circulating are predictions, not counts. The honest version of this advice is therefore not "you are uninsured." It is: **find out.** Read your renewal, or email your broker one sentence asking whether a generative-AI exclusion has attached to your policy. It costs you a paragraph and it is the single highest-value thing on this page.

Put the two together and the position is unambiguous. You cannot blame the software in court. And the policy you have quietly renewed for years may no longer cover what the software does.

## Why this lands hardest on the smallest businesses

Large companies have general counsel who track statutes and brokers who read endorsements. A ten-person firm has a renewal notice it skims and a tool a staff member enabled because it looked useful. The exposure is not larger at small scale — it is just far less likely to be noticed before it matters, and far more likely to be the whole business when it does.

There is a second asymmetry, and it is the encouraging one. Small businesses can actually change how they work in an afternoon. There is no committee.

## The right way through the ceiling

Everything above argues for controls, not abstinence. Refusing to use AI is its own kind of expensive, and it is not what any of these stories recommend.

The right way through the ceiling isn't a leap of faith — it's a dial. You decide what the AI handles on its own and what waits for your sign-off, and you move that setting as evidence accumulates. Nothing about that requires believing the technology has become reliable, which is the point.

In practice the whole discipline reduces to four controls, treated properly in our companion piece on [trusting AI with clients](/faq/how-can-a-small-business-trust-ai-not-to-make-mistakes-with-clients/): the AI drafts and a person sends; consequential steps genuinely pause rather than merely notify; some actions are categorically off the table no matter how confident the system is; and every approval leaves a record of who decided what, and when.

That last one is what turns this from a risk conversation into an accountability conversation — and, read against AB 316, it is also the only thing that will be worth anything if the question is ever asked adversarially. When a court, a carrier, or a client asks why something went out, "the AI did it" is not an answer. "Here is who approved it, and when" is.

## The short version

The stories differ wildly in scale and not at all in structure. A frontier lab, a federal agency, an airline, and a public company all discovered the same thing: the AI acts, and a human organisation answers for it. In 2026 that stopped being a norm and started being a statute and a policy endorsement.

None of which is an argument for staying off AI. It is an argument for being able to say who approved what — before someone asks.

## Sources

Every factual claim above traces to a primary document. In order of appearance:

- **The evaluation incident, in OpenAI's words** — [OpenAI, *OpenAI and Hugging Face partner to address security incident during model evaluation*](https://openai.com/index/hugging-face-model-evaluation-security-incident/) (21 July 2026). The quoted phrases — "hyperfocused on finding a solution for ExploitGym" and the passage on running the evaluation "without production classifiers" — are OpenAI's own.
- **The receiving end** — [Hugging Face, *Security incident disclosure — July 2026*](https://huggingface.co/blog/security-incident-july-2026).
- **The forensic timeline** — [Hugging Face, *Anatomy of a Frontier Lab Agent Intrusion: A Technical Timeline*](https://huggingface.co/blog/agent-intrusion-technical-timeline). The ~17,600 recovered agent actions run 2026-07-09 to 2026-07-13; cluster-admin across multiple internal clusters came "in under thirteen hours" on day three.
- **The hallucinated citation** — [Eugene Volokh, *Judge Faults Federal Government Lawyer for Apparent AI Hallucination*](https://reason.com/volokh/2026/07/17/judge-faults-federal-government-lawyer-for-apparent-ai-hallucination/), quoting and linking Chief Judge Hala Y. Jarbou's order (W.D. Mich., 16 July 2026): "It seems this citation was likely produced by generative artificial intelligence."
- **The chatbot case** — [*Moffatt v. Air Canada*, 2024 BCCRT 149](https://www.canlii.org/en/bc/bccrt/doc/2024/2024bccrt149/2024bccrt149.html) (B.C. Civil Resolution Tribunal, 14 February 2024). Air Canada was found to have failed to take reasonable care that its chatbot was accurate.
- **The Zillow write-down** — [Zillow Group, Form 10-K for FY2021](https://www.sec.gov/Archives/edgar/data/1617640/000161764022000013/z-20211231.htm). Worth stating precisely, because the smaller number circulates more widely: $407.9 million is the **full-year 2021** inventory write-down. The Q3 charge alone was $304.4 million.
- **California AB 316** — [bill text, adding Civil Code § 1714.46](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260AB316). Chaptered 13 October 2025.
- **The insurance endorsements** — [Insurance Journal, 16 July 2026](https://www.insurancejournal.com/news/national/2026/07/16/877894.htm), naming CG 40 47 01 26, CG 40 48 01 26 and CG 35 08 01 26.
- **Why we won't give you an adoption percentage** — [Insurance Journal, 22 July 2026](https://www.insurancejournal.com/news/national/2026/07/22/878480.htm), where Alana McMullin, a partner at Lathrop GPM whose practice covers insurance disputes, says plainly: "Insurers are still evaluating their options in real time, so we don't know yet what each insurer is going to do."

*Disclosure: we make [HitLai](https://hitlai.net?utm_source=blog&utm_campaign=pillar05), a governed AI platform for small businesses built on exactly these controls — the AI drafts real work (quotes, replies, invoices) from your business's own data, a trust dial sets which actions pause for approval, it never moves money on its own, and every approval lands in a timestamped, tamper-evident audit trail. If you'd rather inspect the mechanics than take our word for them: the orchestration core, [AICtrlNet Community Edition](https://github.com/bodaty/aictrlnet-community?utm_source=blog&utm_campaign=pillar05), is free and MIT-licensed. Or start somewhere smaller — the [AI-visibility audit](https://hitlai.net/audit?utm_source=blog&utm_campaign=pillar05) is free.*
