var requiredElements=document.getElementById('form').querySelectorAll("[required]");
var form=document.getElementById('form')
var vacio = 0
o = document.getElementById("output");
function validar() {
    var s = "";
    for (var i = 0; i < requiredElements.length; i++) {
      var e = requiredElements[i];
      if(!e.value){
        vacio=1
        s += e.name + ": " + (" <span style='color:red'> Vacio </span>") + "<span style='color:red'> // </span>";
      }
    }
console.log(vacio)
    if (vacio == 1){
    camposAlerta(s);
    }else{
      guardar()
   }
};
function camposAlerta(s){
  Swal.fire({
    title: 'Validar los siguientes campos vacios antes de guardar el contenido:',
    html: s,
    icon: 'error',
    confirmButtonText: 'Ok',
    confirmButtonColor:'#3c773c',
  })
};
function guardar(){
  Swal.fire({
    title: 'Guardar Contenido',
    icon: 'success',
    confirmButtonText: 'Ok',
    confirmButtonColor:'#3c773c',
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    cancelButtonColor: '#d33'
     }).then((result) => {
    if (result.isConfirmed) {
      console.log('si')
      document.getElementById("form").submit(); 
    }
})
}
