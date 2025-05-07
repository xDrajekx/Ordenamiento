document.addEventListener('DOMContentLoaded', () => {
  let orden = "";

  document.getElementById('Mayor').addEventListener('click', () => {
    orden = "Mayor";
  });

  document.getElementById('Menor').addEventListener('click', () => {
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
    const genero = [];

    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        if (checkbox.hasAttribute('data-categoria')) {
          categoria.push(checkbox.value);
        }
        if (checkbox.hasAttribute('data-color')) {
          color.push(checkbox.value);
        }
        if (checkbox.hasAttribute('data-genero')) {
          genero.push(checkbox.value);
        }
      }
    });

    // DEBUG: Imprimir valores antes de construir URL
    console.log("Categoría:", categoria);
    console.log("Color:", color);
    console.log("Género:", genero);
    console.log("Modelo seleccionado:", modeloSeleccionado);
    console.log("Orden:", orden);

    const url = `productos.html?categoria=${categoria.join(',')}&orden=${orden}&color=${color.join(',')}&genero=${genero.join(',')}&modeloSeleccionado=${modeloSeleccionado}`;

    console.log("URL generada:", url);

    window.location.href = url;
  });
});