

// ---------- //
$(document).ready(function () {
    testoSemafori = JSON.parse(_testo_semafori);
});


// INIZIALIZZO LE VARIABILI
var buttonCounter = 0;
var v_semaforo = 0;
var v_index = 0;

// FUNZIONE PER IL CONTROLLO DEL BOTTONE INDIETRO
function clickIndietro() {

    // SPENGO I BOTTONI CONSEGUENZE - NASCONDI
    document.getElementById('nascondi').style.display = 'none';
    document.getElementById('conseguenze').style.display = 'none';
    document.getElementById('description-conseguenze').style.display = 'none';

    // INCREMENTO LA VARIABILE
    v_index--;

    // CONDIZIONE IF PER SPEGNERE IL BTN INDIETRO
    if (v_index <= 0) { document.getElementById('indietro_btn').style.display = 'none'; }

    // SCRIVO I TESTI IN BASE AL INDICE DEI BTN
    $('#description').text(testoSemafori[v_semaforo].testi[v_index]);

    // ACCENDO IL BTN AVANTI
    document.getElementById('avanti_btn').style.display = 'inline';
}


// FUNZIONE PER IL CONTROLLO DEL BOTTONE AVANTI
function clickAvanti() {

    // SPENGO I BOTTONI CONSEGUENZE - NASCONDI 
    document.getElementById('nascondi').style.display = 'none';
    document.getElementById('conseguenze').style.display = 'none';
    document.getElementById('description-conseguenze').style.display = 'none';

    // INCREMENTO LA VARIABILE
    v_index++;

    // SPENGO IL BTN INDIETRO 
    document.getElementById('indietro_btn').style.display = 'inline'

    // SCRIVO IL TESTO IN BASE ALL'INDICE DEL BOTTONE
    $('#description').text(testoSemafori[v_semaforo].testi[v_index]);

    // CONDIZIONE IF PER VERIFICARE LA LUNGHEZZA DELL'ARRAY "TESTI" PER SPEGNERE IL BTN AVANTI
    if (v_index >= testoSemafori[v_semaforo].testi.length - 1) {
        document.getElementById('avanti_btn').style.display = 'none'
    }

    // CONDIZIONE IF PER GENERARE IL BOTTONE CONSEGUENZE ALLA FINE DEGLI ARRAY
    if (v_index >= testoSemafori[v_semaforo].testi.length -1) {
        document.getElementById('conseguenze').style.display = 'block';
    }
}


// FUNZIONE PESCAGGIO DATI DA FILE JSON
function semaforo(param) {
    // INIZIALIZZO LE VARIABILI
    v_index = 0;
    v_semaforo = param;

    // ATTIVO IL FLAG E I CONTROLLI
    document.getElementById('Flag-Testo').style.display = 'block';
    document.getElementById('Controlli-Flag').style.display = 'block';

    // PESCO LE IMMAGINI E I TESTI IN BASE AL PARAMETRO CHE PASSO
    $("#immagine").attr("src", "/assets/imgMappa/MAP" + param + ".jpg");
    $('#title').text(testoSemafori[param].title);
    $('#description').text(testoSemafori[param].testi[v_index]);

    // SPENGO I BTN DEI SEMAFORI
    document.getElementById('Semafori-Button').style.display = 'none';

    if (testoSemafori[v_semaforo].testi.length < 2) {
        document.getElementById('avanti_btn').style.display = 'none';
        document.getElementById('conseguenze').style.display = 'block';  
    }
}

// FUNZIONE APERTURA CONSEGUENZE
function conseguenzeFunction(param) {
    document.getElementById('conseguenze').style.display = 'none';
    document.getElementById('nascondi').style.display = 'block';
    $('#description-conseguenze').text(testoSemafori[v_semaforo].conseguenze);
    document.getElementById('description-conseguenze').style.display = 'block';
    
}

// FUNZIONE CHIUSURA CONSEGUENZE
function nascondiFunction() {
    document.getElementById('description-conseguenze').style.display = 'none';
    document.getElementById('conseguenze').style.display = 'block';
    document.getElementById('nascondi').style.display = 'none';
}

function chiudiFlag() {
    document.getElementById('Flag-Testo').style.display = 'none';
    document.getElementById('Semafori-Button','Mappa-Semafori').style.display = 'inline';
}


