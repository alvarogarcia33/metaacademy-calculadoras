# MetaAcademy

MetaAcademy es una web app educativa gamificada construida por fases.

La implementacion actual corresponde a la `Fase 1` definida en [TASKS.md](/C:/Users/alvar/OneDrive/Documentos/MetaAcademy/TASKS.md):

- landing publica con propuesta de valor
- registro y login funcionales
- sesion protegida con cookie firmada
- perfil editable con seleccion de avatar base
- dashboard principal con nivel, XP, racha, Spark y MetaCoins
- layout responsive listo para crecer hacia mapa, tienda y certificados

## Stack actual

La base del proyecto quedo montada con:

- `Next.js + React + TypeScript`
- `App Router` para rutas publicas, privadas y endpoints
- `Zod` para validacion de formularios y payloads
- `lucide-react` para iconografia base
- CSS global propio para el sistema visual de MetaAcademy
- almacenamiento local en JSON para iterar sin depender aun de base de datos externa

## Persistencia local

La persistencia activa de esta fase usa:

- `.data/metaacademy-db.json`

Esto permite desarrollar y validar la experiencia completa de onboarding sin bloquear el arranque por infraestructura.

## Estructura

```text
src/
  app/
    (auth)/
    (protected)/
    api/
  components/
    auth/
    layout/
    profile/
  lib/
    auth.ts
    avatar-catalog.ts
    constants.ts
    data-store.ts
    validators/
scripts/
  init-storage.mjs
```

## Comandos

```bash
npm install
npm run db:init
npm run dev
```

Variables opcionales:

```bash
copy .env.example .env.local
```

Produccion y chequeos:

```bash
npm run lint
npm run build
npm run start
```

## Flujo validado

Se verifico localmente:

- apertura de landing publica
- registro de usuario nuevo
- redireccion a perfil protegido
- cambio de avatar y guardado
- acceso a dashboard con datos persistidos

## Siguiente paso recomendado

Seguir con `Fase 2`: mundos, rutas, nodos, mapa visual y primer flujo de leccion.
