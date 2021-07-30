$(document).ready(function(){

    //caricamento interventi da file json e aggiunta di righe sulla tabella

    var interventi = "";
    var eventi = "";

    var costo_max = 200;

    $.getJSON("../../assets/gioco/interventi.json", function(result){
        interventi = result;
        result.forEach(element => {
            
            var row = "";
            
            //creo la nuova riga
            row += "<tr>";

            //aggiungo la checkbox
            row += "<td> <input type=\"checkbox\" class=\"check\" id=\"check_"+ element.id +"\"> </td>";
            //console.log(element.id);

            //aggiungo il tag dell'intervento
            row += "<td>"+ element.codice_intervento +"</td>"
            //console.log(element.codice_intervento);

            //aggiungo la descrizione dell'intervento
            row += "<td>"+ element.descrizione +"</td>"
            //console.log(element.descrizione);

            //aggiungo il costo dell'intervento
            row += "<td>"+ element.costo +"</td>"
            //console.log(element.costo);

            //console.log(row);
            
            //aggiungo la riga alla tabella
            $("#table").append(row);       
        });

        //aggiungo l'evento click a tutte le checkbox

        $(".check").click(function() {
            var costo = 0;

            //controllo quale checkbox è selezionata ciclandole tutte, 
            //poi in base a quale è selezionata calcolo il prezzo sommandole

            for(i = 0; i < interventi.length; i++)
            {
                if($("#check_"+i).is(":checked"))
                {
                    costo += interventi[i].costo;
                }
            }

            //se il costo totale è superiore a 80000, comunico all'utente l'errore,
            //tutte le checkbox diventano unchecked e azzero il costo.
            if(costo > costo_max)
            {
                alert("Hai superato il budget di 80000! Seleziona gli interventi con più attenzione!");
                $(".check").prop( "checked", false );
                costo = 0;
            }

            //mostro il prezzo attuale sulla casella di testo
            $("#costo_totale").text(costo);

        });

        //aggiungo l'evento click al bottone di start
        $("#start_btn").click(function() {

            //se non ci sono errori nella lettura del json eventi, inizio la simulazione
            if(carica_eventi())
            {
                //nascondo la tabella
                $("#table_master").hide();
            
                simulazione();
            }
            else
            {
                alert("errore sulla lettura di eventi.json");
            }
            
        });

    }).fail(function(){console.log("errore sulla lettura di interventi.json")});

});

function carica_eventi()
    {
        $.getJSON("../../assets/gioco/eventi.json", function(result){
            
        }).fail(function() 
        {
            return false;
        });
        return true;
        
    }

    function simulazione()
    {

    }