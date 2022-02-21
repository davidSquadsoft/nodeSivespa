var show_warning = document.getElementById('warning');
var show_ayuda = document.getElementById("reporte_ayuda");
var guardado_correcto = document.getElementById('campos_save');


var regiones = ["Santa rosa de osos, Antioquia", "Santa rosa de cabal, Antioquia", "El Mirador, Bello, Antioquia", "El Mirador de las Palmas, Medellin, Antioquia", "Prado, Medellin, Antioquia", "San Antonio de Prado, Medellin, Antioquia"];


autocomplete(document.getElementById("myInput"), regiones);

function validar_campos() {


    var inputs = Array.from(document.getElementsByTagName('input'));
    for (i = 0; i < inputs.length; ++i) {
        if (inputs[i].value == "") {
            inputs[i].classList.add('campo_vacio');
            console.log(inputs[i]);
            show_warning.classList.remove('oculto');
            guardado_correcto.classList.add('oculto');
            show_ayuda.innerHTML = "";
            var empty = 0;
            var btn_no_ir = document.getElementById('no_ir_guia');
            btn_no_ir.classList.remove('oculto');
            var btn_ir = document.getElementById('ir_guia');
            btn_ir.classList.add('oculto');


        } else {
            inputs[i].classList.remove('campo_vacio');
            empty = 1;
        }


    }
    if (empty !== 0) {
        console.log("si tiene texto");
        show_warning.classList.add('oculto');

        guardado_correcto.classList.remove('oculto');


        /*llama funcion para almacenar en base de datos y mostrar tips referentes a la spa que afecta a la persona*/

        var btn_ir = document.getElementById('ir_guia');
        btn_ir.classList.remove('oculto');
        var btn_no_ir = document.getElementById('no_ir_guia');
        btn_no_ir.classList.add('oculto');
    }

}

function autocomplete(inp, arr) {
    /*toma dos argumentos, el campo de texto y un arreglo con las regiones*/
    var currentFocus;
    /*ejecuta la funcion cuando alguien escribe dentro del input*/
    inp.addEventListener("input", function(e) {

        var a, b, i, val = this.value;
        /*cierra alguna lista que estuviera previamente abierta*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;

        /*crea el DIV con la lista:*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*agrega dicho DIV como hijo del input:*/
        this.parentNode.appendChild(a);
        /*recorre cada item del arreglo...*/
        for (i = 0; i < arr.length; i++) {
            /*valida si comienza con la misma letra*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*crea un div con lso elementos que emparejen:*/
                b = document.createElement("DIV");

                /*hace las letras que emparejen en BOLD*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*inserta un input con el valor seleccionado*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*agrega la funcion de dar lcick al elemento:*/
                b.addEventListener("click", function(e) {
                    /*inserta el valor del autocompletado, el que se selecciona al input original:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*cierra la lusta:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*ejecuta la funcion de presion de teclado*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*si se presiona la tecla hacia bajo, cambia el focus*/
            currentFocus++;
            /*y hace el valor seleccionado el valor actual*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*si se preciona hacia arriba cambia el focus*/
            currentFocus--;
            /*y hace el valor seleccionado el valor actual*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*si se presiona enter para seleccionar el valor de la lista, previene que el formulario sea enviado*/
            e.preventDefault();
            if (currentFocus > -1) {
                if (x) x[currentFocus].click();
            }
        }
    });

    function addActive(x) {
        /*Clasifica el item seleccionado como activo:*/
        if (!x) return false;
        /*remueve la clase activa*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*agrega la clase "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");

    }

    function removeActive(x) {
        /*remueve la clase "active" de los elementos de autocompletado:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }


    function closeAllLists(elmnt) {
        /* cierra todos los div de autocompletado*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }


    }

    /*ejecuta una funcion al hacer click en la pagina en una area diferente al autocompletado o el input:*/
    document.addEventListener("click", function(e) {




        closeAllLists(e.target);


    });
}