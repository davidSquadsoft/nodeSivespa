function saveAsPDF() {
    html2canvas(document.getElementById("chart-container"), {
       onrendered: function(canvas) {
          var img = canvas.toDataURL(); //image data of canvas
          var doc =  new jsPDF({
          unit: 'px',
          orientation: 'landscape',
        });
          doc.addImage(img, 30, 50,585,322);
          doc.save('estadistica.pdf');
       }
    });
 }