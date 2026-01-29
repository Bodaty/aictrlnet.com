---
layout: post
title: "Introducing AICtrlNet: AI Orchestration Where Humans Are First-Class Citizens"
date: 2026-01-29
author: Srirajasekhar "Bobby" Koritala
categories: [announcement, ai, orchestration, open-source]
excerpt: "We're launching AICtrlNet — an open core AI orchestration platform that treats humans and AI as equal workflow participants. The Community Edition is MIT licensed and available today."
---

We're excited to announce AICtrlNet, an open core AI orchestration platform that treats humans and AI as equal participants in workflows—not afterthoughts.

The Community Edition is MIT licensed and available today on [GitHub](https://github.com/Bodaty/aictrlnet-community) and [PyPI](https://pypi.org/project/aictrlnet/).

## The Problem We Kept Running Into

Over the past few years, we've built AI systems for enterprises across healthcare, finance, and legal. Every project hit the same wall: **AI workflows that work in demos fail in production because they ignore humans.**

The existing tools fell into two camps:

**Code-first frameworks** (LangChain, CrewAI, AutoGen) are powerful but assume developers will handle everything programmatically. There's no visual way to design workflows, no built-in governance, and adding human approval steps means building custom infrastructure.

**Visual automation tools** (n8n, Zapier, Dify) make it easy to connect things, but AI is bolted on—not native. When you need a human to review an AI decision before it executes, you're back to building custom solutions.

We needed something that didn't exist: **visual workflow design with native human-in-the-loop capabilities and real governance controls.**

So we built it.

## What AICtrlNet Does

AICtrlNet is an orchestration engine that coordinates AI agents, human workers, and external systems into auditable workflows.

### Visual Workflow Design

Design workflows visually with HitLai (our React-based UI), or programmatically via API. Your choice.

```
[AI: Generate Report] → [Human: Review & Approve] → [AI: Distribute] → [Human: Confirm Delivery]
```

Every node can be an AI model, a human task, or an external service. The engine handles routing, state management, and execution.

### Human-in-the-Loop Native

This is the core differentiator. Humans aren't a fallback for when AI fails—they're first-class workflow participants.

- Define approval workflows with escalation paths
- Set up human validation checkpoints
- Route tasks based on confidence scores
- Track human decisions with full audit trails

```python
# Example: AI generates content, human reviews before publishing
workflow = Workflow(
    nodes=[
        AINode(model="gpt-4", task="generate_content"),
        HumanNode(role="content_reviewer", action="approve_or_reject"),
        ConditionalNode(
            if_approved=AINode(task="publish"),
            if_rejected=AINode(task="revise")
        )
    ]
)
```

### AI Governance Built-In

We've seen what happens when AI workflows run without guardrails. AICtrlNet includes:

- 5-layer AI Workflow Security Gateway
- Bias detection and monitoring
- Complete audit trails (who did what, when, why)
- Compliance framework support (HIPAA, GDPR, SOC2)

This isn't an enterprise upsell—it's in the Community Edition.

### Model Context Protocol (MCP) Support

Native MCP integration for standardized AI model communication. Connect any MCP-compatible model or service without writing custom adapters.

## The Editions

We're releasing AICtrlNet as open core:

| Edition | What You Get | License |
|---------|--------------|---------|
| **Community** | Core orchestration engine, essential adapters, governance controls | MIT |
| **Business** | + HitLai visual UI, ML-enhanced features, RAG, 43 industry packs | Commercial |
| **Enterprise** | + Multi-tenancy, federation, SSO, white-label | Commercial |

The Community Edition is genuinely MIT licensed. Not "fair-code," not "source-available with restrictions." MIT. Fork it, modify it, build commercial products on it.

## How It Compares

We're not trying to replace your existing tools—we integrate with them.

**vs. LangChain**: We use LangChain under the hood for AI execution. AICtrlNet adds visual orchestration, HITL, and governance on top. Use both.

**vs. n8n**: n8n is great for traditional automation. We integrate with n8n for its 400+ connectors. AICtrlNet handles the AI-native workflows where governance and human oversight matter.

**vs. Dify/Flowise**: Great visual AI builders. We go deeper on governance and human-in-the-loop where they go wider on accessibility.

**vs. CrewAI**: CrewAI orchestrates AI teams. We orchestrate AI + humans. Different problem spaces.

## Quick Start

**Docker (recommended)**:
```bash
git clone https://github.com/Bodaty/aictrlnet-community.git
cd aictrlnet-community
docker-compose up -d
# API at http://localhost:8000
```

**pip**:
```bash
pip install aictrlnet
```

**Your first workflow**:
```bash
curl -X POST http://localhost:8000/api/v1/workflows \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Review Workflow",
    "nodes": [
      {"type": "ai", "model": "gpt-4", "task": "analyze"},
      {"type": "human", "role": "reviewer", "action": "approve"}
    ]
  }'
```

Full documentation: [aictrlnet.com/docs](https://aictrlnet.com/docs)

## What's Next

We're actively developing:

- More adapters (community requests welcome)
- Enhanced MCP capabilities
- Visual workflow designer improvements
- True multi-tenant SaaS (Enterprise)

Have an idea? [Open a feature request](https://github.com/Bodaty/aictrlnet-community/issues/new?template=feature_request.md) and let us know what matters most.

## Get Involved

- **Star us on GitHub**: [Bodaty/aictrlnet-community](https://github.com/Bodaty/aictrlnet-community)
- **Join Discussions**: [GitHub Discussions](https://github.com/Bodaty/aictrlnet-community/discussions)
- **Contribute**: [CONTRIBUTING.md](https://github.com/Bodaty/aictrlnet-community/blob/main/CONTRIBUTING.md)
- **Report issues**: [GitHub Issues](https://github.com/Bodaty/aictrlnet-community/issues)

We're building AICtrlNet because we needed it. We're open-sourcing it because the community deserves better tools for human-AI collaboration.

Let's build together.

— Bobby ([@bobbykoritala](https://github.com/bobbykoritala))
