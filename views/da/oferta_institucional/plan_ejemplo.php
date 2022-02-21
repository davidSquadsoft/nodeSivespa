
<?php
    session_start();
    if (isset($_SESSION['nombreusuario'] )){
    $usuarioingresado=$_SESSION['nombreusuario'];
    $rolespermisos=$_SESSION['rol'];
    }else{
        header("location: ../seguridad/login.php");
    }?>

<!DOCTYPE html

<html lang="es">

<head>
    <title>Nombre Plan de Acción - Sistema Integral de Vigilancia Epidemilógica de SPA</title>
    <meta charset="UTF-8">
    <meta name="title" content="Título de la WEB">
    <meta name="description" content="Descripción de la WEB">
    <!--Css Style personalizado-->
    <link rel="stylesheet" href="../style/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>

<body class="">
    <!--Navbar version movil-->
    <header class="d-none d-md-block d-lg-none" id="navbar_cel">

    </header>
    <!-- fin de la Navbar version movil-->
    <!-- navbar movil al final de la pagina-->
    <nav class="navbar_bottom_mobile d-none d-md-block d-lg-none" id="navbar_bottom_mobile">




    </nav>
    <!-- navbar movil al final de la pagina-->
    <!--Sidebar lado izquierdo-->
    <div class="wrapper d-md-none d-lg-block" id="navbar_left">

    </div>
    <!--fin sidebar lado izquierdo-->

    <!--sidebar lado derecho-->
    <div class="wrapper d-md-none d-lg-block" id="navbar_right">

    </div>
    <!--final de la sidebar lado derecho-->
    <section class="content">
        <div class="titulo_pagina row align-items-center">
            <div class="col-lg-2">
                <div class="btn_close d-md-none d-lg-block">
                    <button type="button" class="close_sidebar">
                        <i class="bi bi-arrows-fullscreen maximize" id="texto_button_sidebar">&nbsp;Maximizar</i>
                    </button>
                </div>
            </div>

            <div class="col-lg-4">
                <h4>Nombre Plan de Acción</h4>
            </div>

            <div class="col-lg-6 d-md-none d-lg-block">
                <div class="bell_notificaciones"><a href="../notificaciones/notificaciones.php"><i class="bi bi-bell-fill"></i></a></div>
                <div class="dropdown">

                    <button class="btn btn-secondary  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <p class="nombre_entidad_activa"><?php echo $usuarioingresado ?></p>
                        <br>
                        <p class="cambiar">Cambiar</p>
                        
                    </button>

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Entidad 1</a></li>
                        <li><a class="dropdown-item" href="#">Entidad 2</a></li>
                        <li><a class="dropdown-item" href="#">Entidad 3</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="section_form fluid-container">

            <div class="container_reporte_form noticia ejemplo">
                <h3>Nombre Plan de Acción</h3>
                <p>Entidad</p>
                <p>Región/Zona</p>
                <img src="../images/fondo_temporal2.jpg" alt="">
                <p>Contenido del plan: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae optio mollitia tempora eius animi dolorum sapiente dicta maxime sequi aperiam labore maiores vel et adipisci temporibus, eveniet sit ut.
                </p>
                <p class="card-text">Linea de atención: 555 55 55</p>
                <p class="card-text">Linea de atención: 555 55 55</p>
                <p class="card-text">Linea de atención: 555 55 55</p>
                <p class="card-text">Linea de atención: 555 55 55</p>
                <div class="card-body">


                    <button class="btn_green btn_icons" onclick="location.href='crearplan_accion.php'"><i class="bi bi-pencil-square"></i></button>
                    <button type="button" class=" btn_red_eliminar btn_icons" data-bs-toggle="modal" data-bs-target="#modal_borrar">
                        <i class="bi bi-x-octagon-fill "></i>
                      </button>


                </div>
            </div>

        </div>

    </section>
    <div class="modal fade" id="modal_borrar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Eliminar</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Esta seguro que de sea elimininar la noticia
                </div>
                <div class="modal-footer">
                    <button type="button" class=" btn_green" data-bs-dismiss="modal">Aceptar</button>
                    <button type="button" class=" btn_green" data-bs-dismiss="modal">Cancelar</button>

                </div>
            </div>
        </div>
    </div>


    <footer class="mt-5 d-none d-md-block d-lg-none">

        <a href="../legales/politicas.php">Política de privacidad y uso de datos</a>

    </footer>
    <!-- JS boots -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <!--Js del slide de preguntas del reporte-->
    <script src="../scripts/darkmode.js"></script>
    <script src="../scripts/menus.js"></script>
</body>

</html>