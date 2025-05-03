document.addEventListener('DOMContentLoaded',() =>{
const urlParams = new URLSearchParams(window.location.search); //A partir de aqui se obtienen todos los parametros de la url
const categoriaParam = urlParams.get('categoria') || '';
const orden2 = urlParams.get('orden') || '';
const colorParam = urlParams.get('color') || '';
const categorias = categoriaParam ? categoriaParam.split(',') : [];
const colores = colorParam ? colorParam.split(',') : [];
const generosParam = urlParams.get('genero') || '';

const generos = generosParam ? generosParam.split(',') : [];

const modeloSeleccionado2 = urlParams.get('modeloSeleccionado'); //aqui termina de obtener todos los parametros
const productos = [ //este es un arreglo que contiene todos los productos con sus caracteristicas, imagenes y links
  { id: 1, nombre: 'Air Force 1 07', categoria: 'Nike', precio: 299.99, color: 'Negro', genero: 'Hombre', imagen: 'Imagenes/Air Force 1.jpg', link: 'Tenis/Nike2.html?id=AirForce1' ,
     imagenes:{imagencolor: 'Imagenes/Air Force 1.jpg',imagencolor1:'Imagenes/Air force 1 07.avif', imagencolor2:'Imagenes/Air force 1 07 2.avif' },
    links: {imagenLink1: 'Tenis/Nike2.html?id=AirForce1', imagenLink2: 'Tenis/Nike2.html?id=AirForce2', imagenLink3: 'Tenis/Nike2.html?id=AirForce3' } },
  { id: 2, nombre: 'Air Jordan 1', categoria: 'Nike', color: 'Verde', precio: 399.99, genero: 'Hombre', imagen: 'Imagenes/AirJordan1 Low.jpg', link: 'Tenis/Nike2.html?id=AirJordan1Low'},
  { id: 3, nombre: 'AirMax90', categoria: 'Nike', color: 'Negro', precio: 499.99, genero: 'Hombre', imagen: 'Imagenes/AirMax90.jpg' , link: "Tenis/Nike2.html?id=AirMax",
     imagenes:{imagencolor: 'Imagenes/AirMax90.jpg',imagencolor1:'Imagenes/AirMax902.jpg', imagencolor2:'Imagenes/AirMax903.jpg', imagencolor3: 'Imagenes/AirMax904.jpg', imagencolor4: 'Imagenes/AirMax906.jpg' }
    , links: {imagenLink1: "Tenis/Nike2.html?id=AirMax1" , imagenLink2: "Tenis/Nike2.html?id=AirMax2", imagenLink3: "Tenis/Nike2.html?id=AirMax3", imagenLink4: "Tenis/Nike2.html?id=AirMax4", imagenLink5: "Tenis/Nike2.html?id=AirMax5" } },
    
  { id: 4, nombre: 'AirMax90', categoria: 'Nike', color:'Azul', precio: 499.99, genero: 'Hombre', imagen: 'Imagenes/AirMax902.jpg', link: "Tenis/Nike2.html?id=AirMax2"},
  { id: 5, nombre: 'AirMax90', categoria: 'Nike', color:'Verde', precio: 499.99,  genero: 'Hombre', imagen: 'Imagenes/AirMax903.jpg', link: "Tenis/Nike2.html?id=AirMax3"},
  { id: 6, nombre: 'AirMax90', categoria: 'Nike', color:'Gris', precio: 499.99,   genero: 'Hombre',imagen: 'Imagenes/AirMax904.jpg', link: "Tenis/Nike2.html?id=AirMax4"},
  { id: 7, nombre: 'AirMax90', categoria: 'Nike', color:'Blanco', precio: 499.99,  genero: 'Hombre', imagen: 'Imagenes/AirMax906.jpg', link: "Tenis/Nike2.html?id=AirMax5"},
  { id: 8, nombre: 'Air Force 1 Dance', categoria: 'Nike', color: 'Negro', precio: '1499MXN',  genero: 'Mujer', imagen: 'Imagenes/Air Force 1  Dance.avif', link: 'Tenis/Nike2.html?id=Air Force 1 Dance', 
    imagenes:{imagencolor: 'Imagenes/Air Force 1  Dance.avif', imagencolor1: 'Imagenes/Air Force 1  Dance2.avif', }, 
    links: {imagenLink1: 'Tenis/Nike2.html?id=Air Force 1 Dance', imagenLink2:' Tenis/Nike2.html?id=Air Force 1 Dance'}  },
    { id: 9, nombre: 'Air Force 1 Dance', categoria: 'Nike', color: 'Beige', precio: '1499MXN',  genero: 'Mujer', imagen: 'Imagenes/Air Force 1  Dance2.avif', link: 'Tenis/Nike2.html?id=Air Force 1 Dance2', 
      imagenes:{imagencolor: 'Imagenes/Air Force 1  Dance2.avif', imagencolor1: 'Imagenes/Air Force 1  Dance.avif', }, 
      links: {imagenLink1: 'Tenis/Nike2.html?id=Air Force 1 Dance2', imagenLink2:' Tenis/Nike2.html?id=Air Force 1 Dance'}  },
      
  { id: 10, nombre: 'Adidas Samba Messi', categoria: 'Adidas', color:'Blanco', precio: 3099,  genero: 'Hombre', imagen: 'Imagenes/Samba Messi.jpg'},
  { id: 11, nombre: 'Adidas Samba Messi Rosa', categoria: 'Adidas', color:'Rosa', precio: 3099,  genero: 'Hombre', imagen: 'Imagenes/Samba Messi Rosa.jpg'},
  { id: 12, nombre: 'Adidas superstar', categoria: 'Adidas', color:'Blanco', precio: 3099,  genero: 'Hombre', imagen: 'Imagenes/Adidas superstar.jpg'},
]; //Aqui termina el arreglo de los productos

let productosFiltrados = productos.filter(pe => (categorias.length === 0 || categorias.includes(pe.categoria)) && (colores.length === 0 || colores.includes(pe.color)) && (generos.length === 0 || generos.includes(pe.genero)) && (modeloSeleccionado2 ==='' || (pe.nombre === modeloSeleccionado2))
); //A la variable productosFiltrados se le asigna el arreglo de productos si las condiciones son de 0, o si una variable contiene un valor  igual a  categorias, color o miodeloseleccionado
if (orden2 === 'Mayor') { //Si la variable orden2 es igual a Mayor entonces:
  productosFiltrados.sort((a, b) => b.precio - a.precio); //Ordenara el precio de mayor a menor
} else if (orden2 === 'Menor') { //Pero si la variable orden2 es igual a Menor entonces:
  productosFiltrados.sort((a, b) => a.precio - b.precio); //Ordenara el precio de menor a mayor
}
  const productosHTML = productosFiltrados.map((producto) => { //Se crea otra variable que almacena los productos ya filtrados y hara una iteracion a cada uno con map
    return ` 
      <div class="imagen-container"> 
        <img src="${producto.imagen}" alt="${producto.nombre}" class="evento2">
        <div class="imagenes-ocultas Evento2">
       ${producto.links?.imagenLink1 && producto.imagenes?.imagencolor ?` <a href = "${producto.links.imagenLink1}">   <img src="${producto.imagenes.imagencolor}" alt="${producto.nombre}"> </a> `: ""}
          ${producto.links?.imagenLink2  && producto.imagenes?.imagencolor1 ?` <a href = "${producto.links.imagenLink2}">   <img src="${producto.imagenes.imagencolor1}" alt="${producto.nombre}"> </a> `: ""}
          ${producto.links?.imagenLink3  && producto.imagenes?.imagencolor2 ?` <a href = "${producto.links.imagenLink3}" >   <img src="${producto.imagenes.imagencolor2}" alt="${producto.nombre}"> </a> `: ""}
          ${producto.links?.imagenLink4  && producto.imagenes?.imagencolor3 ?` <a href = "${producto.links.imagenLink4}" >   <img src="${producto.imagenes.imagencolor3}" alt="${producto.nombre}"> </a> `: ""}
          ${producto.links?.imagenLink5  && producto.imagenes?.imagencolor4 ?` <a href = "${producto.links.imagenLink5}" >   <img src="${producto.imagenes.imagencolor4}" alt="${producto.nombre}"> </a> `: ""}
        </div>
        <h3>${producto.nombre}</h3>
        <p class="precio">Precio: ${producto.precio}</p>
        <button class="B1">  <a href="${producto.link}"><span class="B2">Ver más</span></a></button>
      </div>
    `;
  }).join(''); //La ieracion map en cada uno de los productos sera hacer esta estructura html a cada uno en la que los valores seran las propiedades de los productos filtrados
const productosContenedor = document.getElementById('productos'); //Se obtiene el contenedor en donde se ingresaran los productos con la estructura
productosContenedor.innerHTML = productosHTML; //Se ingresan los productos dentro del contenedor
});


