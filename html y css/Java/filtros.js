document.addEventListener('DOMContentLoaded',() =>{
let orden = ""; //Se inicia la variable orden
const Mayor = document.getElementById('Mayor')
.addEventListener('click', () => { 
   orden = "Mayor"; //Al momento de presionar el boton almacenado en la variable mayor, la variable orden tendra valor mayor
});
const Menor = document.getElementById('Menor')
.addEventListener('click', () => {
 orden = "Menor"; //Al momento de presionar el boton almacenado en la variable menor, la variable orden tendra valor menor
});
const modelos = document.querySelectorAll(".modelo"); //Se obtieien todos los elemntos con la clase modelo
let modeloSeleccionado = ""; //Vairable moedeloSeleccionado
modelos.forEach(modelo => { //Por cada modelo se aladira un evento click que hara:
 modelo.addEventListener('click', () =>{
 
   modeloSeleccionado = modelo.dataset.modelo; //ModeloSeleccionado sea igual a la data que se escribio en el elemento
 });
});
document.getElementById('aplicar-filtros').addEventListener('click', () => { //Al momento de hacer click en aplicar filtros
 
  const checkboxes = document.querySelectorAll('input[type="checkbox"]'); //Se seleccionan todos los checkboxes de los filtros
  
  const categoria = []; //Se inicia la variable categoria como un arreglo
  const color = []; //Se inicia la variable color como un arreglo
  let genero = [];
  checkboxes.forEach(checkbox => { //Por cada checkbox
    if (checkbox.checked){  //Si el checkbox es seleccionado
      if (checkbox.hasAttribute('data-categoria')) { //Y si tiene el atributo data-categoria
        categoria.push(checkbox.value); //Añadir el valor del checkbox al arreglo de categoria
      }
      if (checkbox.hasAttribute('data-color')) { //Si tiene el atributo data-color
        color.push(checkbox.value); //aañadir el valor del checkbox al arreglo de color
       
      }
      if (checkbox.hasAttribute('data-genero')){
         genero.push(checkbox.value);
        
      }
    }
  });
// Construir la URL con los filtros seleccionados
const url = `productos.html?categoria=${categoria.join(',')}&orden=${orden}&color=${color.join(',')}&genero=${genero.join(',')}&modeloSeleccionado=${modeloSeleccionado}`;
    window.location.href = url;
   
  });
});