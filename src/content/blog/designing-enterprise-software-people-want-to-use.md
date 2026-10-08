---
title: "Designing Enterprise Software People Actually Want to Use"
description: "Why internal tools get ugly, and how progressive disclosure, density controls and task-time metrics turn required software into preferred software."
pubDate: 2025-01-14
author: "Vesharo Engineering"
category: "UX Design"
image: "/images/blog/cover-enterprise-ux.jpg"
tags: ["UX", "Enterprise", "Product Design"]
---

Enterprise software has a reputation, and it earned it: forty-column tables,
dialogs inside dialogs, and a settings page that looks like an airtraffic
console. The cruel part is that most of it is optional. Tools get ugly because
they're loved to death — every stakeholder adds one more field, one more
column, one more required step.

The operators who live in these tools eight hours a day pay the tax every
time. Here's how we design against it.

## Research with the people who do the work

Not the managers — the dispatchers, the claims adjusters, the nurses' aides.
We watch actual sessions and count actual clicks. The fastest way to kill a
feature request is to show a screenshot of the operator already doing that
task in three clicks with the tool they love.

We map the top five jobs-to-be-done before designing anything, and we keep a
running list of jobs the tool _doesn't_ do. Scope discipline is a design
activity.

## Progressive disclosure, not progressive confusion

The rule: **the screen shows what this decision needs right now.** Everything
else lives one deliberate interaction away.

- Default views carry the 80% case — the handful of fields and columns used in
  almost every session.
- Advanced and rare operations collapse into expandable panels, command
  palettes or secondary screens.
- Destructive actions sit apart from routine ones, with consequences spelled
  out in the user's language, not the database's.

Every element on screen is competing for attention with every other element.
Curating that competition is the job.

## Respect density — and let people choose

Consumer minimalism doesn't fit an operator scanning two hundred rows. We
design two calibrated densities out of the box — comfortable and compact —
with real type scale and hit targets in each, rather than one layout that
accordion-features into chaos.

Keyboard support is non-negotiable for power users: shortcuts for the common
paths, inline editing, and focus order that matches the visual flow. A
dispatcher should be able to work without reaching for the mouse.

## Consistency is a feature

We build on a design system with one button, one table, one dialog — configured
rather than reinvented per screen. Consistency compounds: the hundredth screen
takes days, not weeks, and users transfer knowledge between screens
effortlessly. The system is also where accessibility lives: contrast, focus
states and screen-reader labels are inherited, not remembered.

## Measure task time, not smiles

Satisfaction surveys flatter. The metrics that matter are operational:

- **Time to complete** the top jobs, before and after.
- **Error and rework rates** — did the design prevent the mistake or document
  it?
- **Time to proficiency** for a new hire.
- **Support tickets per workflow**, which is really a design defect log.

If a redesign doesn't move those numbers, it was decoration.

> The best compliment an internal tool can receive is that nobody mentions it
  at all — the work just gets done.

Enterprise software can be a competitive advantage rather than a tolerated
cost. When your claims team closes cases faster than your competitor's, that
difference was designed. We start most engagements with a two-week workflow
audit that turns these principles into a prioritized, costed plan — the
redesign usually pays for itself in the first quarter.
