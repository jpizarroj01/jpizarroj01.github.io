let usuario_;
document.getElementById("name").innerHTML = usuario_;
function formulario_enviado(){
    var nombre_persona = document.getElementById("nombre").value;
    var nombre_persona = document.getElementById("apellidos").value;
    var contrasena_persona = document.getElementById("password").value;
    if (nombre_persona == "" || apellido_persona == "" || contrasena_persona.length < 8 || contrasena_persona.length > 12) {
        alert("Escriba los campos obligatorio como se indican");
     } else
     alert("Gracias por contactar con nosotros " + nombre_persona + " " + apellido_persona + ", procederemos a revisar el problema, mientras puede seguir navegando por la web");
}
function usuario(){
    usuario_ = prompt("Escriba su nombre");
    if(usuario_.length<7){
        document.getElementById("name").innerHTML = usuario_;
    }
    else{
        alert("Escriba un usuario que tenga menos de 9 caracteres");
    }
}