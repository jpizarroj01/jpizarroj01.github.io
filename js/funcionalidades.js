function formulario_enviado(){
    var nombre_persona = document.getElementById("nombre").value;
    var apellido_persona = document.getElementById("apellidos").value;
    alert("Gracias por contactar con nosotros " + nombre_persona + " " + apellido_persona + ", procederemos a revisar el problema, mientras puede seguir navegando por la web");
}