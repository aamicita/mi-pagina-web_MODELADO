# 🚀 GUÍA COMPLETA: De Página Web a Google Cloud

> Aprenderás como si estuvieras en primero de programación

---

## 📖 ¿Qué necesitamos?

1. **Una página web** (HTML, CSS, JavaScript) ✓
2. **Docker** - Para empacar la página (descargar desde docker.com)
3. **Cuenta en Google Cloud** - Para poner la página en la nube
4. **Git** - Para versionar nuestro código

---

## FASE 1: Crear la Página Web (30 minutos)

### Paso 1.1: Entender HTML
HTML es como **esqueleto** de una página. Define qué elementos aparecen.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Mi primera página</title>
</head>
<body>
    <h1>Hola mundo</h1>
</body>
</html>
```

### Paso 1.2: Agregar CSS (Los estilos)
CSS es como **ropa y maquillaje** para tu página. La hace bonita.

```css
body {
    background-color: #1a1a1a;
    color: white;
    font-family: Arial;
}
```

### Paso 1.3: Agregar JavaScript (La interactividad)
JavaScript es como **hacer que la página reaccione**. Por ejemplo, botones que hacen cosas.

```javascript
function saludar() {
    alert("¡Hola! 👋");
}
```

---

## FASE 2: Empacar en Docker (30 minutos)

Docker es como una **caja mágica** que contiene:
- Tu página web
- Un servidor web (nginx o Python)
- Todo lo que necesita para funcionar

**¿Por qué Docker?**
- En tu computadora funciona ✓
- En Google Cloud funciona igual ✓
- En la computadora de tu compañero funciona igual ✓

**Archivo Dockerfile:**
```dockerfile
FROM nginx:latest
COPY . /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
```

---

## FASE 3: Subir a Google Cloud (1 hora)

**Pasos:**
1. Crear una cuenta en Google Cloud (gratis los primeros 12 meses)
2. Crear un proyecto
3. Subir tu Dockerfile a Cloud Run
4. Configurar escalado a 0 (cuando nadie usa, no cuesta)

---

## 🎮 Comandos Que Usaremos

```bash
# Para construir la imagen Docker
docker build -t mi-pagina:latest .

# Para probar localmente
docker run -p 8080:8080 mi-pagina:latest

# Para subir a Google Cloud
gcloud builds submit --tag gcr.io/[PROYECTO]/mi-pagina
```

---

## 📋 Checklist Final

- [ ] Página web creada y hermosa
- [ ] Docker instalado
- [ ] Dockerfile funcionando localmente
- [ ] Cuenta Google Cloud creada
- [ ] Página desplegada en la nube
- [ ] ¡Compartir con tu profesor! 🎓

