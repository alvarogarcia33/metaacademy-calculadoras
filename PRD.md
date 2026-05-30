# MetaAcademy — PRD V1

## Resumen del proyecto
MetaAcademy es una web app educativa gamificada inspirada en la lógica de hábito, progresión y retención de plataformas como Duolingo, pero aplicada a temas del nuevo mundo digital: criptomonedas, blockchain, Web3, activos digitales, liderazgo y crecimiento personal.

El objetivo no es vender cursos tradicionales, sino construir una experiencia donde el usuario avance, desbloquee, coleccione, compita, se certifique y quiera volver todos los días.

## Objetivo de producto
Crear una plataforma freemium educativa, visualmente atractiva, adictiva y monetizable, que permita:
- enseñar habilidades del nuevo mundo digital
- generar hábito diario de uso
- monetizar sin destruir la experiencia gratuita
- escalar desde una V1 sólida hacia versiones futuras sin rehacer toda la arquitectura

## Propuesta de valor
MetaAcademy debe sentirse como una mezcla entre:
- plataforma educativa
- videojuego de progresión
- sistema de identidad digital personal

Promesa central:
Aprender sobre el nuevo mundo digital de una forma clara, entretenida y con sensación real de avance.

## Público objetivo
Segmentos prioritarios:
- personas de 18 a 45 años interesadas en cripto y Web3
- emprendedores digitales
- networkers
- estudiantes y profesionales
- usuarios que se aburren con cursos largos
- personas que responden bien a gamificación, progreso y recompensas

## Arquitectura funcional del producto
La V1 se organiza en 4 mundos principales:
1. Nuevo Mundo Digital
2. Cripto y Blockchain
3. Web3 y Activos Digitales
4. Liderazgo y Crecimiento Personal

Estructura recomendada:
- 4 mundos principales
- 18 a 22 rutas temáticas
- 120 a 150 nodos de aprendizaje
- actividades interactivas variadas
- sistema de progreso, economía, inventario y certificados

## Experiencia de usuario
El onboarding debe llevar al usuario a una primera victoria en menos de 5 minutos.

Flujo inicial ideal:
1. Registro o login
2. Creación de perfil
3. Selección de avatar base
4. Elección de objetivo principal
5. Mini recorrido guiado
6. Primera misión rápida
7. Recompensa inmediata
8. Regreso al dashboard
9. Apertura del mapa

## Dashboard principal
Debe mostrar:
- nivel
- XP
- racha
- monedas
- misión del día
- progreso en el mapa
- accesos directos a tienda y certificados

## Mapa
El mapa es el corazón del producto.
Debe transmitir:
- exploración
- progreso
- deseo de completar
- desbloqueos visuales
- sensación de aventura

## Motor de aprendizaje
Cada nodo debe ser breve, visual y activo.

Componentes posibles por nodo:
- microlección
- pregunta interactiva
- mini caso
- decisión
- feedback inmediato
- recompensa

Tipos de actividades sugeridas:
- opción múltiple
- verdadero/falso
- arrastrar y unir
- ordenar secuencias
- mini escenarios de decisión
- checkpoints

Principios didácticos:
- lenguaje simple
- ejemplos cotidianos
- contenido breve
- reforzamiento inmediato

## Sistema de gamificación
Variables clave:
- XP
- nivel
- racha diaria
- energía o vidas
- logros
- inventario
- rangos
- progreso por mundo

Sistemas esenciales:
- XP por completar nodos
- niveles con recompensas escalonadas
- racha diaria con premios crecientes
- energía con recuperación suave
- cofres, llaves y boosters
- badges
- marcos de perfil
- ranking semanal ligero

## Economía interna
Modelo de dos monedas:

### Moneda blanda: Spark
Se gana jugando y sirve para:
- energía
- ítems básicos
- protectores de racha
- cosméticos simples

### Moneda premium: MetaCoins
Se compra con dinero real y sirve para:
- certificados premium
- skins exclusivas
- diplomas
- pases premium
- eventos
- mejoras de alto valor

## Reglas económicas
- el usuario debe progresar sin pagar
- la moneda premium debe desbloquear valor claro
- evitar un sistema pay-to-win agresivo
- usar pequeños regalos de MetaCoins como demostración de uso

## Certificados y diplomas
Niveles de credenciales:
- badge básico de finalización
- certificado premium por módulo
- diploma premium por ruta o mundo
- credencial verificable por ID o URL

Cada credencial debe incluir:
- nombre del usuario
- ruta o módulo completado
- fecha de emisión
- nivel o logro
- identificador verificable

## Tienda
Categorías principales:
- ropa y accesorios para avatar
- marcos y fondos de perfil
- boosters de XP y energía
- protectores de racha
- certificados y diplomas premium
- rutas o eventos premium
- skins exclusivas
- objetos limitados

## Flujo de compra
1. el usuario elige producto o paquete de MetaCoins
2. checkout integrado
3. confirmación por webhook
4. acreditación automática
5. registro en historial de transacciones

## Modelo de negocio
Fuentes de ingreso:
- suscripción premium
- venta directa de MetaCoins
- certificados premium
- diplomas
- skins y objetos premium
- pases temáticos o de temporada

### Modelo gratis
Incluye:
- perfil
- mapa
- avatar básico
- algunas rutas
- XP
- racha
- Spark
- tienda básica

### Modelo premium
Incluye:
- más energía
- mejores recompensas
- descuentos
- rutas exclusivas
- ítems especiales
- experiencia mejorada

### Precios orientativos
- Premium mensual: USD 9.99
- 100 MetaCoins: USD 9.99
- Certificado premium: USD 7 a 10
- Diploma de ruta: USD 15 a 20
- Skin premium: USD 2 a 8

## Módulos técnicos principales
- autenticación y gestión de usuarios
- perfil y avatar
- mapa y navegación
- motor de contenido y lecciones
- gamificación y progreso
- balances e inventario
- tienda y compras
- pagos y webhooks
- certificados y diplomas
- panel administrativo
- analítica interna

## Stack orientativo
La V1 debe construirse como web app responsive con arquitectura modular.

Requisitos de stack:
- frontend moderno basado en componentes
- backend API
- base de datos relacional
- almacenamiento de assets y certificados
- estructura escalable

## Base de datos — entidades mínimas
- users
- profiles
- subscriptions
- avatars
- avatar_items
- inventories
- worlds
- routes
- nodes
- lessons
- quizzes
- user_progress
- streaks
- achievements
- user_balances
- transactions
- purchases
- store_items
- promotions
- bundles
- certificates
- certificate_templates
- daily_missions
- rankings
- notifications

## Panel administrativo
Debe permitir:
- crear y editar mundos, rutas y nodos
- configurar recompensas y XP
- gestionar tienda y precios
- activar promociones
- revisar certificados
- ver usuarios, compras y avance
- consultar métricas de onboarding, retención y monetización

## KPIs prioritarios
- registros totales
- usuarios activos diarios
- finalización de onboarding
- finalización de primera misión
- retención D1, D7 y D30
- tiempo promedio por sesión
- rutas más iniciadas
- rutas más completadas
- nodos con mayor abandono
- conversión a primera compra
- ticket promedio
- certificados emitidos

## Riesgos
- moneda premium sin utilidad clara
- certificados sin valor percibido
- exceso de complejidad en V1
- demasiados contenidos sin buena experiencia
- gamificación superficial
- checkout con fricción

## Mitigaciones
- dar valor visible a la moneda premium
- diseñar certificados aspiracionales
- lanzar 4 mundos bien hechos en vez de 10 mal hechos
- medir abandonos y corregir
- optimizar primera compra
- construir una tienda emocional, no solo funcional

## Definición de éxito V1
La V1 será exitosa si:
- los usuarios completan onboarding
- vuelven al día siguiente
- completan rutas
- se apegan al progreso
- compran MetaCoins o items
- emiten certificados premium
- dan feedback positivo sobre mapa, avatar y experiencia