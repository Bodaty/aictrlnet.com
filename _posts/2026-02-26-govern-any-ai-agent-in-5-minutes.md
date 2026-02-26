---
layout: post
title: "Govern Any AI Agent in 5 Minutes: A Technical Guide"
date: 2026-02-26
author: Bobby Koritala
categories: [tutorial, ai-automation, ai-agents]
excerpt: "Your team is using AI agents — OpenClaw, Claude Code, LangChain, custom tools. They're automating incredible things. This guide makes them enterprise-ready in 5 minutes."
---

## Unlock Enterprise AI Automation in 5 Minutes

Your team is using AI agents — OpenClaw, Claude Code, LangChain, custom tools. They're automating incredible things: writing code, managing infrastructure, processing data, driving workflows.

The capability is real. Now make it enterprise-ready.

This guide shows you how to connect any AI agent to the AICtrlNet Runtime Gateway in 5 minutes — so your team keeps the automation power, and your enterprise gets the visibility, control, and audit trails it needs to say yes.

---

## What You'll Get

After completing this guide, your AI agents are enterprise-ready:

- **Every agent action** is evaluated before execution
- **Risk scores** (0.0-1.0) prioritize what needs human attention
- **ALLOW/DENY/ESCALATE** decisions — AI keeps moving, governance runs inline
- **Complete audit trail** — the answer to every compliance question
- **One-click suspend** — immediate control when you need it

The result: your team automates faster because governance removes the objections that block deployment.

---

## Prerequisites

- An autonomous AI agent running (OpenClaw, Claude Code, custom agent — any of them)
- Python 3.9+
- An AICtrlNet account ([free trial](https://hitlai.net/trial) works)

---

## Step 1: Install the SDK (30 seconds)

```bash
pip install aictrlnet-runtime-sdk
```

---

## Step 2: Get Your API Credentials (60 seconds)

1. Log into [hitlai.net](https://hitlai.net)
2. Navigate to **Settings → API Keys**
3. Click **Create API Key**
4. Copy the key (you won't see it again)

Set it as an environment variable:

```bash
export AICTRLNET_API_KEY="your-api-key-here"
export AICTRLNET_API_URL="https://api.aictrlnet.com"
```

---

## Step 3: Register Your Agent (60 seconds)

Create a file called `register_agent.py`:

```python
import asyncio
from aictrlnet_runtime_sdk import (
    AsyncAICtrlNetClient,
    RuntimeRegistrationRequest,
    AICtrlNetConfig
)

async def main():
    config = AICtrlNetConfig.from_env()
    client = AsyncAICtrlNetClient(config)

    # Register your agent — works with any type
    registration = await client.register(RuntimeRegistrationRequest(
        runtime_type="openclaw",  # or "claude_code", "cursor", "langchain", "custom"
        instance_name="my-dev-machine",
        metadata={
            "owner": "engineering-team",
            "environment": "development"
        }
    ))

    print(f"Registered! Runtime ID: {registration.runtime_id}")

    with open(".aictrlnet_runtime_id", "w") as f:
        f.write(registration.runtime_id)

asyncio.run(main())
```

Run it:

```bash
python register_agent.py
# Registered! Runtime ID: rt_abc123...
```

The `runtime_type` tells the gateway what kind of agent it's governing — but the governance pipeline is the same regardless. ALLOW/DENY/ESCALATE works identically whether the action came from OpenClaw or your custom Python script.

---

## Step 4: Wrap Agent Actions with Governance (120 seconds)

This is the key part. Wrap your agent's action execution with the governance gateway.

Create `governed_agent.py`:

```python
import asyncio
from aictrlnet_runtime_sdk import (
    AsyncAICtrlNetClient,
    GovernanceGateway,
    AICtrlNetConfig
)

async def main():
    config = AICtrlNetConfig.from_env()
    client = AsyncAICtrlNetClient(config)

    with open(".aictrlnet_runtime_id") as f:
        runtime_id = f.read().strip()

    # Create governance gateway
    gateway = GovernanceGateway(
        client=client,
        runtime_id=runtime_id
    )

    # Your actual execution logic (whatever your agent does)
    async def execute_command(cmd: str) -> str:
        import subprocess
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        return result.stdout

    # Wrap with governance — every call now gets evaluated
    governed_execute = gateway.wrap(
        action_type="shell_command",
        func=execute_command
    )

    # This command will be evaluated BEFORE execution
    try:
        result = await governed_execute("ls -la /tmp")
        print(f"Result: {result}")
    except gateway.ActionDenied as e:
        print(f"Denied: {e.reason}")
    except gateway.ActionEscalated as e:
        print(f"Needs approval: {e.approval_url}")

asyncio.run(main())
```

That's it. Every action your agent takes now passes through the Runtime Gateway before executing.

---

## Step 5: View in Dashboard (30 seconds)

1. Go to [hitlai.net](https://hitlai.net) and open the Runtime Gateway
2. You'll see your registered agent instance
3. Click on it to see:
   - All actions evaluated
   - Risk scores
   - Decisions (ALLOW / DENY / ESCALATE)
   - Full audit trail

---

## What Just Happened

```
  Agent wants to run: ls -la /tmp
                │
                ▼
  ┌─────────────────────────────────┐
  │   AICtrlNet Runtime Gateway     │
  │                                 │
  │   1. Receive action request     │
  │   2. Evaluate through pipeline  │
  │      (Quality, Governance,      │
  │       Security, Monitoring)     │
  │   3. Calculate risk score       │
  │   4. Apply policy               │
  │   5. Log to audit trail         │
  └─────────────────────────────────┘
                │
        ┌───────┼───────┐
        ▼       ▼       ▼
     ALLOW    DENY   ESCALATE
   (execute) (block) (route to
                      human)
```

This is tool-agnostic. The gateway doesn't know or care which agent generated the action. It evaluates the action itself — what it does, what it touches, what the risk level is.

---

## Default Policies

Out of the box, the gateway uses sensible defaults:

| Action Type | Default Policy |
|-------------|----------------|
| Read operations | ALLOW |
| Write to temp directories | ALLOW |
| Write elsewhere | ESCALATE |
| Network requests | ALLOW with logging |
| Destructive commands (rm, drop, delete) | ESCALATE |
| Credential access | DENY |

Customize these in **Settings → Governance Policies** — per department, per team, per agent type, per risk level.

---

## Scaling to Your Whole Team

Rolling this out to multiple developers or multiple agent types:

```python
import asyncio
from aictrlnet_runtime_sdk import AsyncAICtrlNetClient, AICtrlNetConfig

async def register_team():
    config = AICtrlNetConfig.from_env()
    client = AsyncAICtrlNetClient(config)

    agents = [
        {"name": "alice-openclaw", "type": "openclaw", "owner": "alice@company.com"},
        {"name": "bob-claude-code", "type": "claude_code", "owner": "bob@company.com"},
        {"name": "carol-custom", "type": "custom", "owner": "carol@company.com"},
        {"name": "ci-langchain", "type": "langchain", "owner": "devops@company.com"},
    ]

    for agent in agents:
        reg = await client.register(RuntimeRegistrationRequest(
            runtime_type=agent["type"],
            instance_name=agent["name"],
            metadata={"owner": agent["owner"], "department": "engineering"}
        ))
        print(f"Registered {agent['name']}: {reg.runtime_id}")

asyncio.run(register_team())
```

Different agents, different owners, same governance pipeline. One dashboard to see everything.

---

## Autonomy Levels per Department

The Runtime Gateway supports per-department autonomy policies:

- **Engineering**: Near-full autonomy for dev environments, supervised for production
- **Legal**: AI-assisted only — AI drafts, humans approve everything
- **Marketing**: Full automation for content workflows, supervised for budget decisions
- **Support**: Full automation for Tier 1 tickets, supervised for enterprise customers

Configure this in the dashboard or via the policy API. Each department gets the autonomy level that matches their risk tolerance.

---

## Next Steps

1. **Set up team policies** — define what should ALLOW, DENY, or ESCALATE per team
2. **Configure notifications** — get Slack/email alerts for ESCALATE decisions
3. **Enable ML risk scoring** — let the system learn your patterns (Business tier)
4. **Connect more agents** — the same gateway works for every tool your team adopts
5. **Explore three-layer reach** — Platform adapters (10,000+ tools), self-extending agents (any API), browser automation (any web app)

---

## About AICtrlNet

AICtrlNet is AI-powered universal automation with governance built in. Three layers of automation reach — 10,000+ tools through platform adapters, any API through self-extending agents, any web app through browser automation. Whether you're running OpenClaw, Claude Code, or custom agents, the Runtime Gateway gives you the governance that lets your enterprise say yes.

AI that automates anything. Governance for everything.

**Start your free 14-day trial**: [hitlai.net/trial](https://hitlai.net/trial)

---

- **Open Source**: [github.com/Bodaty/aictrlnet-community](https://github.com/Bodaty/aictrlnet-community) — Runtime Gateway, MIT licensed
- **Free Trial**: [hitlai.net/trial](https://hitlai.net/trial) — 14 days, full governance features
- **Documentation**: [docs.aictrlnet.com](https://docs.aictrlnet.com)

---

*Questions? Open a discussion on [GitHub](https://github.com/Bodaty/aictrlnet-community/discussions) or reach out to support@aictrlnet.com.*
