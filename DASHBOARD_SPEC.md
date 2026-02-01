# GitHub Dashboard Specification

**Repo:** rccoleman19/cole-dashboard

This is your workspace and public-facing dashboard. Single source of truth for what we're working on.

---

## What the Dashboard Should Show

### 1. Opportunity Pipeline

All ideas we're tracking, organized by stage:

- **Researching** - You're gathering info, not ready to propose yet
- **Proposed** - You've sent me a proposal, waiting for my decision
- **Approved** - I said yes, we're building it
- **In Progress** - Actively being built, show current status
- **Live** - Launched and running
- **Rejected/Parked** - I said no or we shelved it (keep for reference)

### 2. For Each Opportunity

- Name
- One-line description
- Current stage
- Last updated date
- Revenue status (if live): $0 → target

### 3. Summary Stats at the Top

- Total opportunities tracked
- How many in each stage
- Current monthly revenue vs $400 target

---

## Update Cadence

**Keep it updated:**
- Every time an opportunity moves stages → update the dashboard
- Every time you find something new worth tracking → add it
- This is our single source of truth for what we're working on

---

## Format

- Simple, clean HTML
- Easy to scan
- I should be able to check the dashboard and know exactly where everything stands in **10 seconds**
