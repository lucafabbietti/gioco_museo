$(document).ready(function(){
    $("#btn1").click(function(){
        $("#paragrafo1").hide();
        $("#paragrafo2").show();
    });
    $("#btn2").click(function(){
        $("#paragrafo2").hide();
        $("#paragrafo1").show();
    });
    var interventi = $.getJSON("../assets/interventi.json");
    interventi.forEach(i => {
        console.log(i.id);
        var riga = document.createElement("td");
        //var cella_codice = 
    });
});