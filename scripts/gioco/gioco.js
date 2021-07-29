$(document).ready(function(){

    //caricamento interventi da file json e aggiunta di righe sulla tabella

    var interventi = "";
    $.getJSON("../../assets/gioco/interventi.json", function(result){
        interventi = result;
        console.log("-----"+interventi[0].id);
        result.forEach(element => {
            
            var row = "";
            
            //creo la nuova riga
            row += "<tr>";

            //aggiungo la checkbox
            row += "<td> <input type=\"checkbox\" class=\"check\" id=\"check_"+ element.id +"\"> </td>";
            console.log(element.id);

            //aggiungo il tag dell'intervento
            row += "<td>"+ element.codice_intervento +"</td>"
            console.log(element.codice_intervento);

            //aggiungo la descrizione dell'intervento
            row += "<td>"+ element.descrizione +"</td>"
            console.log(element.descrizione);

            //aggiungo il costo dell'intervento
            row += "<td>"+ element.costo +"</td>"
            console.log(element.costo);

            console.log(row);

            $("#table").append(row);       
        });

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

            //mostro il prezzo attuale sulla casella di testo
            $("#costo_totale").text(costo);


        });


    }).fail(function(){console.log("errore sulla lettura di interventi.json")});

    



});