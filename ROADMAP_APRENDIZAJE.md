# 🗺️ ROADMAP DE APRENDIZAJE

> Tu ruta de aprendizaje de cero a despliegue en Google Cloud

---

## 📍 NIVELES (Elige por dónde empezar)

```
🟢 FÁCIL    ◆────────────────────────────────────────────
🟡 MEDIO    ◇────────────────────────────────────────────
🔴 DIFÍCIL  ◇──────────────────────────────────────────
```

---

## 🟢 NIVEL 1: Lo MÁS BÁSICO (1 hora)

**Si nunca programaste nada**

### 1.1 Entiende qué es HTML
- [ ] Lee: "¿Qué es HTML?" en GUIA_COMPLETA.md
- [ ] Ve: 3 minutos de video (busca en YouTube: "HTML básico")
- [ ] Entiende: `<h1>`, `<p>`, `<button>`

### 1.2 Tu primer cambio
- [ ] Abre `index.html` en VS Code
- [ ] Busca `<h1>🚀 Mi Primera Página Web</h1>`
- [ ] Cámbialo por tu nombre
- [ ] Guarda (Ctrl+S)
- [ ] Abre el archivo en tu navegador
- [ ] ✅ **¡Hiciste tu primer cambio!**

### 1.3 Entiende qué es CSS
- [ ] Lee: "¿Qué es CSS?" en GUIA_COMPLETA.md
- [ ] Entiende: Colores, tamaños, espacios

### 1.4 Cambia los colores
- [ ] Abre `style.css`
- [ ] Busca: `background: linear-gradient(135deg, #667eea...`
- [ ] Cámbialo por: `background: linear-gradient(135deg, #ff6b6b 0%, #c92a2a 100%);`
- [ ] Guarda (Ctrl+S)
- [ ] Recarga navegador (F5)
- [ ] ✅ **¡Página con tus colores!**

### 1.5 Entender JavaScript
- [ ] Lee: "¿Qué es JavaScript?" en GUIA_COMPLETA.md
- [ ] Ve: 2 minutos de video (busca "JavaScript básico")
- [ ] Entiende: Funciones, eventos, interactividad

### 1.6 Probar la interactividad
- [ ] Abre tu página en navegador
- [ ] Haz clic en el botón "Haz clic aquí 👆"
- [ ] ✅ **¡Página interactiva funcionando!**

**Tiempo total:** ~1 hora
**Qué aprendiste:** HTML, CSS, JavaScript, cómo editar una página

---

## 🟡 NIVEL 2: DOCKER (2 horas)

**Ahora empacar tu página en una caja**

### 2.1 Instalar Docker
- [ ] Ve a: https://docker.com
- [ ] Descarga: "Docker Desktop"
- [ ] Instala (dale todos los permisos)
- [ ] Reinicia tu computadora
- [ ] Abre PowerShell
- [ ] Escribe: `docker --version`
- [ ] Deberías ver: `Docker version 25.x.x` o similar
- [ ] ✅ **Docker instalado**

### 2.2 Entender Dockerfile
- [ ] Lee: GUIA_COMPLETA.md, FASE 2
- [ ] Entiende: `FROM`, `COPY`, `EXPOSE`, `CMD`
- [ ] Ve el archivo `Dockerfile` en tu proyecto
- [ ] ✅ **Entiendes la "receta"**

### 2.3 Construir imagen Docker
- [ ] Abre PowerShell
- [ ] Ve a tu carpeta: `cd C:\Users\MEGAMAXI\Desktop\paginaWEB`
- [ ] Ejecuta: `docker build -t mi-pagina:latest .`
- [ ] Espera a que termine (2-3 minutos)
- [ ] Si dice "Successfully tagged", ✅ **¡Imagen creada!**

### 2.4 Ejecutar la imagen localmente
- [ ] En PowerShell, ejecuta: `docker run -p 8080:8080 mi-pagina:latest`
- [ ] Deberías ver texto que dice "nginx"
- [ ] Abre navegador: `http://localhost:8080`
- [ ] ¡Deberías ver tu página!
- [ ] Presiona Ctrl+C para detener
- [ ] ✅ **Docker funcionando localmente**

**Tiempo total:** ~2 horas
**Qué aprendiste:** Docker, contenedores, por qué son útiles

---

## 🔴 NIVEL 3: GOOGLE CLOUD (2-3 horas)

**Ahora sube tu página a la nube**

### 3.1 Crear cuenta Google Cloud
- [ ] Ve a: https://console.cloud.google.com
- [ ] Crea una cuenta (o inicia sesión)
- [ ] Verás crédito gratis ($300)
- [ ] Crea un proyecto: "mi-pagina-web"
- [ ] Espera a que se cree
- [ ] ✅ **Proyecto creado**

### 3.2 Instalar Google Cloud SDK
- [ ] Ve a: https://cloud.google.com/sdk/docs/install
- [ ] Descarga para Windows
- [ ] Instala
- [ ] Reinicia PowerShell
- [ ] Ejecuta: `gcloud --version`
- [ ] Deberías ver: `Google Cloud SDK 475.x.x`
- [ ] ✅ **SDK instalado**

### 3.3 Configurar Google Cloud
- [ ] Abre PowerShell
- [ ] Ejecuta: `gcloud init`
- [ ] Responde las preguntas:
  - Elige: Crear nueva configuración (Y)
  - Inicia sesión con Google
  - Elige tu proyecto: `mi-pagina-web`
  - Elige región: `us-central1` (o tu preferida)
- [ ] ✅ **Google Cloud configurado**

### 3.4 Habilitar APIs
- [ ] Lee: DESPLIEGUE_GOOGLE_CLOUD.md, PASO 2
- [ ] Ejecuta (en PowerShell):
  ```bash
  gcloud services enable run.googleapis.com
  gcloud services enable cloudbuild.googleapis.com
  gcloud services enable containerregistry.googleapis.com
  ```
- [ ] ✅ **APIs habilitadas**

### 3.5 Subir imagen a Google Cloud
- [ ] En PowerShell, obtén tu Project ID:
  ```bash
  $PROJECT_ID = gcloud config get-value project
  Write-Host $PROJECT_ID
  ```
- [ ] Haz tag de la imagen:
  ```bash
  docker tag mi-pagina:latest gcr.io/$PROJECT_ID/mi-pagina:latest
  ```
- [ ] Configura Docker:
  ```bash
  gcloud auth configure-docker
  ```
- [ ] Sube la imagen:
  ```bash
  docker push gcr.io/$PROJECT_ID/mi-pagina:latest
  ```
- [ ] Espera (puede tardar 5 minutos)
- [ ] ✅ **Imagen en Google Cloud**

### 3.6 Desplegar en Cloud Run
- [ ] En PowerShell, ejecuta:
  ```bash
  $PROJECT_ID = gcloud config get-value project
  gcloud run deploy mi-pagina `
    --image gcr.io/$PROJECT_ID/mi-pagina:latest `
    --platform managed `
    --region us-central1 `
    --port 8080 `
    --allow-unauthenticated
  ```
- [ ] Cuando termine, verás algo como:
  ```
  Service URL: https://mi-pagina-xxxxx.a.run.app
  ```
- [ ] Copia esa URL
- [ ] ✅ **¡Tu página está en la nube!**

### 3.7 Probar en la nube
- [ ] Abre la URL en tu navegador
- [ ] ¡Debería verse tu página!
- [ ] Comparte la URL con tus compañeros
- [ ] Muéstrale a tu profesor
- [ ] ✅ **¡COMPLETADO!**

**Tiempo total:** ~2-3 horas
**Qué aprendiste:** Google Cloud, Cloud Run, despliegues

---

## 📈 FLUJO VISUAL

```
┌─────────────────┐
│   Computadora   │
│   Mi página:    │  1️⃣ HTML + CSS + JS
│  index.html     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│     Docker      │  2️⃣ Meter en caja (containerizar)
│   Dockerfile    │
│  → imagen       │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Google Cloud   │  3️⃣ Subir a la nube
│   Container     │
│   Registry      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Cloud Run     │  4️⃣ Desplegar y acceder
│  https://URL    │
└─────────────────┘
```

---

## 🎯 CHECKPOINTS

Marcar conforme avances:

### Checkpoint 1: PÁGINA WEB
- [ ] Página se ve en navegador
- [ ] Puedo editar HTML y ver cambios
- [ ] Puedo editar CSS y ver colores cambiados
- [ ] Botón interactivo funciona
- **Tiempo estimado:** 1 hora

### Checkpoint 2: DOCKER
- [ ] Docker instalado
- [ ] Imagen construida
- [ ] Página corre en `http://localhost:8080`
- **Tiempo estimado:** 2 horas

### Checkpoint 3: GOOGLE CLOUD
- [ ] Cuenta creada
- [ ] APIs habilitadas
- [ ] Imagen subida a Container Registry
- [ ] Desplegada en Cloud Run
- [ ] URL accesible desde navegador
- **Tiempo estimado:** 2-3 horas

### 🏁 CHECKPOINT FINAL
- [ ] Puedo mostrar mi página en `https://URL`
- [ ] Página se ve igual que en local
- [ ] Puedo editar archivos y re-desplegar
- [ ] Profesor está impresionado
- **¡Missión completada! 🎉**

---

## 💡 TIPS POR NIVEL

### NIVEL 1 (HTML/CSS/JS)
- 💡 Experimenta sin miedo, no puedes romper nada
- 💡 Usa Ctrl+Shift+R para actualizar sin caché
- 💡 Abre F12 para ver errores en consola
- 💡 Googlea "cómo [hacer algo] en HTML"

### NIVEL 2 (Docker)
- 💡 Los comandos de Docker pueden tardar minutos
- 💡 Usa `docker ps` para ver qué contenedores corren
- 💡 Usa `docker logs [ID]` para ver errores
- 💡 Documenta cada paso que funciona

### NIVEL 3 (Google Cloud)
- 💡 Lee lentamente cada instrucción
- 💡 No te apures, espera a que los comandos terminen
- 💡 Guarda los comandos que funcionan
- 💡 Tu primer despliegue puede tardar 5-10 minutos

---

## 🚀 DESPUÉS DE COMPLETAR TODO

Próximas ideas:
1. Agrega una sección nueva a tu página
2. Conecta con una base de datos (Firebase)
3. Agrega formulario que envíe datos
4. Crea versión de escritorio y móvil
5. Agrega autenticación de usuarios
6. Haz un CRUD completo (Create, Read, Update, Delete)

---

## 📞 SI TE ATASCAS

1. **Antes de rendirse**: Lee el error completo
2. **Busca en Google**: "[error] docker" o "[error] gcloud"
3. **Consulta archivos del proyecto**:
   - GUIA_COMPLETA.md
   - DESPLIEGUE_GOOGLE_CLOUD.md
   - INICIO_RAPIDO.md
4. **Pregunta a Copilot en VS Code**
5. **Pide ayuda a tu profesor** (¡con toda la información!)

---

**¡Tu viaje al cloud ha comenzado! 🌩️✨**

---

*Actualizado: 2026-06-02*
*Versión: 1.0*
