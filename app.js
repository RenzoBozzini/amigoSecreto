// Lista para almacenar los nombres ingresados
let amigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    let inputNombre = document.getElementById("amigo"); // Obtener el input correcto según el HTML
    let nombre = inputNombre.value.trim(); // Obtener el valor sin espacios extras
    
    if (nombre) { // Verificar que no esté vacío
        amigos.push(nombre); // Agregar a la lista
        actualizarLista(); // Actualizar la visualización de la lista
        inputNombre.value = ""; // Limpiar el campo de texto
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

// Función para actualizar la lista mostrada en pantalla
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar contenido anterior
    
    amigos.forEach((amigo) => {
        let elemento = document.createElement("li"); // Crear un elemento de lista
        elemento.textContent = amigo; // Asignar el nombre
        lista.appendChild(elemento); // Agregarlo a la lista visual
    });
}

// Función para realizar el sorteo
function sortearAmigo() {
    if (amigos.length > 0) {
        let indiceGanador = Math.floor(Math.random() * amigos.length); // Elegir un índice aleatorio
        let ganador = amigos[indiceGanador]; // Obtener el nombre del ganador
        
        let resultado = document.getElementById("resultado"); // Obtener la lista de resultado
        resultado.innerHTML = ""; // Limpiar resultado previo
        
        let elementoGanador = document.createElement("li"); // Crear un nuevo elemento para mostrar el ganador
        elementoGanador.textContent = "El amigo sorteado es: " + ganador;
        resultado.appendChild(elementoGanador);
    } else {
        alert("Agrega al menos un nombre antes de sortear.");
    }
}
