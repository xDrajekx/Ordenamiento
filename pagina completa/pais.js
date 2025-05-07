function mostrarLista() {
    var lista = document.getElementById("pais-lista"); // Encuentra la lista de países en el HTML
    lista.style.display = lista.style.display === "none" ? "block" : "none"; // Si la lista está oculta, la muestra; si está visible, la oculta
}

function seleccionarPais() {
    var lista = document.getElementById("pais-lista"); // Encuentra la lista de países
    var boton = document.getElementById("boton-pais"); // Encuentra el botón que muestra el país seleccionado
    var paisSeleccionado = lista.options[lista.selectedIndex].text; // Obtiene el nombre del país seleccionado
    
    boton.textContent = "País seleccionado: " + paisSeleccionado; // Cambia el texto del botón para mostrar el país elegido
    lista.style.display = "none"; // Oculta la lista después de elegir un país
}