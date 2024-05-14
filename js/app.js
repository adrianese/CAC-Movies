
 document.addEventListener('DOMContentLoaded', function(){

   cargarPeliculas();
   buscador();
   paginaSiguiente();
   paginaAnterior();
  
});

function cargarPeliculas(){
   if(document.getElementById("tendencias")){
      // elementos fijos
      plantilla = ` 
      <h3>Las Tendencias de Hoy</h3>
      <div class="grilla">
      `
   //elementos que varian con contenido
      
      for(var i=0; i<12; i++){
      plantilla+= `
      <div class="movie-cell box"> 
      <img src=${data[i].imagen} alt="Movie" class="movie">
      <a href="resumen.html?item=${data[i].codigo}">
      <div class="capa">
      <h4>${data[i].nombre}</h4>
      <p>género:${data[i].genero}</p>
      <p>Ver más..</p>
      </div>  </a>
      </div>             
      `  
      }
      } 
   document.getElementById("tendencias").innerHTML=plantilla;
};

//////////////////  BUSCADOR ///////////////////

function buscador(){
  
   let nuevaBusqueda = [] ;
   /* acceder - mediante el dom */
 
   const campoBuscar = document.querySelector('#inputBuscar');
  // const parrafo = document.getElementsByClassName('parrafo');
    //console.log(campoBuscar);
   const btnBuscador = document.getElementById('btnBuscador');
   const resultBuscador = document.getElementById('resultBuscador');
   const noResult = document.getElementsByClassName('no-result');
   ///////
  
   campoBuscar.addEventListener('focus', function(){
   const parrafo = document.getElementsByClassName('parrafo');
   document.getElementById('parrafo').classList.add('mostrar');
   document.getElementById('parrafo').classList.remove('ocultar');
   console.log(parrafo);

   setTimeout(() => {
      document.getElementById('parrafo').classList.add('ocultar');
      document.getElementById('parrafo').classList.remove('mostrar');
   }, 6000);
      
   })
  
   // console.log(noResult);
   btnBuscador.addEventListener('click', function(e){
      campo = campoBuscar.value;
      e.preventDefault();
      //console.log(campo); 
      nuevaBusqueda = data.filter((dato)=>(dato.genero) === campo);
    // console.log(nuevaBusqueda);
    if (nuevaBusqueda) {
      let dato = nuevaBusqueda;
        // elementos fijos
          plantilla = ` 
          <h3>Resultados de la Busqueda: ${nuevaBusqueda.length}</h3>
          <div class="grilla">
         `
     for (let i = 0; i < nuevaBusqueda.length; i++) {
       
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
      document.getElementById("resultBuscador").innerHTML=plantilla;
    } 
   });
  }




//////////////////PAGINADOR //////////////////////

function paginaSiguiente(){
   const paginaSiguiente = document.querySelector('#siguiente');
   //console.log(paginaSiguiente);
   paginaSiguiente.addEventListener('click', function() {
     
      if(document.getElementById("tendencias")){
         // elementos fijos
         plantilla = ` 
         <h3>Las Tendencias de Hoy</h3>
         <div class="grilla">
         `
      //elementos que varian con contenido
      
         for(var i=12; i<24; i++){
         plantilla+= `
         <div class="movie-cell box"> 
         <img src=${data[i].imagen} alt="Movie" class="movie">
         <a href="resumen.html?item=${data[i].codigo}">
         <div class="capa">
         <h4>${data[i].nombre}</h4>
         <p>género:${data[i].genero}</p>
         <p>Ver más..</p>
         </div>  </a>
         </div>             
         `  
         }
         } 
      document.getElementById("tendencias").innerHTML=plantilla;
});
}


function paginaAnterior(){
   const paginaAnterior = document.querySelector('#anterior');
   paginaAnterior.addEventListener('click', cargarPeliculas) ;   
}


