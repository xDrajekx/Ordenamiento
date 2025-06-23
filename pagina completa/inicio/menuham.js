// Botón hamburguesa
const btn = document.getElementById("hamburgerBtn");//Busca el botón hamburguesa <button id="hamburgerBtn"> y lo guarda en la constante btn.
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
//Estas líneas guardan referencias a los elementos con los IDs "sidebar" y "overlay" para poder manipularlos desde JavaScript. – sidebar es el menú lateral. – overlay es la capa oscura que aparece detrás del menú para resaltar que está abierto.

btn.addEventListener("click", () => {//"Cuando hagan clic en el botón hamburguesa, ejecuta esta función..."
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
//Usa .classList.toggle("active") para:Si el elemento no tiene la clase active, se la agrega.Si ya la tiene, la quita.Resultado: mostrar u ocultar el menú lateral y la capa oscura.
});

// Cerrar el menú si se hace clic fuera
overlay.addEventListener("click", () => {//Escucha los clics en la capa oscura (overlay)
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  // Quita las clases active para cerrar el menú lateral y ocultar el overlay cuando se hace clic fuera del menú.
  
});

// Función para submenús
function toggleSubmenu(id) {// Define una función que recibe un id, como "productos" o "servicios"
  const submenu = document.getElementById(id);// Busca el elemento con ese ID (el submenú que quieres abrir o cerrar).
  const isVisible = submenu.style.display === "block";// Verifica si el submenú ya se está mostrando (display: block).
  submenu.style.display = isVisible ? "none" : "block";// Si está visible, lo oculta (none), y si está oculto, lo muestra (block). Esto permite hacer clic en “Productos” o “Servicios” y mostrar/ocultar sus submenús
}
