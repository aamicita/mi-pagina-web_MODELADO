# Dockerfile - La "receta" para empacar tu página web
# Esto define cómo se va a "empacar" tu aplicación

FROM nginx:latest

# Crear directorio para permisos de nginx en Cloud Run
RUN mkdir -p /var/run/nginx && chmod -R 777 /var/run/nginx

# Copiar todos los archivos HTML, CSS, JS a la carpeta del servidor web
COPY . /usr/share/nginx/html

# Copiar configuración personalizada de nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Asegurar permisos correctos
RUN chmod -R 755 /usr/share/nginx/html

# Puerto que va a usar (8080 como pediste)
EXPOSE 8080

# Comando para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]
