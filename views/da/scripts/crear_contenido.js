var area_regiones_crear_contenido = document.getElementById("area_regiones_crear_contenido");

document.getElementById('esRegional').addEventListener('change', function() {
    if (this.value == "1") {
        area_regiones_crear_contenido.classList.remove("hide_table");
        area_regiones_crear_contenido.classList.add("show_table");
        console.log("si");
    } else {
        area_regiones_crear_contenido.classList.remove("show_table");
        area_regiones_crear_contenido.classList.add("hide_table");
    }
});