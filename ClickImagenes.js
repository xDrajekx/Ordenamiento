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
const nombre_teni = document.querySelector('.tenis');
const Marca_teni = document.querySelector('.marc');
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
  {id: 'AirMax', ImagenPrincipal: '../../zapatos.nike/AirMax90 (3).jpg', DescripcionColor: 'Negro',marca:"Nike", 
    Descripcion: 'Con su diseño elegante y minimalista, los Air Max 90 combinan estilo y comodidad en un solo paquete. La unidad Air Max visible en la parte inferior del talón proporciona una amortiguación incomparable, mientras que la parte superior de malla y cuero sintético garantiza una transpirabilidad y durabilidad excepcionales.', 
    imagenes: {imagenColor: '../Imagenes/AirMax90.jpg', imagenColor1: '../Imagenes/AirMax902.jpg',  imagenColor2:'../Imagenes/AirMax903.jpg', imagenColor3: '../Imagenes/AirMax904.jpg', imagenColor4: '../Imagenes/AirMax906.jpg' }, 
    listas: {detalle1: 'Agrega una amortiguacion increible', detalle2: 'estilo versatil', detalle3: 'Estilo retro'}
  },
  {id: 'AirMax2', ImagenPrincipal: "../../zapatos.nike/AirMax902_resultado.webp", DescripcionColor: 'Color: Azul/Blacno/Rojo',
     Descripcion: 'Con su diseño elegante y minimalista, los Air Max 90 combinan estilo y comodidad en un solo paquete. La unidad Air Max visible en la parte inferior del talón proporciona una amortiguación incomparable, mientras que la parte superior de malla y cuero sintético garantiza una transpirabilidad y durabilidad excepcionales.', 
       imagenes:{imagenColor:'../Imagenes/AirMax902.jpg', imagenColor1: '../Imagenes/AirMax90.jpg', imagenColor2:'../Imagenes/AirMax903.jpg', imagenColor3: '../Imagenes/AirMax904.jpg', imagenColor4: '../Imagenes/AirMax906.jpg' },
     listas: {detalle1: 'Agrega una amortiguacion increible', detalle2: 'estilo versatil', detalle3: 'Estilo retro'}},

  {id: 'AirMax3', ImagenPrincipal: "../Imagenes/AirMax903.jpg", DescripcionColor: 'Color: Verde militar/Verde oscuro', imagenes: {imagenColor: '../Imagenes/AirMax903.jpg',  imagenColor1: '../Imagenes/AirMax90.jpg', imagenColor2:'../Imagenes/AirMax902.jpg' },
  Descripcion: 'Con su diseño elegante y minimalista, los Air Max 90 combinan estilo y comodidad en un solo paquete. La unidad Air Max visible en la parte inferior del talón proporciona una amortiguación incomparable, mientras que la parte superior de malla y cuero sintético garantiza una transpirabilidad y durabilidad excepcionales.', 
  listas: {detalle1: 'Agrega una amortiguacion increible', detalle2: 'estilo versatil', detalle3: 'Estilo retro'}},


  {id: 'AirMax4', ImagenPrincipal: "../Imagenes/AirMax904.jpg", DescripcionColor: 'Color: Blanco/Gris', Descirpcion: 'Los '},

  {id: 'AirMax5', ImagenPrincipal: "../Imagenes/AirMax906.jpg", DescripcionColor: 'Color: Blanco/Verde'},


  {id: 'AirForce2',  ImagenPrincipal: "../Imagenes/Air Force 1 07.avif", DescripcionColor: 'Color: Blanco'},
  
  {id: 'AirJordan1Low', ImagenPrincipal: "../Imagenes/AirJordan1 Low.jpg", DescripcionColor: 'Color: Verde/ Blanco'},

  //descripciones de productos adidad

  {id: "Campus",ImagenPrincipal:"../../Apartado adidas/images/Adidas Campus 00s_resultado.webp",nombre:'Adidas Campus 00s',marca:'Marca: Adidas',DescripcionColor:"Color:Negro/Negro/Verde",DescripcionColor1:"Color:Verde/Amarillo/Blanco", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas Campus 00s_resultado.webp",imagenColor1:"../../Apartado adidas/Imagenes de colores/Adidas Campus 00s 2_resultado.webp",imagenColor2:"../../Apartado adidas/Imagenes de colores/Adidas Campus 00s 3_resultado.webp"},
  Descripcion:"   los tenis adidas Campus fueron rápidamente adoptados en casi todas partes. Con este par, llevamos la icónica silueta en otra dirección y le agregamos materiales, colores y proporciones modernos. Traen una parte superior de piel prémium con un forro interno de tela fleece suave, todo sobre una mediasuela en blanco hueso que conecta claramente con el legado Campus.",
 listas:{detalle1:"Ajuste clasico", detalle2:"Forro interno textil", detalle3:"suela de caucho"}},

 {id: "Campus2",ImagenPrincipal:"../../Apartado adidas/imagenes de colores/Adidas Campus 00s 2_resultado.webp",nombre:"Adidas Campus 00s",marca:"Adidas", DescripcionColor:"Color:Verde/Amarillo/Blanco",imagenes:{imagenColor:"../../Apartado adidas/Imagenes de colores/Adidas Campus 00s 2_resultado.webp",imagenColor1:"../../Apartado adidas/images/Adidas Campus 00s_resultado.webp",imagenColor2:"../../Apartado adidas/Imagenes de colores/Adidas Campus 00s 3_resultado.webp"},
  Descripcion:"   los tenis adidas Campus fueron rápidamente adoptados en casi todas partes. Con este par, llevamos la icónica silueta en otra dirección y le agregamos materiales, colores y proporciones modernos. Traen una parte superior de piel prémium con un forro interno de tela fleece suave, todo sobre una mediasuela en blanco hueso que conecta claramente con el legado Campus.",
 listas:{detalle1:"Ajuste clasico", detalle2:"Forro interno textil", detalle3:"suela de caucho"}},

 {id: "Campus3",ImagenPrincipal:"../../Apartado adidas/imagenes de colores/Adidas Campus 00s 3_resultado.webp",nombre:"Adidas Campus 00s",marca:"Adidas", DescripcionColor:"Color:Amarillo/Blanco",DescripcionColor1:"Color:Negro/Negro/verde",DescripcionColor2:"Color Verde/Amarillo/Blanco", imagenes:{imagenColor:"../../Apartado adidas/Imagenes de colores/Adidas Campus 00s 3_resultado.webp",imagenColor1:"../../Apartado adidas/images/Adidas Campus 00s_resultado.webp",imagenColor2:"../../Apartado adidas/Imagenes de colores/Adidas Campus 00s 2_resultado.webp"},
  Descripcion:"   los tenis adidas Campus fueron rápidamente adoptados en casi todas partes. Con este par, llevamos la icónica silueta en otra dirección y le agregamos materiales, colores y proporciones modernos. Traen una parte superior de piel prémium con un forro interno de tela fleece suave, todo sobre una mediasuela en blanco hueso que conecta claramente con el legado Campus.",
 listas:{detalle1:"Ajuste clasico", detalle2:"Forro interno textil", detalle3:"suela de caucho"}},

 //producto2
 {id:"Superstar",ImagenPrincipal:"../../Apartado adidas/images/Adidas superstar_resultado.webp",nombre:"Superstar",marca:"Adidas",DescripcionColor:"Color:Negro/Blanco/Negro",DescripcionColor1:"Color:Blanco/Negro/Blanco",imagenes:{imagenColor:"../../Apartado adidas/images/Adidas superstar_resultado.webp",imagenColor1:"../../Apartado adidas/Imagenes de colores/Adidas superstar 2_resultado.webp"},
Descripcion:"Con su diseño inconfundible y su distintiva puntera de goma,los Superstar han Capturado la imaginacion de generaciones de entusiastas de los sneakers y amantes de la moda.Descubre por que estos tenis siguen siendo un referente en estilo y comodidad",
listas:{detalle1:"Suela de caucho",detalle2:"Exterior de piel",detalle3:"Sistema de amarre de cordones"}},

{id:"Superstar2",ImagenPrincipal:"../../Apartado adidas/Imagenes de colores/Adidas superstar 2_resultado.webp",nombre:"Superstar",marca:"Adidas",DescripcionColor:"Color:Blanco/Negro/Blanco",DescripcionColor1:"Color:Negro/Blanco/Negro",imagenes:{imagenColor:"../../Apartado adidas/Imagenes de colores/Adidas superstar 2_resultado.webp", imagenColor1:"../../Apartado adidas/images/Adidas superstar_resultado.webp"},
Descripcion:"Con su diseño inconfundible y su distintiva puntera de goma,los Superstar han Capturado la imaginacion de generaciones de entusiastas de los sneakers y amantes de la moda.Descubre por que estos tenis siguen siendo un referente en estilo y comodidad",
listas:{detalle1:"Suela de caucho",detalle2:"Exterior de piel",detalle3:"Sistema de amarre de cordones"}},

//producto3
{id:"ForumLow",ImagenPrincipal:"../../Apartado adidas/images/Adidas Forum Low Cl_resultado.webp",nombre:"Forum Low CL",marca:"Adidas",DescripcionColor:"Color:Blanco/Rojo/",DescripcionColor1:"Color:Rojo/Blanco/",DescripcionColor2:"Cafe/Amarillo",imagenes:{imagenColor:"../../Apartado adidas/images/Adidas Forum Low Cl_resultado.webp", imagenColor1:"../../Apartado adidas/Imagenes de colores/Adidas Forum Cl 2_resultado.webp",imagenColor2:"../../Apartado adidas/Imagenes de colores/Adidas Forum Low CL 3_resultado.webp"},
Descripcion:"Este par rinde homenaje a su legado con una mezcla de gamuza y piel de primera calidad. El suave forro interno de felpa envuelve tu pie en comodidad, mientras que la resistente suela tipo cupsole de caucho te mantiene estable y con soporte todo el día. Creados para todos los días, los Forum combinan lo clásico con lo moderno, lo sencillo con lo audaz y lo descomplicado con lo expresivo.",
listas:{detalle1:"Ajuste clasico",detalle2:"Forro de felpa",detalle3:"Suela de tipo cupsole de caucho"}},

{id:"ForumLow2",ImagenPrincipal:"../../Apartado adidas/Imagenes de colores/Adidas Forum Low Cl 2_resultado.webp",nombre:"Forum Low CL",marca:"Adidas",DescripcionColor:"Color:Blanco/Rojo/",DescripcionColor1:"Color:Rojo/Blanco/",DescripcionColor2:"Cafe/Amarillo",imagenes:{imagenColor:"../../Apartado adidas/Imagenes de colores/Adidas Forum Low Cl 2_resultado.webp", imagenColor1:"../../Apartado adidas/images/Adidas Forum Cl_resultado.webp",imagenColor2:"../../Apartado adidas/Imagenes de colores/Adidas Forum Low CL 3_resultado.webp"},
Descripcion:"Este par rinde homenaje a su legado con una mezcla de gamuza y piel de primera calidad. El suave forro interno de felpa envuelve tu pie en comodidad, mientras que la resistente suela tipo cupsole de caucho te mantiene estable y con soporte todo el día. Creados para todos los días, los Forum combinan lo clásico con lo moderno, lo sencillo con lo audaz y lo descomplicado con lo expresivo.",
listas:{detalle1:"Ajuste clasico",detalle2:"Forro de felpa",detalle3:"Suela de tipo cupsole de caucho"}},

{id:"ForumLow3",ImagenPrincipal:"../../Apartado adidas/Imagenes de colores/Adidas Forum Low Cl 3_resultado.webp",nombre:"Forum Low CL",marca:"Adidas",DescripcionColor:"Color:Blanco/Rojo/",DescripcionColor1:"Color:Rojo/Blanco/",DescripcionColor2:"Cafe/Amarillo",imagenes:{imagenColor:"../../Apartado adidas/Imagenes de colores/Adidas Forum Low CL 3_resultado.webp", imagenColor1:"../../Apartado adidas/Imagenes de colores/Adidas Forum Cl 2_resultado.webp",imagenColor2:"../../Apartado adidas/images/Adidas Forum Low Cl_resultado.webp"},
Descripcion:"Este par rinde homenaje a su legado con una mezcla de gamuza y piel de primera calidad. El suave forro interno de felpa envuelve tu pie en comodidad, mientras que la resistente suela tipo cupsole de caucho te mantiene estable y con soporte todo el día. Creados para todos los días, los Forum combinan lo clásico con lo moderno, lo sencillo con lo audaz y lo descomplicado con lo expresivo.",
listas:{detalle1:"Ajuste clasico",detalle2:"Forro de felpa",detalle3:"Suela de tipo cupsole de caucho"}},

//producto4
{id:"Adizero",ImagenPrincipal:"../../Apartado adidas/images/Adizero Adios PRO 4_resultado.webp",nombre:"Adizero Adios Pro4",marca:"Adidas",DescripcionColor:"Color:Rojo/Negro",DescripcionColor1:"Color:Verde/Negro",DescripcionColor2:"Gris/Naranja",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adizero Adios PRO 4_resultado.webp", imagenColor1:"../../Apartado adidas/Imagenes de colores/Adizero Adios PRO 4 2_resultado.webp",imagenColor2:"../../Apartado adidas/Imagenes de colores/Adizero Adios PRO 4 3_resultado.webp",imagenColor3:"../../Apartado adidas/images/teni12_resultado.webp"},
Descripcion:" Los Adios Pro 4 están diseñados para corredores rápidos que quieren experimentar más velocidad, con características mejoradas creadas para optimizar la eficiencia al correr. Nuestras varillas ENERGYRODS 2.0 de carbono brindan una transición fluida del talón a la punta para pasos ágiles y eficientes. En la mediasuela, un nuevo punto de balance ofrece una mejor economía al correr. Una capa doble de nuestra mejor tecnología ultraliviana LIGHTSTRIKE PRO garantiza amortiguación en cada paso y te ayuda a mantener la energía a largo plazo. Cuentan con una suela construida con caucho Continental™ para una transición antideslizante durante el despegue, así como tecnología LIGHTTRAXION, diseñada para reducir el peso sin sacrificar el agarre.",
listas:{detalle1:"Horma clasica",detalle2:"Forro interno textil",detalle3:"Suela de caucho continental"}},

{id:"Adizero2",ImagenPrincipal:"../../Apartado adidas/images/Adizero Adios PRO 4_resultado.webp",DescripcionColor:"Color:Rojo/Negro",nombre:"Adizero Adios Pro4",marca:"Adidas",DescripcionColor1:"Color:Verde/Negro",DescripcionColor2:"Gris/Naranja",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adizero Adios PRO 4_resultado.webp", imagenColor1:"../../Apartado adidas/Imagenes de colores/Adizero Adios PRO 4 2_resultado.webp",imagenColor2:"../../Apartado adidas/Imagenes de colores/Adizero Adios PRO 4 3_resultado.webp",imagenColor3:"../../Apartado adidas/images/teni12_resultado.webp"},
Descripcion:" Los Adios Pro 4 están diseñados para corredores rápidos que quieren experimentar más velocidad, con características mejoradas creadas para optimizar la eficiencia al correr. Nuestras varillas ENERGYRODS 2.0 de carbono brindan una transición fluida del talón a la punta para pasos ágiles y eficientes. En la mediasuela, un nuevo punto de balance ofrece una mejor economía al correr. Una capa doble de nuestra mejor tecnología ultraliviana LIGHTSTRIKE PRO garantiza amortiguación en cada paso y te ayuda a mantener la energía a largo plazo. Cuentan con una suela construida con caucho Continental™ para una transición antideslizante durante el despegue, así como tecnología LIGHTTRAXION, diseñada para reducir el peso sin sacrificar el agarre.",
listas:{detalle1:"Horma clasica",detalle2:"Forro interno textil",detalle3:"Suela de caucho continental"}},

{id:"Adizero3",ImagenPrincipal:"../../Apartado adidas/images/Adizero Adios PRO 4._resultado.webp",DescripcionColor:"Color:Rojo/Negro",nombre:"Adizero Adios Pro4",marca:"Adidas",DescripcionColor1:"Color:Verde/Negro",DescripcionColor2:"Gris/Naranja",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adizero Adios PRO 4_resultado.webp", imagenColor1:"../../Apartado adidas/Imagenes de colores/Adizero Adios PRO 4 2_resultado.webp",imagenColor2:"../../Apartado adidas/Imagenes de colores/Adizero Adios PRO 4 3_resultado.webp",imagenColor3:"../../Apartado adidas/images/teni12_resultado.webp"},
Descripcion:" Los Adios Pro 4 están diseñados para corredores rápidos que quieren experimentar más velocidad, con características mejoradas creadas para optimizar la eficiencia al correr. Nuestras varillas ENERGYRODS 2.0 de carbono brindan una transición fluida del talón a la punta para pasos ágiles y eficientes. En la mediasuela, un nuevo punto de balance ofrece una mejor economía al correr. Una capa doble de nuestra mejor tecnología ultraliviana LIGHTSTRIKE PRO garantiza amortiguación en cada paso y te ayuda a mantener la energía a largo plazo. Cuentan con una suela construida con caucho Continental™ para una transición antideslizante durante el despegue, así como tecnología LIGHTTRAXION, diseñada para reducir el peso sin sacrificar el agarre.",
listas:{detalle1:"Horma clasica",detalle2:"Forro interno textil",detalle3:"Suela de caucho continental"}},

{id:"Adizero4",ImagenPrincipal:"../../Apartado adidas/images/Adizero Adios PRO 4_resultado.webp",nombre:"Adizero Adios Pro4",marca:"Adidas",DescripcionColor:"Color:Rojo/Negro",DescripcionColor1:"Color:Verde/Negro",DescripcionColor2:"Gris/Naranja",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adizero Adios PRO 4_resultado.webp", imagenColor1:"../../Apartado adidas/Imagenes de colores/Adidas Gazelle 2_resultado.webp",imagenColor2:"../../Apartado adidas/Imagenes de colores/Adidas Gazelle 3_resultado.webp",imagenColor3:"../../Apartado adidas/Imagenes de colores/Adidas Gazelle 4_resultado.webp"},
Descripcion:" Los Adios Pro 4 están diseñados para corredores rápidos que quieren experimentar más velocidad, con características mejoradas creadas para optimizar la eficiencia al correr. Nuestras varillas ENERGYRODS 2.0 de carbono brindan una transición fluida del talón a la punta para pasos ágiles y eficientes. En la mediasuela, un nuevo punto de balance ofrece una mejor economía al correr. Una capa doble de nuestra mejor tecnología ultraliviana LIGHTSTRIKE PRO garantiza amortiguación en cada paso y te ayuda a mantener la energía a largo plazo. Cuentan con una suela construida con caucho Continental™ para una transición antideslizante durante el despegue, así como tecnología LIGHTTRAXION, diseñada para reducir el peso sin sacrificar el agarre.",
listas:{detalle1:"Horma clasica",detalle2:"Forro interno textil",detalle3:"Suela de caucho continental"}},

//producto5

{id:"Gazelle",ImagenPrincipal:"../../Apartado adidas/images/Adidas Gazelle_resultado.webp",nombre:"Adidas gazelle",marca:"Adidas",DescripcionColor:"Color:Rojo/Negro",DescripcionColor1:"Color:Verde/Negro",DescripcionColor2:"Gris/Naranja",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas Gazelle_resultado.webp", imagenColor1:"../../Apartado adidas/Imagenes de colores/Adidas Gazelle 2_resultado.webp",imagenColor2:"../../Apartado adidas/Imagenes de colores/Adidas Gazelle 3_resultado.webp",imagenColor3:"../../Apartado adidas/Imagenes de colores/Adidas Gazelle 4_resultado.webp"},
Descripcion:" Los tenis Adidas Gazelle son un clásico de la moda que comenzó en los años 60 y se ha convertido en un ícono en la cultura urbana. Están confeccionados con una parte superior de gamuza y una suela de caucho natural, lo que les otorga un estilo retro y versátil.",
listas:{detalle1:"Suela de caucho",detalle2:"Forro interno textil",detalle3:" mayor resistencia al desgaste"}},

{id:"Gazelle2",ImagenPrincipal:"../../Apartado adidas/images/Adidas Gazelle_resultado.webp",nombre:"Adidas Gazelle",marca:"Adidas",DescripcionColor:"Color:Rojo/Negro",DescripcionColor1:"Color:Verde/Negro",DescripcionColor2:"Gris/Naranja",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas Gazelle_resultado.webp", imagenColor1:"../../Apartado adidas/Imagenes de colores/Adidas Gazelle 2_resultado.webp",imagenColor2:"../../Apartado adidas/Imagenes de colores/Adidas Gazelle 3_resultado.webp",imagenColor3:"../../Apartado adidas/Imagenes de colores/Adidas Gazelle 4_resultado.webp"},
Descripcion:" Los tenis Adidas Gazelle son un clásico de la moda que comenzó en los años 60 y se ha convertido en un ícono en la cultura urbana. Están confeccionados con una parte superior de gamuza y una suela de caucho natural, lo que les otorga un estilo retro y versátil.",
listas:{detalle1:"Suela de caucho",detalle2:"Forro interno textil",detalle3:" mayor resistencia al desgaste"}},

{id:"Gazelle3",ImagenPrincipal:"../../Apartado adidas/images/Adidas Gazelle_resultado.webp",nombre:"Adidas Gazelle",marca:"Adidas",DescripcionColor:"Color:Rojo/Negro",DescripcionColor1:"Color:Verde/Negro",DescripcionColor2:"Gris/Naranja",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas Gazelle_resultado.webp", imagenColor1:"../../Apartado adidas/Imagenes de colores/Adidas Gazelle 2_resultado.webp",imagenColor2:"../../Apartado adidas/Imagenes de colores/Adidas Gazelle 3_resultado.webp",imagenColor3:"../../Apartado adidas/Imagenes de colores/Adidas Gazelle 4_resultado.webp"},
Descripcion:" Los tenis Adidas Gazelle son un clásico de la moda que comenzó en los años 60 y se ha convertido en un ícono en la cultura urbana. Están confeccionados con una parte superior de gamuza y una suela de caucho natural, lo que les otorga un estilo retro y versátil.",
listas:{detalle1:"Suela de caucho",detalle2:"Forro interno textil",detalle3:" mayor resistencia al desgaste"}},

{id:"Gazelle4",ImagenPrincipal:"../../Apartado adidas/images/Adidas Gazelle_resultado.webp",nombre:"Adidas Gazelle",marca:"Adidas",DescripcionColor:"Color:Rojo/Negro",DescripcionColor1:"Color:Verde/Negro",DescripcionColor2:"Gris/Naranja",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas Gazelle_resultado.webp", imagenColor1:"../../Apartado adidas/Imagenes de colores/Adidas Gazelle 2_resultado.webp",imagenColor2:"../../Apartado adidas/Imagenes de colores/Adidas Gazelle 3_resultado.webp",imagenColor3:"../../Apartado adidas/Imagenes de colores/Adidas Gazelle 4_resultado.webp"},
Descripcion:" Los tenis Adidas Gazelle son un clásico de la moda que comenzó en los años 60 y se ha convertido en un ícono en la cultura urbana. Están confeccionados con una parte superior de gamuza y una suela de caucho natural, lo que les otorga un estilo retro y versátil.",
listas:{detalle1:"Suela de caucho",detalle2:"Forro interno textil",detalle3:" mayor resistencia al desgaste"}},

//producto6
{id:"SambaToyStory",ImagenPrincipal:"../../Apartado adidas/images/teni6_resultado.wepb",nombre:"Adidas Samba X toy story",marca:"Adidas",DescripcionColor:"Marron/Azul usado/Alumina",DescripcionColor1:"Color:Verde/Negro",DescripcionColor2:"Gris/Naranja",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/teni6_resultado.webp", },
Descripcion:" Woody, de Toy Story de Pixar, es el protagonista de estas zapatillas adidas x Disney Samba OG para jóvenes. Combina el diseño elegante y de bajo perfil de la Samba con detalles divertidos y coloridos inspirados en las queridas películas. Los zapatos están hechos con cuero sintético con un cómodo forro textil y una suela de goma duradera. Las 3 Franjas, la lengüeta del talón, el forro del cuello, la plantilla y la etiqueta de la lengüeta están adornadas con colores y patrones inspirados en el icónico atuendo de Woody.",
listas:{detalle1:"Ajuste regular",detalle2:"Suela de goma",detalle3:" Forro Textil"}},

//producto7
{id:"OriginalsBadBunny",ImagenPrincipal:"../../Apartado adidas/images/teni7_resultado.webp",nombre:"Adidas originals X Bad Bunny",marca:"Adidas",DescripcionColor:"Marron/Azul usado/Alumina",DescripcionColor1:"Color:Verde/Negro",DescripcionColor2:"Gris/Naranja",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/teni7_resultado.webp", },
Descripcion:"Los tenis Adidas Originals Bad Bunny, conocidos como Ballerina, son una colaboración que fusiona la energía vibrante de Puerto Rico con la evolución musical de Bad Bunny. Estos tenis están inspirados en la silueta taekwondo de Adidas y combinan elementos clásicos con un diseño moderno y fluido.",
listas:{detalle1:"Ajuste regular",detalle2:"Suela de goma",detalle3:" Forro Textil"}},

//producto8

{id:"Italia",ImagenPrincipal:"../../Apartado adidas/images/teni8_resultado.webp",nombre:"Adidas italia X CP company",marca:"Adidas",DescripcionColor:"Marron/Azul usado/Alumina",DescripcionColor1:"Color:Verde/Negro",DescripcionColor2:"Gris/Naranja",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/teni8_resultado.webp", },
Descripcion:"Inspirada en la bandera italiana, esta edición especial combina cuero envejecido en azul real con detalles en ante en la puntera. La zapatilla presenta un diseño clásico con un toque moderno, incluyendo el logotipo de ambas marcas en distintos acabados.",
listas:{detalle1:"Ajuste regular",detalle2:"Suela de goma",detalle3:" Forro Textil"}},

//producto 9

{id:"Gazelle2.0",ImagenPrincipal:"../../Apartado adidas/images/Adidas Gazelle_resultado.webp",nombre:"Adidas gazelle",marca:"Adidas",DescripcionColor:"Color:Rojo/Negro",DescripcionColor1:"Color:Verde/Negro",DescripcionColor2:"Gris/Naranja",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas Gazelle_resultado.webp", imagenColor1:"../../Apartado adidas/Imagenes de colores/Adidas Gazelle 2_resultado.webp",imagenColor2:"../../Apartado adidas/Imagenes de colores/Adidas Gazelle 3_resultado.webp",imagenColor3:"../../Apartado adidas/Imagenes de colores/Adidas Gazelle 4_resultado.webp"},
Descripcion:" Los tenis Adidas Gazelle son un clásico de la moda que comenzó en los años 60 y se ha convertido en un ícono en la cultura urbana. Están confeccionados con una parte superior de gamuza y una suela de caucho natural, lo que les otorga un estilo retro y versátil.",
listas:{detalle1:"Suela de caucho",detalle2:"Forro interno textil",detalle3:" mayor resistencia al desgaste"}},

{id:"Gazelle2",ImagenPrincipal:"../../Apartado adidas/images/Adidas Gazelle_resultado.webp",nombre:"Adidas gazelle",marca:"Adidas",DescripcionColor:"Color:Rojo/Negro",DescripcionColor1:"Color:Verde/Negro",DescripcionColor2:"Gris/Naranja",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas Gazelle_resultado.webp", imagenColor1:"../../Apartado adidas/Imagenes de colores/Adidas Gazelle 2_resultado.webp",imagenColor2:"../../Apartado adidas/Imagenes de colores/Adidas Gazelle 3_resultado.webp",imagenColor3:"../../Apartado adidas/Imagenes de colores/Adidas Gazelle 4_resultado.webp"},
Descripcion:" Los tenis Adidas Gazelle son un clásico de la moda que comenzó en los años 60 y se ha convertido en un ícono en la cultura urbana. Están confeccionados con una parte superior de gamuza y una suela de caucho natural, lo que les otorga un estilo retro y versátil.",
listas:{detalle1:"Suela de caucho",detalle2:"Forro interno textil",detalle3:" mayor resistencia al desgaste"}},

{id:"Gazelle3",ImagenPrincipal:"../../Apartado adidas/images/Adidas Gazelle_resultado.webp",nombre:"Adidas gazelle",marca:"Adidas",DescripcionColor:"Color:Rojo/Negro",DescripcionColor1:"Color:Verde/Negro",DescripcionColor2:"Gris/Naranja",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas Gazelle_resultado.webp", imagenColor1:"../../Apartado adidas/Imagenes de colores/Adidas Gazelle 2_resultado.webp",imagenColor2:"../../Apartado adidas/Imagenes de colores/Adidas Gazelle 3_resultado.webp",imagenColor3:"../../Apartado adidas/Imagenes de colores/Adidas Gazelle 4_resultado.webp"},
Descripcion:" Los tenis Adidas Gazelle son un clásico de la moda que comenzó en los años 60 y se ha convertido en un ícono en la cultura urbana. Están confeccionados con una parte superior de gamuza y una suela de caucho natural, lo que les otorga un estilo retro y versátil.",
listas:{detalle1:"Suela de caucho",detalle2:"Forro interno textil",detalle3:" mayor resistencia al desgaste"}},

{id:"Gazelle4",ImagenPrincipal:"../../Apartado adidas/images/Adidas Gazelle_resultado.webp",nombre:"Adidas gazelle",marca:"Adidas",DescripcionColor:"Color:Rojo/Negro",DescripcionColor1:"Color:Verde/Negro",DescripcionColor2:"Gris/Naranja",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas Gazelle_resultado.webp", imagenColor1:"../../Apartado adidas/Imagenes de colores/Adidas Gazelle 2_resultado.webp",imagenColor2:"../../Apartado adidas/Imagenes de colores/Adidas Gazelle 3_resultado.webp",imagenColor3:"../../Apartado adidas/Imagenes de colores/Adidas Gazelle 4_resultado.webp"},
Descripcion:" Los tenis Adidas Gazelle son un clásico de la moda que comenzó en los años 60 y se ha convertido en un ícono en la cultura urbana. Están confeccionados con una parte superior de gamuza y una suela de caucho natural, lo que les otorga un estilo retro y versátil.",
listas:{detalle1:"Suela de caucho",detalle2:"Forro interno textil",detalle3:" mayor resistencia al desgaste"}},

//producto 10

{id:"Handball",ImagenPrincipal:"../../Apartado adidas/images/Adidas Gazelle_resultado.webp",nombre:"Adidas Handball spezial",marca:"Adidas",DescripcionColor:"Color:Rojo/Negro",DescripcionColor1:"Color:Verde/Negro",DescripcionColor2:"Gris/Naranja",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas Gazelle_resultado.webp", imagenColor1:"../../Apartado adidas/Imagenes de colores/Adidas Gazelle 2_resultado.webp",imagenColor2:"../../Apartado adidas/Imagenes de colores/Adidas Gazelle 3_resultado.webp",imagenColor3:"../../Apartado adidas/Imagenes de colores/Adidas Gazelle 4_resultado.webp"},
Descripcion:" Esta zapatilla adidas Handball Special le da a tu atuendo un estilo retro casual. Fue diseñado originalmente para la sala en los años 70, pero con su silueta escotada conquistó no solo el terreno de juego, sino también las calles de la ciudad en un abrir y cerrar de ojos. La parte superior de gamuza de primera calidad se complementa con costuras en contraste para llamar la atención, y la superposición de la puntera en forma de T completa el ambiente vintage.",
listas:{detalle1:"parte superior de gamuza",detalle2:"Ajuste regular",detalle3:" mayor resistencia al desgaste"}},

{id:"Gazelle3",ImagenPrincipal:"../../Apartado adidas/images/Adidas Gazelle_resultado.webp",nombre:"Adidas Handball spezial",marca:"Adidas",DescripcionColor:"Color:Rojo/Negro",DescripcionColor1:"Color:Verde/Negro",DescripcionColor2:"Gris/Naranja",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas Gazelle_resultado.webp", imagenColor1:"../../Apartado adidas/Imagenes de colores/Adidas Gazelle 2_resultado.webp",imagenColor2:"../../Apartado adidas/Imagenes de colores/Adidas Gazelle 3_resultado.webp",imagenColor3:"../../Apartado adidas/Imagenes de colores/Adidas Gazelle 4_resultado.webp"},
Descripcion:" Esta zapatilla adidas Handball Special le da a tu atuendo un estilo retro casual. Fue diseñado originalmente para la sala en los años 70, pero con su silueta escotada conquistó no solo el terreno de juego, sino también las calles de la ciudad en un abrir y cerrar de ojos. La parte superior de gamuza de primera calidad se complementa con costuras en contraste para llamar la atención, y la superposición de la puntera en forma de T completa el ambiente vintage.",
listas:{detalle1:"Suela de caucho",detalle2:"Forro interno textil",detalle3:"Forro sintetico"}},

{id:"Gazelle4",ImagenPrincipal:"../../Apartado adidas/images/Adidas Gazelle_resultado.webp",nombre:"Adidas Handball spezial",marca:"Adidas",DescripcionColor:"Color:Rojo/Negro",DescripcionColor1:"Color:Verde/Negro",DescripcionColor2:"Gris/Naranja",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas Gazelle_resultado.webp", imagenColor1:"../../Apartado adidas/Imagenes de colores/Adidas Gazelle 2_resultado.webp",imagenColor2:"../../Apartado adidas/Imagenes de colores/Adidas Gazelle 3_resultado.webp",imagenColor3:"../../Apartado adidas/Imagenes de colores/Adidas Gazelle 4_resultado.webp"},
Descripcion:"Esta zapatilla adidas Handball Special le da a tu atuendo un estilo retro casual. Fue diseñado originalmente para la sala en los años 70, pero con su silueta escotada conquistó no solo el terreno de juego, sino también las calles de la ciudad en un abrir y cerrar de ojos. La parte superior de gamuza de primera calidad se complementa con costuras en contraste para llamar la atención, y la superposición de la puntera en forma de T completa el ambiente vintage.",
listas:{detalle1:"Suela de caucho",detalle2:"Forro interno textil",detalle3:"Mayor resistencia al desgaste"}},

//producto`11
{id:"Geodiver",ImagenPrincipal:"../../Apartado adidas/images/Adidas Geodiver Primeblue 2_resultado.webp",nombre:"Adidas Handball spezial",marca:"Adidas",DescripcionColor:"Color:Azul celeste/Blanco",DescripcionColor1:"Color:Verde/Negro",DescripcionColor2:"Gris/Naranja",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas Geodiver Primeblue 2_resultado.webp",},
Descripcion:"¿Estilo o planeta? No hay necesidad de elegir bandos. Átate los cordones con el diseño aerodinámico de estas zapatillas deportivas y abraza el día. Su parte superior minimalista está hecha con una entresuela de EVA parcialmente reciclada que te hace caminar sobre las nubes. A veces, menos es más.",
listas:{detalle1:"Comodo y ligero",detalle2:"Inserción de goma en la suela",detalle3:"Parte superior textil"}},

//producto12
{id:"Boston",ImagenPrincipal:"../../Apartado adidas/images/Adidas  Boston 13 W M_resultado.webp",nombre:"Adidas Adizero Boston 13",marca:"Adidas",DescripcionColor:"Color:Negro/Plateado/Morado/Blanco",DescripcionColor1:"Flash Aqua / Blanco Nube / Limón Lúcido",DescripcionColor2:"Flash Aqua / Blanco Nube / Limón Lúcido",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas  Boston 13 W M_resultado.webp",imagenColor1:"../../Apartado adidas/Imagenes de colores/Adidas Adizero Boston 13 W M_resultado.webp"},
Descripcion:"Cuando estás persiguiendo una nueva marca personal, estas zapatillas de running adidas son tu compañero de entrenamiento ideal. Están construidas con una combinación de amortiguación Lightstrike y Lightstrike Pro, lo que te ayuda a mantener tu energía y superar lo que crees que es posible. La suela Lighttraxion con caucho Continental™ en la puntera ofrece ligereza y máximo agarre. Concéntrate en tu ritmo y deja que estas zapatillas hagan el resto.",
listas:{detalle1:"Comodo y ligero",detalle2:"Importado",detalle3:"Forro Textil"}},

{id:"Boston2",ImagenPrincipal:"../../Apartado adidas/Imagenes de colores/Adidas Adizero Boston 13 W M_resultado.webp",nombre:"Adidas Adizero Boston 13",marca:"Adidas",DescripcionColor:"Flash Aqua / Blanco Nube / Limón Lúcido",DescripcionColor1:"Color:Negro/Plateado/Morado/Blanco",DescripcionColor2:"Flash Aqua / Blanco Nube / Limón Lúcido",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/Imagenes de colores/Adidas Adizero Boston 13 W M_resultado.webp",imagenColor1:"../../Apartado adidas/images/Adidas  Boston 13 W M_resultado.webp"},
Descripcion:"Cuando estás persiguiendo una nueva marca personal, estas zapatillas de running adidas son tu compañero de entrenamiento ideal. Están construidas con una combinación de amortiguación Lightstrike y Lightstrike Pro, lo que te ayuda a mantener tu energía y superar lo que crees que es posible. La suela Lighttraxion con caucho Continental™ en la puntera ofrece ligereza y máximo agarre. Concéntrate en tu ritmo y deja que estas zapatillas hagan el resto.",
listas:{detalle1:"Comodo y ligero",detalle2:"Importado",detalle3:"Forro Textil"}},

//producto13
{id:"Response",ImagenPrincipal:"../../Apartado adidas/images/Adidas Response H_resultado.webp",nombre:"Adidas Response",marca:"Adidas",DescripcionColor:"Color:Blanco/negro",DescripcionColor1:"Color:Negro/Gris",DescripcionColor2:"Negro/Blanco",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas Response H_resultado.webp",imagenColor1:"../../Apartado adidas/Imagenes de colores/Adidas Response H 2_resultado.webp"},
Descripcion:"Ya sea para completar una serie de vueltas suave o para lograr tu mejor marca personal, estos tenis de running adidas te ofrecen la sujeción que necesitas para cumplir tus objetivos. La mediasuela de EVA ofrece comodidad y amortiguación, mientras que la suela de gran agarre mantiene tu ritmo estable. Su diseño versátil se adapta a la perfección a tus actividades del día a día.",
listas:{detalle1:"Comodo y ligero",detalle2:"Exterior de malla",detalle3:"Ajuste clasico"}},

{id:"Response2",ImagenPrincipal:"../../Apartado adidas/Imagenes de colores/Adidas Response H 2_resultado.webp",nombre:"Adidas Response",marca:"Adidas",DescripcionColor:"Color:Negro/gris",DescripcionColor1:"Color:Blanco/Negro",DescripcionColor2:"Negro/Blanco",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/Imagenes de colores/Adidas Response H 2_resultado.webp",imagenColor1:"../../Apartado adidas/images/Adidas Response H_resultado.webp"},
Descripcion:"Ya sea para completar una serie de vueltas suave o para lograr tu mejor marca personal, estos tenis de running adidas te ofrecen la sujeción que necesitas para cumplir tus objetivos. La mediasuela de EVA ofrece comodidad y amortiguación, mientras que la suela de gran agarre mantiene tu ritmo estable. Su diseño versátil se adapta a la perfección a tus actividades del día a día.",
listas:{detalle1:"Comodo y ligero",detalle2:"Exterior de malla",detalle3:"Ajuste clasico"}},


//producto14
{id:"Pureboost",ImagenPrincipal:"../../Apartado adidas/images/Adidas Pureboost 5 TR HM_resultado.webp",nombre:"Adidas Pureboost 5 TR",marca:"Adidas",DescripcionColor:"Color:Negro/Blanco",DescripcionColor1:"Flash Aqua / Blanco Nube / Limón Lúcido",DescripcionColor2:"Flash Aqua / Blanco Nube / Limón Lúcido",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas Pureboost 5 TR HM_resultado.webp",},
Descripcion:"Desde tu carrera matutina hasta los recados de la tarde, siéntete con energía todo el día con estas zapatillas de running adidas. Nuestra amortiguación BOOST más ligera mantiene la energía en tu paso, y una cómoda parte superior de malla está diseñada para una transpirabilidad y soporte óptimos. Camina con confianza sobre cualquier terreno gracias a la suela Adiwear de gran agarre.",
listas:{detalle1:"Comodo y ligero",detalle2:"Importado",detalle3:"Forro Textil"}},

//producto 15
{id:"Adistar4",ImagenPrincipal:"../../Apartado adidas/images/Adidas Adistar 4_resultado.webp",nombre:"Adidas Adistar 4",marca:"Adidas",DescripcionColor:"Color:Azul/Blanco",DescripcionColor1:"Gris/Blanco",DescripcionColor2:"Flash Aqua / Blanco Nube / Limón Lúcido",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas Adistar 4_resultado.webp",imagenColor1:"../../Apartado adidas/Imagenes de colores/Adidas Adistar 3 H_resultado.webp",},
Descripcion:"Diseñadas para carreras más largas y constantes, estas zapatillas de running adidas están hechas para que sigas entrenando con comodidad. Una entresuela REPETITOR mantiene una sensación de ligereza al tiempo que ofrece la máxima amortiguación con retorno de energía y estabilidad para carreras prolongadas. La suela exterior duradera resiste el entrenamiento de alto kilometraje.",
listas:{detalle1:"Comodo y ligero",detalle2:"Forro de goma",detalle3:"Forro Textil"}},

//producto16
{id:"Adistar3",ImagenPrincipal:"../../Apartado adidas/images/Adidas Adistar 3 M H_resultado.webp",nombre:"Adidas Adistar 3",marca:"Adidas",DescripcionColor:"Color:Rojo/Azul/Blanco",DescripcionColor1:"Gris/Blanco",DescripcionColor2:"Flash Aqua / Blanco Nube / Limón Lúcido",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas Adistar 3 M H_resultado.webp",imagenColor1:"../../Apartado adidas/Imagenes de colores/Adidas Adistar 3 H_resultado.webp",},
Descripcion:"Diseñadas para carreras más largas y constantes, estas zapatillas de running adidas están hechas para que sigas entrenando con comodidad. Una entresuela REPETITOR mantiene una sensación de ligereza al tiempo que ofrece la máxima amortiguación con retorno de energía y estabilidad para carreras prolongadas. La suela exterior duradera resiste el entrenamiento de alto kilometraje.",
listas:{detalle1:"Comodo y ligero",detalle2:"Forro de goma",detalle3:"Forro Textil"}},

{id:"Adistar3II",ImagenPrincipal:"../../Apartado adidas/Imagenes de colores/Adidas Adistar 3 H_resultado.webp",nombre:"Adidas Adistar 3",marca:"Adidas",DescripcionColor:"Color:Gris/Blancco",DescripcionColor1:"Rojo/Azul/Blanco",DescripcionColor2:"Flash Aqua / Blanco Nube / Limón Lúcido",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/Imagenes de colores/Adidas Adistar 3 H_resultado.webp",imagenColor1:"../../Apartado adidas/images/Adidas Adistar 3 M H_resultado.webp",},
Descripcion:"Diseñadas para carreras más largas y constantes, estas zapatillas de running adidas están hechas para que sigas entrenando con comodidad. Una entresuela REPETITOR mantiene una sensación de ligereza al tiempo que ofrece la máxima amortiguación con retorno de energía y estabilidad para carreras prolongadas. La suela exterior duradera resiste el entrenamiento de alto kilometraje.",
listas:{detalle1:"Comodo y ligero",detalle2:"Forro de goma",detalle3:"Forro Textil"}},

//producto17
{id:"Galaxy1",ImagenPrincipal:"../../Apartado adidas/images/Adidas Galaxy 7 M_resultado.webp",nombre:"Adidas Galaxy 7",marca:"Adidas",DescripcionColor:"Color:Azul/Blanco",DescripcionColor1:"Color:Negro/Rosa/Blanco",DescripcionColor2:"Flash Aqua / Blanco Nube / Limón Lúcido",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas Galaxy 7 M_resultado.webp",imagenColor1:"../../Apartado adidas/Imagenes de colores/Adidas Galaxy 2 M_resultado.webp",},
Descripcion:"Cada carrera es un viaje de descubrimiento. Ponte estas zapatillas de running adidas y explora tu potencial. La entresuela Cloudfoam amortigua tu zancada para mantenerte cómodo mientras desarrollas resistencia. Una parte superior textil duradera ofrece una sensación de apoyo desde tus primeras vueltas hasta tus primeros 5K.",
listas:{detalle1:"Comodo y ligero",detalle2:"Forro de goma",detalle3:"Forro Textil"}},

{id:"Galaxy2",ImagenPrincipal:"../../Apartado adidas/Imagenes de colores/Adidas Galaxy 2 M_resultado.webp",nombre:"Adidas Galaxy 7",marca:"Adidas",DescripcionColor:"Color:Negro/Rosa/Blanco",DescripcionColor1:"Color:Azul/Blanco",DescripcionColor2:"Flash Aqua / Blanco Nube / Limón Lúcido",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/Imagenes de colores/Adidas Galaxy 2 M_resultado.webp",imagenColor1:"../../Apartado adidas/images/Adidas Galaxy 7 M_resultado.webp",},
Descripcion:"Cada carrera es un viaje de descubrimiento. Ponte estas zapatillas de running adidas y explora tu potencial. La entresuela Cloudfoam amortigua tu zancada para mantenerte cómodo mientras desarrollas resistencia. Una parte superior textil duradera ofrece una sensación de apoyo desde tus primeras vueltas hasta tus primeros 5K.",
listas:{detalle1:"Comodo y ligero",detalle2:"Forro de goma",detalle3:"Forro Textil"}},

//producto 18
{id:"ResponseSuper",ImagenPrincipal:"../../Apartado adidas/images/Adidas Response Super M_resultado.webp",nombre:"Adidas Response Super",marca:"Adidas",DescripcionColor:"Color:Naranja / Blanco Nube / Rosa Fusión",DescripcionColor1:"Color:Gris/Blanco",DescripcionColor2:"Flash Aqua / Blanco Nube / Limón Lúcido",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas Response Super M_resultado.webp",imagenColor1:"../../Apartado adidas/Imagenes de colores/Adidas Response Super M 2_resultado.webp",},
Descripcion:"Sin importar la distancia o el ritmo, mantente fuerte hasta el final con estos tenis de running adidas. La mediasuela ligera Dreamstrike+ amortigua cada paso para una pisada cómoda. La monomalla transpirable en el exterior mantiene tus pies frescos durante todo el tiempo. Las varillas de caucho en la suela brindan agarre en superficies variadas para que te sientas seguro kilómetro tras kilómetro.",
listas:{detalle1:"Comodo y ligero",detalle2:"Forro interno trxtil",detalle3:"Exterior de monomalla"}},

{id:"ResponseSuper2",ImagenPrincipal:"../../Apartado adidas/Imagenes de colores/Adidas Response Super M 2_resultado.webp",nombre:"Adidas Response Super",marca:"Adidas",DescripcionColor:"Color:Gris Blanco",DescripcionColor1:"Color:Naranja / Blanco Nube / Rosa Fusión",DescripcionColor2:"Flash Aqua / Blanco Nube / Limón Lúcido",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/Imagenes de colores/Adidas Response Super M 2_resultado.webp",imagenColor1:"../../Apartado adidas/images/Adidas Response Super M_resultado.webp",},
Descripcion:"Sin importar la distancia o el ritmo, mantente fuerte hasta el final con estos tenis de running adidas. La mediasuela ligera Dreamstrike+ amortigua cada paso para una pisada cómoda. La monomalla transpirable en el exterior mantiene tus pies frescos durante todo el tiempo. Las varillas de caucho en la suela brindan agarre en superficies variadas para que te sientas seguro kilómetro tras kilómetro.",
listas:{detalle1:"Comodo y ligero",detalle2:"Forro interno trxtil",detalle3:"Exterior de monomalla"}},

//producto 19
{id:"Ultraboost",ImagenPrincipal:"../../Apartado adidas/images/Adidas Ultraboost 5 H_resultado.webp",nombre:"Adidas Response Super",marca:"Adidas",DescripcionColor:"Color:Azul Lúcido / Cero Metálico / Flash Aqua",DescripcionColor1:"Color:Limón Lúcido / Núcleo Negro / Blanco Nube",DescripcionColor2:"Color:Estratos de olivo / Hierro metálico / Sombra de olivo",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas Ultraboost 5 H_resultado.webp",imagenColor1:"../../Apartado adidas/Imagenes de colores/Adidas Ultraboost 5 2 H_resultado.webp",imagenColor2:"../../Apartado adidas/Imagenes de colores/Adidas Ultraboost 5 3 H_resultado.webp"},
Descripcion:"Más amortiguación, comodidad y peso para correr como ningún otro. Los Ultraboost 5 están aquí para potenciar tu energía al correr. La mediasuela de estos tenis está hecha con Light BOOST V2, nuestro sistema de amortiguación con mayor retorno de energía. Los Ultraboost 5 también incorporan un refuerzo de talón externo moldeado que brinda un soporte optimizado donde más se necesita. El exterior PRIMEKNIT crea el mejor ajuste, mientras que nuestro sistema Torsion proporciona una guía de otro nivel durante todo el recorrido. Y por último, el agarre de clase mundial de la suela Continental™ brinda la tracción y transición perfectas.",
listas:{detalle1:"Comodo y ligero",detalle2:"Forro interno trxtil",detalle3:"Exterior Textil"}},

{id:"Ultraboost2",ImagenPrincipal:"../../Apartado adidas/images/Adidas Ultraboost 5 H_resultado.webp",nombre:"Adidas Response Super",marca:"Adidas",DescripcionColor:"Color:Azul Lúcido / Cero Metálico / Flash Aqua",DescripcionColor1:"Color:Limón Lúcido / Núcleo Negro / Blanco Nube",DescripcionColor2:"Color:Estratos de olivo / Hierro metálico / Sombra de olivo",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas Ultraboost 5 H_resultado.webp",imagenColor1:"../../Apartado adidas/Imagenes de colores/Adidas Ultraboost 5 2 H_resultado.webp",imagenColor2:"../../Apartado adidas/Imagenes de colores/Adidas Ultraboost 5 3 H_resultado.webp"},
Descripcion:"Más amortiguación, comodidad y peso para correr como ningún otro. Los Ultraboost 5 están aquí para potenciar tu energía al correr. La mediasuela de estos tenis está hecha con Light BOOST V2, nuestro sistema de amortiguación con mayor retorno de energía. Los Ultraboost 5 también incorporan un refuerzo de talón externo moldeado que brinda un soporte optimizado donde más se necesita. El exterior PRIMEKNIT crea el mejor ajuste, mientras que nuestro sistema Torsion proporciona una guía de otro nivel durante todo el recorrido. Y por último, el agarre de clase mundial de la suela Continental™ brinda la tracción y transición perfectas.",
listas:{detalle1:"Comodo y ligero",detalle2:"Forro interno trxtil",detalle3:"Exterior Textil"}},

{id:"Ultraboost3",ImagenPrincipal:"../../Apartado adidas/images/Adidas Ultraboost 5 H_resultado.webp",nombre:"Adidas Response Super",marca:"Adidas",DescripcionColor:"Color:Azul Lúcido / Cero Metálico / Flash Aqua",DescripcionColor1:"Color:Limón Lúcido / Núcleo Negro / Blanco Nube",DescripcionColor2:"Color:Estratos de olivo / Hierro metálico / Sombra de olivo",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas Ultraboost 5 H_resultado.webp",imagenColor1:"../../Apartado adidas/Imagenes de colores/Adidas Ultraboost 5 2 H_resultado.webp",imagenColor2:"../../Apartado adidas/Imagenes de colores/Adidas Ultraboost 5 3 H_resultado.webp"},
Descripcion:"Más amortiguación, comodidad y peso para correr como ningún otro. Los Ultraboost 5 están aquí para potenciar tu energía al correr. La mediasuela de estos tenis está hecha con Light BOOST V2, nuestro sistema de amortiguación con mayor retorno de energía. Los Ultraboost 5 también incorporan un refuerzo de talón externo moldeado que brinda un soporte optimizado donde más se necesita. El exterior PRIMEKNIT crea el mejor ajuste, mientras que nuestro sistema Torsion proporciona una guía de otro nivel durante todo el recorrido. Y por último, el agarre de clase mundial de la suela Continental™ brinda la tracción y transición perfectas.",
listas:{detalle1:"Comodo y ligero",detalle2:"Forro interno trxtil",detalle3:"Exterior Textil"}},

//producto20
{id:"EndoRun",ImagenPrincipal:"../../Apartado adidas/images/Adidas Endo Run W M_resultado.webp",nombre:"Adidas Endo Run",marca:"Adidas",DescripcionColor:"Color:Salmon/Blanco",DescripcionColor1:"color:Lila/Morado",DescripcionColor2:"Color:Estratos de olivo / Hierro metálico / Sombra de olivo",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas Endo Run W M_resultado.webp",imagenColor1:"../../Apartado adidas/Imagenes de colores/Endo Run W 2 M_resultado.webp",},
Descripcion:"Endo Run W es un nuevo producto para Mujer de adidas. Te invitamos a ver las imágenes para apreciar más detalles desde diferentes ángulos. Si ya conoces Endo Run W puedes dejar una reseña abajo; siempre nos encanta conocer tu opinión.",
listas:{detalle1:"Comodo y ligero",detalle2:"Cierre de cordones",detalle3:""}},

{id:"EndoRun2",ImagenPrincipal:"../../Apartado adidas/Imagenes de colores/Endo Run W 2 M_resultado.webp",nombre:"Adidas Endo Run",marca:"Adidas",DescripcionColor:"Color:Lila/Morado",DescripcionColor1:"color:Salmon/Blanco",DescripcionColor2:"Color:Estratos de olivo / Hierro metálico / Sombra de olivo",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/Imagenes de colores/Endo Run W 2 M_resultado.webp",imagenColor1:"../../Apartado adidas/images/Adidas Endo Run W M_resultado.webp",},
Descripcion:"Endo Run W es un nuevo producto para Mujer de adidas. Te invitamos a ver las imágenes para apreciar más detalles desde diferentes ángulos. Si ya conoces Endo Run W puedes dejar una reseña abajo; siempre nos encanta conocer tu opinión.",
listas:{detalle1:"Comodo y ligero",detalle2:"Cierre de cordones",detalle3:""}},

//producto21
{id:"Stride",ImagenPrincipal:"../../Apartado adidas/images/Adidas Supernova Stride 2.0_resultado.webp",nombre:"Adidas Supernova Stride 2.0",marca:"Adidas",DescripcionColor:"Color:Semi Flash Aqua / Plata Mate / Blanco Nube",DescripcionColor1:"color:Negro/Plateado",DescripcionColor2:"Color:Estratos de olivo / Hierro metálico / Sombra de olivo",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas Supernova Stride 2.0_resultado.webp",imagenColor1:"../../Apartado adidas/Imagenes de colores/Adidas Supernova Stride 2.0 2 M_resultado.webp",},
Descripcion:"Amárrate los cordones y sal a correr con estos tenis adidas para running. La mediasuela híbrida Dreamstrike+ y EVA amortigua tus pasos y ayuda a brindar soporte en transiciones suaves del talón a la punta. El exterior de malla mantiene tus pies frescos y cómodos en todo momento.",
listas:{detalle1:"Comodo y ligero",detalle2:"Forro interno textil",detalle3:"Exterior de malla"}},

{id:"Stride2",ImagenPrincipal:"../../Apartado adidas/Imagenes de colores/Adidas Supernova Stride 2.0 2 M_resultado.webp",nombre:"Adidas Supernova Stride 2.0",marca:"Adidas",DescripcionColor:"Color:Negro/Plateado",DescripcionColor1:"color:Semi Flash Aqua / Plata Mate / Blanco Nube",DescripcionColor2:"Color:Estratos de olivo / Hierro metálico / Sombra de olivo",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/Imagenes de colores/Adidas Supernova Stride 2.0 2 M_resultado.webp",imagenColor1:"../../Apartado adidas/images/Adidas Supernova Stride 2.0_resultado.webp",},
Descripcion:"Amárrate los cordones y sal a correr con estos tenis adidas para running. La mediasuela híbrida Dreamstrike+ y EVA amortigua tus pasos y ayuda a brindar soporte en transiciones suaves del talón a la punta. El exterior de malla mantiene tus pies frescos y cómodos en todo momento.",
listas:{detalle1:"Comodo y ligero",detalle2:"Forro interno textil",detalle3:"Exterior de malla"}},

//producto21../../Apartado adidas/images/Ga
{id:"GalaxyStar",ImagenPrincipal:"../../Apartado adidas/images/Galaxy star 2.0 U_resultado.webp",nombre:"Adidas Galaxy Star 2.0",marca:"Adidas",DescripcionColor:"Color:Blanco/Negro",DescripcionColor1:"color:Rojo/Negro/Blanco",DescripcionColor2:"Color:Estratos de olivo / Hierro metálico / Sombra de olivo",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Galaxy star 2.0 U_resultado.webp",imagenColor1:"../../Apartado adidas/Imagenes de colores/Galaxy Star 2.0 U H_resultado.webp",},
Descripcion:"Galaxy Star 2.0 U es un nuevo producto para Hombre de adidas. Te invitamos a ver las imágenes para apreciar más detalles desde diferentes ángulos.",
listas:{detalle1:"Comodo y ligero",detalle2:"Horma clasica de hombre",detalle3:"Cierre de cordones"}},

{id:"GalaxyStar2",ImagenPrincipal:"../../Apartado adidas/Imagenes de colores/Galaxy Star 2.0 U H_resultado.webp",nombre:"Adidas Galaxy Star 2.0",marca:"Adidas",DescripcionColor:"Color:Rojo/Negro/Blanco",DescripcionColor1:"color:Blanco/Negro",DescripcionColor2:"Color:Estratos de olivo / Hierro metálico / Sombra de olivo",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/Imagenes de colores/Galaxy Star 2.0 U H_resultado.webp",imagenColor1:"../../Apartado adidas/images/Galaxy star 2.0 U_resultado.webp",},
Descripcion:"Galaxy Star 2.0 U es un nuevo producto para Hombre de adidas. Te invitamos a ver las imágenes para apreciar más detalles desde diferentes ángulos.",
listas:{detalle1:"Comodo y ligero",detalle2:"Horma clasica de hombre",detalle3:"Cierre de cordones"}},

//producto22
{id:"Breaknet",ImagenPrincipal:"../../Apartado adidas/images/Adidas Breaknet Mid H_resultado.webp",nombre:"Adidas Breaknet Mid",marca:"Adidas",DescripcionColor:"Color:Blanco/Negro",DescripcionColor1:"color:Blanco/Negro",DescripcionColor2:"Color:Estratos de olivo / Hierro metálico / Sombra de olivo",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas Breaknet Mid H_resultado.webp",},
Descripcion:"Un diseño de corte medio y líneas sencillas les dan a estos tenis adidas un look contemporáneo que puedes lucir tanto de día como de noche. El exterior de piel sintética se acentúa con refuerzos que le dan una profundidad sutil. La plantilla de EVA ofrece una amortiguación ligera que mantiene tu comodidad en cualquier momento, ya sea que estés tomando un café con amigos o recorriendo la ciudad de noche.",
listas:{detalle1:"Comodo y ligero",detalle2:"Exterior senetico",detalle3:"Suela de caucho"}},

//Producto23
{id:"Courtblock",ImagenPrincipal:"../../Apartado adidas/images/Adidas Courtblock Bold M_resultado.webp",nombre:"Adidas Courtblock bold",marca:"Adidas",DescripcionColor:"Color:Negro/Cafe",DescripcionColor1:"color:Blanco/Negro",DescripcionColor2:"Color:Estratos de olivo / Hierro metálico / Sombra de olivo",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas Courtblock Bold M_resultado.webp",imagenColor1:"../../Apartado de colores/Imagenes de colores/Adidas Courtblock Bold 2 M_resultado.webp",},
Descripcion:"Divertidos y modernos, estos tenis adidas ofrecen un estilo audaz que nunca pasa de moda. La mediasuela gruesa te regala unos centímetros de más, mientras que el exterior de piel sintética y la suela tipo cupsole de caucho se combinan para ofrecer comodidad durante todo el día. Ya sea que los combines con tus jeans favoritos o con un vestido casual, estos tenis te ayudan a hacer una declaración de estilo sutil.",
listas:{detalle1:"Comodo y ligero",detalle2:"Mediasuela con plataforma",detalle3:"suela de caucho"}},

{id:"Courtblock2",ImagenPrincipal:"../../Apartado de colores/Imagenes de colores/Adidas Courtblock Bold 2 M_resultado.webp",nombre:"Adidas Courtblock bold",marca:"Adidas",DescripcionColor:"Color:Blanco/Negro",DescripcionColor1:"color:Negro/Cafe",DescripcionColor2:"Color:Estratos de olivo / Hierro metálico / Sombra de olivo",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado de colores/Imagenes de colores/Adidas Courtblock Bold 2 M_resultado.webp",imagenColor1:"../../Apartado adidas/images/Adidas Courtblock Bold M_resultado.webp",},
Descripcion:"Divertidos y modernos, estos tenis adidas ofrecen un estilo audaz que nunca pasa de moda. La mediasuela gruesa te regala unos centímetros de más, mientras que el exterior de piel sintética y la suela tipo cupsole de caucho se combinan para ofrecer comodidad durante todo el día. Ya sea que los combines con tus jeans favoritos o con un vestido casual, estos tenis te ayudan a hacer una declaración de estilo sutil.",
listas:{detalle1:"Comodo y ligero",detalle2:"Mediasuela con plataforma",detalle3:"suela de caucho"}},

//Producto24
{id:"Y3Country",ImagenPrincipal:"../../Apartado adidas/images/Adidas Y-3 Country_resultado.webp",nombre:"Adidas Y-3 Country",marca:"Adidas",DescripcionColor:"Color:Blanco/Negro",DescripcionColor1:"color:Negro/Cafe",DescripcionColor2:"Color:Estratos de olivo / Hierro metálico / Sombra de olivo",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas Y-3 Country_resultado.webp",imagenColor1:"../../Apartado de colores/Imagenes de colores/Adidas Y-3 Country 3 HM_resultado.webp",},
Descripcion:"Regresan después de una pausa de ocho años, los tenis Y-3 Country están de vuelta con un toque premium. Su diseño de piel completo es excepcionalmente suave e está inspirado en el carácter de los amados guantes de piel. Las líneas de costura y las sofisticadas 3 Franjas actualizan el diseño clásico, y la firma grabada a láser de Yohji Yamamoto en el talón le pone el toque final al look.",
listas:{detalle1:"Comodo y ligero",detalle2:"Exterior de piel",detalle3:"suaves al tacto"}},

{id:"Y3Country2",ImagenPrincipal:"../../Apartado de colores/Imagenes de colores/Adidas Y-3 Country 3 HM_resultado.webp",nombre:"Adidas Y-3 Country",marca:"Adidas",DescripcionColor:"Color:Negro/Cafe",DescripcionColor1:"color:Blanco/Negro",DescripcionColor2:"Color:Estratos de olivo / Hierro metálico / Sombra de olivo",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado de colores/Imagenes de colores/Adidas Y-3 Country 3 HM_resultado.webp",imagenColor1:"../../Apartado adidas/images/Adidas Y-3 Country_resultado.webp",},
Descripcion:"Regresan después de una pausa de ocho años, los tenis Y-3 Country están de vuelta con un toque premium. Su diseño de piel completo es excepcionalmente suave e está inspirado en el carácter de los amados guantes de piel. Las líneas de costura y las sofisticadas 3 Franjas actualizan el diseño clásico, y la firma grabada a láser de Yohji Yamamoto en el talón le pone el toque final al look.",
listas:{detalle1:"Comodo y ligero",detalle2:"Exterior de piel",detalle3:"suaves al tacto"}},

//producto25
{id:"Taekwondo",ImagenPrincipal:"../../Apartado adidas/images/Adidas Taekwondo_resultado.webp",nombre:"adidas TAEKWONDO W",marca:"Adidas",DescripcionColor:"Color:Verde/Blanco",DescripcionColor1:"color:Blanco/Negro",DescripcionColor2:"Color:Estratos de olivo / Hierro metálico / Sombra de olivo",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas Taekwondo_resultado.webp",},
Descripcion:"Aún estamos trabajando para tener más información de Adidas Taekwondo W, así que vuelva pronto. Mientras tanto, toma nota del número de artículo que identifica el producto JS4526 para que lo puedas encontrar de nuevo fácilmente..",
listas:{detalle1:"",detalle2:"",detalle3:""}},

//producto26
{id:"Tokyo",ImagenPrincipal:"../../Apartado adidas/images/Adidas Tokyo_resultado.webp",nombre:"Adidas Tokyo",marca:"Adidas",DescripcionColor:"Color:Blanco/Negro",DescripcionColor1:"color:Negro/Blanco",DescripcionColor2:"Color:Estratos de olivo / Hierro metálico / Sombra de olivo",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas Tokyo_resultado.webp",imagenColor1:"../../Apartado adidas/Imagenes de colores/Adidas tokyo 2 M_resultado.webp"},
Descripcion:"Inspirados en los años 70 y en el estilo vintage “terrace”, estos tenis adidas te llevarán adonde quieras ir. Su exterior suave de piel y material sintético y su silueta de perfil bajo tienen un estilo retro. El diseño moderno hace que los pies caminen en el presente.",
listas:{detalle1:"Exterior de piel",detalle2:"Corte clasico",detalle3:"Suela de caucho"}},

{id:"Tokyo2",ImagenPrincipal:"../../Apartado adidas/Imagenes de colores/Adidas tokyo 2 M_resultado.webp",nombre:"Adidas Tokyo",marca:"Adidas",DescripcionColor:"Color:Negro/Blanco",DescripcionColor1:"color:Blanco/Negro",DescripcionColor2:"Color:Estratos de olivo / Hierro metálico / Sombra de olivo",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/Imagenes de colores/Adidas tokyo 2 M_resultado.webp",imagenColor1:"../../Apartado adidas/images/Adidas Tokyo_resultado.webp"},
Descripcion:"Inspirados en los años 70 y en el estilo vintage “terrace”, estos tenis adidas te llevarán adonde quieras ir. Su exterior suave de piel y material sintético y su silueta de perfil bajo tienen un estilo retro. El diseño moderno hace que los pies caminen en el presente.",
listas:{detalle1:"Exterior de piel",detalle2:"Corte clasico",detalle3:"Suela de caucho"}},

//producto27
{id:"Busenitz",ImagenPrincipal:"../../Apartado adidas/images/Adidas Busenitz Pro_resultado.webp",nombre:"Adidas Busenitz Pro",marca:"Adidas",DescripcionColor:"Color:Negro rojo",DescripcionColor1:"Color:Bronce/Cafe",DescripcionColor2:"Color:Blanco/Negro",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas Busenitz Pro_resultado.webp", imagenColor1:"../../Apartado adidas/Imagenes de colores/Adidas Busenitz Pro 2 H_resultado.webp",imagenColor2:"../../Apartado adidas/Imagenes de colores/Adidas Busenitz Pro 3 H_resultado.webp",},
Descripcion:"Diseñados en colaboración directa con Dennis Busenitz, sus emblemáticos tenis de skate adidas Busenitz toman inspiración en la legendaria Copa Mundial y la convierten en unos tenis de skate con un cuello acolchado GEOFIT™ para mayor soporte, ojales empotrados y un set extra de cordones.",
listas:{detalle1:"Cómodo forro interno textil",detalle2:"suela de caucho",detalle3:" mayor resistencia al desgaste"}},

{id:"Busenitz2",ImagenPrincipal:"../../Apartado adidas/images/Adidas Busenitz Pro_resultado.webp",nombre:"Adidas Busenitz Pro",marca:"Adidas",DescripcionColor:"Color:Negro rojo",DescripcionColor1:"Color:Bronce/Cafe",DescripcionColor2:"Color:Blanco/Negro",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas Busenitz Pro_resultado.webp", imagenColor1:"../../Apartado adidas/Imagenes de colores/Adidas Busenitz Pro 2 H_resultado.webp",imagenColor2:"../../Apartado adidas/Imagenes de colores/Adidas Busenitz Pro 3 H_resultado.webp",},
Descripcion:"Diseñados en colaboración directa con Dennis Busenitz, sus emblemáticos tenis de skate adidas Busenitz toman inspiración en la legendaria Copa Mundial y la convierten en unos tenis de skate con un cuello acolchado GEOFIT™ para mayor soporte, ojales empotrados y un set extra de cordones.",
listas:{detalle1:"Cómodo forro interno textil",detalle2:"suela de caucho",detalle3:" mayor resistencia al desgaste"}},

{id:"Busenitz3",ImagenPrincipal:"../../Apartado adidas/images/Adidas Busenitz Pro_resultado.webp",nombre:"Adidas Busenitz Pro",marca:"Adidas",DescripcionColor:"Color:Negro rojo",DescripcionColor1:"Color:Bronce/Cafe",DescripcionColor2:"Color:Blanco/Negro",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas Busenitz Pro_resultado.webp", imagenColor1:"../../Apartado adidas/Imagenes de colores/Adidas Busenitz Pro 2 H_resultado.webp",imagenColor2:"../../Apartado adidas/Imagenes de colores/Adidas Busenitz Pro 3 H_resultado.webp",},
Descripcion:"Diseñados en colaboración directa con Dennis Busenitz, sus emblemáticos tenis de skate adidas Busenitz toman inspiración en la legendaria Copa Mundial y la convierten en unos tenis de skate con un cuello acolchado GEOFIT™ para mayor soporte, ojales empotrados y un set extra de cordones.",
listas:{detalle1:"Cómodo forro interno textil",detalle2:"suela de caucho",detalle3:" mayor resistencia al desgaste"}},

//producto28
{id:"Rivalry",ImagenPrincipal:"../../Apartado adidas/images/Adidas Rivalry Low 86_resultado.webp",nombre:"Adidas Rivalry Low 86",marca:"Adidas",DescripcionColor:"Color:Negro/Verde/Blanco",DescripcionColor1:"color:Blanco/Negro",DescripcionColor2:"Color:Estratos de olivo / Hierro metálico / Sombra de olivo",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas Rivalry Low 86_resultado.webp",},
Descripcion:"Estos tenis adidas retro te reconectan con las raíces rebeldes del estilo del básquet de los 80. Confeccionados en gamuza y piel premium, fusionan el deporte y la moda urbana en un look que trasciende épocas. Su diseño vintage despierta nostalgia mientras que la suela de caucho natural se adhiere al presente. Póntelos y descubre por qué estos icónicos tenis ganaron prestigio tanto entre skaters como entre artistas. La combinación perfecta entre estilo retro y comodidad moderna.",
listas:{detalle1:"forro sintetico",detalle2:"cierre de cordones",detalle3:"Suela de caucho"}},

//producto29
{id:"Court",ImagenPrincipal:"../../Apartado adidas/images/Adidas VL Court 3.0_resultado.webp",nombre:"Adidas Busenitz Pro",marca:"Adidas",DescripcionColor:"Color:Verde/Blanco",DescripcionColor1:"Color:Rojo/Blanco",DescripcionColor2:"Color:Azul/Amarillo",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas VL Court 3.0_resultado.webp", imagenColor1:"../../Apartado adidas/Imagenes de colores/Adidas VL Court 3.0 2_resultado.webp",imagenColor2:"../../Apartado adidas/Imagenes de colores/Adidas Vl Court 3.0_resultado.webp",},
Descripcion:"Descomplicados y refinados a la vez, estos tenis adidas son fáciles de hacer tuyos dependiendo del estilo con el que los uses. Las icónicas 3 Franjas con bordes de color se destacan sobre la parte superior de piel suave. La suela de caucho vulcanizada pudo provenir directamente del parque de skate. En el interior, la amortiguación ligera y el forro interno suave te garantizan comodidad desde todos los ángulos.",
listas:{detalle1:"Ajuste clasico",detalle2:"suela de caucho",detalle3:" Cierre de cordones"}},

{id:"Court2",ImagenPrincipal:"../../Apartado adidas/images/Adidas VL Court 3.0_resultado.webp",nombre:"Adidas Busenitz Pro",marca:"Adidas",DescripcionColor:"Color:Verde/Blanco",DescripcionColor1:"Color:Rojo/Blanco",DescripcionColor2:"Color:Azul/Amarillo",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas VL Court 3.0_resultado.webp", imagenColor1:"../../Apartado adidas/Imagenes de colores/Adidas VL Court 3.0 2_resultado.webp",imagenColor2:"../../Apartado adidas/Imagenes de colores/Adidas Vl Court 3.0_resultado.webp",},
Descripcion:"Descomplicados y refinados a la vez, estos tenis adidas son fáciles de hacer tuyos dependiendo del estilo con el que los uses. Las icónicas 3 Franjas con bordes de color se destacan sobre la parte superior de piel suave. La suela de caucho vulcanizada pudo provenir directamente del parque de skate. En el interior, la amortiguación ligera y el forro interno suave te garantizan comodidad desde todos los ángulos.",
listas:{detalle1:"Ajuste clasico",detalle2:"suela de caucho",detalle3:" Cierre de cordones"}},

{id:"Court3",ImagenPrincipal:"../../Apartado adidas/images/Adidas VL Court 3.0_resultado.webp",nombre:"Adidas Busenitz Pro",marca:"Adidas",DescripcionColor:"Color:Verde/Blanco",DescripcionColor1:"Color:Rojo/Blanco",DescripcionColor2:"Color:Azul/Amarillo",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas VL Court 3.0_resultado.webp", imagenColor1:"../../Apartado adidas/Imagenes de colores/Adidas VL Court 3.0 2_resultado.webp",imagenColor2:"../../Apartado adidas/Imagenes de colores/Adidas Vl Court 3.0_resultado.webp",},
Descripcion:"Descomplicados y refinados a la vez, estos tenis adidas son fáciles de hacer tuyos dependiendo del estilo con el que los uses. Las icónicas 3 Franjas con bordes de color se destacan sobre la parte superior de piel suave. La suela de caucho vulcanizada pudo provenir directamente del parque de skate. En el interior, la amortiguación ligera y el forro interno suave te garantizan comodidad desde todos los ángulos.",
listas:{detalle1:"Ajuste clasico",detalle2:"suela de caucho",detalle3:" Cierre de cordones"}},

//producto30
{id:"Samba",ImagenPrincipal:"../../Apartado adidas/images/Adidas Samba 62_resultado.webp",nombre:"Samba62",marca:"Adidas",DescripcionColor:"Color:Negro/Blanco/Azul",DescripcionColor1:"Color:Rojo/Blanco",DescripcionColor2:"Color:Azul/Amarillo",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../Apartado adidas/images/Adidas Samba 62_resultado.webp",},
Descripcion:"Nacidos en las canchas de fútbol, los Samba son un ícono atemporal de la moda urbana. Esta silueta se mantiene fiel a su legado con un discreto y elegante exterior de piel suave, revestimientos de gamuza y una suela de caucho natural, convirtiéndose en un par indispensable para cualquier armario.",
listas:{detalle1:"Ajuste clasico",detalle2:"suela de caucho",detalle3:" Cierre de cordones"}},



























//productos nike

//producto1
{id:"AirForce1",ImagenPrincipal:"../../zapatos.nike/Air Force 1 07_resultado.webp",nombre:"Nike Air Force 1 '07",marca:"Nike ",DescripcionColor:"Color:Negro/rojo",DescripcionColor1:"Color:Blanco/Negro",DescripcionColor2:"Blanco/Blanco",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../zapatos.nike/Air Force 1 07_resultado.webp", imagenColor1:"../../Colores Nike/Air force 1 07 2_resultado.webp",imagenColor2:"../../Colores Nike/Air Force 1 07_resultado.webp"},
Descripcion:"Cómodos, duraderos y atemporales: por una razón son los número 1. La confección clásica de los años 80 se combina con detalles audaces de cuero suave para tener un estilo que deja huella en la cancha y en la calle.",
listas:{detalle1:"Comodo y ligero",detalle2:"Inserción de goma en la suela",detalle3:"Parte superior textil"}},

{id:"AirForce2",ImagenPrincipal:"../../zapatos.nike/Air Force 1 07_resultado.webp",nombre:"Nike Air Force 1 '07",marca:"Nike ",DescripcionColor:"Color:Negro/rojo",DescripcionColor1:"Color:Blanco/Negro",DescripcionColor2:"Blanco/Blanco",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../zapatos.nike/Air Force 1 07_resultado.webp", imagenColor1:"../../Colores Nike/Air force 1 07 2_resultado.webp",imagenColor2:"../../Colores Nike/Air Force 1 07_resultado.webp"},
Descripcion:"Cómodos, duraderos y atemporales: por una razón son los número 1. La confección clásica de los años 80 se combina con detalles audaces de cuero suave para tener un estilo que deja huella en la cancha y en la calle.",
listas:{detalle1:"Comodo y ligero",detalle2:"Inserción de goma en la suela",detalle3:"Parte superior textil"}},

{id:"AirForce3",ImagenPrincipal:"../../zapatos.nike/Air Force 1 07_resultado.webp",nombre:"Nike Air Force 1 '07",marca:"Nike ",DescripcionColor:"Color:Negro/rojo",DescripcionColor1:"Color:Blanco/Negro",DescripcionColor2:"Blanco/Blanco",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../zapatos.nike/Air Force 1 07_resultado.webp", imagenColor1:"../../Colores Nike/Air force 1 07 2_resultado.webp",imagenColor2:"../../Colores Nike/Air Force 1 07_resultado.webp"},
Descripcion:"Cómodos, duraderos y atemporales: por una razón son los número 1. La confección clásica de los años 80 se combina con detalles audaces de cuero suave para tener un estilo que deja huella en la cancha y en la calle.",
listas:{detalle1:"Comodo y ligero",detalle2:"Inserción de goma en la suela",detalle3:"Parte superior textil"}},

//producto2
{id:"BlazerMid77",ImagenPrincipal:"../../zapatos.nike/Nike Blazer Mid 77 Vintage_resultado.webp",nombre:"Nike Blazer Mid 77 Vintage",marca:"Nike ",DescripcionColor:"Color:Negro/rojo",DescripcionColor1:"Color:Blanco/Negro",DescripcionColor2:"Blanco/Blanco",DescripcionColor3:"Blanco/Negro", imagenes:{imagenColor:"../../zapatos.nike/Nike Blazer Mid 77 Vintage_resultado.webp", imagenColor1:"../../Colores Nike/Nike Blazer Mid 77 Vintage_resultado.webp"},
Descripcion:"En la década del 70, Nike era el nuevo del barrio. Tan nuevo que todavía estábamos incursionando en la escena del básquetbol y probando prototipos en los pies de nuestro equipo local. Por supuesto, el diseño mejoró con los años, pero el nombre permaneció. Los Nike Blazer Mid '77 Vintage: unos clásico desde el inicio.",
listas:{detalle1:"Comodo y ligero",detalle2:"Inserción de goma en la suela",detalle3:"Parte superior textil"}},







 
]

const producto = productos2.find(p => p.id ===id); //compara si la propiedad id de los productos es igual al id ingresado en la url y lo encuentra
if (producto){ //si producto tiene algun valor entonces:
  CambioImagen.src = producto.ImagenPrincipal; //Cambiara la imamegn principal por la propiedad del producto que se obtuvo por el id
  CambioTexto.textContent = producto.DescripcionColor; //Cambiara la descripcion del color por la propiedad del producto que se obtuvo en el id
   //Pondra la imagen de la propiedad que se obtuvo del id
  producto.imagenes.imagenColor ? ClickImagen.src = producto.imagenes.imagenColor: ClickImagen.remove();
  producto.imagenes.imagenColor1 ? ClickImagen2.src = producto.imagenes.imagenColor1: ClickImagen2.remove();
  producto.imagenes.imagenColor2 ? ClickImagen3.src = producto.imagenes.imagenColor2: ClickImagen3.remove(); //Pondra la imagen de la propiedad que se obtuvo del id
  producto.imagenes.imagenColor3 ? //Pondra la imagen de la propiedad que se obtuvo del id si existe, si no la removera
  ClickImagen4.src = producto.imagenes.imagenColor3 : ClickImagen4.remove();
  producto.imagenes.imagenColor4 ? //Pondra la imagen de la propiedad que se obtuvo del id si existe, si no la removera
  ClickImagen5.src = producto.imagenes.imagenColor4 : ClickImagen5.remove();

  descripcion.textContent = producto.Descripcion; //Cambiara la descrpcion del producto por la propiedad que se obtuvo del id
  detalle1.textContent = producto.listas.detalle1; //Cambiara el detalle de la lista por la propiedad que se obtuvo del id
  detalle2.textContent = producto.listas.detalle2;  //Cambiara el detalle de la lista por la propiedad que se obtuvo del id
  detalle3.textContent = producto.listas.detalle3;  //Cambiara el detalle de la lista por la propiedad que se obtuvo del id
  nombre_teni.textContent = producto.nombre;
  Marca_teni.textContent = producto.marca;
  ClickImagen.addEventListener('click',()=>{
    CambioImagen.src = producto.imagenes.imagenColor; //Al momento de dar click la imagen principal sera la que se selecciono
    CambioTexto.textContent = producto.DescripcionColor; //Cambiara la descripcion del color por la propiedad del producto que se obtuvo por el id
  });
  ClickImagen2.addEventListener('click',()=>{
    CambioImagen.src = producto.imagenes.imagenColor1; //Al momento de dar click la imagen principal sera la que se selecciono
    CambioTexto.textContent = producto.DescripcionColor1; //Cambiara la descripcion del color por la propiedad del producto que se obtuvo por el id
  });
  ClickImagen3.addEventListener('click',()=>{
    CambioImagen.src = producto.imagenes.imagenColor2; //Al momento de dar click la imagen principal sera la que se selecciono
    CambioTexto.textContent = producto.DescripcionColor2; //Cambiara la descripcion del color por la propiedad del producto que se obtuvo por el id
  });
  ClickImagen4.addEventListener('click',()=>{
    CambioImagen.src = producto.imagenes.imagenColor3; //Al momento de dar click la imagen principal sera la que se selecciono
  });
  ClickImagen5.addEventListener('click',()=>{
    CambioImagen.src = producto.imagenes.imagenColor4; //Al momento de dar click la imagen principal sera la que se selecciono
  });
 

}
});