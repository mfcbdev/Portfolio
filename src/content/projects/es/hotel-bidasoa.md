---
slug: hotel-bidasoa
locale: es
title: Sistema de Inventario en Tiempo Real
role: Desarrollador de Sistemas — Hotel Bidasoa
period: Mayo 2025 — Actualidad
summary: Diseñé e implementé un sistema de gestión de inventario en tiempo real para tres locales del grupo (Bodega, Bar Casa Sanz, Bar Hotel Bidasoa), reduciendo costos operativos en ~$1.000.000 CLP mensuales.
stack: ["React", "TypeScript", "Supabase", "PostgreSQL", "Looker Studio"]
metrics:
  - "95% de trazabilidad en pedidos de bodega"
  - "40% de mejora en eficiencia de recepción de pedidos"
  - "20% de aumento en eficiencia de compras a proveedores"
featured: true
order: 1
---

## El problema

El grupo operaba inventario y pedidos entre tres locales con planillas Excel descentralizadas, sin trazabilidad real entre bodega y los bares. Los faltantes y dobles pedidos generaban pérdidas mensuales significativas y fricción operativa entre equipos.

## La solución

Construí una aplicación web con **React + TypeScript** sobre **Supabase** (PostgreSQL + Realtime). El sistema centraliza productos, stocks y pedidos entre los tres locales, con sincronización en vivo: cuando un bar solicita un producto, bodega lo ve aparecer al instante en su panel.

### Lo que entregué

- Catálogo de productos con stock por local y alertas de quiebre.
- Flujo de pedidos bar → bodega con estados (solicitado, preparado, entregado, recibido).
- Dashboard de ventas integrado en **Looker Studio**, conectando datos de caja y stock.
- Roles diferenciados (admin, bodeguero, garzón, gerencia) con políticas RLS de Postgres.
- Integración en curso con el PMS **FNSrooms** vía API REST.

## Resultado

- **95%** de trazabilidad en pedidos de bodega (antes no medible).
- **40%** menos tiempo de los equipos para recibir pedidos correctos.
- **20%** de aumento en eficiencia del proceso de compras a proveedores.
- Reducción estimada de **~$1.000.000 CLP/mes** en costos operativos.

## Bonus

Preparé la propuesta comercial completa para presentar a la dirección financiera: pitch deck, proyección de flujo de caja 2026–2028 y análisis ROI en CLP.
