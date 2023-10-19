
function tocaSom (ideElementAudio) {
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;


//enquanto
while (contado < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = tocaSomPom;

    contador= contador + 1;

    console.log(contador);
}


