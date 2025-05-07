document.addEventListener('DOMContentLoaded',() => {
var modal2 = document.getElementById("Ventana"); //Obtiene id de la centana modal
var btn2 = document.getElementById("abrir-modal"); //Obtiene el id del boton para abrir la ventana modal
btn2.onclick = function() {
    modal2.style.display = "block"; //Al momeento de hacer click en el boton que es la variable btn desplegara la ventana modal
  }
  window.onclick = function(event) {
    if (event.target == modal2) {
      modal2.style.display = "none"; //Al momento de hacer click fuera de la ventana modal y si esta desplegada entonces se cerrara la ventana modal
    }
  }
  const MostrarFiltroPrecio2 = document.getElementById('Muestra'); //Obtiene el id Mostrar del boton que mostrara y ocultara la descripcion//
const HideFiltroPrecio = document.querySelector('.oculta-ordena'); //Se usa querySelector para seleccionar la clase Ocultar-descripcion y se asigna a la variable TextHide//
MostrarFiltroPrecio2.addEventListener('click', () => { //Se añade un evento de click a la variable MostrarDesc que es el boton//
    HideFiltroPrecio.classList.toggle('muestra-ordena'); //La variable TextHide usa el toggle para alternar entre agregar y eliminar una clase, por lo tanto al momento de hacerle click asignara la clase Mostrar-descipcion y eliminara la otra clase//
});
const MostrarMarcas = document.getElementById('Filtro-precio');
const HideMarcas = document.querySelector('.Oculta-Marcas');
MostrarMarcas.addEventListener('click', () => {
  HideMarcas.classList.toggle('Muestra-Marcas');
});
const MostrarModelosNike = document.getElementById('Filtro-Modelo');
const HideNike = document.querySelector('.Oculta-Modelos');
MostrarModelosNike.addEventListener('click', () => {
  HideNike.classList.toggle('Muestra-Modelos');
});
const MostrarColores = document.getElementById('Filtro-Color');
const HideColor = document.querySelector('.Oculta-color');
MostrarColores.addEventListener('click', () =>{
  HideColor.classList.toggle('Muestra-color');
});
const MostrarGeneros = document.getElementById('Filtro-genero');
const HideGenero = document.querySelector('.Oculta-generos');
MostrarGeneros.addEventListener('click', () =>{
  HideGenero.classList.toggle('Muestra-generos');
});
});