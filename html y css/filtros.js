document.addEventListener('DOMContentLoaded',() =>{
  console.log("confirm");
let orden = "";
const Mayor = document.getElementById('Mayor')
.addEventListener('click', () => {
  console.log("confirme");
   orden = "Mayor";
   alert('ok');
});
const Menor = document.getElementById('Menor')
.addEventListener('click', () => {
 console.log("negative");
 
 
 orden = "Menor";
});
const modelos = document.querySelectorAll(".modelo");
let modeloSeleccionado = "";
modelos.forEach(modelo => {
  modelo.addEventListener('click', () => {
    modeloSeleccionado = modelo.dataset.modelo;
  });
});
document.getElementById('aplicar-filtros').addEventListener('click', () => {
 
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const categoria = [];
  const color = [];
  
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      if (checkbox.hasAttribute('data-categoria')) {
        categoria.push(checkbox.value);
      }
      if (checkbox.hasAttribute('data-color')) {
        color.push(checkbox.value);
      }
    }
  });
 
    const url = `productos.html?categoria=${categoria.join(',')}&orden=${orden}&color=${color.join(',')}&modeloSeleccionado=${modeloSeleccionado}`;
    window.location.href = url
  });
});