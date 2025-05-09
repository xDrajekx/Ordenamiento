document.addEventListener('DOMContentLoaded',() =>{
const CambioImagen = document.getElementById('cambiar'); //Obtiene el id de la imagen principal de los tenis seleccionados//
const ClickImagen = document.getElementById('click1');   //Obtiene el id de la imagen de los otros colores de los tenis//
const ClickImagen2 = document.getElementById('click2');  //Obtiene el id de la imagen de los otros colores de los tenis//
const ClickImagen3 = document.getElementById('click3');  //Obtiene el id de la imagen de los otros colores de los tenis//
const ClickImagen4 = document.getElementById('click4');  //Obtiene el id de la imagen de los otros colores de los tenis//
const ClickImagen5 = document.getElementById('click5');  //Obtiene el id de la imagen de los otros colores de los tenis//
const CambioTexto = document.getElementById('Cambiar-color'); //Obtiene el id del texto que describe el color de los tenis y se convierte en la variable CambioTexto//
const descripcion= document.getElementById('descripcion');
const detalle1 = document.getElementById('detalle1');
const detalle2 = document.getElementById('detalle2');
const detalle3 = document.getElementById('detalle3');
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
//Todo esta parte del script sera para reenviar y mostrar la informaciuon correcta en dado caso de dar click en mismo modelo pero de diferente color
const Parametros = new URLSearchParams(window.location.search);
const id = Parametros.get('id'); //Obtiene el parametro id de la url de la pagina
const productos2 = [ //Este arreglo contiene todos los productos con sus descripciones, iamgenes y detalles
  {id: 'AirMax', ImagenPrincipal: '../Imagenes/AirMax90.jpg', DescripcionColor: 'Negro', 
    Descripcion: 'Con su diseño elegante y minimalista, los Air Max 90 combinan estilo y comodidad en un solo paquete. La unidad Air Max visible en la parte inferior del talón proporciona una amortiguación incomparable, mientras que la parte superior de malla y cuero sintético garantiza una transpirabilidad y durabilidad excepcionales.', 
    imagenes: {imagenColor: '../Imagenes/AirMax90.jpg', imagenColor1: '../Imagenes/AirMax902.jpg',  imagenColor2:'../Imagenes/AirMax903.jpg', imagenColor3: '../Imagenes/AirMax904.jpg', imagenColor4: '../Imagenes/AirMax906.jpg' }, 
    listas: {detalle1: 'Agrega una amortiguacion increible', detalle2: 'estilo versatil', detalle3: 'Estilo retro'}
  },
  {id: 'AirMax2', ImagenPrincipal: "../Imagenes/AirMax902.jpg", DescripcionColor: 'Color: Azul/Blacno/Rojo',
     Descripcion: 'Con su diseño elegante y minimalista, los Air Max 90 combinan estilo y comodidad en un solo paquete. La unidad Air Max visible en la parte inferior del talón proporciona una amortiguación incomparable, mientras que la parte superior de malla y cuero sintético garantiza una transpirabilidad y durabilidad excepcionales.', 
       imagenes:{imagenColor:'../Imagenes/AirMax902.jpg', imagenColor1: '../Imagenes/AirMax90.jpg', imagenColor2:'../Imagenes/AirMax903.jpg', imagenColor3: '../Imagenes/AirMax904.jpg', imagenColor4: '../Imagenes/AirMax906.jpg' },
     listas: {detalle1: 'Agrega una amortiguacion increible', detalle2: 'estilo versatil', detalle3: 'Estilo retro'}},

  {id: 'AirMax3', ImagenPrincipal: "../Imagenes/AirMax903.jpg", DescripcionColor: 'Color: Verde militar/Verde oscuro', imagenes: {imagenColor: '../Imagenes/AirMax903.jpg',  imagenColor1: '../Imagenes/AirMax90.jpg', imagenColor2:'../Imagenes/AirMax902.jpg' },
  Descripcion: 'Con su diseño elegante y minimalista, los Air Max 90 combinan estilo y comodidad en un solo paquete. La unidad Air Max visible en la parte inferior del talón proporciona una amortiguación incomparable, mientras que la parte superior de malla y cuero sintético garantiza una transpirabilidad y durabilidad excepcionales.', 
  listas: {detalle1: 'Agrega una amortiguacion increible', detalle2: 'estilo versatil', detalle3: 'Estilo retro'}},


  {id: 'AirMax4', ImagenPrincipal: "../Imagenes/AirMax904.jpg", DescripcionColor: 'Color: Blanco/Gris', Descirpcion: 'Los '},

  {id: 'AirMax5', ImagenPrincipal: "../Imagenes/AirMax906.jpg", DescripcionColor: 'Color: Blanco/Verde'},

  {id: 'AirForce1', ImagenPrincipal: "../Imagenes/Air Force 1.jpg", DescripcionColor: 'Color: Negro/Rojo',Descripcion: 'Comodo, duradero y atemporal, con un estilo perfecto para estar en la cancha o en movimiento', imagenes:{imagenColor: '../Imagenes/Air Force 1.jpg', imagenColor1: '../Imagenes/Air force 1 07.avif', imagenColor2: '../Imagenes/Air force 1 07 2.avif'}, listas: {detalle1: 'Diseñado para basquetbol de alto rendimiento', detalle2: 'Cuello acolchado comodo y elegante', detalle3: 'Amortiguacion Nike Air'} },

  {id: 'AirForce2',  ImagenPrincipal: "../Imagenes/Air Force 1 07.avif", DescripcionColor: 'Color: Blanco'},
  
  {id: 'AirJordan1Low', ImagenPrincipal: "../Imagenes/AirJordan1 Low.jpg", DescripcionColor: 'Color: Verde/ Blanco'},
  
]
const producto = productos2.find(p => p.id ===id); //compara si la propiedad id de los productos es igual al id ingresado en la url y lo encuentra
if (producto){ //si producto tiene algun valor entonces:
  CambioImagen.src = producto.ImagenPrincipal; //Cambiara la imamegn principal por la propiedad del producto que se obtuvo por el id
  CambioTexto.textContent = producto.DescripcionColor; //Cambiara la descripcion del color por la propiedad del producto que se obtuvo en el id
  ClickImagen.src = producto.imagenes.imagenColor ; //Pondra la imagen de la propiedad que se obtuvo del id
  ClickImagen2.src = producto.imagenes.imagenColor1; //Pondra la imagen de la propiedad que se obtuvo del id
  ClickImagen3.src = producto.imagenes.imagenColor2; //Pondra la imagen de la propiedad que se obtuvo del id
  producto.imagenes.imagenColor3 ? //Pondra la imagen de la propiedad que se obtuvo del id si existe, si no la removera
  ClickImagen4.src = producto.imagenes.imagenColor3 : ClickImagen4.remove();
  producto.imagenes.imagenColor4 ? //Pondra la imagen de la propiedad que se obtuvo del id si existe, si no la removera
  ClickImagen5.src = producto.imagenes.imagenColor4 : ClickImagen5.remove();
  descripcion.textContent = producto.Descripcion; //Cambiara la descrpcion del producto por la propiedad que se obtuvo del id
  detalle1.textContent = producto.listas.detalle1; //Cambiara el detalle de la lista por la propiedad que se obtuvo del id
  detalle2.textContent = producto.listas.detalle2;  //Cambiara el detalle de la lista por la propiedad que se obtuvo del id
  detalle3.textContent = producto.listas.detalle3;  //Cambiara el detalle de la lista por la propiedad que se obtuvo del id

  ClickImagen.addEventListener('click',()=>{
    CambioImagen.src = producto.imagenes.imagenColor; //Al momento de dar click la imagen principal sera la que se selecciono
  });
  ClickImagen2.addEventListener('click',()=>{
    CambioImagen.src = producto.imagenes.imagenColor1; //Al momento de dar click la imagen principal sera la que se selecciono
  });
  ClickImagen3.addEventListener('click',()=>{
    CambioImagen.src = producto.imagenes.imagenColor2; //Al momento de dar click la imagen principal sera la que se selecciono
  });
  ClickImagen4.addEventListener('click',()=>{
    CambioImagen.src = producto.imagenes.imagenColor3; //Al momento de dar click la imagen principal sera la que se selecciono
  });
  ClickImagen5.addEventListener('click',()=>{
    CambioImagen.src = producto.imagenes.imagenColor4; //Al momento de dar click la imagen principal sera la que se selecciono
  });
 

}
});