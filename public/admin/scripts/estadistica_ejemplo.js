var colorsVar = document.querySelector(':root');
var option = document.getElementById("opcion");
var cantidad = document.getElementsByClassName('valor');
cambiar_sustancia();

function cambiar_sustancia() {
    if (option.value == "marihuana") {

        colorsVar.style.setProperty('--sabaneta', '190px');
        cantidad[0].innerHTML = "190";
        colorsVar.style.setProperty('--el_poblado', '202px');
        cantidad[1].innerHTML = "202";
        colorsVar.style.setProperty('--copacabana', '140px');
        cantidad[2].innerHTML = "140";
        colorsVar.style.setProperty('--santa_rosa', '100px');
        cantidad[3].innerHTML = "100";
        colorsVar.style.setProperty('--medellin', '295px');
        cantidad[4].innerHTML = "295";
        colorsVar.style.setProperty('--bello', '201px');
        cantidad[5].innerHTML = "201";


    } else if (option.value == "alcohol") {
        colorsVar.style.setProperty('--sabaneta', '90px');
        cantidad[0].innerHTML = "90";
        colorsVar.style.setProperty('--el_poblado', '100px');
        cantidad[1].innerHTML = "100";
        colorsVar.style.setProperty('--copacabana', '135px');
        cantidad[2].innerHTML = "135";
        colorsVar.style.setProperty('--santa_rosa', '120px');
        cantidad[3].innerHTML = "120";

        colorsVar.style.setProperty('--medellin', '200px');
        cantidad[4].innerHTML = "200";
        colorsVar.style.setProperty('--bello', '180px');
        cantidad[5].innerHTML = "180";
    } else if (option.value == "cocaina") {
        colorsVar.style.setProperty('--sabaneta', '65px');
        cantidad[0].innerHTML = "65";
        colorsVar.style.setProperty('--el_poblado', '240px');
        cantidad[1].innerHTML = "240";
        colorsVar.style.setProperty('--copacabana', '150px');
        cantidad[2].innerHTML = "150";
        colorsVar.style.setProperty('--santa_rosa', '50px');
        cantidad[3].innerHTML = "50";
        colorsVar.style.setProperty('--medellin', '242px');
        cantidad[4].innerHTML = "242";
        colorsVar.style.setProperty('--bello', '232px');
        cantidad[5].innerHTML = "232";
    }
}