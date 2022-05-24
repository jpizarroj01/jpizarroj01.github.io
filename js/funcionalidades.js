function inicio(){
    document.getElementById("descrip").style.display = "none";
    document.getElementById("princ").style.display = "flex";
    document.getElementById("enlac").style.display = "flex";
    document.getElementById("clas").style.display = "none";
    document.getElementById("gal").style.display = "none";
}
function descripcion(){
    document.getElementById("descrip").style.display = "flex";
    document.getElementById("princ").style.display = "none";
    document.getElementById("enlac").style.display = "none";
    document.getElementById("clas").style.display = "none";
    document.getElementById("gal").style.display = "none";
}
function clases(){
    document.getElementById("descrip").style.display = "none";
    document.getElementById("princ").style.display = "none";
    document.getElementById("enlac").style.display = "none";
    document.getElementById("clas").style.display = "flex";
    document.getElementById("gal").style.display = "none";
}
function galeria(){
    document.getElementById("descrip").style.display = "none";
    document.getElementById("princ").style.display = "none";
    document.getElementById("enlac").style.display = "none";
    document.getElementById("clas").style.display = "none";
    document.getElementById("gal").style.display = "grid";
}
function formulario_enviado(){
    var nombre_persona = document.getElementById("nombre").value;
    var apellido_persona = document.getElementById("apellidos").value;
    alert("Gracias por contactar con nosotros " + nombre_persona + " " + apellido_persona + ", procederemos a revisar el problema, mientras puede seguir navegando por la web");
}