






function validaruser() {
    var formuser=document.getElementById('formuser').querySelectorAll("[required]");
    var vacio = 0
    var s = "";
    for (var i = 0; i < formuser.length; i++) {
      var e = formuser[i];

      if(!e.value){
        vacio=1;
        console.log(e);
        console.log(vacio);
        s += e.name + ": " + (" <span style='color:red'> Vacio </span>") + "<span style='color:red'> // </span>";
      }
    }

    if (vacio == 1){
    camposAlerta(s);
    }else{
      guardar('formuser')
   }

};

function validarmuni() {
    var formmuni=document.getElementById('formmuni').querySelectorAll("[required]");
    var vacio = 0
    var s = "";
    for (var i = 0; i < formmuni.length; i++) {
      var e = formmuni[i];
      if(!e.value){
        vacio=1
        s += e.name + ": " + (" <span style='color:red'> Vacio </span>") + "<span style='color:red'> // </span>";
      }
    }
console.log(vacio)
    if (vacio == 1){
    camposAlerta(s);
    }else{
      guardar('formmuni')
   }
};

function validarupgd() {
    var formupgd=document.getElementById('formupgd').querySelectorAll("[required]");
    var vacio = 0
    var s = "";
    for (var i = 0; i < formupgd.length; i++) {
      var e = formupgd[i];
      if(!e.value){
        vacio=1
        s += e.name + ": " + (" <span style='color:red'> Vacio </span>") + "<span style='color:red'> // </span>";
      }
    }
console.log(vacio)
    if (vacio == 1){
    camposAlerta(s);
    }else{
      guardar('formupgd')
   }
};

function camposAlerta(s){
  Swal.fire({
    title: 'Validar los siguientes campos vacios antes de guardar el usuario:',
    html: s,
    icon: 'error',
    confirmButtonText: 'Ok',
    confirmButtonColor:'#3c773c',
  })
};



function guardar(form){
    Swal.fire({
      title: 'Guardar Usuario',
      icon: 'success',
      confirmButtonText: 'Ok',
      confirmButtonColor:'#3c773c',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#d33'
       }).then((result) => {
      if (result.isConfirmed) {
        console.log('si')
        document.getElementById(form).submit(); 
    }
  })
  }
