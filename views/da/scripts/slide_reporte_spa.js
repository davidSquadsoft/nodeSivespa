const steps = Array.from(document.querySelectorAll('form .step'));
const nextBtn = document.querySelectorAll('form .next_button');
const backBtn = document.querySelectorAll('form .back_button');
const closeSidebars = document.querySelectorAll('div .close_sidebar');
const contentPage = document.querySelectorAll('.content');
const habilitarEditarEntidad = Array.from(document.querySelectorAll('form #campos_entidad'));
const habilitarEditarUsuarioEntidad = Array.from(document.querySelectorAll('form #campos_usuario_entidad'));


var editUsuario = 1;
const tabla_oculta = Array.from(document.querySelectorAll('#tabla_oculta'));





var isHide = 0;


closeSidebars.forEach(button => {
    button.addEventListener('click', () =>

        hideSidebarLeft()

    );

})



function hideSidebarLeft() {
    const form = document.querySelectorAll('form');
    const whatHideLeft = document.querySelector('#sidebar');
    const whatHideRight = document.querySelector('.sidebar-right');
    const whatExt = document.querySelector('.content');
    const maximize = document.querySelector('.maximize');
    if (isHide == 0) {
        document.getElementById("texto_button_sidebar").innerHTML = "&nbsp;Ver Menus";
        whatHideLeft.classList.remove('sidebar');
        whatHideLeft.classList.add('wrapper_hide_left');
        whatExt.classList.add('content_full_left');
        maximize.classList.add('bi-fullscreen-exit');
        maximize.classList.remove('bi-arrows-fullscreen');
        whatHideRight.classList.add('wrapper_hide_right');
        whatExt.classList.add('content_full_right');
        isHide = 1;


    } else {
        document.getElementById("texto_button_sidebar").innerHTML = "&nbsp;Maximizar";
        whatHideLeft.classList.add('sidebar');
        whatHideLeft.classList.remove('wrapper_hide_left');
        whatExt.classList.remove('content_full_left');
        maximize.classList.remove('bi-fullscreen-exit');
        maximize.classList.add('bi-arrows-fullscreen');
        whatHideRight.classList.remove('wrapper_hide_right');
        whatExt.classList.remove('content_full_right');
        isHide = 0;



    }
}


function hideSidebarRight() {
    if (isHideRight == 0) {


    } else {

    }
}






/** cambio de pasos, detecta paso activo y lo cambia */
function changeStep(btn) {
    let index = 0;
    const active = document.querySelector('form .step.active');
    index = steps.indexOf(active);
    steps[index].classList.remove('active');
    if (btn === 'next') {
        index++;

    } else if (btn === 'prev') {
        index--;

    }
    steps[index].classList.add('active');

    console.log(index);


}

function topFunction() {

    window.scrollTo(0, 1);
}



function editEntidad() {
    console.log(habilitarEditarEntidad);
    habilitarEditarEntidad.forEach(input => {
        input.disabled = false;
    });

}

function guardarCambiosEntidad() {
    habilitarEditarEntidad.forEach(input => {
        input.disabled = true;
    });
}


function editUsuarioEntidad() {
    console.log(habilitarEditarUsuarioEntidad);
    if (editUsuario === 1) {
        habilitarEditarUsuarioEntidad.forEach(input => {
            input.disabled = false;

        });
        editUsuario = 0;
        document.getElementById("editar_usuario_entidad_button").innerHTML = ` <svg id="Capa_1" style="width:1.2em;margin-bottom:0.2em" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.33 21.33"><defs><style>.cls-1{fill:#fff;}</style></defs><title>save</title><path class="cls-1" d="M19.39,20.09H16.67c0-2,0-3.93,0-5.9a.86.86,0,0,0-.94-.95H5.62a.92.92,0,0,0-.29,0,.86.86,0,0,0-.66.92v5.9H1.94a.91.91,0,0,1-.7-.95c0-5.65,0-11.3,0-16.95a.86.86,0,0,1,1-.94H4.67v7a.87.87,0,0,0,1,1h7.8a1.55,1.55,0,0,0,.31,0,.87.87,0,0,0,.65-.93v-7c.44,0,.86,0,1.27,0a1,1,0,0,1,.91.46c1,1.39,2.09,2.78,3.13,4.18.15.2.27.42.4.63V19.39A1,1,0,0,1,19.39,20.09Z"/><path class="cls-1" d="M6.4,20.09v-1.7h8.54v1.7Z"/><path class="cls-1" d="M14.94,15v1.69H6.4V15Z"/><path class="cls-1" d="M6.4,7.52V1.26h6.25V7.52Z"/></svg>`;
    } else {
        habilitarEditarUsuarioEntidad.forEach(input => {
            input.disabled = true;


        });
        editUsuario = 1;
        document.getElementById("editar_usuario_entidad_button").innerHTML = `<i class="bi bi-pencil-square"></i>`;
    }

}