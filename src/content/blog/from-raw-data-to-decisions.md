---
title: "From Raw Data to Decisions: Building a Modern Analytics Stack"
description: "Define the decisions first, then build the pipeline — a practical architecture for ingestion, warehousing, transformation and dashboards people actually reopen."
pubDate: 2025-01-29
author: "Vesharo Engineering"
category: "Data & AI"
image: "/images/blog/cover-analytics.jpg"
tags: ["Data", "Analytics", "Pipelines"]
---

Every analytics project we inherit has the same postmortem: terabytes ingested,
dashboards built, and a leadership team that still asks for numbers in Slack.
The technology was never the problem. The project started with tools instead of
with decisions.

## Start with the decisions, not the data

Before touching a warehouse, we list the decisions the business makes weekly —
pricing changes, inventory bets, churn interventions — and the numbers each
decision needs. That list becomes your backlog, and it is usually a third the
size of the pipeline someone was about to build.

A useful filter: for each proposed metric, name the person who acts on it and
the action they take. If nobody can, the metric is decoration.

## The four layers that keep it sane

A modern stack doesn't need many pieces, but it needs clear seams:

1. **Ingestion.** Batch extracts from application databases and SaaS tools,
   plus event streams for behavior. Managed connectors and change-data-capture
   keep this layer dull — which is the point.
2. **Warehouse.** One cloud warehouse (BigQuery, Snowflake, Redshift) as the
   single source of truth. Schema-on-read with raw tables intact, so any
   number can be traced back to source.
3. **Transformation.** Version-controlled SQL models — dbt makes this
   straightforward — that turn raw tables into documented, tested business
   entities: `orders`, `subscriptions`, `customer_ltv`.
4. **Semantic layer + BI.** One definition of "active customer" that dashboards
   and the machine-learning features both consume. When two teams disagree on a
   metric, the argument ends in the repository, in a pull request.

## Test the data like it's code

Data breaks quietly: an upstream API renames a field, a source drops rows, a
clock drifts an hour. Transformations ship with tests — uniqueness, referential
integrity, freshness — and the pipeline fails loudly rather than publishing a
number that's wrong by 12%.

We also track **freshness SLAs** per table. Executives forgive slow data;
nobody forgives confident, incorrect data.

## Dashboards people reopen

The graveyard of one-view dashboards is vast. Design for the second open:

- Put decisions at the top, diagnostics below. A VP should see _what changed_
  in five seconds and an analyst should be able to drill to _why_.
- Fewer tiles, better questions. Ten charts that answer one decision beat
  sixty that answer none.
- Annotate everything: metric definitions live next to the chart, not in
  someone's notebook.

When a dashboard survives a quarter of weekly meetings, it's working. When
nobody opens it twice, delete it — dashboard rot erodes trust in everything
next to it.

## Start small, prove the loop

You don't need a data lake on day one. A convincing first increment is four
weeks: one source system, one warehouse, five tested models, three dashboards
tied to real decisions. Once the business sees a number they trust used in a
meeting they remember, funding the rest of the platform becomes easy.

> Data pays for itself only when it changes a decision. Everything before that
> is inventory.

If your stack is already past the point of trust — conflicting numbers,
nobody knowing which dashboard is right — we start with a metrics audit:
reconcile the top ten numbers leadership uses, put definitions in version
control, and rebuild confidence from there.
