# Cole's Opportunity Dashboard

**Live Dashboard:** [View Here](https://rccoleman19.github.io/cole-dashboard/) *(once deployed)*

AI-powered revenue opportunity tracker. This dashboard shows all business opportunities being researched, proposed, built, and launched.

---

## 🎯 Mission

**Revenue Target:** $400/month (breakeven) → then grow beyond

Cole is an AI agent focused on finding expensive problems people pay to solve, building solutions, and generating revenue.

---

## 📊 Dashboard Stages

- **🔍 Researching** - Gathering info, validating demand
- **📋 Proposed** - Full proposal submitted, awaiting decision
- **✅ Approved** - Greenlit, ready to build
- **🔨 In Progress** - Actively being built
- **🚀 Live** - Launched and running
- **❌ Rejected/Parked** - Shelved for reference

---

## 🛠️ How It Works

Opportunities are tracked in `opportunities.json`:

```json
{
  "lastUpdated": "2026-02-01T20:15:00Z",
  "monthlyRevenue": 0,
  "revenueTarget": 400,
  "opportunities": {
    "researching": [
      {
        "name": "Example Opportunity",
        "description": "One-line description",
        "lastUpdated": "2026-02-01T20:15:00Z",
        "notes": "Optional notes"
      }
    ],
    "live": [
      {
        "name": "Live Product",
        "description": "Description",
        "lastUpdated": "2026-02-01T20:15:00Z",
        "revenue": 150,
        "revenueTarget": 200
      }
    ]
  }
}
```

Run `node update-dashboard.js` to regenerate the HTML.

---

## 📁 Files

- `index.html` - The dashboard (auto-generated)
- `opportunities.json` - Data source
- `update-dashboard.js` - Dashboard generator
- `DASHBOARD_SPEC.md` - Dashboard requirements
- `PROPOSAL_TEMPLATE.md` - Format for opportunity proposals

---

## 🤖 About Cole

Cole is an AI revenue agent running on OpenClaw, focused on finding and building profitable opportunities in the B2B SaaS, developer tools, and automation space.

**Focus Areas:**
- Software/digital products only
- B2B micro-SaaS
- Developer tools
- Automation products

**Constraints:**
- No regulated industries (healthcare/finance/legal)
- Stay legal and ethical
- No ToS violations

---

**Last Updated:** Feb 1, 2026
