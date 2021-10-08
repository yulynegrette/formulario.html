function validar_formulario(){
    //1. accedemos a los elementos del formulario
    var usuario = document.getElementById('username');
    var correo = document.getElementById('email');
    var contraseña = document.getElementById('password');
    var mensaje ="";

    //2. aplicar validaciones
    if (!usuario.checkValidity()){
        mensaje += "Usuario requerido y longitud minima 8 caracteres"
    }

    if (!correo.checkValidity()){
        mensaje += "Correo requerido con formato xxx@xxx.xx"
    }

    if (!contraseña.checkValidity()){
        mensaje += "Contraseña requerida y longitud minima 8 caracteres"
    }

    if (mensaje == ""){
        mensaje = "Todos los campos del formulario son validos"
    }
    alert(mensaje)
}

function mostrarPassword(){
    var obj = document.getElementById("password");
    obj.type = "text";
}

function ocultarPassword(){
    var obj = document.getElementById("password");
    obj.type = "password";
}