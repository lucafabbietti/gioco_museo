/* 
var _semafori = "json";
var semafori = JSON.parse(_semafori);
var sel_semaforo = 0;
var index_paragrafo = 0;

function Sel_semafori(i)
{
    sel_semaforo = i;
    index_paragrafo = 0;
    $("#paragraph_image").immagine = "C://document/porcodio/map_" + semafori[i].img + ".jpg"

    if(semafori[i].testi[0].split("£").lenght > 0)
    {
        $("paragraph_text").text = semafori[i].testi[0].split("£")[0];
        $("paragraph_text_conseguenze").text = semafori[i].testi[0].split("£")[1];
    }
    else
    {
        $("paragraph_text").text = semafori[i].testi[0];
    }
    
    
}

function clickAvanti()
{
    $("#avanti").show();
    $("#indietro").show();

    if(index_paragrafo < semafori[sel_semaforo].testi.lenght)
    {
        index_paragrafo++;
        if(semafori[sel_semaforo].testi[index_paragrafo].split("£").lenght > 0)
        {
            $("#paragraph_text").text = semafori[i].testi[index_paragrafo].split("£")[0];
            $("#paragraph_text_conseguenze").text = semafori[i].testi[index_paragrafo].split("£")[1];
        }
        else
        {
            $("#paragraph_text").text = semafori[i].testi[index_paragrafo];
        }

    }

    if(index_paragrafo == semafori[sel_semaforo].testi.lenght)
    {
        $("#avanti").hide();
    }
}

function clickIndietro()
{
    $("#avanti").show();
    $("#indietro").show();

    if(index_paragrafo > 0)
    {
        index_paragrafo--;
        if(semafori[sel_semaforo].testi[index_paragrafo].split("£").lenght > 0)
        {
            $("#paragraph_text").text = semafori[i].testi[index_paragrafo].split("£")[0];
            $("#paragraph_text_conseguenze").text = semafori[i].testi[index_paragrafo].split("£")[1];
        }
        else
        {
            $("#paragraph_text").text = semafori[i].testi[index_paragrafo];
        }
    }

    if(index_paragrafo == 0)
    {
        $("#indietro").hide();
    }
}
*/

// ---------- //
$(document).ready(function () {

    testoSemafori = JSON.parse(_testo_semafori);

});



var buttonCounter = 0;

function clickAvanti() {
    buttonCounter++;
    console.log('clickavanti '+buttonCounter)
    startGame();
}

/*
function semaforo(param) {
    startGame(param);
}
*/

function startGame(param) {


    $('#flag').text(testoSemafori[param].title);
    $('#textFlag').text(testoSemafori[param].testi);

    if (buttonCounter == 1) {
        console.log('porcodio');

        
    }



    if (param == 0) {
        $("#immagine").attr("src", "/assets/imgMappa/MAP.jpg");


    } else {
        $("#immagine").attr("src", "/assets/imgMappa/MAP" + param + ".jpg");

    }





}

