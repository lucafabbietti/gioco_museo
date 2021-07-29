
var i = 0;


// FUNZIONE CONTEGGIO AVANTI //

function clickAvanti() {
    if (i < 2) {
        i++;
    }

    cambiaPagina();
}
// -------- //

// FUNZIONE CONTEGGIO INDIETRO //


function clickIndietro() {
    if (i > 0) {
        i--;
    }
    cambiaPagina();
}
// -------- //


function cambiaPagina() {
    console.log("dentro avanti " + i);
document.getElementById('indietro').style.display = 'none';
document.getElementById('avanti').style.display = 'inline';

    switch (i) {
        case 0:
            document.getElementById('p1').style.display = 'inline';
            break;

        case 1:
            document.getElementById('p1').style.display = 'none';
            document.getElementById('p2').style.display = 'inline';
            document.getElementById('indietro').style.display = 'inline';
            break;
        case 2:
            document.getElementById('p2').style.display = 'none';
            document.getElementById('p3').style.display = 'inline';
            document.getElementById('avanti').style.display = 'none';
            document.getElementById('indietro').style.display = 'inline';
            break;
    }
}
