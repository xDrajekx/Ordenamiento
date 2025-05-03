document.addEventListener('DOMContentLoaded',() =>{
const Evento = document.getElementById('Evento'); //Obtiene el id Evento de la imagen del producto y lo guarda en la variable Evento
const evento = document.getElementById('evento'); //Obtiene el id evento del contenedor de las imagenes ocultas y lo guarda en la variable evento
const Colores = document.querySelector('.imagenes-ocultas');//Obtiene la clase css del contenedor y lo guarda en la variable Colores
Evento.addEventListener('mouseover', () => { //La variable Evento que es la imagen del producto obtiene el evento al momento de pasar el mouse sobre el elemento y esto hace que
  Colores.style.display='block'; //El estilo css de Colores o del contenedor de las imagenes sera display block, haciendo asi que aparezcan las imagenes
});
Evento.addEventListener('mouseout', () => { //La variable Evento obtiene el evento al momento de quitar el mouse de el elemento y esto hace que
  Colores.style.display='none'; //El estilo css de Colores o del contenedor de las imagenes sera display none, haciendo asi que desaparezcan las imagenes
});
evento.addEventListener('mouseover', () => { //La variable evento que es el contenedor de las imagenes obtiene el evento al momento de pasar el mouse sobre el elemento y esto hace que
  evento.style.display = 'block'; //El estilo css de Colores o del contenedor de las imagenes sera display block, haciendo asi que aparezcan las imagenes
});
evento.addEventListener('mouseout', () => { //La variable evento que es el contenedor de las imagenes obtiene el evento al momento de quitar el mouse sobre el elemento y esto hace que
  evento.style.display='none'; //El estilo css de Colores o del contenedor de las imagenes sera display none, haciendo asi que desaparezcan las imagenes
});
});