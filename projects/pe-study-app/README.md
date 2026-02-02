# PE Control Systems Study App

Mobile-first exam prep for PE Control Systems certification (NCEES).

## Project Status

**Phase:** MVP Development (Week 1 of 3-4)  
**Approved:** February 2, 2026  
**Target Launch:** Early March 2026

## Overview

Web-based study app targeting ~1,000 annual PE Control Systems exam takers. Responsive design works on iPhone, Android, and desktop. Focus on Apple ecosystem initially.

## Tech Stack

- **Frontend:** Next.js 14 + TypeScript + Tailwind CSS
- **Backend:** Supabase (PostgreSQL + Auth + Storage)
- **Deployment:** Vercel
- **PWA:** Offline support, Add to Home Screen

## MVP Features (100 questions)

- ✅ Question bank across 5 domains:
  - Measurement (20q)
  - Control Systems (30q)
  - Final Control Elements (20q)
  - Signals/Networking (15q)
  - Safety Systems (15q)
- ⏳ Practice modes:
  - Timed exam simulation (80q, 8 hours)
  - Topic-specific practice
- ⏳ Step-by-step solutions with references
- ⏳ Performance analytics by domain
- ⏳ Offline functionality

## Revenue Model

- **Free tier:** 20 practice questions
- **Monthly:** $19.99/month
- **Lifetime:** $49.99 one-time
- **Secondary:** Jedson Engineering referral pipeline ($5k/hire)

**Target:** $200-600/month

## Question Database

See [`sample-questions.json`](./sample-questions.json) for initial questions.

Current progress: **8/100 questions written**

### Domain Coverage
- ✅ Measurement: 2/20
- ✅ Control Systems: 3/30
- ✅ Final Control Elements: 1/20
- ✅ Signals/Networking: 1/15
- ✅ Safety Systems: 1/15

## Development Plan

**Week 1 (Feb 2-9):** Question content + data model  
**Week 2 (Feb 10-16):** UI/UX + question delivery  
**Week 3 (Feb 17-23):** Analytics + testing with Ryan  
**Week 4 (Feb 24-Mar 2):** Polish + launch prep

## Testing

Ryan (owner) will beta test while studying for PE exam (taking it this year).

## Files

- `questions-schema.md` - Question data structure
- `sample-questions.json` - Initial question bank
- *(Next.js app files coming next)*

---

**Last Updated:** February 2, 2026
