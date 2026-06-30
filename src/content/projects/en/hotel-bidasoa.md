---
slug: hotel-bidasoa
locale: en
title: Real-Time Inventory System
role: Systems Developer — Hotel Bidasoa
period: May 2025 — Present
summary: I designed and shipped a real-time inventory system for three sites (warehouse, Bar Casa Sanz, Hotel Bidasoa Bar), cutting operating costs by ~$1,000,000 CLP per month.
stack: ["React", "TypeScript", "Supabase", "PostgreSQL", "Looker Studio"]
metrics:
  - "95% traceability on warehouse orders"
  - "40% improvement in order-receiving efficiency"
  - "20% gain in procurement efficiency"
featured: true
order: 1
---

## The problem

The group ran inventory and purchase orders across three sites using decentralized Excel sheets, with no real traceability between the warehouse and the bars. Stockouts and double orders caused real monthly losses and constant friction between teams.

## The solution

I built a web app with **React + TypeScript** on top of **Supabase** (PostgreSQL + Realtime). The system centralizes products, stocks, and orders across all three sites with live sync — when a bar requests an item, the warehouse sees it appear instantly on their dashboard.

### What I shipped

- Product catalog with per-site stock and out-of-stock alerts.
- Bar → warehouse order flow with statuses (requested, prepared, delivered, received).
- Sales dashboard in **Looker Studio**, wired to point-of-sale and stock data.
- Role-based access (admin, warehouse, server, management) using Postgres RLS policies.
- In-progress integration with the **FNSrooms** PMS over REST.

## Impact

- **95%** traceability on warehouse orders (previously unmeasurable).
- **40%** less time for teams to receive accurate orders.
- **20%** efficiency gain in supplier purchasing.
- Estimated **~$1,000,000 CLP/month** reduction in operating costs.

## Bonus

I authored the full commercial proposal for the finance leadership: pitch deck, 2026–2028 cash-flow projection, and ROI analysis in CLP.
