$(document).ready(function(){
    $("#btn1").click(function(){
        $("#paragrafo1").hide();
        $("#paragrafo2").show();
    });
    $("#btn2").click(function(){
        $("#paragrafo2").hide();
        $("#paragrafo1").show();
    });

    $.getJSON("../../assets/gioco/interventi.json", function(result){
        result.forEach(element => {
            console.log(element.id);
        });
    }).fail(function(){console.log("errore")});



});