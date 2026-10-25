# Product Marketing Context

**Document version:** v1
**Last updated:** 2026-10-18

## Product Overview
**One-liner:** Session tracking for Shopify that measures what GA4 and Shopify Analytics miss — without cookies or a consent banner.
**What it does:** Sam watches every shopper session on your Shopify store, shows where the purchase funnel breaks, measures conversion by landing and campaign, and matches orders from Shopify webhooks. It coexists with GA4 and Shopify Analytics: more privacy and fuller session data for consent-declining traffic, at the cost of not following shoppers across days.
**Product category:** Shopify analytics / cookieless session tracking / conversion funnel analytics
**Product type:** SaaS (Shopify app)
**Business model:** Session-volume plans: Garden €29 (25k), Meadow €79 (100k), Valley €169 (300k), Forest €349 (1M). Yearly = 2 months free. 7-day trial via Stripe (card required). Multi-store: sessions across stores on one account are pooled for the plan and invoice. Enterprise above 1M sessions via sales email. Rationale in `.agents/pricing-strategy.md`.

## Target Audience
**Target companies:** Shopify stores under ~€20M annual revenue that want a clear view of what happens in the store without hyper-granular or cross-session identity analytics. Strong fit in the EU (GDPR / ePrivacy).
**Decision-makers:** Solo founders, CMOs, and CRO agencies managing multiple stores.
**Primary use case:** Understand the purchase flow, conversion per landing, and where each shopper drops — without losing data to cookie consent.
**Jobs to be done:**
- See where the funnel breaks (visit → product → cart → checkout → purchase)
- Know which landings and campaigns convert to orders
- Keep analytics that work when shoppers decline cookies
**Use cases:**
- Diagnose drop-offs by device, channel, or country
- Attribute UTM campaigns through to checkout
- Match Shopify orders to the session that drove them when seen

## Personas
| Persona | Cares about | Challenge | Value we promise |
|---------|-------------|-----------|------------------|
| Solo founder | Clarity without a data team | Orders appear with missing origin; landings feel opaque | Funnel + sessions + campaigns in one Shopify-first view |
| CMO / growth | Campaign ROI and landing conversion | Attribution gaps from consent and tools not built for Shopify | Conversion by campaign and landing without a banner for Sam |
| CRO agency | Multi-store diagnosis, repeatable insights | Clients lose EU data to consent; GA4 setup is heavy | Install per store, cookieless sessions, honest order match |

## Problems & Pain Points
**Core problem:** Merchants cannot fully see what happens in the store — especially conversion by landing and campaign origin — and cookie consent silently removes a slice of analytics.
**Why alternatives fall short:**
- GA4: cookies, consent mode, general-purpose setup; browser-side orders leave gaps
- Shopify Analytics: limited when shoppers decline consent; less visit-level path detail
- Simple Analytics / Plausible: privacy-friendly but not Shopify funnel / order-native
**What it costs them:** Misallocated ad spend, fixing the wrong funnel step, unexplained orders
**Emotional tension:** Feeling blind on “where money is leaking” while still juggling compliance

## Competitive Landscape
**Direct:** GA4 — powerful but cookie/consent heavy; not Shopify-first funnels out of the box
**Direct:** Shopify Analytics — free and native, but incomplete for decline-consent traffic and deep session paths
**Secondary:** Simple Analytics / Plausible — privacy analytics without Shopify order funnel depth
**Indirect:** Doing nothing / gut feel — no structured landing or campaign conversion view

## Differentiation
**Key differentiators:**
- Shopify-first conversion funnel (sessions, campaigns, orders)
- No cookies, no browser storage, no consent banner for Sam
- Orders from Shopify webhooks (100% order match; ~90–95% with complete session)
**How we do it differently:** Daily-salted session hash + Shopify webhooks; live session detail without cross-day identity
**Why that's better:** Decisions on landings and campaigns with fuller EU coverage and privacy by default
**Why customers choose us:** Privacy + actionable Shopify conversion data in one install

## Objections
| Objection | Response |
|-----------|----------|
| “I already have GA4 / Shopify Analytics” | Keep them. Sam adds cookieless session paths, landing/campaign conversion, and order-linked funnels they miss — especially when consent is declined. |
| “Can you follow returning customers?” | No by design. Sessions reset daily so shoppers aren’t followed across days. Use GA4 if you need that. |
| “Is the data complete?” | Every Shopify order is counted (webhooks). About 90–95% of orders link to a complete session when Sam saw the checkout. |
| “Will this need legal/consent work?” | Sam sets no cookies and writes nothing to the browser. Still review your overall stack with counsel; Sam itself doesn’t need a banner for its analytics. |
| “Trial needs a card?” | Yes — 7 days via Stripe. Cancel before it ends if it’s not a fit. |

**Anti-persona:** Teams that need cross-session identity, multi-site user graphs, ad-platform audiences, or hyper-specific enterprise BI. Stores outside Shopify (Woo, PrestaShop) are out of scope.

## Switching Dynamics
**Push:** Consent gaps, unexplained orders, unclear landing conversion
**Pull:** Cookieless Shopify funnel, campaign → order clarity, EU hosting
**Habit:** Already living in GA4 or Shopify admin reports
**Anxiety:** Another tool, card on trial, “is privacy marketing fluff?”

## Customer Language
**How they describe the problem:**
- "A veces entran pedidos con fallos y no sé de dónde vienen"
- "Tengo un problema con la atribución de campañas"
- "No sé cuánto convierte cada landing"
**How they describe us:**
- (Pre-launch — use product language below until customer quotes exist)
**Words to use:** session, funnel, landing, campaign, conversion, drop-off, Shopify, cookieless, no banner, order match, EU
**Words to avoid:** trail (metaphor), poetic journey language, “no card needed”, cross-session tracking claims, PII / follow-across-sites
**Glossary:**
| Term | Meaning |
|------|---------|
| Session | One visit grouped by daily-salted hash (IP + UA + store); not a person across days |
| Funnel | Visit → product viewed → cart → checkout → purchase |
| Order match | Order from Shopify webhook; credited to session/campaign when checkout was seen |
| Complete session | Order linked to full session path (~90–95% of orders) |

## Brand Voice
| Attribute | Means | Doesn't mean | Example line |
|-----------|-------|--------------|--------------|
| Direct | Concrete nouns: funnel, landing, session | Trail metaphors, poetic filler | See where shoppers drop between cart and checkout. |
| Honest | States the tradeoff (no cross-day) | Hype, absolute “complete picture” | We don’t follow shoppers across days. |
| Close | Speaks to founders and marketers as peers | Corporate SaaS sludge | Start your 7-day trial. |
| Shopify-native | Store, order, App Store, webhook language | Generic “websites and apps” | Orders come from Shopify webhooks. |

**Tone by context:**
- Support: Clear, short, factual (email / future AI chatbot)
- Launch: Confident, problem-first for cold SEO/ads traffic
- Errors: Plain and calm
- Sales: Trial-led; enterprise only above 1M sessions
- Social: Same direct voice, one claim per post
**Terms we own:** Sam / SAM, samtrack.co, cookieless Shopify sessions
**Never use (and why):** “Trail” as brand metaphor (too poetic); “no card needed” (trial requires Stripe card); claims of following users across sessions or sites

## Proof Points
**Metrics:**
- 100% of Shopify orders counted (webhook match)
- ~90–95% of orders with a complete session path
- 0 cookies / 0 browser storage for Sam’s analytics
**Customers:** Pre-launch — no logos yet
**Testimonials:** None yet
**Value themes:**
| Theme | Proof |
|-------|-------|
| Full order count | Shopify webhooks |
| Privacy by default | No cookies, daily salt, EU host |
| Actionable funnel | Five-step Shopify funnel + session detail |

## Goals
**Primary business goal:** Acquire Shopify merchants via SEO and ads into paid plans after trial
**Key conversion action:** Start trial (Stripe, 7 days, card required)
**Current metrics:** Pre-launch

## Paid Ads
*(Placeholder for when ads run)* Traffic intended from SEO + ads; cold visitors. Primary conversion: Start trial.

## Changelog
| Date | Version | Change |
|------|---------|--------|
| 2026-10-18 | v1 | Initial brief from founder interview for Copy v2 Paper + site rewrite |
| 2026-10-18 | v1.1 | Pricing v1: Meadow €59→€79, Valley €119→€169, new Forest €349 (1M), enterprise threshold 300k→1M, agency 20% from 3 stores. Competitor data in `competitor-profiles/` |

## Learnings
- 2026-10-18: Copy v2 shipped in Paper (`Copy v2 — conversion`) + EN repo. Angle: cold visitor SEO/ads → “what GA4/Shopify miss” + no cookie banner. Dropped “trail” metaphor. Trial requires Stripe card (corrected prior “no card” claim). Proof lines: 100% order webhook match; ~90–95% complete session. ES localized in Paper only (site still EN).
- 2026-10-18 (hero): Founder rejected "See what GA4 and Shopify miss" (defines Sam by rivals). Hero now "Find where your Shopify store loses buyers". Test candidate B: "Know which landings and campaigns actually sell".
- 2026-10-18 (copy v3): Founder found v2 copy too long and confusing. Whole site rewritten short: one idea per line, most lines under 10 words, no mechanism jargon (salt, hash, webhooks, MCP) outside How it works. Use "visit" / "visitor ID" over "session key". Don't claim "plenty of stores" or any adoption until customers exist.
- 2026-10-18 (CRO): Home restructured for conversion (Problem → Proof → Features → Coexist → Privacy → Pricing → FAQ). Banned em dashes and stacked “No X. No Y.” in marketing prose. Paper artboard `EN · Home CRO (repo)` mirrors current Next.js argument.
