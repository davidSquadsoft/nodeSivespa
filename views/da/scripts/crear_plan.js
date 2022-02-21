function crear_campos_linea() {
    x = 0;
    var lineas = document.getElementById("lineas");
    lineas.innerHTML = "";
    var x = document.getElementById("cantidad_lineas").value;
    for (i = 0; i < x; i++) {
        console.log(i);
        lineas.insertAdjacentHTML('beforeend', '<label for="" class="form-label">Numero:</label> <input type="text" class="form-control">');

    }
}