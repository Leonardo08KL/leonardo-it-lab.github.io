# Arquitectura

```text
Browser
   |
   v
Vue 3 / Vite
   |
   | REST
   v
Node.js / Express
   |
   +--> /api/health
   +--> /api/skills
   +--> /api/projects
   +--> /api/network
   +--> /api/system
```

En producción se recomienda:

```text
Internet
   |
   v
Nginx :80/:443
   |
   +--> Frontend Vue
   |
   +--> /api --> Backend Node :3000
```
