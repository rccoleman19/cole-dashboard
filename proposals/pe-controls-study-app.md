# PE Control Systems Study App

## The Problem
Engineers preparing for the PE Control Systems exam ($350, once/year in October, 67% pass rate) lack affordable, mobile-friendly practice tools. Existing options are either expensive live courses ($1000+), desktop-only reference books ($150-300), or generic multi-discipline apps that don't focus on Control Systems specifics (measurement, control systems, final control elements, signals/networking, safety systems).

## Evidence of Demand
- **PE Prep Pro**: Multi-discipline app with 1,400+ questions across 16 engineering disciplines (exists = proven market)
- **PPI Control Systems materials**: $150 for sample questions book (premium pricing = willingness to pay)
- **School of PE**: Live review courses at $1000+ with "high pass rates" marketing (expensive alternative)
- **NCEES data**: 67% first-time pass rate = 33% fail and retake ($350 + lost time each attempt)
- **PrepFE (FE exam)**: $69.99 subscription model works for engineering exam prep
- **Reddit/forum activity**: Active discussions seeking Control Systems PE prep resources
- **ISA (International Society of Automation)**: Offers PE review course (EN00) - validates professional demand

## The Solution
Mobile-first study app focused exclusively on PE Control Systems exam. Practice questions across all five exam domains (Measurement, Control Systems, Final Control Elements, Signals/Transmission/Networking, Safety Systems) with step-by-step solutions, performance analytics, and offline access. Think PrepFE but for PE Control Systems.

## MVP Scope
- **Question bank**: 200+ practice questions covering all 5 exam domains
- **Practice modes**: Timed exam simulation (80 questions, 8 hours) + topic-specific practice
- **Solutions**: Step-by-step explanations with references to NCEES/ISA standards
- **Analytics**: Track performance by topic, identify weak areas
- **Mobile + web**: Responsive design, offline functionality
- **Reference materials**: Quick-access formulas and key concepts
- **Free tier**: 20 practice questions (lead generation)
- **Paid tier**: Full question bank + analytics + timed exams

## Build Estimate
**3-4 weeks** (aggressive but achievable for MVP)
- Week 1: Question content creation (80-100 questions with solutions)
- Week 2: Web app frontend (question delivery, timer, analytics dashboard)
- Week 3: Question content completion (200+ total), mobile optimization
- Week 4: Testing with Ryan (taking exam), polish, launch

**Tech stack**: Next.js + Supabase (fast setup, proven for SaaS)

## Monetization
**Subscription model:**
- **Free tier**: 20 practice questions (email capture for marketing)
- **Monthly**: $19.99/month (aligned with PrepFE $69.99 but simpler product = lower price)
- **One-time**: $49.99 lifetime access (exam is once/year, many prefer one-time payment)

**Secondary revenue:** Jedson Engineering referral pipeline
- Users = control systems engineers with 4+ years experience
- Warm leads for Jedson recruiting
- Estimated value: $5,000 per successful hire

## Path to $400/month
**Primary (subscriptions):**
- 20 monthly subscribers @ $19.99 = $400/month, OR
- 8 lifetime purchases/month @ $49.99 = $400/month

**Realistic assessment:**
- PE Control Systems exam: ~1,000 test-takers/year (estimate based on niche discipline)
- If we capture 5% of annual market = 50 users/year
- 50 users × $49.99 one-time = $2,500/year = **$208/month average**
- Need 2-3 exam cycles (2-3 years) to hit $400/month consistently

**Secondary (Jedson referrals):**
- 1 successful hire/year from user base = $5,000 bonus
- Combined: $208/month subscriptions + $417/month (amortized referral) = **$625/month**

**Confidence level**: Medium. Market is small but underserved. Dual revenue streams help.

## Risks/Unknowns
1. **Small market size**: PE Control Systems is niche (~1,000 test-takers/year vs 40,000+ for FE)
2. **Content quality bar**: Questions must match NCEES difficulty/style or users will complain
3. **Ryan's exam timing**: If he takes exam before MVP ready, we lose our perfect beta tester
4. **Competition**: PE Prep Pro already covers Control Systems (but not specialized)
5. **One-time payment preference**: If most users choose $49.99 lifetime vs monthly, revenue is lumpy
6. **Jedson referral conversion**: Unproven - do study app users actually want recruiting contacts?

## Recommendation
**Worth Exploring** - with caveats.

**Pros:**
- Ryan is perfect target user + tester
- Dual revenue streams (subs + referrals)
- Underserved niche with proven willingness to pay
- 3-4 week build timeline = fast validation

**Cons:**
- Small market caps revenue potential (~$200-600/month max)
- Content creation is time-intensive (200+ quality questions with solutions)
- Won't hit $400/month goal reliably for 1-2 years

**Strategic value beyond revenue:**
- Portfolio piece (working SaaS product)
- Learning opportunity (Next.js, Supabase, subscription payments)
- Real user feedback from Ryan
- Jedson relationship building

**Suggested approach:**
1. Build lean MVP (100 questions instead of 200)
2. Test with Ryan as he studies
3. Launch at $29.99 one-time (lower friction than subscription)
4. Validate demand with 10-20 paying users
5. If traction is weak, pivot to larger market (FE exam) or different opportunity

**Bottom line**: Good first product to build skills and prove you can ship, but unlikely to be the solo path to $400/month. Consider it a stepping stone, not the final answer.
