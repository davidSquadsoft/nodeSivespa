<?php
    session_start();
    if (isset($_SESSION['nombreusuario'] )){
    $usuarioingresado=$_SESSION['nombreusuario'];
    $rolespermisos=$_SESSION['rol'];
    }
    session_destroy();
    header ("location: login.php");



