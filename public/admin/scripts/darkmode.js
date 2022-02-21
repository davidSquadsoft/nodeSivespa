let darkmode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");
var colorsVar = document.querySelector(":root");

//revisa si esta activado modo oscuro
//apagar si este encendido
//encender si este apagado
function getRootColores() {
    // obtenemos la hoja de estilos y el root
    var colors = getComputedStyl(colorsVar);
}

darkModeToggle.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkMode");
    if (darkmode !== "enabled") {
        localStorage.setItem("darkMode", "enabled");
        changeToDark();
        // if it has been enabled, turn it off
    } else {
        changeToNormal();
    }
});

const changeToDark = () => {
    //Cambian el valor de las variables de color de la hoja de estilos principal
    darkModeToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
    aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>Sun And Moon</title>
      <desc>A solid styled icon from Orion Icon Library.</desc>
      <path data-name="layer2"
      d="M36.4 20.4a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm0 28a12 12 0 0 1-10.3-5.8l2.5.3A13.7 13.7 0 0 0 42 25.8a12 12 0 0 1-5.6 22.6z"
      fill="#fff"></path>
      <path data-name="layer1" d="M36.4 16.4a2 2 0 0 0 2-2v-8a2 2 0 1 0-4 0v8a2 2 0 0 0 2 2zm-20 20a2 2 0 0 0-2-2h-8a2 2 0 0 0 0 4h8a2 2 0 0 0 2-2zm3-14.1a2 2 0 0 0 2.8-2.8l-5.7-5.7a2 2 0 0 0-2.8 2.8zM59 13.8a2 2 0 0 0-2.8 0l-5.7 5.7a2 2 0 1 0 2.8 2.8l5.7-5.7a2 2 0 0 0 0-2.8zM19.4 50.5l-5.7 5.7a2 2 0 1 0 2.9 2.8l5.7-5.7a2 2 0 1 0-2.8-2.8z"
      fill="#fff"></path>
    </svg>`;
    colorsVar.style.setProperty("--white", "#202124");
    colorsVar.style.setProperty("--grey", "#636363");
    colorsVar.style.setProperty("--grey_sidebar", "#d0d0d0");
    colorsVar.style.setProperty("--green", "#202124");
    colorsVar.style.setProperty("--btn_close_bars", "#f4f4f4");
    colorsVar.style.setProperty("--sidebar_right_green", "#f4f4f4");
    colorsVar.style.setProperty("--sidebar_hover", "#636363");
    colorsVar.style.setProperty("--light_grey", "#3c4043");
    colorsVar.style.setProperty("--sidebar_left", "#202124");
    colorsVar.style.setProperty(
        "--green_button",
        "linear-gradient(to right, #3c773c, #3c773c, #23437b)"
    );
    colorsVar.style.setProperty("--green_sidebar_right_hover", "#f4f4f4");
    colorsVar.style.setProperty("--black", "#f4f4f4");
    colorsVar.style.setProperty("--green_titulo_tabla", "#636363");
    colorsVar.style.setProperty("--anchos", "1px");
    colorsVar.style.setProperty("--dark_blue", "#3c773c");
    colorsVar.style.setProperty("--light_blue", "#636363");
    colorsVar.style.setProperty("--grey_label", "#f4f4f4");
    colorsVar.style.setProperty("--green_lightgrey", "#1c1c1c");
    colorsVar.style.setProperty("--sep_b_grey", "#636363");
    colorsVar.style.setProperty("--bg_grey_c_dashboard", "#3c4043");
    colorsVar.style.setProperty("--green_bright", " #afde20");
    colorsVar.style.setProperty("--svg_green_white", "#f4f4f4");
    document.getElementById("logosivespa").src =
        "/admin/images/logo_horizontal.svg";
    document.getElementById("logoseccional").src =
        "/admin/images/logo_seccional_salud_blanco.png";
};

const changeToNormal = () => {
    darkModeToggle.innerHTML = `
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.166 512.166" style="enable-background:new 0 0 512.166 512.166;" xml:space="preserve" fill="#121212">
    <g>
        <g>
            <path d="M503.536,289.135c-6.827-5.227-16.384-5.653-23.829-1.408c-2.219,1.259-4.416,2.539-6.699,3.712    c-50.709,26.624-108.437,31.403-162.517,13.419c-56.469-18.773-102.187-59.755-128.768-115.371    c-24.128-50.432-29.653-108.245-15.552-162.752c2.176-8.32-0.875-17.109-7.701-22.315c-6.805-5.205-16.085-5.803-23.573-1.536    C12.186,73.305-34.939,230.937,27.589,361.753c31.659,66.176,86.293,114.987,153.856,137.451    c25.963,8.619,52.629,12.907,79.168,12.907c40.064,0,79.851-9.749,116.608-29.013c66.027-34.624,114.965-97.259,134.293-171.84    C513.669,302.959,510.341,294.34,503.536,289.135z"/>
        </g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    </svg>`;
    colorsVar.style.setProperty("--white", "#fff");
    colorsVar.style.setProperty("--grey", "#5E636E");
    colorsVar.style.setProperty("--green", "#3c773c");
    colorsVar.style.setProperty("--btn_close_bars", "#3c773c");
    colorsVar.style.setProperty("--sidebar_right_green", "#3c773c");
    colorsVar.style.setProperty("--sidebar_hover", "#3c773c");
    colorsVar.style.setProperty("--light_grey", "#fbfbfb");
    colorsVar.style.setProperty("--sidebar_left", "#183059");
    colorsVar.style.setProperty(
        "--green_button",
        "linear-gradient(to right, #3c773c, #3c773c, #61B8CF)"
    );
    colorsVar.style.setProperty("--green_sidebar_right_hover", "#3c773c");
    colorsVar.style.setProperty("--black", "#202020");
    colorsVar.style.setProperty("--green_titulo_tabla", "#3c773c");
    colorsVar.style.setProperty("--anchos", "0px");
    colorsVar.style.setProperty("--dark_blue", "#23437b");
    colorsVar.style.setProperty("--light_blue", "#61B8CF");
    colorsVar.style.setProperty("--grey_label", "#5E636E");
    localStorage.setItem("darkMode", null);
    colorsVar.style.setProperty("--green_lightgrey", "#3c773c");
    colorsVar.style.setProperty("--sep_b_grey", "#e2e2e2");
    colorsVar.style.setProperty("--bg_grey_c_dashboard", "#fff");
    colorsVar.style.setProperty("--grey_sidebar", "#5E636E");
    colorsVar.style.setProperty("--svg_green_white", "#3c773c");
    document.getElementById("logosivespa").src =
        "/admin/images/logo_horizontal_mobile.svg";
    document.getElementById("logoseccional").src =
        "/admin/images/logo_seccional_salud.png";
};

if (darkmode === "enabled") {
    changeToDark();
    // if it has been enabled, turn it off
}