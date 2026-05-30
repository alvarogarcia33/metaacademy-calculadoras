# MetaAcademy — Plan de trabajo por fases

## Regla principal
Construir por módulos.
No intentar desarrollar todo al mismo tiempo.

---

## FASE 1 — Base del producto
Objetivo: tener una primera versión navegable y visualmente sólida.

### Incluir
- autenticación
- registro y login
- perfil de usuario
- selección de avatar base
- dashboard principal
- layout responsive
- navegación principal
- estructura visual general

### Resultado esperado
El usuario puede:
- registrarse
- iniciar sesión
- ver su perfil
- entrar al dashboard
- visualizar nivel, XP, racha y monedas simuladas
- tener sensación de producto real

### Prioridad técnica
Alta

---

## FASE 2 — Mundo, rutas y nodos
Objetivo: construir el núcleo de aprendizaje.

### Incluir
- estructura de mundos
- rutas temáticas
- nodos de aprendizaje
- vista de mapa
- bloqueo/desbloqueo básico
- vista de lección
- primer set de actividades

### Resultado esperado
El usuario puede:
- entrar a un mundo
- ver rutas
- abrir nodos
- completar lecciones básicas
- volver al mapa con progreso actualizado

### Prioridad técnica
Alta

---

## FASE 3 — Gamificación
Objetivo: hacer que el producto empiece a generar hábito.

### Incluir
- sistema de XP
- niveles
- racha diaria
- energía o vidas
- logros
- badges
- recompensas por completar nodos y rutas

### Resultado esperado
El usuario siente:
- avance
- recompensas
- deseo de volver
- estatus por progresión

### Prioridad técnica
Alta

---

## FASE 4 — Economía interna
Objetivo: introducir balances, inventario y lógica de consumo.

### Incluir
- Spark
- MetaCoins
- balance por usuario
- inventario
- ítems básicos
- boosters
- protectores de racha
- simulación de compras internas

### Resultado esperado
El usuario puede:
- ganar moneda blanda
- ver saldo
- usar o consumir items
- entender la lógica económica

### Prioridad técnica
Media-alta

---

## FASE 5 — Tienda, pagos y certificados
Objetivo: activar monetización real.

### Incluir
- tienda
- catálogo de productos
- paquetes de MetaCoins
- integración de pagos
- webhooks
- emisión de certificados
- diplomas verificables

### Resultado esperado
El usuario puede:
- comprar
- acreditar saldo
- adquirir certificados
- descargar o consultar credenciales

### Prioridad técnica
Alta

---

## FASE 6 — Panel administrativo
Objetivo: operar la plataforma sin tocar código.

### Incluir
- login admin
- CRUD de mundos
- CRUD de rutas
- CRUD de nodos
- configuración de XP y recompensas
- gestión de tienda
- gestión de precios
- revisión de usuarios
- gestión de certificados

### Resultado esperado
El administrador puede operar contenido y economía desde panel.

### Prioridad técnica
Alta

---

## FASE 7 — Analítica y optimización
Objetivo: medir el negocio y el comportamiento del usuario.

### Incluir
- eventos de producto
- métricas de onboarding
- retención
- abandono por nodo
- conversión a compra
- tickets promedio
- panel interno de KPIs

### Resultado esperado
El sistema entrega datos para optimizar retención y monetización.

### Prioridad técnica
Media

---

## FASE 8 — Pulido visual y UX
Objetivo: mejorar percepción de marca y experiencia.

### Incluir
- animaciones suaves
- transiciones
- feedback visual
- mejoras de usabilidad
- estados vacíos
- loaders
- microinteracciones
- optimización mobile

### Resultado esperado
La app se siente profesional, moderna y más adictiva.

### Prioridad técnica
Media

---

## Orden recomendado para Codex
1. Crear arquitectura de carpetas
2. Definir stack técnico
3. Implementar Fase 1
4. Implementar Fase 2
5. Implementar Fase 3
6. Implementar Fase 4
7. Implementar Fase 5
8. Implementar Fase 6
9. Implementar Fase 7
10. Implementar Fase 8

---

## Regla operativa para cada fase
Antes de escribir código, Codex debe:
1. explicar qué va a construir
2. proponer estructura de archivos
3. implementar
4. resumir cambios realizados
5. indicar siguiente paso recomendado