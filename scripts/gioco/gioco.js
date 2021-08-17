var interventi;
var eventi;
var interventi_scelti;
var costo_max;

var danni;
var danni_max;

var giri_simulazione;
var tempo_giri_simulazione;

var simulazione;

var end;
var ritardo_end;

var ritardo_par_2;

$(document).ready(function() {

    interventi = JSON.parse(_interventi);
    eventi = JSON.parse(_eventi);
    end = JSON.parse(_end);

    interventi_scelti = [];
    costo_max = 80000;


    danni = 0;
    danni_max = 15;

    giri_simulazione = 0;
    tempo_giri_simulazione = 5000;

    ritardo_end = 5000;

    ritardo_par_2 = 8000; 

    //caricamento interventi da file json e aggiunta di righe sulla tabella

    // console.log(interventi);
    // console.log(eventi);



    setTimeout(function() {

        $("#paragraph_start_1").hide();

        $("#paragraph_start_2").show();

        $("#al_lavoro_btn").show();


       
    }, ritardo_par_2);

    $("#al_lavoro_btn").click(function() {

        $("#video_start").hide();

        $("#video_wip").show();

        $("#paragraph_start_master").hide();

        $("#table_master").show();

        $(".box_start").hide();

        $(".box_video_iniziale").hide();

        $(".box_video_game").show();

        $(".container_game").show();



        for (i = 0; i < interventi.length; i++) {
            var row = "";

            //creo la nuova riga
            row += "<tr>";

            //aggiungo la checkbox
            row += "<td> <input type=\"checkbox\" class=\"check\" id=\"check_" + interventi[i].id + "\"> </td>";
            //console.log(interventi[i].id);

            //aggiungo il tag dell'intervento
            row += "<td class=\"codice_intervento\">" + interventi[i].codice_intervento + "</td>"
                //console.log(interventi[i].codice_intervento);

            //aggiungo la descrizione dell'intervento
            row += "<td class=\"descrizione_intervento\">" + interventi[i].descrizione + "</td>"
                //console.log(interventi[i].descrizione);

            //aggiungo il costo dell'intervento
            row += "<td class=\"costo_intervento\">" + interventi[i].costo + "</td>"
                //console.log(interventi[i].costo);

            //console.log(row);

            //aggiungo la riga alla tabella
            $("#table").append(row);
        }

        $(".check").click(function() {
            var costo = 0;
            interventi_scelti = [];

            //controllo quale checkbox è selezionata ciclandole tutte, 
            //poi in base a quale è selezionata calcolo il prezzo sommandole,
            //poi aggiungo i relativi codici a un vettore

            for (i = 0; i < interventi.length; i++) {
                if ($("#check_" + i).is(":checked")) {
                    costo += interventi[i].costo;
                    interventi_scelti.push(interventi[i].codice_intervento);
                }
            }

            //se il costo totale è superiore a 80000, comunico all'utente l'errore,
            //tutte le checkbox diventano unchecked e azzero il costo.
            if (costo > costo_max) {
               // alert("Hai superato il budget di " + costo_max + "! Seleziona gli interventi con più attenzione!");
                $(".max_limit").show();
                $(".container_game").hide();
                $(".check").prop("checked", false);
                costo = 0;
            }



            //mostro il prezzo attuale sulla casella di testo
            $("#costo_totale").text((costo_max - costo));

        });
    });

    $("#button_limit").click(function() {
        $(".max_limit").hide();
        $(".container_game").show();
        
    });

    //aggiungo l'evento click a tutte le checkbox



    //aggiungo l'evento click al bottone di start
    $("#start_btn").click(function() {

        $(".after_start").show();

        $("#video_wip").hide();

        $("#video_simulate").show();

        //nascondo la tabella
        $("#table_master").hide();

        //avvio la simulazione

        $("#paragraph_event_master").show();

        simula();

    });

});

function wait(milliseconds) {
    let time = Date.now();
    time += milliseconds;
    while (Date.now() < time) {

    }
}

function inRange(x, min, max) {
    return ((x - min) * (x - max) <= 0);
}

function simula() {
    danni = 0;
    //prima simulazione istantanea, poi ciclata ogni tot millisecondi
    simula_eventi();
    simulazione = setInterval(simula_eventi, tempo_giri_simulazione);
}

function simula_eventi() {

    //genero l'indice di un evento casuale
    var i = Math.floor(Math.random() * eventi.length);

    // console.log("random "+i);

    // console.log(eventi[i].id)

    //console.log(eventi[i].descrizione);


    //imposto la descrizione dell'evento sul paragrafo
    document.getElementById("paragraph_event").innerHTML = eventi[i].descrizione;
    //$("#paragraph_description").text(eventi[i].descrizione);


    //console.log("evento iniziato");

    //calcolo dei danni, in base ai dati su JSON e agli interventi fatti, calcolo i danni per ogni evento
    for (j = 0; j < eventi[i].danni_array.length; j++) {
        switch (eventi[i].danni_array[j].tipo) {
            case "minore":
                var counter = 0;
                for (k = 0; k < eventi[i].danni_array[j].interventi.length; k++) {
                    if (interventi_scelti.includes(eventi[i].danni_array[j].interventi[k])) {
                        counter++;
                    }
                }

                if (counter < eventi[i].danni_array[j].num_confronto) {
                    danni += eventi[i].danni_array[j].danni;
                }
                break;

            case "maggiore":
                var counter = 0;
                for (k = 0; k < eventi[i].danni_array[j].interventi.length; k++) {
                    if (interventi_scelti.includes(eventi[i].danni_array[j].interventi[k])) {
                        counter++;
                    }
                }

                if (counter > eventi[i].danni_array[j].num_confronto) {
                    danni += eventi[i].danni_array[j].danni;
                }
                break;

            case "uguale":
                var counter = 0;
                for (k = 0; k < eventi[i].danni_array[j].interventi.length; k++) {
                    if (interventi_scelti.includes(eventi[i].danni_array[j].interventi[k])) {
                        counter++;
                    }
                }

                if (counter == eventi[i].danni_array[j].num_confronto) {
                    danni += eventi[i].danni_array[j].danni;
                }
                break;

            case "bonus":
                danni += eventi[i].danni_array[j].danni;
                break;

            case "non_selezionato":
                var counter = 0;
                for (k = 0; k < eventi[i].danni_array[j].interventi.length; k++) {
                    if (interventi_scelti.includes(eventi[i].danni_array[j].interventi[k])) {
                        counter++;
                    }
                }

                if (counter == 0) {
                    danni += eventi[i].danni_array[j].danni;
                }
                break;

            default:
                //console.log("id:" + eventi[i].id + " danno: " + eventi[i].danni_array[j] + " da sistemare");
                break;
        }

    }

    //ogni volta che l'evento è stato simulato, dopo il calcolo dei danni, aumento il contatore di uno e controllo se è stata superata la soglia

    giri_simulazione++;
    //console.log("giro completato con danni: " + danni);

    if (danni >= danni_max) {

        //se il numero massimo dei danni è stato superato, spengo il ciclo della simulazione degli eventi e mostro la parte finale dei risultati
        clearInterval(simulazione);
        //console.log("fine");
        setTimeout(f_end, ritardo_end)
    }

}

function f_end() {

    //console.log("f_end");

    $("#video_simulate").hide();

    $(".box_video_end").show();

    $(".box_video_game").hide();

    $("#paragraph_event_master").hide();
    $("#paragraph_end_master").show();

    for (i = 0; i < end.length; i++) {
        if (inRange(giri_simulazione, end[i].min, end[i].max)) {
            $("#paragraph_end").text(end[i].text);
            break;
        }
    }
}
