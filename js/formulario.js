document.getElementById("enviar").addEventListener("click", function(event){
    event.preventDefault();
    var nombre_persona = document.getElementById("nombre").value;
    var apellido_persona = document.getElementById("apellidos").value;
    var contrasena_persona = document.getElementById("password").value;
    var edad = document.getElementById("edad").value;
    var fecha = document.getElementById("fecha").value;
    var problema = "";
    var aux = "";
    var contacto = "";
    var departamento = "";
    var descripcion = document.getElementById("cp").value
    //estos if son para poder recoger los datos de las casillas de tipo checkbox
    if (document.formulario.a.checked == true){
        aux = "Bug en la web";
        problema = problema + "" + aux;
    }
    if (document.formulario.b.checked == true){
        aux = "Problema con la web";
        problema = problema + ", " + aux;
    }
   
    if (document.formulario.c.checked == true){
        aux = "Solicitar un permiso para publicar articulos";
        problema = problema + ", " + aux;
    }
  
    if (document.formulario.d.checked == true){
        aux = "Otros";
        problema = problema + ", " + aux;
    }
    //esto es para recoger el dato selecionada de tipo radio
    per = document.formulario.personal;
    for (i=0; i<per.length; i++) {
        valor = per[i].checked;
              if (valor == true) {
                 contacto = per[i].value;
                }
    }
    //esto es para poder recoger el dato selecionado del desplegable
    dep = document.formulario.desplegable;
    seleccionado = dep.selectedIndex;
    opcion = dep.options[seleccionado];
    departamento = opcion.value;
   
    //Almacenamos los datos en un array y los mostramos.
    var datos = [nombre_persona,apellido_persona,edad,fecha,problema,contacto,departamento,descripcion]
    document.getElementById("datos").innerHTML = "Nombre: "+datos[0]+"<br/>Apellidos: "+datos[1]+"<br/>Edad: "+datos[2]+"<br/>Fecha: "+datos[3]+"<br/>Problema: "+datos[4]+"<br/>Contacto: "+datos[5]+"<br/>Departamento: "+datos[6]+"<br/>Descripción: "+datos[7];
    
});
