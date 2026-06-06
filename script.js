// ========================================
// JAVASCRIPT - Hace que la página sea interactiva
// ========================================

// Función: Mostrar un mensaje cuando haces clic en el botón
function mostrarMensaje() {
    const mensajeDiv = document.getElementById('mensaje');
    const mensajes = [
        '¡Excelente! 🎉 Este es tu primer despliegue en la nube.',
        '⭐ ¡Felicidades! Ya eres un desarrollador cloud.',
        '🚀 ¡Increíble! Tu página está en vivo en Google Cloud.',
        '💪 ¡Lo hiciste! Este es solo el comienzo.',
        '🌟 ¡Perfecto! La próxima vez será aún más fácil.'
    ];
    
    const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
    mensajeDiv.textContent = mensajeAleatorio;
    mensajeDiv.className = 'mensaje-visible';
    
    // Ocultarlo después de 5 segundos
    setTimeout(() => {
        mensajeDiv.className = 'mensaje-hidden';
    }, 5000);
}

// Función: Actualizar la hora del servidor
function actualizarHora() {
    const ahora = new Date();
    const hora = ahora.toLocaleTimeString('es-ES');
    const fecha = ahora.toLocaleDateString('es-ES');
    
    const elemento = document.getElementById('server-time');
    if (elemento) {
        elemento.textContent = `${hora} (${fecha})`;
    }
}

// Función: Contar las visitas a la página
function contarVisitas() {
    // Obtener el número de visitas del localStorage
    let visitas = localStorage.getItem('visitas') || 0;
    visitas = parseInt(visitas) + 1;
    
    // Guardar el nuevo número
    localStorage.setItem('visitas', visitas);
    
    // Mostrar en la página
    const contador = document.getElementById('contador');
    if (contador) {
        contador.innerHTML = `
            <strong>📈 Has visitado esta página ${visitas} veces</strong>
            <p style="font-size: 0.9em; color: #666; margin-top: 10px;">
                (Datos guardados en tu navegador)
            </p>
        `;
    }
}

// Ejecutar cuando la página carga
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Página cargada correctamente');
    
    // Actualizar hora al cargar
    actualizarHora();
    
    // Actualizar hora cada segundo
    setInterval(actualizarHora, 1000);
    
    // Contar visitas
    contarVisitas();
    
    // Log para debugging
    console.log('🚀 Sitio en vivo desde Google Cloud');
});

// Log de bienvenida en la consola
console.log('%c¡Bienvenido a mi sitio web!', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cAbra la consola del desarrollador (F12) para ver más...', 'color: #764ba2; font-size: 14px;');
console.log('Sistema: Google Cloud Run');
console.log('Puerto: 8080');
console.log('Hecho con ❤️ y JavaScript');
