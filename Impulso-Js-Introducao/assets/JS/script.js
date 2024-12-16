let cont = 0;

const contador = document.getElementById('contador');

function incrementar() {
    if (cont<10){
        cont++;
    }
    contador.innerHTML = cont;
}

function decrementar() {
    if (cont>-10){
        cont--;
    }
    contador.innerHTML = cont;
}