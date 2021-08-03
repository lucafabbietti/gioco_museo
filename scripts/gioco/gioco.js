
var interventi;
var eventi;
var interventi_scelti;
var costo_max;

var danni;
var danni_max;

var giri_simulazione;
var tempo_giri_simulazione;

var simulazione;

$(document).ready(function () {

    interventi = JSON.parse(_interventi);
    eventi = JSON.parse(_eventi);
    interventi_scelti = [];
    costo_max = 80000;

    danni = 0;
    danni_max = 15;

    giri_simulazione = 0;
    tempo_giri_simulazione = 5000;

    //caricamento interventi da file json e aggiunta di righe sulla tabella

    // console.log(interventi);
    // console.log(eventi);

    for (i = 0; i < interventi.length; i++) {
        var row = "";

        //creo la nuova riga
        row += "<tr>";

        //aggiungo la checkbox
        row += "<td> <input type=\"checkbox\" class=\"check\" id=\"check_" + interventi[i].id + "\"> </td>";
        //console.log(interventi[i].id);

        //aggiungo il tag dell'intervento
        row += "<td>" + interventi[i].codice_intervento + "</td>"
        //console.log(interventi[i].codice_intervento);

        //aggiungo la descrizione dell'intervento
        row += "<td>" + interventi[i].descrizione + "</td>"
        //console.log(interventi[i].descrizione);

        //aggiungo il costo dell'intervento
        row += "<td>" + interventi[i].costo + "</td>"
        //console.log(interventi[i].costo);

        //console.log(row);

        //aggiungo la riga alla tabella
        $("#table").append(row);
    }

    //aggiungo l'evento click a tutte le checkbox

    $(".check").click(function () {
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
            alert("Hai superato il budget di " + costo_max + "! Seleziona gli interventi con più attenzione!");
            $(".check").prop("checked", false);
            costo = 0;
        }



        //mostro il prezzo attuale sulla casella di testo
        $("#costo_totale").text(costo);

    });

    //aggiungo l'evento click al bottone di start
    $("#start_btn").click(function () {

        //nascondo la tabella
        $("#table_master").hide();

        //avvio la simulazione

        $("#paragraph_master").show();

        simula();

    });

});

function wait(milliseconds) {
    let time = Date.now();
    time += milliseconds;
    while (Date.now() < time) {

    }
}

function simula() {
    danni = 0;
    simula_eventi();
    simulazione = setInterval(simula_eventi, tempo_giri_simulazione);
}

function simula_eventi() {

    var i = Math.floor(Math.random() * eventi.length);

    // console.log("random "+i);

    // console.log(eventi[i].id)

    //console.log(eventi[i].descrizione);

    document.getElementById("paragraph_description").innerHTML = eventi[i].descrizione;
    //$("#paragraph_description").text(eventi[i].descrizione);


    //console.log("evento iniziato");

    for (j = 0; j < eventi[i].danni_array.length; j++) {
        switch (eventi[i].danni_array[j].tipo) {
            case "minore":
                var counter = 0;
                for (k = 0; k < eventi[i].danni_array[j].interventi.lenght; k++) {
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
                for (k = 0; k < eventi[i].danni_array[j].interventi.lenght; k++) {
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
                for (k = 0; k < eventi[i].danni_array[j].interventi.lenght; k++) {
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
                for (k = 0; k < eventi[i].danni_array[j].interventi.lenght; k++) {
                    if (interventi_scelti.includes(eventi[i].danni_array[j].interventi[k])) {
                        counter++;
                    }
                }

                if (counter == 0) {
                    danni += eventi[i].danni_array[j].danni;
                }
                break;

            default:
                console.log("id:" + eventi[i].id + " danno: " + eventi[i].danni_array[j] + " da sistemare");
                break;
        }

    }

    giri_simulazione++;
    //console.log("giro completato con danni: " + danni);

    if (danni >= danni_max) {
        clearInterval(simulazione);
        end();
    }

}

function end() {
    console.log("fine");
}