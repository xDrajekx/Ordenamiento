let imagenes = [];

const mostrarbtn=document.getElementById("mostrarbtn");

const modal=document.getElementById("modal");

const cerrarbtn=document.getElementById("cerrarbtn");

const imagenmodal=document.getElementById("imagenmodal");

const anteriorbtn=document.getElementById("anterior");

const siguientebtn=document.getElementById("siguiente");

const imagenes1 =[
    "images/teni5.jpg",
    "images/teni12.jpg",
    "images/tenis2.jpg"
];

let indiceActual = 0;

function mostrarImagen(index){
    imagenmodal.src = imagenes[index];
    modal.style.display = "block"
}

mostrarbtn.addEventListener("click",() =>{
    indiceActual = 0;
    mostrarImagen(indiceActual);
});

cerrarbtn.addEventListener("click",() =>{
    modal.style.display = "none";
});

anteriorbtn.addEventListener("click", () =>{
    indiceActual = (indiceActual -1 + imagenes.length) % imagenes.length;
    mostrarImagen(indiceActual);
});

siguientebtn.addEventListener("click", () => {
    indiceActual = (indiceActual + 1)
    % imagenes.length;
    mostrarImagen(indiceActual);
});



const imagenes2 = [
    "images/teni4.jpg",
    "images/teni7.jpg",
    "images/teni8.jpg"

];

document.getElementById("mostrarbtn2").addEventListener("click",() =>{
    imagenes = imagenes2;
    indiceActual =0;
    mostrarImagen(indiceActual);
});