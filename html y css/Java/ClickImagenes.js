const CambioImagen = document.getElementById('cambiar'); //Obtiene el id de la imagen principal de los tenis seleccionados//
const ClickImagen = document.getElementById('click1');   //Obtiene el id de la imagen de los otros colores de los tenis//
const ClickImagen2 = document.getElementById('click2');  //Obtiene el id de la imagen de los otros colores de los tenis//
const ClickImagen3 = document.getElementById('click3');  //Obtiene el id de la imagen de los otros colores de los tenis//
const ClickImagen4 = document.getElementById('click4');  //Obtiene el id de la imagen de los otros colores de los tenis//
const ClickImagen5 = document.getElementById('click5');  //Obtiene el id de la imagen de los otros colores de los tenis//
const CambioTexto = document.getElementById('Cambiar-color'); //Obtiene el id del texto que describe el color de los tenis y se convierte en la variable CambioTexto//
ClickImagen.addEventListener('click', () => {  //Añade un evento de click a la primera imagen de los colores de tenis, que ahora es la variable ClickImagen//
    CambioImagen.src = '../Imagenes/AirMax902.jpg'; //Reemplaza la imagen principal de los tenis por la imagen de otros colores que obtuvo el click//
    CambioTexto.textContent = 'Color: Azul/Blacno/Rojo'; //Al momento de que se hizo click en la imagen cambia el texto que describe el color de los tenis//
});
ClickImagen2.addEventListener('click', () => { //Añade un evento de click a la segunda imagen de los colores de tenis, que ahora es la variable ClickImagen2//
    CambioImagen.src = '../Imagenes/AirMax903.jpg'; //Reemplaza la imagen principal de los tenis por la imagen de otros colores que obtuvo el click//
    CambioTexto.textContent = 'Color: Verde militar/Verde oscuro'; //Al momento de que se hizo click en la imagen cambia el texto que describe el color de los tenis//
});
ClickImagen3.addEventListener('click', () => { //Añade un evento de click a la tercera imagen de los colores de tenis, que ahora es la variable ClickImagen3//
    CambioImagen.src = '../Imagenes/AirMax904.jpg'; //Reemplaza la imagen principal de los tenis por la imagen de otros colores que obtuvo el click//
    CambioTexto.textContent = 'Color: Blanco/Gris'; //Al momento de que se hizo click en la imagen cambia el texto que describe el color de los tenis//
});
ClickImagen4.addEventListener('click', () => { //Añade un evento de click a la cuarta imagen de los colores de tenis, que ahora es la variable ClickImagen4//
    CambioImagen.src = '../Imagenes/AirMax90.jpg'; //Reemplaza la imagen principal de los tenis por la imagen de otros colores que obtuvo el click//
    CambioTexto.textContent = 'Color: Negro'; //Al momento de que se hizo click en la imagen cambia el texto que describe el color de los tenis//
});
ClickImagen5.addEventListener('click', () => { //Añade un evento de click a la quinta imagen de los colores de tenis, que ahora es la variable ClickImagen5//
    CambioImagen.src = '../Imagenes/AirMax906.jpg'; //Reemplaza la imagen principal de los tenis por la imagen de otros colores que obtuvo el click//
    CambioTexto.textContent = 'Color: Blanco/Verde'; //Al momento de que se hizo click en la imagen cambia el texto que describe el color de los tenis//
});

const MostrarDesc = document.getElementById('Mostrar'); //Obtiene el id Mostrar del boton que mostrara y ocultara la descripcion//
const TextHide = document.querySelector('.Ocultar-descripcion'); //Se usa querySelector para seleccionar la clase Ocultar-descripcion y se asigna a la variable TextHide//
MostrarDesc.addEventListener('click', () => { //Se añade un evento de click a la variable MostrarDesc que es el boton//
    TextHide.classList.toggle('Mostrar-descripcion'); //La variable TextHide usa el toggle para alternar entre agregar y eliminar una clase, por lo tanto al momento de hacerle click asignara la clase Mostrar-descipcion y eliminara la otra clase//
});
const MostrarDetalles = document.getElementById('mostrando'); //Obtiene el id mostrando del boton que mostrara y ocultara los detalles//
const Detailshide = document.getElementById('Lista'); //Obtiene el id Lista de la lista de detalles//
MostrarDetalles.addEventListener('click',() => { //Se añade un evento de click a la variable MostrarDetalles que es el boton//
    Detailshide.classList.toggle('mostrar'); //La variable DetailsHide usa el toggle para alternar entre agregar y eliminar una clase, por lo tanto al momento de hacerle click asignara la clase mostrar y eliminara la otra clase//
    Detailshide.classList.toggle('ocultar'); //La variable DetailsHide usa el toggle para alternar entre agregar y eliminar una clase, por lo tanto al momento de hacerle click asignara la clase ocultar y eliminara la otra clase//
});
// Obtener los elementos de la ventana modal y el botón de cierre
var modal = document.getElementById("modal"); //Obtiene id de la centana modal
var btn = document.getElementById("Abrir-modal"); //Obtiene el id del boton para abrir la ventana modal
var span = document.getElementsByClassName("cerrar-No")[0]; //Obtiene la clase del boton para no aceptar la compra
var span1 = document.getElementsByClassName("cerrar-Si")[0]; //Obtiene la clase del boton para aceptar la compra
// Función para abrir la ventana modal
btn.onclick = function() {
  modal.style.display = "block"; //Al momeento de hacer click en el boton que es la variable btn desplegara la ventana modal
}

// Función para cerrar la ventana modal
span.onclick = function() {
  modal.style.display = "none"; //Al momeento de hacer click en el boton de No que es la variable span ocultara la ventana modal
}
span1.onclick = function() {
  modal.style.display = "none"; //Al momeento de hacer click en el boton Si que es la variable span1 ocultara la ventana modal*/
}

// Función para cerrar la ventana modal al hacer clic fuera de ella
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"; //Al momento de hacer click fuera de la ventana modal y si esta desplegada entonces se cerrara la ventana modal
  }
}
