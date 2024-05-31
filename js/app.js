
 document.addEventListener('DOMContentLoaded', function(){
   cargarPeliculas();
   campoBuscador();
   nuevaBusqueda();
   paginador();
   // paginaSiguiente();
   // paginaAnterior();
  
});

let pindex = 0;
let itemsPP= 8;
let items=38;

function cargarPeliculas(pindex=0, itemsPP= 8){
   if(document.getElementById("tendencias")){
      // elementos fijos
      plantilla = ` 
      <h3>Las Tendencias de Hoy</h3>
      <div class="grilla">
      `
   //elementos que varian con contenido
   for(let i=(pindex*itemsPP) ; i < (pindex*itemsPP)+itemsPP; i++){
      if (!data[i]){break}
      plantilla+=  `  
      <div class="movie-cell box"> 
      <img src=${data[i].imagen} alt="Movie" class="movie">
      <a href="resumen.html?item=${data[i].codigo}">
      <div class="capa">
      <h4>${data[i].nombre}</h4>
      <p>género: ${data[i].genero}</p>
      <p>Ver más..</p>
      </div>  </a>
      </div>       `  
   }
      } 
   document.getElementById("tendencias").innerHTML=plantilla;
   //console.log(pindex);
   return pindex ;
};

//////////////////  BUSCADOR ///////////////////

function campoBuscador(){
         const campoBuscar = document.querySelector('#inputBuscar');
         const btnBuscador = document.getElementById('btnBuscador');
         
         campoBuscar.addEventListener('focus', function() {
         const parrafo = document.getElementsByClassName('parrafo');
         document.getElementById('parrafo').classList.add('mostrarpag');
         document.getElementById('parrafo').classList.remove('ocultarpag');
         // console.log(parrafo)
         // console.log(campo);
         setTimeout(() => {
            document.getElementById('parrafo').classList.add('ocultarpag');
            document.getElementById('parrafo').classList.remove('mostrarpag');
         }, 5000);   
         });

         btnBuscador.addEventListener('click', function (e){
         e.preventDefault();
         const campo = inputBuscar.value;
         console.log(campo);
         if (campo){
            return nuevaBusqueda(campo);
         }         
     });
    }
      

function nuevaBusqueda(campo){
      const resultBuscador = document.getElementById('resultBuscador');
       if(campo){
         ///EXISTE CAMPO ////////
         let nuevabusqueda = [] ; 
         titulobusqueda =[];
         generobusqueda=[];
       titulobusqueda = data.filter( titulo => titulo.nombre.toLowerCase() === campo.toLowerCase() );
       generobusqueda = data.filter((dato)=>(dato.genero) === campo);
       nuevabusqueda=[...titulobusqueda, ...generobusqueda];
         // console.log(nuevaBusqueda);
      if (nuevabusqueda) {
      let dato = nuevabusqueda;
      const resultado = document.querySelector('.resultados');
            resultado.textContent =(`Resultados: ${nuevabusqueda.length}`)
            plantilla = ` <div class="grilla"> `
      for (let i = 0; i < nuevabusqueda.length; i++) {   
            //elementos que varian con contenido
           plantilla+= `
           <div class="movie-cell box"> 
           <img src=${dato[i].imagen} alt="Movie" class="movie">
           <a href="resumen.html?item=${dato[i].codigo}">
           <div class="capa">
           <h4>${dato[i].nombre}</h4>
           <p>género:  ${dato[i].genero}</p>
           <p>Ver más..</p>
           </div>  </a>
           </div>             
           `
         }
         plantilla+=` 
           <button id="cerrar"></button>  
            `
     document.getElementById("resultBuscador").innerHTML=plantilla;
     const btnCerrar = document.querySelector('#cerrar');
     const contenedorBusqueda = document.querySelector('#resultBuscador')
     //console.log(btnCerrar);
    // btnCerrar.classList.add('campo-pag');
     btnCerrar.classList.add('boton');
     btnCerrar.classList.add('btncerrar');
     btnCerrar.textContent = ('Cerrar Búsqueda');
     resultBuscador.appendChild(btnCerrar);
     btnCerrar.addEventListener('click', ()=>{
      resultado.remove();
      contenedorBusqueda.remove();
      inputBuscar.value=("");

      })
      } 
   }
   };
   

//////////////////PAGINADOR //////////////////////


function paginador(pindex=0){
      const paginaSiguiente = document.querySelector('#siguiente');
      const paginaAnterior = document.querySelector('#anterior');
      paginaSiguiente.addEventListener('click', function(){
      //console.log(pindex);
      if (pindex <=3) {
            pindex++;
            paginaAnterior.classList.remove('ocultarpag');
            cargarPeliculas(pindex,8);
      }else{
            paginaSiguiente.classList.add('ocultarpag');
            console.log(paginaSiguiente);
         }
      });

      paginaAnterior.addEventListener('click', function(){
      //console.log(pindex);
      if (pindex>0) {
            pindex--;
            paginaSiguiente.classList.remove('ocultarpag');
            cargarPeliculas(pindex,8);
      }else{
            paginaAnterior.classList.add('ocultarpag');
            console.log(paginaSiguiente);
         }
      });
   }




