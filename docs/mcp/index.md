---
layout: doc
title: Connect Claude to AICtrlNet (MCP)
badge: Docs · MCP
description: Connect Claude Code, claude.ai, Claude Desktop, Cursor or any MCP client to AICtrlNet — OAuth 2.1 auto-login, API keys, scopes, plan tiers, troubleshooting.
last_updated: September 10, 2026
applies_to: AICtrlNet Community, Business and Enterprise
sync_source: docs/MCP_CLAUDE_CODE_SETUP.md
permalink: /docs/mcp/
---

AICtrlNet exposes its capabilities as MCP tools via Streamable HTTP transport. Claude Code, claude.ai, Claude Desktop, Cursor, or any MCP client can connect and use natural language to create workflows, execute them, assess quality, automate companies, and more.

**Tool surface**: 194 tools across three editions (51 Community / 158 Business / 194 Enterprise, accretive). Every tool carries a `title` and MCP annotation hints (`readOnlyHint`, `destructiveHint`, `idempotentHint`, `openWorldHint`), so clients can tell a read from a write before calling.

## Three ways to connect

| Path | When to use | Setup time | Renewal |
|---|---|---|---|
| **OAuth 2.1 auto-login** (recommended) | Interactive humans using Claude Code on their own machine | ~30 sec | Automatic (refresh tokens) |
| **API key** (power users) | CI/CD pipelines, scripts, long-lived integrations, shared workstations | ~2 min | Never (until explicit rotation) |
| **Bearer JWT** (emergencies only) | Quick one-off testing | < 30 sec | Re-paste every 24 hours |

Pick **OAuth auto-login** unless you need to script it — no tokens to paste, sessions survive restarts, Claude Code handles renewal transparently.

---

## Option A: OAuth 2.1 auto-login (recommended)

Zero tokens to copy. Claude Code discovers the authorization server from the MCP endpoint, registers itself dynamically, opens a browser for your approval, and caches the session locally.

### Setup

```json
// ~/.claude/mcp.json
{
  "mcpServers": {
    "aictrlnet": {
      "type": "http",
      "url": "https://api.enterprise.aictrlnet.com/api/v1/mcp-transport"
    }
  }
}
```

That's it. No `headers:` block, no key.

### First use

1. Restart Claude Code.
2. In any Claude Code prompt, ask to do something that needs AICtrlNet (`"list my workflows"`).
3. Claude Code detects a 401 response pointing at our OAuth metadata, opens your browser.
4. You log into AICtrlNet at `aictrlnet.com` (if not already).
5. HitLai shows a consent screen: *"Claude Code wants to access: `read:workflows`, `write:workflows`"*. Click **Approve**.
6. Browser redirects back to Claude Code. Claude Code caches the session.
7. Your prompt runs.

From this point on, you never see a dialog again — refresh tokens roll automatically. To revoke, visit **Settings → Authorized Apps** on HitLai and click the delete button next to Claude Code.

### Scope selection

Claude Code requests scopes based on what you're about to do. If you later ask Claude to do something that needs a scope you didn't originally approve, it'll prompt you again — just for the new scope, not the ones you already granted.

### From claude.ai, Claude Desktop or the mobile app (custom connector)

The same OAuth flow works without any config file:

1. In claude.ai open **Customize → Connectors → Add custom connector**.
2. Name it `AICtrlNet` and paste the server URL: `https://api.enterprise.aictrlnet.com/api/v1/mcp-transport`.
3. Click **Add**, then **Connect**. Claude registers itself with our authorization server, opens the HitLai consent screen, and returns once you approve.
4. In any chat, enable the connector and ask, for example, *"list my workflows"*.

Revocation is the same as for Claude Code: **Settings → Authorized Apps** on HitLai.

---

## Option B: API key (power users / CI)

Best for: scripts, CI/CD workflows, long-running agents, shared / headless machines where you can't pop a browser.

### 1. Create the key

1. Log into AICtrlNet → **Settings → API Keys → Create API Key**
2. Pick scopes per the **feature → scope cookbook** below. Start narrow; you can regenerate with more scopes later.
3. Optional: set an IP allowlist (one CIDR per line — e.g. `10.0.0.0/8`).
4. Optional: set an expiry (1-365 days).
5. Optional: under **Advanced**, set per-tool rate caps for expensive tools.
6. Click **Create**. The full key is shown **once** — copy to clipboard or download as a `.env` file.

### 2. Add to Claude Code

```json
{
  "mcpServers": {
    "aictrlnet": {
      "type": "http",
      "url": "https://api.enterprise.aictrlnet.com/api/v1/mcp-transport",
      "headers": { "X-API-Key": "aictrl_live_YOUR_KEY" }
    }
  }
}
```

### Scope-set cookbook

Copy-paste sets for common use cases:

| Use case | Scopes |
|---|---|
| **Read-only observer** (dashboards, monitoring) | `read:workflows`, `read:agents`, `read:analytics`, `read:audit` |
| **DevOps automation tool** (run workflows, check status) | `read:workflows`, `write:workflows`, `read:usage` |
| **Governance officer** (create + audit policies) | `read:policies`, `write:policies`, `read:audit`, `read:compliance` |
| **Marketplace publisher** (org templates) | `read:marketplace`, `write:marketplace`, `read:templates`, `write:templates` |
| **Full-featured Claude Code** (recommended starting set) | `read:workflows`, `write:workflows`, `write:browser`, `write:self_extending`, `read:approvals`, `write:approvals` |
| **Company automation** (full build-out) | `write:company`, `write:workflows`, `write:agents`, `write:autonomy`, `read:org` |

The full scope reference (descriptions and groups) ships in the platform repository as `docs/architecture/MCP_SCOPE_REFERENCE.md`; your API-key screen in HitLai lists the same scopes with descriptions.

---

## Option C: Bearer JWT (quick testing)

```json
{
  "mcpServers": {
    "aictrlnet": {
      "type": "http",
      "url": "https://api.enterprise.aictrlnet.com/api/v1/mcp-transport",
      "headers": { "Authorization": "Bearer YOUR_JWT" }
    }
  }
}
```

Grab your JWT from browser dev tools after logging into HitLai. JWT expires in 24h; you'll need to re-paste it. **Use API key or OAuth instead for anything but a one-off test.**

---

## Local development / self-hosted

```json
{
  "mcpServers": {
    "aictrlnet-local": {
      "type": "http",
      "url": "http://localhost:8000/api/v1/mcp-transport",
      "headers": { "Authorization": "Bearer dev-token-for-testing" }
    }
  }
}
```

For self-hosted customers, replace `aictrlnet.com` with your deployment's hostname in the OAuth / API-key configs above. Same flows apply. Admin needs to set `MCP_PUBLIC_URL=https://aictrlnet.customer.com` in the business container so the OAuth metadata document contains absolute URLs.

---

## Verifying it works

```bash
claude mcp list
```

Expect 51 tools on Community, 158 on Business, or 194 on Enterprise — filtered by your tenant's plan tier automatically.

Quick sanity test:
```
> list my workflows

Found 3 workflows: Data Validation Pipeline (active), Invoice Processing (active), Customer Onboarding KYC (paused)
```

---

## Plan-tier behavior

Tools are filtered by your tenant's subscription tier in `tools/list`. If you call a tool above your tier, you get `-32602 Method not found` — this prevents tier-taxonomy leaks (Community can't even probe Enterprise tool names).

| Tier | Tool examples |
|---|---|
| Community (51) | `create_workflow`, `execute_workflow`, `list_adapters`, `nl_to_workflow`, `upload_file`, `get_memory`, `query_knowledge`, `create_task` |
| Business (+107) | `evaluate_policy`, `generate_adapter`, `self_extend`, `browser_execute`, `automate_company`, `list_agents`, `list_pods`, `get_cost_analytics`, `create_sla`, `list_roles` |
| Enterprise (+36) | `query_analytics`, `get_audit_logs`, `run_compliance_check`, `federated_knowledge_query`, `register_federated_peer`, `list_resource_pools` |

Upgrade path: `get_subscription` + `get_upgrade_options` (live on every tier).

---

## Troubleshooting

| Error | What it means | Fix |
|---|---|---|
| `401 Unauthorized` + `WWW-Authenticate: Bearer resource_metadata=...` | Missing or invalid credential. For OAuth clients this triggers re-auth automatically. | For API key: check `X-API-Key` header is set and the key is active. For JWT: re-grab a fresh token. |
| `-32602 Method not found` for a tool you expect to exist | Plan tier below the tool's requirement. | Upgrade via `get_upgrade_options` or use a tier-appropriate alternative. |
| `{"error":"scope_denied",...}` | API key missing the scope the tool requires. | Regenerate the key with additional scopes or pick a different tool. |
| `{"error":"quota_exceeded","meter":"llm_calls",...}` | Monthly LLM-call budget exhausted. | Wait until next billing period, or upgrade via the `upgrade_url` in the response. |
| `{"error":"rate_exceeded",...}` | Per-tool or per-key rate bucket tripped. | Slow down, or lower per-tool caps in the key settings. |
| `{"feature_pending": true, ...}` | Tool is wired but its backing service hasn't shipped. | Claude Code won't recommend these for your tasks — just reminder in case you called by name. |
| `invalid_grant` during OAuth token exchange | PKCE verifier wrong, code expired, or code replayed. | Start the authorize flow over — shouldn't happen in normal Claude Code usage. |
| OAuth redirect loop after login | `MCP_PUBLIC_URL` wrong on self-hosted deploys. | Admin: set `MCP_PUBLIC_URL=https://<your-domain>` and restart. |

---

## Tool discovery tips

Some flagship tools Claude Code won't surface in tool-listing unless you ask:

- **`self_extend`** — "Research the <service name> API and generate an adapter, then auto-activate if risk score is low." One-call hero for v11.4 self-extending agents.
- **`automate_company`** — Describe your company; AICtrlNet builds the full org automation — workflows, agents, pods, departments. Optional `industry` parameter picks from 41 industry packs.
- **`list_industry_packs` + `detect_industry`** — Browse or auto-detect which vertical pack fits before running `automate_company`.
- **`browser_execute`** — When no adapter exists for a web app, Claude can drive it directly. Sandboxed with SSRF defense + per-tenant Playwright contexts.
- **`nl_to_workflow`** — Describe a process in English; get a validated, executable workflow back.
- **`form_pod` / `dispatch_swarm`** — Multi-agent collaboration on complex tasks.

---

## Rate limits + metering

- **Per-tool rate buckets**: Redis `INCR`/`EXPIRE` per principal + tool. Principal format: `apikey:<tenant_id>:<key_id>`. Override via **Settings → API Keys → Advanced**.
- **Metering**: metered tools (`create_workflow`, `send_message`, `generate_adapter`, `automate_company`, `browser_execute`, etc.) deduct atomically from your tenant's `llm_calls` / `browser_actions` quota — no concurrent-call overruns.
- **Idempotency**: pass `idempotency_key` on metered tool calls to make replays safe. Cached responses live 24h, keyed by `(tenant, tool, key)`.

---

## Revocation

### API key
**Settings → API Keys** → **Delete** or **Regenerate**. Delete stops the key immediately (in-flight requests complete, new requests 401). Regenerate rotates the hash — old key stops working, new key is displayed once.

### OAuth session
**Settings → Authorized Apps** → Delete the Claude Code / Cursor / whatever entry. Access and refresh tokens are immediately revoked; the MCP client will start a fresh OAuth flow the next time you use it.

### JWT
JWTs cannot be revoked mid-flight — they expire naturally at 24h. If you need to stop an abused session, force the user to re-login; their `token_version` increments and any JWT minted before that is rejected.

---

## Admin environment variables (self-hosted)

| Env | Default | Purpose |
|---|---|---|
| `MCP_PUBLIC_URL` | derived from request | Absolute base URL for OAuth metadata docs + initialize capability. Set explicitly behind a proxy. |
| `MCP_ALLOW_TENANT_OVERRIDE` | `false` | Gate the `X-Tenant-ID` header override (Track A1 security). |
| `MCP_TENANT_OVERRIDE_INTERNAL_CIDRS` | loopback + RFC1918 | CIDRs where override is accepted. |
| `MCP_ENABLE_BUSINESS_TOOLS` | per-container | Explicit Business tool registration. |
| `MCP_ENABLE_ENTERPRISE_TOOLS` | per-container | Explicit Enterprise tool registration. |
| `MCP_PAST_DUE_GRACE_DAYS` | `3` | Grace days before PAST_DUE subscription falls back to community. |
| `MCP_COMPLIANCE_REQUIRED_FOR_ENTERPRISE` | `true` | Enterprise compliance + audit fail-secure. |
| `MCP_CORS_STRICT` | `true` | Route-level strict CORS for MCP endpoint. |
| `MCP_REQUIRE_BEARER_OR_APIKEY` | `true` | Reject cookie-only requests. |
| `MCP_DEV_TOKEN_PROD_BLOCK` | `true` | Block `dev-token-for-testing` outside `ENVIRONMENT=development`. |
| `MCP_OAUTH_CONSENT_TTL_DAYS` | `30` | TTL on OAuth consent grants. |
| `MCP_DCR_DEFAULT_TENANT_ID` | `mcp-dcr-public` | Tenant bucket for Dynamic Client Registration until HitLai per-tenant DCR UI ships. |

Deep-dive documents (architecture spec, threat model, admin runbook, scope reference) ship with the platform repository under `docs/architecture/`. Questions: [support@aictrlnet.com](mailto:support@aictrlnet.com).
