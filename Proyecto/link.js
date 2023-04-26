// Boton que redirecciona al inicio
function redireccion(){
    location.href = "Inicio.html"
}
// Boton de inicio redireccionando a productos
function redireccionP(){
    location.href = "Productos.html"
}

// validamos que se llenen los datos en login

function validar() {

    input=document.getElementById('correo').value;
    if( !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(input)) ) { 
        alert('El correo digitado no tiene el formato correcto');
        document.getElementById('correo').focus();
        document.getElementById('correo');

        return false; 
       } 

    input=document.getElementById('contra').value;

    if(input===""){

        alert('Falta la contraseña');
        document.getElementById('contra').focus();
        document.getElementById('contra');
        return false;
    }
    return true;

    
}
// mensaje de login
function mensaje(msj){

    alert(msj);

}

// validamos que se llenen los datos en register

function validarR() {

    let nombre=document.getElementById('nombre').value;

        if(nombre===""){

            alert('Falta nombre');
            document.getElementById('nombre').focus();
            document.getElementById('nombre');
            return false;
        }

    input=document.getElementById('apellidos').value;

    if(input===""){

        alert('Faltan los apellidos');
        document.getElementById('apellidos').focus();
        document.getElementById('apellidos');
        return false;
    }

    input=document.getElementById('correoR').value;
    if( !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(input)) ) { 
        alert('El correo digitado no tiene el formato correcto');
        document.getElementById('correoR').focus();
        document.getElementById('correoR');

        return false; 
       } 
    input=document.getElementById('telefono').value;

    if(input===""){

        alert('Falta número de teléfono');
        document.getElementById('telefono').focus();
        document.getElementById('telefono');
        return false;
    }

    input=document.getElementById('pass').value;

    if(input===""){

        alert('Falta la contraseña');
        document.getElementById('pass').focus();
        document.getElementById('pass');
        return false;
    }
    return true;

    
}
// mensaje de register
function mensajeR(msjR){

    alert(msjR);
}
// redireccion al realizar pago
function redireccionPago(){
    location.href = "Productos.html"
}

// mensaje de register al realizar pago
function mensajePago(msjP){

    alert(msjP);
}
