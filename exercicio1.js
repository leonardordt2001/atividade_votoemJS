let qtdCarro=0;
let qtdVotos =0;
let qtdMoto=0;
let text="";


function carro() {
   qtdCarro++;
   qtdVotos++;
   text = "Você votou em carro."
   document.getElementById("Tvoto").innerHTML = qtdVotos
   document.getElementById("TCarros").innerHTML =qtdCarro
   document.getElementById("Svoto").innerHTML = text
   
}


function moto() {
    qtdMoto++;
    qtdVotos++;
    text = "Você votou em moto."
    document.getElementById("Tmotos").innerHTML = qtdMoto
    document.getElementById("Tvoto").innerHTML = qtdVotos 
    document.getElementById("Svoto").innerHTML = text
}
function votos() {
    qtdVotos = (qtdCarro + qtdMoto);
    document.getElementById("Tvoto").innerHTML =qtdVotos
}


    







