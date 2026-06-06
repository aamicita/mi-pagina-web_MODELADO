# Dockerfile - La "receta" para empacar tu página web
# Esto define cómo se va a "empacar" tu aplicación

FROM nginx:latest

# Copiar todos los archivos HTML, CSS, JS a la carpeta del servidor web
COPY . /usr/share/nginx/html

# Copiar configuración personalizada de nginx (opcional)
COPY nginx.conf /etc/nginx/nginx.conf

# Puerto que va a usar (8080 como pediste)
EXPOSE 8080

# Comando para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]
