# 🚀 Mi Primera Página Web en Google Cloud

> Un proyecto de prueba para aprender modelado de software, Docker y Google Cloud

---

## 📋 Descripción del Proyecto

Este proyecto demuestra cómo:
1. ✅ Crear una página web moderna (HTML, CSS, JavaScript)
2. ✅ Containerizarla con Docker
3. ✅ Desplegarla en Google Cloud Run
4. ✅ Configurar escalado automático

**Estado**: 🟢 Listo para desplegar  
**Versión**: 1.0.0  
**Autor**: Tú (y tu compañero de proyecto)  
**Clase**: Modelado de Software 🎓

---

## 📁 Estructura del Proyecto

```
paginaWEB/
├── index.html              # La página web principal
├── style.css              # Estilos (diseño)
├── script.js              # Interactividad (JavaScript)
├── Dockerfile             # Receta para Docker
├── docker-compose.yml     # Para pruebas locales
├── nginx.conf             # Configuración del servidor web
├── .dockerignore          # Archivos a ignorar
├── GUIA_COMPLETA.md       # Guía para principiantes
├── DESPLIEGUE_GOOGLE_CLOUD.md  # Instrucciones cloud
└── README.md              # Este archivo
```

---

## 🎯 Características

✨ **HTML5 Moderno**
- Estructura semántica
- Meta tags responsivos
- Accesibilidad

🎨 **CSS3 Avanzado**
- Gradientes bonitos
- Animaciones suaves
- Grid responsivo
- Efecto blur (glassmorphism)

⚙️ **JavaScript Interactivo**
- Contador de visitas
- Hora en tiempo real
- Mensajes dinámicos
- Consola de debug

🐳 **Docker Ready**
- Containerizado
- Puerto 8080 configurado
- Nginx optimizado

☁️ **Cloud Native**
- Listo para Google Cloud Run
- Auto-escalado a cero
- Bajo costo

---

## 🚀 INICIO RÁPIDO

### Opción 1: Probar localmente sin Docker

```bash
# Simplemente abre index.html en tu navegador
# Funciona sin necesidad de servidor
```

### Opción 2: Probar con Docker (Recomendado)

```bash
# Instalar Docker: https://docker.com

# Construir
docker build -t mi-pagina .

# Ejecutar
docker run -p 8080:8080 mi-pagina

# Abrir: http://localhost:8080
```

### Opción 3: Desplegar en Google Cloud

```bash
# Ver archivo: DESPLIEGUE_GOOGLE_CLOUD.md
# Sigue los pasos exactos ahí
```

---

## 📝 REQUISITOS

- Navegador web moderno (Chrome, Firefox, Edge)
- **Para Docker**: Docker Desktop (gratuito)
- **Para Google Cloud**: Cuenta gratis en Google Cloud

---

## 🧠 QUÉ APRENDES CON ESTE PROYECTO

### Conceptos de Software Engineering
- ✅ Versionado de código (Git)
- ✅ Containerización (Docker)
- ✅ Infrastructure as Code
- ✅ CI/CD (Integración Continua)
- ✅ Cloud Computing

### Tecnologías
- ✅ **Frontend**: HTML5, CSS3, JavaScript ES6
- ✅ **DevOps**: Docker, Docker Compose
- ✅ **Cloud**: Google Cloud Run, Container Registry
- ✅ **Infraestructura**: Nginx

### Habilidades Blandas
- ✅ Documentación clara
- ✅ Trabajo en equipo (parejas)
- ✅ Presentación de proyectos
- ✅ Resolución de problemas

---

## 📚 ARCHIVOS IMPORTANTES

### Para Principiantes
- **GUIA_COMPLETA.md** - Empieza aquí si no sabes nada
- **index.html** - La página web (¡edita esto para cambiar el contenido!)

### Para Desarrolladores
- **Dockerfile** - Configuración de Docker
- **docker-compose.yml** - Para pruebas locales
- **nginx.conf** - Configuración del servidor web

### Para Despliegue
- **DESPLIEGUE_GOOGLE_CLOUD.md** - Paso a paso para la nube

---

## 🛠️ Editar la Página

Para cambiar el contenido, abre estos archivos en VS Code:

1. **index.html** - Edita el HTML (estructura)
2. **style.css** - Edita los estilos (colores, tamaños)
3. **script.js** - Edita la interactividad (funciones)

**Después de editar:**
```bash
# Probar localmente
docker build -t mi-pagina .
docker run -p 8080:8080 mi-pagina
# Abre http://localhost:8080
```

---

## 📊 Estadísticas

- **Líneas de código**: ~400
- **Tiempo de aprendizaje**: 2-4 horas
- **Costo**: ¡GRATIS! (dentro del crédito de Google Cloud)
- **Dificultad**: ⭐⭐⭐ Principiante - Intermedio

---

## 🤝 Colaboración

Este es un proyecto de parejas. Sugerencias de división:

| Persona A | Persona B |
|-----------|-----------|
| Diseño HTML | Estilos CSS |
| JavaScript | Docker |
| Google Cloud | Documentación |

---

## 📞 AYUDA

### Si se queda atascado:

1. **Error en HTML**: Abre las herramientas de desarrollador (F12)
2. **Docker no funciona**: Instala Docker Desktop
3. **Google Cloud es complicado**: Lee DESPLIEGUE_GOOGLE_CLOUD.md

---

## 📝 NOTAS FINALES

- 💡 Este proyecto es el punto de partida, ¡expande ideas!
- 🎨 Personaliza los colores, fuentes, contenido
- 📈 Agrega más secciones, información, interactividad
- 🚀 Considera agregar una base de datos después
- 💰 Está dentro del crédito gratis de Google Cloud

---

## 🎓 Mostrando a tu Profesor

```
"Profe, hice una página web con HTML, CSS y JavaScript,
la containerizé con Docker, y la desplegué en Google Cloud
con auto-escalado a cero. ¡Está en vivo en https://..."
```

**¡Eso impresiona! 🎉**

---

## 📄 Licencia

Libre para uso educativo. ©️ 2026

---

**¡Bienvenido al mundo del Cloud Computing! ☁️🚀**

Preguntas? Abre VS Code, abre el archivo GUIA_COMPLETA.md y empieza desde el principio.
