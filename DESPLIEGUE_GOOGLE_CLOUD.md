# 🌥️ DESPLIEGUE EN GOOGLE CLOUD - PASO A PASO

Este archivo contiene las instrucciones exactas para desplegar tu página web en Google Cloud.

---

## PREREQUISITOS (Instala esto primero)

### 1. Docker Desktop
```bash
# Descarga desde: https://www.docker.com/products/docker-desktop
# Instálalo y reinicia tu computadora
```

### 2. Google Cloud SDK
```bash
# Descarga desde: https://cloud.google.com/sdk/docs/install
# O en PowerShell:
(New-Object Net.WebClient).DownloadFile("https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe", "$env:Temp\GoogleCloudSDKInstaller.exe"); & $env:Temp\GoogleCloudSDKInstaller.exe
```

### 3. Git (Opcional pero recomendado)
```bash
# Descarga desde: https://git-scm.com/download/win
```

---

## PASO A PASO: DESPLIEGUE EN GOOGLE CLOUD

### PASO 1️⃣: Crear una cuenta en Google Cloud

1. Ve a https://console.cloud.google.com/
2. Haz clic en "Crear una cuenta" o inicia sesión con tu Google
3. Selecciona "Crear proyecto"
4. Nombre: `mi-pagina-web` (o lo que prefieras)
5. Espera a que se cree el proyecto (2-3 minutos)

---

### PASO 2️⃣: Habilitar APIs necesarias

1. En la consola de Google Cloud, ve a "APIs y servicios"
2. Haz clic en "Habilitar API"
3. Busca y habilita:
   - **Cloud Run API** (para desplegar)
   - **Cloud Build API** (para construir la imagen)
   - **Container Registry API** (para almacenar imágenes)

Comando alternativo (más rápido):
```bash
gcloud services enable run.googleapis.com
gcloud services enable cloudbuild.googleapis.com
gcloud services enable containerregistry.googleapis.com
```

---

### PASO 3️⃣: Configurar Google Cloud SDK

```bash
# Abre PowerShell y ejecuta:

# Inicializar gcloud
gcloud init

# Selecciona tu proyecto cuando te pregunte
# Selecciona la región (recomendado: us-central1)

# Verificar configuración
gcloud config list
```

---

### PASO 4️⃣: Probar localmente (MUY IMPORTANTE)

```bash
# Cambia a la carpeta de tu proyecto
cd C:\Users\MEGAMAXI\Desktop\paginaWEB

# Construir la imagen Docker
docker build -t mi-pagina:latest .

# Probar localmente
docker run -p 8080:8080 mi-pagina:latest

# Abre: http://localhost:8080
# ¡Deberías ver tu página!

# Presiona Ctrl+C para detener
```

---

### PASO 5️⃣: Subir a Google Cloud Container Registry

```bash
# Obtener el ID del proyecto
$PROJECT_ID = gcloud config get-value project
Write-Host "Tu Project ID es: $PROJECT_ID"

# Hacer tag de la imagen
docker tag mi-pagina:latest gcr.io/$PROJECT_ID/mi-pagina:latest

# Configurar Docker para que pueda subir a Google Cloud
gcloud auth configure-docker

# Subir la imagen
docker push gcr.io/$PROJECT_ID/mi-pagina:latest

# Espera a que termine... (puede tardar 2-5 minutos)
```

---

### PASO 6️⃣: Desplegar en Cloud Run

```bash
# Variables
$PROJECT_ID = gcloud config get-value project
$REGION = "us-central1"  # Puedes cambiar esto

# Desplegar
gcloud run deploy mi-pagina `
  --image gcr.io/$PROJECT_ID/mi-pagina:latest `
  --platform managed `
  --region $REGION `
  --port 8080 `
  --allow-unauthenticated

# Cuando termine, te mostrará una URL como:
# https://mi-pagina-xxxxx-uc.a.run.app
# ¡ESA ES TU PÁGINA EN VIVO! 🎉
```

---

### PASO 7️⃣: Configurar Auto-escalado a 0

```bash
# Cloud Run automáticamente escala a 0 cuando no hay tráfico
# Es el comportamiento por defecto, ¡no hay que hacer nada!

# Pero puedes verificarlo en la consola:
# 1. Ve a Cloud Run
# 2. Haz clic en tu servicio "mi-pagina"
# 3. Ve a "Editar y desplegar nueva revisión"
# 4. En "Configuración de contenedor", verifica "Máximo número de instancias"
# 5. En "Comportamiento de auto-escalado", selecciona "Escalar a cero"
```

---

## ⚡ COMANDOS RÁPIDOS PARA ACTUALIZAR

Cuando hagas cambios a tu página:

```bash
# 1. Construir
docker build -t mi-pagina:latest .

# 2. Probar localmente
docker run -p 8080:8080 mi-pagina:latest
# (Abre http://localhost:8080 y verifica)
# (Presiona Ctrl+C para detener)

# 3. Subir a Google Cloud
$PROJECT_ID = gcloud config get-value project
docker tag mi-pagina:latest gcr.io/$PROJECT_ID/mi-pagina:latest
docker push gcr.io/$PROJECT_ID/mi-pagina:latest

# 4. Desplegar nueva versión
gcloud run deploy mi-pagina `
  --image gcr.io/$PROJECT_ID/mi-pagina:latest `
  --platform managed `
  --region us-central1 `
  --port 8080 `
  --allow-unauthenticated
```

---

## 🎓 CONCEPTOS QUE APRENDISTE

| Concepto | ¿Qué es? |
|----------|----------|
| **Docker** | Empacar tu app en una caja para que funcione igual en cualquier lado |
| **Container Registry** | Lugar donde guardas tus cajas empacadas (imágenes) |
| **Cloud Run** | Servicio que corre tus cajas en la nube |
| **Auto-escalado** | La nube automáticamente crea más máquinas cuando hay mucho tráfico |
| **Escala a 0** | Cuando nadie usa tu app, no gastas dinero |

---

## 💰 COSTOS

- **Primeros 12 meses**: Crédito gratis de $300
- **Cloud Run**: Incluye 2 millones de solicitudes GRATIS al mes
- **Tu aplicación**: Probablemente **GRATIS** los primeros años

---

## 🆘 SOLUCIÓN DE PROBLEMAS

### Problema: "docker: command not found"
```
✓ Solución: Instala Docker Desktop desde https://docker.com
```

### Problema: "gcloud: command not found"
```
✓ Solución: Instala Google Cloud SDK
✓ Reinicia PowerShell después
```

### Problema: "Permission denied"
```
✓ Solución: Ejecuta PowerShell como administrador
```

### Problema: "Port 8080 already in use"
```
✓ Solución: Detén otros contenedores:
docker ps
docker kill <container-id>
```

---

## 📞 RECURSOS ÚTILES

- 📚 Documentación Google Cloud: https://cloud.google.com/docs
- 📚 Docker Docs: https://docs.docker.com
- 🎥 Tutoriales Cloud Run: https://cloud.google.com/run/docs/quickstarts
- 💬 Stack Overflow: https://stackoverflow.com/questions/tagged/google-cloud-run

---

## ✅ CHECKLIST FINAL

- [ ] Docker instalado y funcionando
- [ ] Google Cloud SDK instalado
- [ ] Página web se ve bien localmente
- [ ] Proyecto creado en Google Cloud
- [ ] APIs habilitadas
- [ ] Imagen subida a Container Registry
- [ ] Desplegada en Cloud Run
- [ ] ¡Página visible en https://! 🎉
- [ ] Compartir con tu profesor
- [ ] ¡Celebrar! 🎊

---

**¡Felicidades! 🚀 Ya eres un ingeniero de software en la nube**
