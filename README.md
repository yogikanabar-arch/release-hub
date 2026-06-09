# Release Hub
### May Mobility · TPM Team Release Management Dashboard

---

## What is Release Hub?

Release Hub is a unified, real-time release management dashboard built for the May Mobility TPM team. It replaces scattered spreadsheets, emails, and disconnected tools with one place where every release, task, issue, risk, and customer milestone lives — and syncs instantly across your entire team.

---

## System Requirements

| Requirement | Details |
|---|---|
| **Python 3** | Required to run the local server. Download free at [python.org](https://python.org) |
| **Chrome or Edge** | Recommended browser for best experience |
| **Internet connection** | Required for real-time Firebase sync |

---

## How to Open

### Mac
1. Unzip the `release-dashboard` folder
2. Double-click **`Open Release Hub.command`**
3. A terminal window opens and Chrome launches automatically
4. Wait ~3 seconds for the 🟢 **Live** dot in the top bar

### Windows
1. Unzip the `release-dashboard` folder
2. Double-click **`Open Release Hub.bat`**
3. A command window opens and Chrome launches automatically
4. Wait ~3 seconds for the 🟢 **Live** dot in the top bar

> **If it doesn't open:** Make sure Python is installed. Open Terminal (Mac) or Command Prompt (Windows) and run `python3 --version` to check.

---

## First Time Setup

The Firebase config is already baked into the file — no setup needed. Just open and go.

When you see the 🟢 **Live** dot, you're connected and synced with your team.

---

## Features Overview

| Tab | What it does |
|---|---|
| 🧭 **Release Roadmap** | Annual timeline with ✂️ Cut Date, 🚀 Deploy Ready, 👥 Customer Milestone swimlanes. Months and Quarters views. |
| 🔭 **Scope** | Feature-level tracking with TPM owner, impact, status, Jira link and introspection (planned vs delivered). |
| 📅 **Schedule** | Interactive Gantt chart with WBS numbering, drag-to-update bars, dependency arrows, critical path, swimlanes by phase or team, owner avatars. |
| ⚠️ **Risk** | Risk register with 5×5 probability × impact matrix. |
| 🐛 **Post-Deploy Issues** | Issue tracking with Sev0–Sev3 severity, P0–P3 priority, Jira integration, impacted customer auto-populated. |
| 📸 **Release Snapshot** | One-click compiled view of a release — KPIs, scope, milestones, critical path mini Gantt, risks, issues. |
| 🚙 **Deployment Cheat Sheet** | Quick reference table for all releases — version, code name, ADK, vehicle platform, sites, partners. |
| ⚙️ **Settings** | Manage team members, phases, teams, ADK versions, vehicle platforms, sites, operator partners, severity/priority definitions, and Firebase config. |
| 👥 **Customer Milestone Input** | Log customer milestones by partner — these appear in the 👥 swimlane on the Release Roadmap. |

---

## Real-Time Collaboration

Release Hub uses **Firebase Realtime Database** to sync all data across every team member's screen in ~1 second.

- Any change you make → appears on everyone's screen instantly
- No manual saving required — everything auto-saves
- Works as long as everyone has the 🟢 Live dot showing

---

## Key Workflows

### Adding a new release
1. Go to **🧭 Release Roadmap**
2. Click **+ Release**
3. Fill in: name, code name, type, cut date, deployment date, ADK versions, vehicle platforms, sites, partners
4. Click Save — appears on the roadmap immediately

### Updating task progress
1. Go to **📅 Schedule**
2. Click a task row or drag the bar left/right to adjust dates
3. Use the **−/+** buttons on the % column to update progress
4. Changes sync to Firebase automatically

### Logging a post-deploy issue
1. Go to **🐛 Post-Deploy Issues**
2. Click **+ Report Issue**
3. Set severity (Sev0–Sev3) and priority (P0–P3)
4. Link a Jira ticket ID if applicable

### Setting a customer milestone
1. Go to **👥 Customer Milestone Input**
2. Click **+ Add**
3. Select the customer from the dropdown (managed in ⚙️ Settings)
4. Set the milestone name and target date
5. The milestone appears in the 👥 swimlane on the Release Roadmap

### Checking release status
1. Go to **📸 Release Snapshot**
2. Select the release from the dropdown
3. See everything compiled — header details, KPIs, scope, milestones, critical path Gantt, risks, issues

---

## Managing Reference Data

All reference data is managed in **⚙️ Settings**:

| Data | Where to manage |
|---|---|
| Team members + photos | Settings → Team Members |
| ADK versions + descriptions | Settings → ADK Versions |
| Vehicle platforms | Settings → Vehicle Platforms |
| Deployment sites (ATL, ARL…) | Settings → Sites |
| Operator partners + logos | Settings → Operator Partners |
| Phases + colors | Settings → Phases |
| Teams / Swimlanes | Settings → Teams |
| Severity & Priority definitions | Settings → Severity & Priority |

---

## Updating the App

When a new version of `index.html` is shared:

1. Replace the old `index.html` with the new one in the folder
2. Keep `Open Release Hub.command` and `Open Release Hub.bat` — these don't change
3. Re-share the zip with your team
4. **Your data is safe** — it lives in Firebase, not in the file

---

## Exporting Data

| Export | How |
|---|---|
| Full release report | ⬇ Export → Full Release Report (HTML) |
| Gantt chart image | 📷 PNG button in Schedule toolbar |
| Tasks CSV | ⬇ Export → Tasks CSV |
| Issues CSV | ⬇ Export → Issues CSV |
| Deployment cheat sheet CSV | 🚙 Deployment Cheat Sheet → ⬇ CSV |
| Roadmap export | 🧭 Release Roadmap → ⬇ Export |

---

## Support

Built by the May Mobility TPM Team.  
For issues or feature requests, contact Yogi Kanabar.

---

*Release Hub · May Mobility · 2026*
