# ⚡ INICIO RÁPIDO (5 minutos)

## 🎯 Si tienes prisa, empieza aquí

---

## PASO 1: Ver la página

```bash
# Abre este archivo en tu navegador:
# C:\Users\MEGAMAXI\Desktop\paginaWEB\index.html

# Haz clic derecho en index.html → "Open with" → Chrome/Firefox/Edge
```

**Resultado esperado:**
- Página bonita con fondo púrpura ✨
- Información del despliegue
- Botón interactivo
- Contador de visitas

---

## PASO 2: Editar la página

Abre **index.html** en VS Code y cambia:

```html
<!-- Busca esta línea (arriba): -->
<h1>🚀 Mi Primera Página Web</h1>

<!-- Cámbiala por tu nombre: -->
<h1>🚀 Página de [Tu Nombre]</h1>
```

Guarda (Ctrl+S) y recarga el navegador (F5).

**¡Hiciste tu primer cambio! 🎉**

---

## PASO 3: Personalizar los colores

Abre **style.css** y busca:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Cámbialo por otros colores:

```css
/* Opción roja */
background: linear-gradient(135deg, #ff6b6b 0%, #c92a2a 100%);

/* Opción verde */
background: linear-gradient(135deg, #51cf66 0%, #2f9e44 100%);

/* Opción azul */
background: linear-gradient(135deg, #339af0 0%, #1971c2 100%);
```

Guarda (Ctrl+S) y recarga (F5).

---

## PASO 4: Probar con Docker (Opcional)

### Prerequisito: Instalar Docker

1. Descarga: https://docker.com
2. Instala y reinicia tu PC

### Ejecutar:

```bash
# Abre PowerShell

# Ve a tu carpeta
cd C:\Users\MEGAMAXI\Desktop\paginaWEB

# Construye
docker build -t mi-pagina .

# Corre
docker run -p 8080:8080 mi-pagina

# Abre: http://localhost:8080
```

**Presiona Ctrl+C para detener**

---

## PASO 5: Desplegar en Google Cloud

### Prerequisito:
- Cuenta en Google Cloud (gratis)
- Google Cloud SDK instalado

### Comando único:

```bash
# Lee el archivo:
# DESPLIEGUE_GOOGLE_CLOUD.md

# Sigue TODOS los pasos en orden
# No te saltes ninguno
```

---

## 📁 Archivos que puedes editar:

| Archivo | Qué editar |
|---------|-----------|
| **index.html** | Títulos, textos, estructura |
| **style.css** | Colores, tamaños, fuentes |
| **script.js** | Funciones, interactividad |

---

## 🆘 Si algo no funciona:

| Problema | Solución |
|----------|----------|
| Página no se ve bonita | Actualiza el navegador (Ctrl+Shift+R) |
| Docker no funciona | Instala Docker Desktop |
| Google Cloud es confuso | Lee DESPLIEGUE_GOOGLE_CLOUD.md lentamente |
| No entiendo HTML/CSS/JS | Lee GUIA_COMPLETA.md |

---

## ✅ Después de esto:

```
☑️ Ahora sabes editar una página web
☑️ Ahora sabes usar Docker
☑️ Ahora puedes desplegar en la nube
☑️ ¡Ya eres un desarrollador! 🚀
```

---

## 🎓 Para tu profesor:

Dile esto:
> "Hice una página web con HTML/CSS/JavaScript, 
> la containerizé con Docker en puerto 8080,
> y la desplegué en Google Cloud con auto-escalado."

**= Impresionante 🌟**

---

## 📚 PRÓXIMOS PASOS

Cuando termines:
1. Agrega más contenido a index.html
2. Mejora el diseño en style.css
3. Agrega más JavaScript en script.js
4. Deploya cambios a Google Cloud
5. ¡Muéstrale a tus compañeros!

---

**¡Felicidades! 🎊**
