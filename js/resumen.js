
if(document.getElementById("resumen")){
    var foto;
    var titulo;
    var masinfo;

    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    //Accedemos a los valores
    var item = urlParams.get('item');
   //console.log(item);
   

   
foto = `
<div class="movie-cell box"> 
<img src=${data[item].imagen} alt="Movie" class="movie">
</div> 
          
`
titulo = `
<div class="movie-titulo"> 
<h4>${data[item].nombre}</h4>
<p>Género:  ${data[item].genero}</p>

</div>          
`
masinfo = ` <a href="https://www.imdb.com/find/?q=${data[item].nombre}" target="_blank" rel="noopener noreferrer">Ver Más...</a>
`

} 
  

  
   



document.getElementById("resumen").innerHTML=foto;
document.getElementById("titulo").innerHTML=titulo;
document.getElementById("masinfo").innerHTML=masinfo;