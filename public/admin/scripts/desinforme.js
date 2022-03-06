function saveinforme() {
  
    html2canvas(document.getElementById("idName"), {
        onrendered: function(canvas) {
           var img = canvas.toDataURL(); //image data of canvas
           var doc =  new jsPDF({
           unit: 'px',
           orientation: 'portrait',
           format:'a4'
         });
           doc.addImage(img,'PNG',-60,10,560,0,null,'FAST',0);
           doc.save('test.pdf');
        }
     });

 }    

