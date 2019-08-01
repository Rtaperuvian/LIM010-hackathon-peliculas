showData = (objeto) => {
  return  `
    <img class="rounded mx-auto d-block" src=${objeto.Poster} alt="${objeto.Title}">
    <div class ="text-center">
    <p class="">${objeto.Title}</p>
    <p class="">Sinopsis: ${objeto.Plot}</p>
    <p class="">Actores: ${objeto.Actors}</p>
    <p class="">Tiempo de duración: ${objeto.Runtime}</p>
    <p class="">Director: ${objeto.Director}</p>
    <p class="">Escritor: ${objeto.Writer}</p>
    <p class="">País: ${objeto.Country}</p>
    <p class="">Año: ${objeto.Year}</p>
    <p class=""> Género: ${objeto.Genre}</p>
    </div>`


}

document.getElementById('potterImage').addEventListener('click',()=>{
for(let i=0; i< hp.length;i++){
  getData(hp[i]);
}
document.getElementById('potterImage').classList.toggle('ocultar');
document.getElementById('anilloImage').classList.toggle('ocultar');
});


document.getElementById('anilloImage').addEventListener('click',()=>{
  for(let i=0; i< lotr.length;i++){
    getData(lotr[i]);
  }
  document.getElementById('potterImage').classList.toggle('ocultar');
  document.getElementById('anilloImage').classList.toggle('ocultar');
});
