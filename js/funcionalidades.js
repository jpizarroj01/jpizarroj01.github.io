function usuario(){
    usuario_ = prompt("Escriba su nombre");
    if(usuario_.length<7){
        document.getElementById("name").innerHTML = usuario_;
    }
    else{
        alert("Escriba un usuario que tenga menos de 9 caracteres");
    }
}
