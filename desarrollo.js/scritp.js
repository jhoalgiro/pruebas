// Función para mostrar alerta de validación
function mostrarAlerta() {
    alert("¡Validación completa! El código está funcionando correctamente.");
}

// Función para previsualizar imágenes
document.getElementById('imageUpload').addEventListener('change', function(event) {
    const files = event.target.files;
    const imagePreview = document.getElementById('imagePreview');
    imagePreview.innerHTML = '';  // Limpiar contenido previo

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            imagePreview.appendChild(img);
        }

        reader.readAsDataURL(file);
    }
});
