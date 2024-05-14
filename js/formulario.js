
const correo= document.getElementById('correo');
const password = document.getElementById('password');
const formulario = document.querySelector('.formulario');

//console.log(formulario);

 const sesion = { 
    correo: "",
    password: ""
} 

correo.addEventListener('input', function(e){
    sesion[e.target.id] = e.target.value;

   //console.log(correo);
});

password.addEventListener('input', function(e){
    sesion[e.target.id] = e.target.value;
    //console.log(password);
 });

formulario.addEventListener('submit', function(evt){
    evt.preventDefault();

    const { correo, password } = sesion;

    if (correo === "" && password === "") {
        console.log('Campos vacios');
        return;

        
    }
    console.log(sesion); 
    console.log('Formulario enviado');
});

    

     





 