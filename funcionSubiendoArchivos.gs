function subiendoArchivos(parametroa) {

  var folder = DriveApp.getFolderById("1neyGvOiflQSVaFiV3xKvvddbgCPhxAhr");
   
//Aqui le decimos que se suban los archivos 
    var foto = parametroa.miArchivo;    
    var archivo = folder.createFile(foto);

  
}