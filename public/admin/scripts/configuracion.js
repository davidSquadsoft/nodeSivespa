var content_config = document.getElementById('conf');
console.log(content_config);

function showGestionModulos() {

    content_config.innerHTML = ` <h3>Gestionar Modulos de Entidades</h3>
<p class="textos_black">Seleccione los modulos que desea activar o desactivar de la aplicacion SIVESPA</p>
<nav class="tabs_conf_modulos">
    <div class="nav nav-tabs" id="nav-tab" role="tablist">
      <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Aplicación Web</button>
      <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Aplicación Movil</button>
      <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Aplicación Escritorio</button>
    </div>
  </nav>
  <div class="tab-content" id="nav-tabContent">
    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
        <div class="row">
            
            <div class="col-lg-4 col-xs-12">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="" checked>
                    <label class="form-check-label" for="">Informes</label>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="" checked>
                    <label class="form-check-label" for="">Estadísticas</label>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="" checked>
                    <label class="form-check-label" for="">Reportes</label>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="" checked>
                    <label class="form-check-label" for="">Tamizajes</label>
                </div>
            </div>
            <div class="col-lg-4 col-xs-12">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="" checked>
                    <label class="form-check-label" for="">Entidades</label>
                </div>
                
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="" checked>
                    <label class="form-check-label" for="">Noticias</label>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="" checked>
                    <label class="form-check-label" for="">Tips</label>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="" checked>
                    <label class="form-check-label" for="">Informacion</label>
                </div>
            </div>
            <div class="col-lg-4 col-xs-12 d-flex align-items-end justify-content-end">
                <button type="button" class="btn_green" data-bs-toggle="modal" data-bs-target="#modal_guardado">Guardar</button>
            </div>
        </div>
    </div>
    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
        <div class="row">
            
            <div class="col-lg-4 col-xs-12">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="" checked>
                    <label class="form-check-label" for="">Informes</label>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="" checked>
                    <label class="form-check-label" for="">Estadísticas</label>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="" checked>
                    <label class="form-check-label" for="">Reportes</label>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="" checked>
                    <label class="form-check-label" for="">Tamizajes</label>
                </div>
            </div>
            <div class="col-lg-4 col-xs-12">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="" checked>
                    <label class="form-check-label" for="">Entidades</label>
                </div>
                
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="" checked>
                    <label class="form-check-label" for="">Noticias</label>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="" checked>
                    <label class="form-check-label" for="">Tips</label>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="" checked>
                    <label class="form-check-label" for="">Informacion</label>
                </div>
            </div>
            <div class="col-lg-4 col-xs-12 d-flex align-items-end justify-content-end">
                <button type="button" class="btn_green" data-bs-toggle="modal" data-bs-target="#modal_guardado">Guardar</button>
            </div>
        </div>
    </div>
    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
    <div class="row">
            
        <div class="col-lg-4 col-xs-12">
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="" checked>
                <label class="form-check-label" for="">Informes</label>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="" checked>
                <label class="form-check-label" for="">Estadísticas</label>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="" checked>
                <label class="form-check-label" for="">Reportes</label>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="" checked>
                <label class="form-check-label" for="">Tamizajes</label>
            </div>
        </div>
        <div class="col-lg-4 col-xs-12">
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="" checked>
                <label class="form-check-label" for="">Entidades</label>
            </div>
            
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="" checked>
                <label class="form-check-label" for="">Noticias</label>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="" checked>
                <label class="form-check-label" for="">Tips</label>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="" checked>
                <label class="form-check-label" for="">Informacion</label>
            </div>
        </div>
        <div class="col-lg-4 col-xs-12 d-flex align-items-end justify-content-end">
            <button type="button" class="btn_green" data-bs-toggle="modal" data-bs-target="#modal_guardado">Guardar</button>
        </div>
    </div>
</div>
</div>

<h3>Gestionar Modulos del Ciudadano</h3>
<p class="textos_black">Seleccione los modulos que desea activar o desactivar de la aplicacion SIVESPA</p>
<nav class="tabs_conf_modulos">
    <div class="nav nav-tabs" id="nav-tab" role="tablist">
      <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-ciudadano-web" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Aplicación Web</button>
      <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-ciudadano-movil" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Aplicación Movil</button>
      
    </div>
</nav>
<div class="tab-content" id="nav-tabContent">
    <div class="tab-pane fade show active" id="nav-ciudadano-web" role="tabpanel" aria-labelledby="nav-home-tab">
        <div class="row">
            
            <div class="col-lg-4 col-xs-12">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="" checked>
                    <label class="form-check-label" for="">Noticias</label>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="" checked>
                    <label class="form-check-label" for="">Tips</label>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="" checked>
                    <label class="form-check-label" for="">Reportes</label>
                </div>
                
            </div>
            <div class="col-lg-4 col-xs-12">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="" checked>
                    <label class="form-check-label" for="">Indicadores</label>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="" checked>
                    <label class="form-check-label" for="">Estadisticas</label>
                </div>
                
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="" checked>
                    <label class="form-check-label" for="">Informes</label>
                </div>
               
            </div>
            <div class="col-lg-4 col-xs-12 d-flex align-items-end justify-content-end">
                <button type="button" class="btn_green" data-bs-toggle="modal" data-bs-target="#modal_guardado">Guardar</button>
            </div>
        </div>
        
    </div>
    <div class="tab-pane fade" id="nav-ciudadano-movil" role="tabpanel" aria-labelledby="nav-profile-tab">
        
        <div class="row">
            
            <div class="col-lg-4 col-xs-12">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="" checked>
                    <label class="form-check-label" for="">Noticias</label>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="" checked>
                    <label class="form-check-label" for="">Tips</label>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="" checked>
                    <label class="form-check-label" for="">Reportes</label>
                </div>
                
            </div>
            <div class="col-lg-4 col-xs-12">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="" checked>
                    <label class="form-check-label" for="">Indicadores</label>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="" checked>
                    <label class="form-check-label" for="">Estadisticas</label>
                </div>
                
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="" checked>
                    <label class="form-check-label" for="">Informes</label>
                </div>
               
            </div>
            <div class="col-lg-4 col-xs-12 d-flex align-items-end justify-content-end">
                <button type="button" class="btn_green" data-bs-toggle="modal" data-bs-target="#modal_guardado">Guardar</button>
            </div>
            
        </div>
    </div>
    <nav class="tabs_conf_modulos mt-5">
    <h3>Gestionar Banners</h3>
    <p class="textos_black">Seleccione las imagenes para cada uno de los banner de la pagina web</p>
    <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-banner1" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Banner 1</button>
        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-banner2" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Banner 2</button>
        <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-banner3" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Banner 3</button>
    </div>
</nav>
<div class="tab-content" id="nav-tabContent">
    <div class="tab-pane fade show active" id="nav-banner1" role="tabpanel" aria-labelledby="nav-home-tab">
        <div class="banners">

            <img src="../landing_ciudadano/images/banner1.png" alt="" class="mt-2" style="width: 100%;">
            <div class="row mt-4 justify-content-end d-flex">

                <input type="file" id="actual-btn" hidden/>
                <button class="btn_green w-25" type="button">
                    <label for="actual-btn" class="w-100 h-100 pt-2">Agregar/Cambiar imagen</label>
                    </button>

            </div>
        </div>
    </div>
    <div class="tab-pane fade" id="nav-banner2" role="tabpanel" aria-labelledby="nav-profile-tab">
        <div class="banners">

            <img src="../landing_ciudadano/images/banner2.png" alt="" class="mt-2" style="width: 100%;">
            <div class="row mt-4 justify-content-end d-flex">

                <input type="file" id="actual-btn" hidden/>
                <button class="btn_green w-25" type="button">
                <label for="actual-btn" class="w-100 h-100 pt-2">Agregar/Cambiar imagen</label>
                </button>

            </div>
        </div>
    </div>
    <div class="tab-pane fade" id="nav-banner3" role="tabpanel" aria-labelledby="nav-contact-tab">
        <div class="banners">

            <img src="../landing_ciudadano/images/banner3.png" alt="" class="mt-2" style="width: 100%;">
            <div class="row mt-4 justify-content-end d-flex">

                <input type="file" id="actual-btn" hidden/>
                <button class="btn_green w-25" type="button">
                    <label for="actual-btn" class="w-100 h-100 pt-2">Agregar/Cambiar imagen</label>
                    </button>

            </div>
        </div>
    </div>
</div>
   
</div>`;
}

function showGestionColores() {
    content_config.innerHTML = `<h3>Configurar Colores</h3>
    <div class="container">
        <div class="row">
            <h3>Aplicación</h3>
            <div class="card card_colores col-lg-4 col-xs-12">
                <div class="card-body">
                    <h5 class="card-title">Nombre del tema</h5>
                    <img src="../images/esquema1.png" alt="">
                    <button class="btn_green">Activar</button>
                </div>
            </div>
            <div class="card card_colores col-lg-4 col-xs-12">
                <div class="card-body">
                    <h5 class="card-title">Nombre del tema</h5>
                    <img src="../images/esquema2.png" alt="">
                    <button class="btn_green">Activar</button>
                </div>
            </div>
            <div class="card card_colores col-lg-4 col-xs-12">
                <div class="card-body">
                    <h5 class="card-title">Nombre del tema</h5>
                    <img src="../images/esquema3.png" alt="">
                    <button class="btn_green">Activar</button>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <h3>Sitio web ciudadano</h3>
            <div class="card card_colores col-lg-4 col-xs-12">
                <div class="card-body">
                    <h5 class="card-title">Nombre del tema</h5>
                    <img src="../images/esquema1.png" alt="">
                    <button class="btn_green">Activar</button>
                </div>
            </div>
            <div class="card card_colores col-lg-4 col-xs-12">
                <div class="card-body">
                    <h5 class="card-title">Nombre del tema</h5>
                    <img src="../images/esquema2.png" alt="">
                    <button class="btn_green">Activar</button>
                </div>
            </div>
            <div class="card card_colores col-lg-4 col-xs-12">
                <div class="card-body">
                    <h5 class="card-title">Nombre del tema</h5>
                    <img src="../images/esquema3.png" alt="">
                    <button class="btn_green">Activar</button>
                </div>
            </div>
        </div>
    </div>`;
}

function showGestionUsuarios() {
    content_config.innerHTML = `
    <h3>Gestionar Usuarios</h3>
                    <button class="btn_green col-lg-2 mb-4" data-bs-toggle="modal" data-bs-target="#modal_crear_usuario">
                            Crear Administrador
                    </button>
                    <table>
                        <tr class="titulo_tabla">
                            <td>Nombre</td>
                            <td>Entidad</td>
                            <td>Cargo</td>
                            <td>Rol</td>
                            <td>E-mail</td>
                            <td>Teléfono</td>
                        </tr>
                        <tr>
                            <td> <input type="text" class="form-control" id="campos_conf_gestion_usuarios" disabled placeholder="Nombre Completo"></td>
                            <td> <input type="text" class="form-control" id="campos_conf_gestion_usuarios" disabled placeholder="Entidad perteneciente"></td>
                            <td> <input type="text" class="form-control" id="campos_conf_gestion_usuarios" disabled placeholder="Su Cargo"></td>
                            <td> <input type="text" class="form-control" id="campos_conf_gestion_usuarios" disabled placeholder="Admin/Ent/U_Ent"></td>
                            <td> <input type="text" class="form-control" id="campos_conf_gestion_usuarios" disabled placeholder="correo@dominio.com"></td>
                            <td> <input type="text" class="form-control" id="campos_conf_gestion_usuarios" disabled placeholder="3000000000"></td>
                            <td><button type="button" id="editar_gestion_usuario" class="btn_green btn_icons" onclick="editGestionUsuarios();"><i class="bi bi-pencil-square"></i></button></td>
                            <td><button class="btn_red_eliminar"><i class="bi bi-x-octagon-fill"></i></button></td>
                        </tr>
                        <tr>
                            <td> <input type="text" class="form-control" id="campos_conf_gestion_usuarios" disabled placeholder="Nombre Completo"></td>
                            <td> <input type="text" class="form-control" id="campos_conf_gestion_usuarios" disabled placeholder="Entidad perteneciente"></td>
                            <td> <input type="text" class="form-control" id="campos_conf_gestion_usuarios" disabled placeholder="Su Cargo"></td>
                            <td> <input type="text" class="form-control" id="campos_conf_gestion_usuarios" disabled placeholder="Admin/Ent/U_Ent"></td>
                            <td> <input type="text" class="form-control" id="campos_conf_gestion_usuarios" disabled placeholder="correo@dominio.com"></td>
                            <td> <input type="text" class="form-control" id="campos_conf_gestion_usuarios" disabled placeholder="3000000000"></td>
                            <td><button type="button" id="editar_gestion_usuario" class="btn_green btn_icons" onclick="editGestionUsuarios();"><i class="bi bi-pencil-square"></i></button></td>
                            <td><button class="btn_red_eliminar"><i class="bi bi-x-octagon-fill"></i></button></td>
                        </tr>
                        <tr>
                            <td> <input type="text" class="form-control" id="campos_conf_gestion_usuarios" disabled placeholder="Nombre Completo"></td>
                            <td> <input type="text" class="form-control" id="campos_conf_gestion_usuarios" disabled placeholder="Entidad perteneciente"></td>
                            <td> <input type="text" class="form-control" id="campos_conf_gestion_usuarios" disabled placeholder="Su Cargo"></td>
                            <td> <input type="text" class="form-control" id="campos_conf_gestion_usuarios" disabled placeholder="Admin/Ent/U_Ent"></td>
                            <td> <input type="text" class="form-control" id="campos_conf_gestion_usuarios" disabled placeholder="correo@dominio.com"></td>
                            <td> <input type="text" class="form-control" id="campos_conf_gestion_usuarios" disabled placeholder="3000000000"></td>
                            <td><button type="button" id="editar_gestion_usuario" class="btn_green btn_icons" onclick="editGestionUsuarios();"><i class="bi bi-pencil-square"></i></button></td>
                            <td><button class="btn_red_eliminar"><i class="bi bi-x-octagon-fill"></i></button></td>
                        </tr>
                        <tr>
                            <td> <input type="text" class="form-control" id="campos_conf_gestion_usuarios" disabled placeholder="Nombre Completo"></td>
                            <td> <input type="text" class="form-control" id="campos_conf_gestion_usuarios" disabled placeholder="Entidad perteneciente"></td>
                            <td> <input type="text" class="form-control" id="campos_conf_gestion_usuarios" disabled placeholder="Su Cargo"></td>
                            <td> <input type="text" class="form-control" id="campos_conf_gestion_usuarios" disabled placeholder="Admin/Ent/U_Ent"></td>
                            <td> <input type="text" class="form-control" id="campos_conf_gestion_usuarios" disabled placeholder="correo@dominio.com"></td>
                            <td> <input type="text" class="form-control" id="campos_conf_gestion_usuarios" disabled placeholder="3000000000"></td>
                            <td><button type="button" id="editar_gestion_usuario" class="btn_green btn_icons" onclick="editGestionUsuarios();"><i class="bi bi-pencil-square"></i></button></td>
                            <td><button class="btn_red_eliminar"><i class="bi bi-x-octagon-fill"></i></button></td>
                        </tr>


                    </table>`;
}

function showPerfil() {
    content_config.innerHTML = `<h3>Mi Perfil</h3>
    <div class="row perfil_usuario">
        <div class="col-lg-4 col-xs-12 col_img_perfil">
            <div class="perfil_portrait">

                <img src="../images/profile.jpg" alt="" class="img_perfil">
            </div>
            <i class="bi bi-camera-fill"></i>
        </div>

        <div class="col-lg-8 col-xs-12">
            <div class="row">
                <h3>Datos Personales</h3>
                <div class="col-lg-6 col-xs-12">
                    <p>Nombre <input type="text" class="form-control" placeholder="Nombre del usuario" disabled></p>
                    <p>Tipo de Documento: <input type="text"class="form-control"  placeholder="Cedula/Cedula de Extranjeria"
                            disabled></p>
                    <p>Cargo: <input type="text" class="form-control" placeholder="Su Cargo" disabled></p>
                    <p>Telefono: <input type="text" class="form-control" placeholder="300 000 00 00" disabled></p>
                    <p>Rol: <input type="text" class="form-control" placeholder="Ent/U_Ent/Admin " disabled></p>
                </div>
                <div class="col-lg-6 col-xs-12">
                    <p>E-mail <input type="text" class="form-control" value="mi correo" disabled></p>
                    <p>Numero de Documento: <input type="text" class="form-control" placeholder="10000000" disabled></p>
                    <p>Permisos: <select name="" id="">
                            <option value="" selected disabled hidden>Listado de permisos</option>
                            <option value="" disabled>Permiso 1</option>
                            <option value="" disabled>Permiso 2</option>
                            <option value="" disabled>Permiso 3</option>
                        </select></p>
                    <p>Telefono: <input type="text" class="form-control" placeholder="300 000 00 00" disabled></p>

                </div>
            </div>
            <br>
            <div class="row">
                <h3>Seguridad</h3>
                <div class="col-lg-6 col-xs-12">
                    <p>Contraseña Actual <input type="password" class="form-control" placeholder=""></p>
                    <p>Nueva Contraseña <input type="password" class="form-control" placeholder=""></p>
                    <p>Repetir Contraseña <input type="password" class="form-control" placeholder=""></p>
                    <button class="btn_green">Cambiar Contraseña</button>

                </div>

            </div>

        </div>

    </div>`
}



/*Cambiar los iconos del boton de editar usuario a guardar y visceversa*/
function editGestionUsuarios() {
    const habilitarEditarGestionUsuarios = Array.from(document.querySelectorAll('#campos_conf_gestion_usuarios'));

    if (editUsuario == 1) {
        habilitarEditarGestionUsuarios.forEach(input => {
            input.disabled = false;

        });
        editUsuario = 0;
        document.getElementById("editar_gestion_usuario").innerHTML = `<svg id="Capa_1" style="width:1.2em;margin-bottom:0.3em" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.33 21.33"><defs><style>.cls-1{fill:#fff;}</style></defs><title>save</title><path class="cls-1" d="M19.39,20.09H16.67c0-2,0-3.93,0-5.9a.86.86,0,0,0-.94-.95H5.62a.92.92,0,0,0-.29,0,.86.86,0,0,0-.66.92v5.9H1.94a.91.91,0,0,1-.7-.95c0-5.65,0-11.3,0-16.95a.86.86,0,0,1,1-.94H4.67v7a.87.87,0,0,0,1,1h7.8a1.55,1.55,0,0,0,.31,0,.87.87,0,0,0,.65-.93v-7c.44,0,.86,0,1.27,0a1,1,0,0,1,.91.46c1,1.39,2.09,2.78,3.13,4.18.15.2.27.42.4.63V19.39A1,1,0,0,1,19.39,20.09Z"/><path class="cls-1" d="M6.4,20.09v-1.7h8.54v1.7Z"/><path class="cls-1" d="M14.94,15v1.69H6.4V15Z"/><path class="cls-1" d="M6.4,7.52V1.26h6.25V7.52Z"/></svg>`;
    } else {
        habilitarEditarGestionUsuarios.forEach(input => {
            input.disabled = true;


        });
        editUsuario = 1;
        document.getElementById("editar_gestion_usuario").innerHTML = `<i class="bi bi-pencil-square"></i>`;
    }


}