const Mostrardetails = document.getElementById('Mostrando'); //Obtiene el id Mostrar del boton que mostrara y ocultara la descripcion//
const DetailsHide = document.querySelector('.ocultar'); //Se usa querySelector para seleccionar la clase Ocultar-descripcion y se asigna a la variable TextHide//
Mostrardetails.addEventListener('click', () => { //Se añade un evento de click a la variable MostrarDesc que es el boton//
    DetailsHide.classList.toggle('mostrar'); //La variable TextHide usa el toggle para alternar entre agregar y eliminar una clase, por lo tanto al momento de hacerle click asignara la clase Mostrar-descipcion y eliminara la otra clase//
  
});