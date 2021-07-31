
$(document).ready(function()
{

    interventi = JSON.parse(_interventi);
    eventi = JSON.parse(_eventi);
    interventi_scelti = [];
    costo_max = 80000;
    //caricamento interventi da file json e aggiunta di righe sulla tabella

    console.log(interventi);
    console.log(eventi);

    for(i = 0; i < interventi.length; i++)
    {
        var row = "";
            
        //creo la nuova riga
        row += "<tr>";

        //aggiungo la checkbox
        row += "<td> <input type=\"checkbox\" class=\"check\" id=\"check_"+ interventi[i].id +"\"> </td>";
        //console.log(interventi[i].id);

        //aggiungo il tag dell'intervento
        row += "<td>"+ interventi[i].codice_intervento +"</td>"
        //console.log(interventi[i].codice_intervento);

        //aggiungo la descrizione dell'intervento
        row += "<td>"+ interventi[i].descrizione +"</td>"
        //console.log(interventi[i].descrizione);

        //aggiungo il costo dell'intervento
        row += "<td>"+ interventi[i].costo +"</td>"
        //console.log(interventi[i].costo);

        //console.log(row);
        
        //aggiungo la riga alla tabella
        $("#table").append(row);       
    }

        //aggiungo l'evento click a tutte le checkbox

        $(".check").click(function() {
            var costo = 0;
            interventi_scelti = [];

            //controllo quale checkbox è selezionata ciclandole tutte, 
            //poi in base a quale è selezionata calcolo il prezzo sommandole,
            //poi aggiungo i relativi codici a un vettore

            for(i = 0; i < interventi.length; i++)
            {
                if($("#check_"+i).is(":checked"))
                {
                    costo += interventi[i].costo;
                    interventi_scelti.push(interventi[i].codice_intervento);
                }
            }

            //se il costo totale è superiore a 80000, comunico all'utente l'errore,
            //tutte le checkbox diventano unchecked e azzero il costo.
            if(costo > costo_max)
            {
                alert("Hai superato il budget di "+costo_max+"! Seleziona gli interventi con più attenzione!");
                $(".check").prop( "checked", false );
                costo = 0;
            }

            

            //mostro il prezzo attuale sulla casella di testo
            $("#costo_totale").text(costo);

        });

        //aggiungo l'evento click al bottone di start
        $("#start_btn").click(function() {
            
            //nascondo la tabella
            $("#table_master").hide();
            
            //avvio la simulazione
            $("#paragraph_description").text(interventi_scelti);
            $("#paragraph_master").show();
            
        });

});

