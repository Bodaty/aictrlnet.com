---
layout: post
title: "Why Enterprise Agentic AI Is a Federated State Machine, Not a Single One"
date: 2026-07-26
author: Bobby Koritala
categories: [ai, thought-leadership, ai-orchestration, agentic-ai, architecture]
excerpt: "Leo Tavares is right that agents should be state machines. The framing has a ceiling: it imagines one machine. Enterprise stacks are plural — multi-protocol, multi-framework, with humans as workflow peers. The orchestration layer that wins this decade is a federation of state machines, with state preserved across every boundary."
---

## The Right Primitive

Leo Tavares of Google DeepMind DevRel posted back in May that agentic AI should be designed as state machines — declarative protocols, harness-owned state, explicit contracts. He's right.

State machine is the correct primitive. The agent loop — perceive, decide, act, update — maps cleanly onto a finite set of states with explicit transitions. "Vibes-driven planner" does not. Most production agent failures I've seen trace back to systems whose state was implicit, scattered across prompt history, framework memory, and tool-call side effects, with no contract for what survives a retry.

The state-machine framing fixes that. Name your states, name your transitions, name what the harness owns versus what the model owns, and your agent becomes debuggable.

It is the right primitive. It is not the right architecture.

---

## What the Single State Machine Misses

The state-machine framing implicitly imagines one machine. One protocol governing transitions. One framework owning the loop. One actor — the AI agent — running the show, with humans as approval-node endpoints.

Enterprise stacks are not like that. Enterprise stacks are plural in three ways the single-state-machine model cannot absorb without fracturing.

### Plurality 1: Multi-Protocol

A real enterprise running agents in 2026 is speaking three to five protocols concurrently:

- **A2A** — Google's agent-to-agent protocol, now under the Linux Foundation, with adoption across 150+ organizations.
- **MCP** — Anthropic's model-to-tool protocol, with client and server implementations proliferating across the toolchain.
- **Vendor-proprietary protocols** — internal messaging buses, OEM-specific agent gateways, embedded agent fabrics inside SFDC, M365, Databricks.
- **Browser-driven automation as fallback** — Playwright and similar for systems that don't speak any protocol at all.

A single state machine assumes one protocol owns the transitions. Real systems have transitions that cross protocols — an A2A agent invoking an MCP tool that wraps a browser action that writes to a CRM via vendor SDK. State has to survive every bridge.

### Plurality 2: Multi-Framework

LangChain, AutoGen, CrewAI, Semantic Kernel, AutoGPT — every major agent framework ships its own loop, its own memory model, its own retry semantics, its own opinion about how planning interacts with tool use.

Enterprises are not standardizing on one. They run several — sometimes by accident (each team picked a different one), sometimes by design (different frameworks fit different workloads). When one framework fails or hits a capability boundary, the next must pick up state and continue. Restart is not acceptable; in regulated workflows, it is not legal.

A single state machine cannot span frameworks because each framework is itself a state machine with its own contract. What enterprise needs is a federation: each framework owns its local state, the federation owns the contract for how state crosses framework boundaries.

Cascading from LangChain to AutoGen to CrewAI without context loss is not one state machine. It's three state machines sharing a federated state contract.

### Plurality 3: Humans as Peers

This is the plurality the agent-framework world consistently misses.

Every enterprise workflow involves humans doing what only humans should — judgment calls, regulatory approvals, exception handling, decisions where accountability cannot delegate. The dominant agent-framework treatment of humans is "approval node" — a synchronous wait state where the human signs off on what the AI proposes.

That is not the enterprise reality. Humans are workflow peers. They have capacity (some are at 100% utilization, others at 20%). They have capability profiles (one paralegal can clear an immigration filing; another can't). They have continuity needs (handoff at 5pm to a colleague in another timezone, with context). They sometimes initiate the workflow and hand to an agent; they sometimes pick up mid-flight from an agent that escalated.

A workflow state machine that treats humans as approval-node endpoints fragments the moment a human-to-human handoff happens. A workflow state machine that treats humans as peer participants — with capacity, capability, and a state contract identical to any agent participant — does not.

In 2026, this is the most differentiated thing an orchestration platform can ship. Most cannot.

---

## The Federated State Machine

The architecture that survives all three pluralities is what I'll call a **federated state machine**.

```
   +-----+    +-----+    +--------+
   | A2A | <->| MCP | <->| Vendor |
   +-----+    +-----+    +--------+
       \\        |          //
        \\   federation    //
         \\   contract    //
          \\     |        //
   +--------+ +--------+ +--------+
   | LangCh | | AutoGen| | CrewAI |
   +--------+ +--------+ +--------+
       \\        |          //
        \\   federation    //
         \\   contract    //
          \\     |        //
   +--------+ +--------+ +--------+
   | AI     | | Human  | | Human  |
   | Agent  | | Peer   | | Peer   |
   +--------+ +--------+ +--------+
```

Each participant — protocol, framework, runtime, human — runs its own local state machine. The federation owns the contract for how state crosses every boundary. Three properties define it:

1. **State is preserved across protocol bridges.** When a transition crosses A2A → MCP → vendor protocol, the federation guarantees what survives. The federation, not any individual participant, owns that guarantee.

2. **State is preserved across framework cascades.** When framework A hits its boundary and framework B picks up, the federation hands B a live continuation — not a restart from a serialized memory blob.

3. **State is preserved across human-agent handoffs.** When an AI agent escalates to a human peer, or a human hands a task to an agent, the federation carries context in both directions: what the AI knew, what it tried, what the human decided, and why.

That is the architectural primitive enterprise orchestration actually requires.

---

## Two Failure Modes

### Monolithic State Machine

One protocol, one framework, one actor type. Clean. Debuggable. Brittle.

Brittle because the moment the stack diversifies — a second protocol arrives, a new framework gets adopted, a human peer needs to participate — the state machine fractures along its single-protocol assumption. The fix is always a custom adapter. The custom adapters are where state gets dropped.

Most reference architectures published in 2024-2025 are monolithic state machines. They demo well. They do not survive enterprise integration.

### Stateless Agent Loop

Popular in prototypes. Each turn is independent, each tool call is independent, each agent invocation is independent. State, if it exists, lives in prompt history.

Catastrophic in production. Nothing remembers what happened across a handoff. The same tool call gets retried with different intent because the agent forgot the prior failure context. Compliance audit is impossible because there's no state to audit. Multi-step workflows become non-deterministic.

This is the architecture most "agent frameworks" actually ship under the hood, regardless of marketing. It's why enterprise pilots stall at month three.

---

## What Wins the Decade

The orchestration vendors and platforms that win the next ten years will not be the ones with the cleanest single-agent harness. They'll be the ones building federated state machines.

Three reasons:

**The protocol landscape is converging on plurality, not unification.** A2A and MCP are both gaining ground precisely because they cover different surfaces. Vendor-proprietary protocols inside SFDC, M365, and the hyperscaler agent platforms are not going away. The platform that bridges them owns the orchestration position.

**The framework landscape is fragmenting, not consolidating.** New frameworks ship every quarter; old ones don't die. Enterprises adopt by team and use case. The platform that cascades across frameworks without losing state owns the durability position.

**Humans are not going away.** They're moving up the value stack — out of routine work, into judgment work — but every enterprise workflow that matters still has humans in it. The platform that treats humans as peer participants in the state machine, not endpoint approvers, owns the trust position.

A federated state machine is the architectural primitive that makes all three positions defensible at once.

The single state machine is the right answer to the question Leo Tavares asked. The question enterprise architects should be asking is one level up: how many state machines, federated how?

---

**About the author**: Bobby Koritala is the founder of AICtrlNet and HitLai. Previously, he led product development at Infogix (now part of Precisely), building enterprise data integrity platforms for financial services and healthcare. He has spent 10 years building AI systems, including several patented ones.

**References**:
1. Linux Foundation. "Agent2Agent (A2A) Protocol joins the Linux Foundation." Project page, 2026.
2. Anthropic. "Model Context Protocol Specification." 2024-2026.
3. Google Cloud Next 2026. "Gemini Enterprise Agent Platform sessions."
4. Forrester. "The Agent Control Plane Market." Q1 2026.
