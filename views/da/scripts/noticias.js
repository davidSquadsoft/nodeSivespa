var lista_noticias = document.getElementById(`administrar_noticias`);
var btn_admin_noticias = document.getElementById(`btn_administrar_noticias`);
var icono_admin_noticias = document.getElementById(`icono_admin_noticias`);
var listaState = 0;

function showListaNoticias() {
    if (listaState == 0) {
        listaState = 1;
        icono_admin_noticias.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
  </svg>`;
        lista_noticias.innerHTML = `<table>
    <tr class="titulo_tabla">
        <td>Titulo</td>
        <td>Fecha</td>
        <td>Resumen</td>
        <td>Autor</td>
        <td>Estado</td>
        
        
    </tr>
    <tr>
        <td>Titulo</td>
        <td>01/01/01</td>
        <td>Resumen</td>
        <td>Autor</td>
        <td>Publicada/Borrador</td>
        <td align="center"><button type="submit" class="btn_green btn_icons" data-bs-toggle="modal" data-bs-target="#modal_ver_entidad"><i class="bi bi-eye-fill"></i></button></td>
        <td align="center"><button type="submit" class="btn_green btn_icons" data-bs-toggle="modal" data-bs-target="#modal_ver_entidad"><i class="bi bi-pencil-square"></i></button></td>
        <td align="center"><button class="btn_red_eliminar"><i class="bi bi-x-octagon-fill"></i></button></td>
    </tr>
    <tr>
        <td>Titulo</td>
        <td>01/01/01</td>
        <td>Resumen</td>
        <td>Autor</td>
        <td>Publicada/Borrador</td>
        <td align="center"><button type="submit" class="btn_green btn_icons" data-bs-toggle="modal" data-bs-target="#modal_ver_entidad"><i class="bi bi-eye-fill"></i></button></td>
        <td align="center"><button type="submit" class="btn_green btn_icons" data-bs-toggle="modal" data-bs-target="#modal_ver_entidad"><i class="bi bi-pencil-square"></i></button></td>
        <td align="center"><button class="btn_red_eliminar"><i class="bi bi-x-octagon-fill"></i></button></td>
    </tr>
    <tr>
        <td>Titulo</td>
        <td>01/01/01</td>
        <td>Resumen</td>
        <td>Autor</td>
        <td>Publicada/Borrador</td>
        <td align="center"><button type="submit" class="btn_green btn_icons" data-bs-toggle="modal" data-bs-target="#modal_ver_entidad"><i class="bi bi-eye-fill"></i></button></td>
        <td align="center"><button type="submit" class="btn_green btn_icons" data-bs-toggle="modal" data-bs-target="#modal_ver_entidad"><i class="bi bi-pencil-square"></i></button></td>
        <td align="center"><button class="btn_red_eliminar"><i class="bi bi-x-octagon-fill"></i></button></td>
    </tr>
    <tr>
        <td>Titulo</td>
        <td>01/01/01</td>
        <td>Resumen</td>
        <td>Autor</td>
        <td>Publicada/Borrador</td>
        <td align="center"><button type="submit" class="btn_green btn_icons" data-bs-toggle="modal" data-bs-target="#modal_ver_entidad"><i class="bi bi-eye-fill"></i></button></td>
        <td align="center"><button type="submit" class="btn_green btn_icons" data-bs-toggle="modal" data-bs-target="#modal_ver_entidad"><i class="bi bi-pencil-square"></i></button></td>
        <td align="center"><button class="btn_red_eliminar"><i class="bi bi-x-octagon-fill"></i></button></td>
    </tr>
    <tr>
        <td>Titulo</td>
        <td>01/01/01</td>
        <td>Resumen</td>
        <td>Autor</td>
        <td>Publicada/Borrador</td>
        <td align="center"><button type="submit" class="btn_green btn_icons" data-bs-toggle="modal" data-bs-target="#modal_ver_entidad"><i class="bi bi-eye-fill"></i></button></td>
        <td align="center"><button type="submit" class="btn_green btn_icons" data-bs-toggle="modal" data-bs-target="#modal_ver_entidad"><i class="bi bi-pencil-square"></i></button></td>
        <td align="center"><button class="btn_red_eliminar"><i class="bi bi-x-octagon-fill"></i></button></td>
    </tr>
</table>`;
        btn_admin_noticias.innerHTML = "Ocultar Lista";

    } else {
        listaState = 0;
        lista_noticias.innerHTML = ``;
        btn_admin_noticias.innerHTML = "Administrar Noticias";
        icono_admin_noticias.innerHTML = `<svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.33 21.33"><defs><style>.cls-1{fill:#fff;}</style></defs><title>editar</title><path class="cls-1" d="M1.42,18.18V6.12l0,0A2,2,0,0,1,3.51,4.38c3.12,0,6.25,0,9.37,0h.23l-.17.18L8.24,9.26a2,2,0,0,0-.51.82c-.23.7-.47,1.4-.7,2.11a1.68,1.68,0,0,0-.11.54,1.61,1.61,0,0,0,2.14,1.6l2.16-.71a2.15,2.15,0,0,0,.88-.55l4.68-4.68L17,8.23v9.7a2,2,0,0,1-1.39,1.89l-.35.09H3.15l-.08,0a1.94,1.94,0,0,1-1.48-1.16A4.84,4.84,0,0,1,1.42,18.18Z"/><path class="cls-1" d="M15.67,3.38,18,5.66l-.12.13-6.53,6.53a1.1,1.1,0,0,1-.44.26c-.69.25-1.39.47-2.08.71a.56.56,0,0,1-.74-.75c.24-.71.47-1.43.72-2.14a.86.86,0,0,1,.2-.33l6.6-6.6Z"/><path class="cls-1" d="M18.77,4.86,16.44,2.53a3.84,3.84,0,0,0,.34-.28c.2-.18.38-.38.58-.57a.88.88,0,0,1,1.22,0c.38.35.75.72,1.1,1.09a.88.88,0,0,1,.06,1.12A1.07,1.07,0,0,1,19.6,4Z"/></svg>`;

    }
}