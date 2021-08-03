

// ---------- //
$(document).ready(function () {
    testoSemafori = JSON.parse(_testo_semafori);
});


// FUNZIONE CONTEGGIO BOTTONI AVANTI - INDIETRO 
var buttonCounter = 0;
var v_semaforo = 0;
var v_index = 0;

function clickIndietro() {

    v_index--;
    console.log('lunghezza array ' + testoSemafori[v_semaforo].testi.length)

    if (v_index <= 0) {
        document.getElementById('indietro_btn').style.display = 'none'

    }
    document.getElementById('avanti_btn').style.display = 'inline'
    console.log('indietro index ' + v_index);
    $('#textFlag').text(testoSemafori[v_semaforo].testi[v_index]);

}



function clickAvanti() {

    v_index++;
    console.log('lunghezza array ' + testoSemafori[v_semaforo].testi.length)
    document.getElementById('indietro_btn').style.display = 'inline'

    if (v_index >= testoSemafori[v_semaforo].testi.length - 1) {
        document.getElementById('avanti_btn').style.display = 'none'

    }
    console.log('avanti index ' + v_index);

    $('#textFlag').text(testoSemafori[v_semaforo].testi[v_index]);

}


// FUNZIONE PESCAGGIO DATI DA FILE JSON
function semaforo(param) {
    v_index = 0;
    v_semaforo = param;


    //PESCO LE IMMAGINI IN BASE AL PARAMETRO CHE PASSO
    $("#immagine").attr("src", "/assets/imgMappa/MAP" + param + ".jpg");
    $('#flag').text(testoSemafori[param].title);
    $('#textFlag').text(testoSemafori[param].testi[v_index]);


}








