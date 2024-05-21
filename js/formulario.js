
    const correo= document.getElementById('correo');
    const password = document.getElementById('password');
    const formulario = document.querySelector('.formulario');
    //console.log(formulario);
    const sesion = { 
    correo: "",
    password: ""
    } 
    correo.addEventListener('input', leerTexto);  
    password.addEventListener('input', leerTexto);
    formulario.addEventListener('submit', function(evt){
        evt.preventDefault();
        const { correo, password } = sesion;
        const regExp =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;

  
        if (correo === "" || password === "") {
            mostrarMensaje('Ambos campos son obligatorios', true);
            return;
       
        }else if (!regExp.test(correo)) {
            mostrarMensaje('No parece un correo válido', true);
            return;
        }

        console.log(sesion); 
        mostrarMensaje('El formulario ha sido enviado', null);
    });

    function leerTexto(e){
        sesion[e.target.id] = e.target.value;
    }
     
    function mostrarMensaje(mensaje, modo){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if (modo) { 
        alerta.classList.add('error');  
    }else {
        alerta.classList.add('exito');
    }
    formulario.appendChild(alerta);
        setTimeout(() => {
        alerta.remove();
        }, 4000);
    }




 