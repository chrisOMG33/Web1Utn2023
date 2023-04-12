function validar() {

    alert('¡Bienvenidooooooo!');

    let nombre=document.getElementById('nombre').value;

        if(nombre===""){

            alert('Falta nombre');
            document.getElementById('nombre').focus();
            document.getElementById('nombre').style.backgroundColor="red";
            // document.write('Falta el nombre');
            return false;
        }

    input=document.getElementById('apellido1').value;

    if(input===""){

        alert('Falta apellido 1');
        document.getElementById('apellido1').focus();
        document.getElementById('apellido1').style.backgroundColor="red";
        // document.write('Falta el apellido1');
        return false;
    }

    input=document.getElementById('apellido2').value;

    if(input===""){

        alert('Falta apellido 2');
        document.getElementById('apellido2').focus();
        document.getElementById('apellido2').style.backgroundColor="red";
        // document.write('Falta el apellido1');
        return false;
    }
    input=document.getElementById('edad').value;

    if(input==""){

        alert('Falta la edad');
        document.getElementById('edad').focus();
        document.getElementById('edad').style.backgroundColor="red";
        // document.write('Falta el apellido1');
        return false;
    }

    input=document.getElementById('edad').value;

    if(isNaN(input)){

        alert('La edad debe ser un valor numerico');
        document.getElementById('edad').focus();
        document.getElementById('edad').style.backgroundColor="red";
        // document.write('Falta el apellido1');
        return false;
    }

    input=document.getElementById('color').selectedIndex;

    if(input===0){
        alert('Debe escoger un color favorito');
        document.getElementById('color').focus();
        document.getElementById('color').style.backgroundColor="red";
        return false;
    }
    input=document.getElementById('correo').value;
    if( !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(input)) ) { 
        alert('No tiene formato de correo');
        document.getElementById('correo').focus();
        document.getElementById('correo').style.backgroundColor="red";

        return false; 
       } 

    return true;

}

function mensaje(msj){

    alert(msj);

}
function calcular(num1,num2){
    return num1+num2;
}
//arow function
// validar =>{
//     alert('ff');
// }