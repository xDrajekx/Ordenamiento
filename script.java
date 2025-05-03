<script>
//Este código asegura que la función se ejecute después de que todo el contenido HTML haya cargado completamente.
    document.addEventListener('DOMContentLoaded', function() { 
        //Aquí se seleccionan específicamente los enlaces (<a>) dentro de los elementos <li> en el menú.
        var menuItems = document.querySelectorAll('.menu > ul > li');

        //Toma la lista de elementos menuItems (probablemente un conjunto de elementos <li> del menú principal) y los recorre uno por uno.Para cada elemento en la lista, ejecuta la función proporcionada.
        menuItems.forEach(function(item) {

//Aquí, a cada elemento del menú (item), se le agrega un "escuchador" para el evento click.Es decir, cuando hagas clic en un elemento, se ejecutará la función definida dentro.
            item.addEventListener('click', function(event) {

                //Previene el comportamiento predeterminado del clic. Por ejemplo, si item es un enlace, este código evita que redireccione a otra página.
                event.preventDefault();

                //Busca dentro del elemento actual (this) algún submenú (un elemento con la clase .submenu).Si encuentra uno, lo guarda en la variable submenu.
                var submenu = this.querySelector('.submenu');

                //Verifica si el submenú existe. Solo entra al bloque de código dentro si encontró un submenú.
                if (submenu) {
                    //Alterna entre mostrar y ocultar el submenú.Si actualmente el estilo display es 'block' (visible), lo cambia a 'none' (oculto).Si es 'none' o está vacío, lo cambia a 'block'.
                    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
                }
            });
        });
    });
</script>
<script>
//Espera hasta que todo el contenido HTML haya cargado antes de ejecutar el código. Esto asegura que los elementos del DOM estén listos para ser manipulados.
    document.addEventListener('DOMContentLoaded', function() {
        //Selecciona todos los enlaces (<a>) que están dentro de los elementos <li> del menú.
        var menuItems = document.querySelectorAll('.menu > ul > li > a');

//Recorre todos los enlaces seleccionados, y para cada uno ejecuta la función dada.
        menuItems.forEach(function(link) {

            //Agrega un evento click a cada enlace. Cuando se hace clic, se ejecuta la función definida.
            link.addEventListener('click', function(event) {
                //Evita la acción predeterminada del enlace, como redirigir a otra página
                event.preventDefault();
                //Obtiene el elemento padre del enlace (<li>) en el que se hizo clic.
                var parentLi = this.parentElement;
                //Busca dentro del <li> un submenú (.submenu). Si existe, lo almacena en submenu.
                var submenu = parentLi.querySelector('.submenu');
                //Si se encontró un submenú, alterna entre mostrarlo (block) y ocultarlo (none).
                if (submenu) {
                    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
                }
            });
        });
    });
</script>
