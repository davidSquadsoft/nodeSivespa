var show_warning = document.getElementById('warning');
var show_ayuda = document.getElementById("reporte_ayuda");
var guardado_correcto = document.getElementById('campos_save');
var mostrar_riesgo = document.getElementById('campos_save_si');
var quiero;
var regiones = ["Santa rosa de osos, Antioquia", "Santa rosa de cabal, Antioquia", "El Mirador, Bello, Antioquia", "El Mirador de las Palmas, Medellin, Antioquia", "Prado, Medellin, Antioquia", "San Antonio de Prado, Medellin, Antioquia"];



function no_mayor() {


    var contenido_no = document.getElementById("contenido_no");
    contenido_no.innerHTML = `
    <div class="col-lg-3 mb-2">
        <label for="" class="form-label">Municipio de residencia</label>
        <div class="input-group">
            <input type="text" class="form-control requerido" id="myInput" name="Municipio_residencia">
        </div>
    </div>
    <div class="col-lg-3 mb-2">
        <label for="" class="form-label">Sexo</label>
        <select name="sexo" id="" class="form-select">
        <option value="M">Masculino</option>
        <option value="F">Femenino</option>
        </select>
    </div>
    <div class="col-lg-3 mb-2">
        <label for="" class="form-label">EPS</label>
        <select name="Eps" id="" class="form-select">
        <option value="nombre_spa">listado de eps</option>
        </select>
    </div>
    <div class="col-lg-3 mb-2">
        <label for="" class="form-label">Sustancia de consumo</label>
        <select name="sexo" id="" class="form-select">
        <option value="Spa">Listado de sustancias</option>
        </select>
    </div>
<div class="row text-center mt-4 justify-content-center">
                        <button class="btn_dark_blue w-lg-75 w-75" onclick="validar_campos()" type="button" data-bs-toggle="modal" data-bs-target="#modal_guardado">Planes de acción y lineas de atención</button>
                    </div>`;
    var contenido_si = document.getElementById("contenido_si");
    contenido_si.innerHTML = "";
    autocomplete(document.getElementById("myInput"), regiones);
    show_ayuda.innerHTML = "";
    quiero = "no";




}

function si_mayor() {
    var contenido_no = document.getElementById("contenido_no");
    contenido_no.innerHTML = "";
    var contenido_si = document.getElementById("contenido_si");
    contenido_si.innerHTML = `<div class="col-lg-6 col-xs-12 mb-2">
        <label for="" class="form-label">Nombres y apellidos</label>
        <input type="text" class="form-control requerido" name="nombres">
    </div>
    <div class="col-lg-6 col-xs-12 mb-2">
        <label for="" class="form-label">Edad</label>
        <input type="text" class="form-control requerido" name="nombres">
    </div>
    <div class="col-lg-6 col-xs-12 mb-2">
        <label for="" class="form-label">Lugar de nacimiento</label>
        <div class="input-group">
            <input type="text" class="form-control requerido" name="lugar_n" id="myInput1">
        </div>
    </div>
    <div class="col-lg-6 col-xs-12 mb-2">
        <label for="" class="form-label">Fecha de nacimiento</label>
        <input type="date" class="form-control requerido" name="fecha_n">
    </div>
    <div class="col-lg-6 col-xs-12 mb-2">
        <label for="" class="form-label">Tipo de documento</label>
        <select name="tipo_d" id="" class="form-select">
          <option value="" class="">Cedula de ciudadania</option>
          <option value="" class="">Cedula de extranjeria</option>
          <option value="" class="">Pasaporte</option>
        </select>
    </div>
    <div class="col-lg-6 col-xs-12 mb-2">
        <label for="" class="form-label">Numero de documento</label>
        <input type="text" class="form-control " name="numero_d">
    </div>
    <div class="col-lg-6 col-xs-12 mb-2">
        <label for="" class="form-label">Seguridad social</label>
        <select name="tipo_ss" id="" class="form-select">
        <option value="" class="">Contributivo</option>
        <option value="" class="">Subsidiado</option>
      </select>
    </div>
    <div class="col-lg-6 col-xs-12 mb-2">
        <label for="" class="form-label">Eps</label>
        <select name="Eps" id="" class="form-select">
          <option value="nombre_spa">listado de eps</option>
        </select>
    </div>
    <div class="col-lg-6 col-xs-12 mb-2">
        <label for="" class="form-label">Dirección</label>
        <input type="text" class="form-control requerido" name="dir_v">
    </div>
    <div class="col-lg-6 col-xs-12 mb-2">
        <label for="" class="form-label">Telefono</label>
        <input type="text" class="form-control requerido" name="tel">
    </div>
    <div class="col-lg-6 col-xs-12 mb-2">
        <label for="" class="form-label">Barrio/Vereda/Corregimiento</label>
        <div class="input-group">
            <input type="text" class="form-control requerido" name="bvc" id="myInput2">
        </div>
    </div>
    <div class="col-lg-6 col-xs-12 mb-2">
        <label for="" class="form-label">Correo</label>
        <input type="email" class="form-control" name="email">
    </div>
    <div class="col-lg-6 col-xs-12 mb-2">
        <label for="" class="form-label">Zona</label>
        <select name="zona" id="" class="form-select">
        <option value="rural">Urbana</option>
        <option value="rural">Rural</option>
      </select>
    </div>
<div class="form-group">
<div class="accordion accordion-flush mt-4" id="accordionFlushExample">

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                      <div class="container">
                                          <div class="row">
                                              <h3>PREGUNTA 1.</h3>
                                          </div>
                                          <div class="row">
                                              <p class="textos_black">A lo largo de su vida, ¿cual de las siguientes sustancias ha consumido alguna vez? (SOLO PARA USOS NO-MÉDICOS)?</p>
                                          </div>
                                      </div>
                          
                          
                          
                                  </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <table class="lista_spa_reporte">
                                            <tr>
                                                <td>Alcohol</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Tabaco (cigarrillo)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Marihuana (regular, cripi, cripa)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Cocaína y/o derivados (perico, crack, nieve, parloca, freebase)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Basuco</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Éxtasis – MDMA</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>LSD (Dietalimida del acido lisérgico, ácido o tripi)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Heroína (Hache o "H")</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>2CB (tusi, tucibi o nexus)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Metanfetaminas (o meth, cristal, ice, hielo, speed)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>GHB ("G" o éxtasis líquido)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Ketamina o ketalar (Ketashort,Ketanir,Anesket,Imalgene)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Popper (Nitrito de amilo, Butilo)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>DICK, ladys, fragancia (cloruro de metileno o dichlorometano)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Solventes Inhalables (pegantes/sacol, pinturas, thinner, solventes, colas, gasolina, combustibles, aerosoles, gases)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Anfetaminas o estimulantes sin prescripción médica (Metilfenidato, píldoras adelgazantes, Benzedrina,Dexedrina)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Benzodiazepinas: ansioliticos y tranquilizantes sin prescripción médica (Clonazepam, Lorazepam, Diazepam, Midazolam, Alprazolam, etc)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Analgésicos derivados de los opioides sin prescripción médica (Codeína, Metadona, Tramadol, Hidromorfona, Morfina, Oxicodona, Hidrocodona, Oximorfona, Fetanilo)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Cacao sabanero</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Hongos</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Cannabinoides sintéticos(CS, AM 2201)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Otra</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <td>Cual?</td>
                                            <td><input type="text" name="Otra" id="" class="form-control"></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                      <div class="container">
                                          <div class="row">
                                              <h3>PREGUNTA 2.<br></h3>
                                          </div>
                                          <div class="row">
                                              <p class="textos_black">En los últimos tres meses, ¿con qué frecuencia ha consumido las sustancias que mencionó (PRIMERA DROGA, SEGUNDA DROGA, ETC)?</p>
                                          </div>
                                      </div>
                                  </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <table class="lista_spa_reporte">
                                            <tr>
                                                <td></td>
                                                <td>Nunca</td>
                                                <td>1 o 2 veces</td>
                                                <td>Cada mes</td>
                                                <td>Cada semana</td>
                                                <td>A diario</td>
                                            </tr>
                                            <tr>
                                                <td>Alcohol</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Tabaco (cigarrillo)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Marihuana (regular, cripi, cripa)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Cocaína y/o derivados (perico, crack, nieve, parloca, freebase)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Basuco</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Éxtasis – MDMA</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>LSD (Dietalimida del acido lisérgico, ácido o tripi)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Heroína (Hache o "H")</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>2CB (tusi, tucibi o nexus)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Metanfetaminas (o meth, cristal, ice, hielo, speed)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>GHB ("G" o éxtasis líquido)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Ketamina o ketalar (Ketashort,Ketanir,Anesket,Imalgene)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Popper (Nitrito de amilo, Butilo)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>DICK, ladys, fragancia (cloruro de metileno o dichlorometano)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Solventes Inhalables (pegantes/sacol, pinturas, thinner, solventes, colas, gasolina, combustibles, aerosoles, gases)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Anfetaminas o estimulantes sin prescripción médica (Metilfenidato, píldoras adelgazantes, Benzedrina,Dexedrina)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Benzodiazepinas: ansioliticos y tranquilizantes sin prescripción médica (Clonazepam, Lorazepam, Diazepam, Midazolam, Alprazolam, etc)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Analgésicos derivados de los opioides sin prescripción médica (Codeína, Metadona, Tramadol, Hidromorfona, Morfina, Oxicodona, Hidrocodona, Oximorfona, Fetanilo)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Cacao sabanero</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Hongos</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Cannabinoides sintéticos(CS, AM 2201)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Otra</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Cual?</td>
                                                <td><input type="text" name="Otra" id="" class="form-control"></td>
                                                <td><input type="text" name="Otra" id="" class="form-control"></td>
                                                <td><input type="text" name="Otra" id="" class="form-control"></td>
                                                <td><input type="text" name="Otra" id="" class="form-control"></td>
                                                <td><input type="text" name="Otra" id="" class="form-control"></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapsThree">
                                      <div class="container">
                                          <div class="row">
                                              <h3>PREGUNTA 3.<br> </h3>
                                          </div>
                                          <div class="row">
                                              <p class="textos_black">En los últimos tres meses, ¿con qué frecuencia ha tenido deseos fuertes o ansias de consumir (PRIMERA DROGA, SEGUNDA DROGA, ETC)?</p>
                                          </div>
                                      </div>
                                  </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <table class="lista_spa_reporte">
                                            <tr>
                                                <td></td>
                                                <td>Nunca</td>
                                                <td>1 o 2 veces</td>
                                                <td>Cada mes</td>
                                                <td>Cada semana</td>
                                                <td>A diario</td>
                                            </tr>
                                            <tr>
                                                <td>Alcohol</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Tabaco (cigarrillo)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Marihuana (regular, cripi, cripa)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Cocaína y/o derivados (perico, crack, nieve, parloca, freebase)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Basuco</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Éxtasis – MDMA</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>LSD (Dietalimida del acido lisérgico, ácido o tripi)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Heroína (Hache o "H")</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>2CB (tusi, tucibi o nexus)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Metanfetaminas (o meth, cristal, ice, hielo, speed)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>GHB ("G" o éxtasis líquido)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Ketamina o ketalar (Ketashort,Ketanir,Anesket,Imalgene)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Popper (Nitrito de amilo, Butilo)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>DICK, ladys, fragancia (cloruro de metileno o dichlorometano)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Solventes Inhalables (pegantes/sacol, pinturas, thinner, solventes, colas, gasolina, combustibles, aerosoles, gases)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Anfetaminas o estimulantes sin prescripción médica (Metilfenidato, píldoras adelgazantes, Benzedrina,Dexedrina)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Benzodiazepinas: ansioliticos y tranquilizantes sin prescripción médica (Clonazepam, Lorazepam, Diazepam, Midazolam, Alprazolam, etc)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Analgésicos derivados de los opioides sin prescripción médica (Codeína, Metadona, Tramadol, Hidromorfona, Morfina, Oxicodona, Hidrocodona, Oximorfona, Fetanilo)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Cacao sabanero</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Hongos</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Cannabinoides sintéticos(CS, AM 2201)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Otra</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Cual?</td>
                                                <td><input type="text" name="Otra" id="" class="form-control"></td>
                                                <td><input type="text" name="Otra" id="" class="form-control"></td>
                                                <td><input type="text" name="Otra" id="" class="form-control"></td>
                                                <td><input type="text" name="Otra" id="" class="form-control"></td>
                                                <td><input type="text" name="Otra" id="" class="form-control"></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingFour">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                      <div class="container">
                                          <div class="row">
                                              <h3>PREGUNTA 4.<br></h3>
                                          </div>
                                          <div class="row">
                                              <p class="textos_black">En los últimos tres meses, ¿con qué frecuencia le ha llevado su consumo de (PRIMERA DROGA, SEGUNDA DROGA, ETC) a problemas de salud, sociales, legales o económicos?</p>
                                          </div>
                                      </div>
                                  </button>
                                </h2>
                                <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <table class="lista_spa_reporte">
                                            <tr>
                                                <td></td>
                                                <td>Nunca</td>
                                                <td>1 o 2 veces</td>
                                                <td>Cada mes</td>
                                                <td>Cada semana</td>
                                                <td>A diario</td>
                                            </tr>
                                            <tr>
                                                <td>Alcohol</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Tabaco (cigarrillo)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Marihuana (regular, cripi, cripa)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Cocaína y/o derivados (perico, crack, nieve, parloca, freebase)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Basuco</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Éxtasis – MDMA</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>LSD (Dietalimida del acido lisérgico, ácido o tripi)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Heroína (Hache o "H")</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>2CB (tusi, tucibi o nexus)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Metanfetaminas (o meth, cristal, ice, hielo, speed)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>GHB ("G" o éxtasis líquido)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Ketamina o ketalar (Ketashort,Ketanir,Anesket,Imalgene)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Popper (Nitrito de amilo, Butilo)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>DICK, ladys, fragancia (cloruro de metileno o dichlorometano)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Solventes Inhalables (pegantes/sacol, pinturas, thinner, solventes, colas, gasolina, combustibles, aerosoles, gases)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Anfetaminas o estimulantes sin prescripción médica (Metilfenidato, píldoras adelgazantes, Benzedrina,Dexedrina)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Benzodiazepinas: ansioliticos y tranquilizantes sin prescripción médica (Clonazepam, Lorazepam, Diazepam, Midazolam, Alprazolam, etc)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Analgésicos derivados de los opioides sin prescripción médica (Codeína, Metadona, Tramadol, Hidromorfona, Morfina, Oxicodona, Hidrocodona, Oximorfona, Fetanilo)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Cacao sabanero</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Hongos</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Cannabinoides sintéticos(CS, AM 2201)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Otra</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Cual?</td>
                                                <td><input type="text" name="Otra" id="" class="form-control"></td>
                                                <td><input type="text" name="Otra" id="" class="form-control"></td>
                                                <td><input type="text" name="Otra" id="" class="form-control"></td>
                                                <td><input type="text" name="Otra" id="" class="form-control"></td>
                                                <td><input type="text" name="Otra" id="" class="form-control"></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingFive">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                      <div class="container">
                                          <div class="row">
                                              <h3>PREGUNTA 5.<br></h3>
                                          </div>
                                          <div class="row">
                                              <p class="textos_black">En los últimos tres meses, ¿con qué frecuencia dejó de hacer lo que se esperaba de usted habitualmente por el consumo de (PRIMERA DROGA, SEGUNDA DROGA, ETC)?</p>
                                          </div>
                                      </div>
                                  </button>
                                </h2>
                                <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <table class="lista_spa_reporte">
                                            <tr>
                                                <td></td>
                                                <td>Nunca</td>
                                                <td>1 o 2 veces</td>
                                                <td>Cada mes</td>
                                                <td>Cada semana</td>
                                                <td>A diario</td>
                                            </tr>
                                            <tr>
                                                <td>Alcohol</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Tabaco (cigarrillo)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Marihuana (regular, cripi, cripa)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Cocaína y/o derivados (perico, crack, nieve, parloca, freebase)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Basuco</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Éxtasis – MDMA</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>LSD (Dietalimida del acido lisérgico, ácido o tripi)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Heroína (Hache o "H")</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>2CB (tusi, tucibi o nexus)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Metanfetaminas (o meth, cristal, ice, hielo, speed)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>GHB ("G" o éxtasis líquido)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Ketamina o ketalar (Ketashort,Ketanir,Anesket,Imalgene)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Popper (Nitrito de amilo, Butilo)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>DICK, ladys, fragancia (cloruro de metileno o dichlorometano)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Solventes Inhalables (pegantes/sacol, pinturas, thinner, solventes, colas, gasolina, combustibles, aerosoles, gases)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Anfetaminas o estimulantes sin prescripción médica (Metilfenidato, píldoras adelgazantes, Benzedrina,Dexedrina)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Benzodiazepinas: ansioliticos y tranquilizantes sin prescripción médica (Clonazepam, Lorazepam, Diazepam, Midazolam, Alprazolam, etc)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Analgésicos derivados de los opioides sin prescripción médica (Codeína, Metadona, Tramadol, Hidromorfona, Morfina, Oxicodona, Hidrocodona, Oximorfona, Fetanilo)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Cacao sabanero</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Hongos</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Cannabinoides sintéticos(CS, AM 2201)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Otra</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Cual?</td>
                                                <td><input type="text" name="Otra" id="" class="form-control"></td>
                                                <td><input type="text" name="Otra" id="" class="form-control"></td>
                                                <td><input type="text" name="Otra" id="" class="form-control"></td>
                                                <td><input type="text" name="Otra" id="" class="form-control"></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingSix">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                      <div class="container">
                                          <div class="row">
                                              <h3>PREGUNTA 6.<br></h3>
                                          </div>
                                          <div class="row">
                                              <p class="textos_black">¿Un amigo, un familiar o alguien más alguna vez ha mostrado preocupación por su consumo de (PRIMERA DROGA, SEGUNDA DROGA, ETC)?</p>
                                          </div>
                                      </div>
                                  </button>
                                </h2>
                                <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <table class="lista_spa_reporte">
                                            <tr>
                                                <td></td>
                                                <td>No,nunca</td>
                                                <td>Si, en los ultimos 3 meses</td>
                                                <td>Si, pero no en los ultimos 3 meses</td>
                                            </tr>
                                            <tr>
                                                <td>Alcohol</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Tabaco (cigarrillo)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Marihuana (regular, cripi, cripa)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Cocaína y/o derivados (perico, crack, nieve, parloca, freebase)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Basuco</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Éxtasis – MDMA</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>LSD (Dietalimida del acido lisérgico, ácido o tripi)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Heroína (Hache o "H")</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>2CB (tusi, tucibi o nexus)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Metanfetaminas (o meth, cristal, ice, hielo, speed)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>GHB ("G" o éxtasis líquido)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Ketamina o ketalar (Ketashort,Ketanir,Anesket,Imalgene)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Popper (Nitrito de amilo, Butilo)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>DICK, ladys, fragancia (cloruro de metileno o dichlorometano)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Solventes Inhalables (pegantes/sacol, pinturas, thinner, solventes, colas, gasolina, combustibles, aerosoles, gases)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Anfetaminas o estimulantes sin prescripción médica (Metilfenidato, píldoras adelgazantes, Benzedrina,Dexedrina)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Benzodiazepinas: ansioliticos y tranquilizantes sin prescripción médica (Clonazepam, Lorazepam, Diazepam, Midazolam, Alprazolam, etc)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Analgésicos derivados de los opioides sin prescripción médica (Codeína, Metadona, Tramadol, Hidromorfona, Morfina, Oxicodona, Hidrocodona, Oximorfona, Fetanilo)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Cacao sabanero</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Hongos</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Cannabinoides sintéticos(CS, AM 2201)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Otra</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Cual?</td>
                                                <td><input type="text" name="Otra" id="" class="form-control"></td>
                                                <td><input type="text" name="Otra" id="" class="form-control"></td>
                                                <td><input type="text" name="Otra" id="" class="form-control"></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingSeven">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                      <div class="container">
                                          <div class="row">
                                              <h3>PREGUNTA 7.<br></h3>
                                          </div>
                                          <div class="row"><p class="textos_black">¿Ha intentado alguna vez controlar, reducir o dejar de consumir (PRIMERA DROGA, SEGUNDA DROGA, ETC) y no lo ha logrado?</p></div>
                                      </div>
                                  </button>
                                </h2>
                                <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <table class="lista_spa_reporte">
                                            <tr>
                                                <td></td>
                                                <td>No,nunca</td>
                                                <td>Si, en los ultimos 3 meses</td>
                                                <td>Si, pero no en los ultimos 3 meses</td>
                                            </tr>
                                            <tr>
                                                <td>Alcohol</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Tabaco (cigarrillo)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Marihuana (regular, cripi, cripa)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Cocaína y/o derivados (perico, crack, nieve, parloca, freebase)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Basuco</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Éxtasis – MDMA</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>LSD (Dietalimida del acido lisérgico, ácido o tripi)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Heroína (Hache o "H")</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>2CB (tusi, tucibi o nexus)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Metanfetaminas (o meth, cristal, ice, hielo, speed)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>GHB ("G" o éxtasis líquido)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Ketamina o ketalar (Ketashort,Ketanir,Anesket,Imalgene)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Popper (Nitrito de amilo, Butilo)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>DICK, ladys, fragancia (cloruro de metileno o dichlorometano)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Solventes Inhalables (pegantes/sacol, pinturas, thinner, solventes, colas, gasolina, combustibles, aerosoles, gases)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Anfetaminas o estimulantes sin prescripción médica (Metilfenidato, píldoras adelgazantes, Benzedrina,Dexedrina)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Benzodiazepinas: ansioliticos y tranquilizantes sin prescripción médica (Clonazepam, Lorazepam, Diazepam, Midazolam, Alprazolam, etc)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Analgésicos derivados de los opioides sin prescripción médica (Codeína, Metadona, Tramadol, Hidromorfona, Morfina, Oxicodona, Hidrocodona, Oximorfona, Fetanilo)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Cacao sabanero</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Hongos</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Cannabinoides sintéticos(CS, AM 2201)</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Otra</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                            <tr>
                                                <td>Cual?</td>
                                                <td><input type="text" name="Otra" id="" class="form-control"></td>
                                                <td><input type="text" name="Otra" id="" class="form-control"></td>
                                                <td><input type="text" name="Otra" id="" class="form-control"></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingEight">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                                      <div class="container">
                                          <div class="row">
                                              <h3>PREGUNTA 8. </h3>
                                          </div>
                                          <div class="row">
                                              <p class="textos_black">¿Ha consumido alguna vez alguna droga por vía inyectada? (ÚNICAMENTE PARA USOS NO MÉDICOS)</p>
                                          </div>
                                      </div>
                                  </button>
                                </h2>
                                <div id="flush-collapseEight" class="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <table class="lista_spa_reporte">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                                <label class="form-check-label" for="flexRadioDefault1">
                                                  Si
                                              </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                                                <label class="form-check-label" for="flexRadioDefault2">
                                                  No
                                            </label>
                                            </div>
                                        </table>
                                        <table class="lista_spa_reporte">
                                            <tr>
                                                <td></td>
                                                <td>Una vez a la semana o menos (Intervención breve)</td>
                                                <td>Menos de 3 días seguidos (Intervención intensiva)</td>
                                            </tr>
                                            <tr>
                                                <td>Frecuencia de la inyección</td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>




                        </div>
</div>
<div class="row text-center mt-4 justify-content-center">
                        <button class="btn_dark_blue w-lg-75 w-75" onclick="validar_campos()" type="button" data-bs-toggle="modal" data-bs-target="#modal_guardado">Conocer mi nivel de riesgo</button>
                    </div>

`;

    autocomplete(document.getElementById("myInput1"), regiones);
    autocomplete(document.getElementById("myInput2"), regiones);
    quiero = "si";


}



function validar_campos() {


    var inputs = Array.from(document.getElementsByClassName('requerido'));
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
            inputs[i].classList.add('campo_ok');
            empty = 1;
        }


    }
    if (empty !== 0) {
        console.log("si tiene texto");
        show_warning.classList.add('oculto');

        guardado_correcto.classList.remove('oculto');
        console.log(quiero);
        if (quiero == "si") {

            mostrar_riesgo.classList.remove('oculto');
        } else {

            mostrar_riesgo.classList.add('oculto');
        }
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