---
title: "Cloud Migration Without Downtime: A Practical Playbook"
description: "How we move production systems to the cloud in phases — strangler-fig migration, dual-write validation and a cut-over runbook you can actually roll back."
pubDate: 2025-02-18
author: "Vesharo Engineering"
category: "Cloud"
image: "/images/blog/cover-cloud-migration.jpg"
tags: ["Cloud", "AWS", "Migration"]
---

"Big-bang migration weekend" is the most expensive sentence in infrastructure
planning. Everything either works on Monday morning, or the business is closed
for business. After migrating logistics, healthcare and fintech platforms with
zero customer-facing outages, our playbook comes down to one rule: **never
move what you can't move back within ten minutes.**

## Migrate in phases, not in a big bang

We use the strangler-fig pattern. In front of the legacy system sits a routing
layer — a load balancer or API gateway — and you move one capability at a
time behind it:

1. Identify the least risky, highest-value capability first (a read-heavy API,
   a reporting endpoint).
2. Build its replacement in the cloud.
3. Shift a slice of traffic to it.
4. Watch it. Only then move the next capability.

Each phase is a shippable, reversible step. The legacy system keeps running
until its replacement has proven itself under real load — sometimes for weeks.

## Duplicate before you migrate

Migrations fail when data diverges silently. Before cut-over we run
**dual-writes**: every write goes to both old and new stores inside one
transaction path, with a background job reconciling rows and flagging
mismatches.

For read-heavy systems we run shadow reads: production queries hit the new
database in parallel, and we compare results and latency without ever showing
the answer to a user. When the comparison report stays green for a week, the
new store is trustworthy.

## The cut-over runbook

Cut-over day should be boring — boring is the goal. The runbook is a written
script with named owners:

- **T-minus 48h:** freeze schema changes; confirm reconciliation reports are
  clean; brief support staff.
- **T-minus 1h:** lower DNS TTL; verify health checks, backups and rollback
  commands on the new stack — actually run the rollback once, in staging.
- **Cut-over:** shift traffic at the routing layer — not by redeploying
  clients. Feature flags, not faith.
- **First hour:** error rate, latency, queue depth and business metrics on one
  dashboard, with one person watching each.
- **Rollback trigger:** predefined, numeric, and anyone may pull it. No
  meeting required.

## Prove parity with numbers

"We think it works" is not parity. We define parity queries before migration:
order counts per hour, reconciliation totals, p95 latencies per endpoint. The
migration dashboard shows old versus new side by side until the new system
wins for a full business cycle — including the Monday morning spike.

## Control the cost of running two systems

Running legacy and cloud simultaneously is temporary, but the bill is real.
Contain it:

- Right-size the new stack for migration load, then tune after cut-over.
- Tag every resource with the migration phase; review spend weekly, not
  monthly.
- Decommission legacy **immediately** after each phase stabilizes. Rotting
  zombie systems are where migration budgets go to die.

## What "no downtime" actually requires

Underneath the runbook sits engineering that makes a rollback instant:
stateless services behind health-checked load balancers, autoscaling groups
that absorb the traffic shift, database failover tested in production
conditions, and circuit breakers so a slow dependency can't cascade.

> A migration you can't roll back in ten minutes isn't finished — it's just
> scheduled.

Most systems can move to the cloud in six to sixteen weeks of phased work with
customers noticing nothing but, hopefully, better performance. If you're
planning a move, the cheapest thing you can do is start with the runbook and
the rollback path — the infrastructure decisions get much easier after that.
