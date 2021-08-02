

///////////////////////////////////////
//---------------------------------- //
//           SEMAFORO 1              //
//-----------------------------------//
///////////////////////////////////////
var semaforo1 = 0;
var clickCounter = 0;

//---------------------------------- //
//        FUNZIONE CONTEGGIO         //
//-----------------------------------//
function clickAvanti() {
    if (semaforo1 < 2) {
        semaforo1++;
    }
    cambiaPaginaS1();
}
// -- //
function clickIndietro() {
    document.getElementById('nascondi').style.display = 'none';
    document.getElementById('pConseguenzeSemaforo1').style.display = 'none';
    clickCounter = 0;
    if (semaforo1 > 0) {
        semaforo1--;
    }
    cambiaPaginaS1();
}

//---------------------------------- //
// FUNZIONE CAMBIO PAGINA SEMAFORO 1 //
//-----------------------------------//
function cambiaPaginaS1() {

    switch (semaforo1) {
        case 0:
            console.log(semaforo1);
            document.getElementById('tSem1').style.display = 'block'
            document.getElementById('p1S1').style.display = 'inline';
            document.getElementById('p2S1').style.display = 'none';
            document.getElementById('indietro').style.display = 'none';
            break;
        case 1:
            console.log(semaforo1);

            document.getElementById('p1S1').style.display = 'none';
            document.getElementById('indietro').style.display = 'inline';
            document.getElementById('avanti').style.display = 'inline';
            document.getElementById('p2S1').style.display = 'inline';
            document.getElementById('p3S1').style.display = 'none';

            break;
        case 2:
            console.log(semaforo1);

            document.getElementById('p2S1').style.display = 'none';
            document.getElementById('p3S1').style.display = 'inline';
            document.getElementById('avanti').style.display = 'none';
            document.getElementById('conseguenze').style.display = 'inline';
            break;
    }
}

//--------------------------------------------- //
//    FUNZIONE CAMBIO BACKGROUND SEMAFORO 1     //
//----------------------------------------------//
function funzioneSemaforo1() {
    document.getElementById('mappaGenerale').style.display = 'none';
    document.getElementById('mappe').style.display = 'inline';
    document.getElementById('map1').style.display = 'inline';
    document.getElementById('flagSemaforo1').style.display = 'inline';
    document.getElementById('buttonSemafori').style.display = 'none';
    document.getElementById('tSem1').style.display = 'block'
    document.getElementById('p1S1').style.display = 'block'
    document.getElementById('avanti').style.display = 'inline';


}

//--------------------------------------------- //
//    FUNZIONE CONSEGUENZE SEMAFORO 1           //
//----------------------------------------------//
function conseguenzeSemaforo1() {
    console.log(clickCounter);
    switch (clickCounter) {
        case 0:
            document.getElementById('pConseguenzeSemaforo1').style.display = 'inline';
            document.getElementById('nascondi').style.display = 'inline';
            document.getElementById('conseguenze').style.display = 'none';
            clickCounter++;
            break;
        case 1:
            document.getElementById('pConseguenzeSemaforo1').style.display = 'none';
            document.getElementById('nascondi').style.display = 'none';
            document.getElementById('conseguenze').style.display = 'inline';
            clickCounter = 0;
            break;
    }
}

/*
///////////////////////////////////////
//---------------------------------- //
//           SEMAFORO 2              //
//-----------------------------------//
///////////////////////////////////////
var semaforo2 = 0;
var clickCounter = 0;

//---------------------------------- //
//        FUNZIONE CONTEGGIO         //
//-----------------------------------//
function clickAvanti() {
    if (semaforo2 < 2) {
        semaforo2++;
    }
    cambiaPaginaS2();
}
// -- //
function clickIndietro() {
    document.getElementById('nascondi').style.display = 'none';
    document.getElementById('pConseguenzeSemaforo2').style.display = 'none';
    clickCounter = 0;
    if (semaforo2 > 0) {
        semaforo2--;
    }
    cambiaPaginaS2();
}

//---------------------------------- //
// FUNZIONE CAMBIO PAGINA SEMAFORO 2 //
//-----------------------------------//
function cambiaPaginaS2() {

    switch (semaforo2) {
        case 0:
            console.log(semaforo2);
            document.getElementById('tSem2').style.display = 'block'
            document.getElementById('p1S2').style.display = 'inline';
            document.getElementById('p2S2').style.display = 'none';
            document.getElementById('indietro').style.display = 'none';
            break;
        case 1:
            console.log(semaforo2);

            document.getElementById('p1S2').style.display = 'none';
            document.getElementById('indietro').style.display = 'inline';
            document.getElementById('avanti').style.display = 'inline';
            document.getElementById('p2S2').style.display = 'inline';
            document.getElementById('p3S2').style.display = 'none';

            break;
        case 2:
            console.log(semaforo2);

            document.getElementById('p2S2').style.display = 'none';
            document.getElementById('p3S2').style.display = 'inline';
            document.getElementById('avanti').style.display = 'none';
            document.getElementById('conseguenze').style.display = 'inline';
            break;
    }
}

//--------------------------------------------- //
//    FUNZIONE CAMBIO BACKGROUND SEMAFORO 2     //
//----------------------------------------------//
function funzioneSemaforo2() {
    document.getElementById('mappaGenerale').style.display = 'none';
    document.getElementById('mappe').style.display = 'inline';
    document.getElementById('map2').style.display = 'inline';
    document.getElementById('flagSemaforo2').style.display = 'inline';
    document.getElementById('buttonSemafori').style.display = 'none';
    document.getElementById('tSem2').style.display = 'block'
    document.getElementById('p1S2').style.display = 'block'
    document.getElementById('avanti').style.display = 'inline';


}

//--------------------------------------------- //
//    FUNZIONE CONSEGUENZE SEMAFORO 2           //
//----------------------------------------------//
function conseguenzeSemaforo2() {
    console.log(clickCounter);
    switch (clickCounter) {
        case 0:
            document.getElementById('pConseguenzeSemaforo2').style.display = 'inline';
            document.getElementById('nascondi').style.display = 'inline';
            document.getElementById('conseguenze').style.display = 'none';
            clickCounter++;
            break;
        case 1:
            document.getElementById('pConseguenzeSemaforo2').style.display = 'none';
            document.getElementById('nascondi').style.display = 'none';
            document.getElementById('conseguenze').style.display = 'inline';
            clickCounter = 0;
            break;
    }
}

*/





/*

var contatoreSemaforo1 = 0;




function funzioneSemaforo1() {
    document.getElementById('mappaGenerale').style.display = 'none';
    document.getElementById('buttonSemafori').style.display = 'none';
    document.getElementById('map1').style.display = 'block';
    document.getElementById('flagSemaforo1').style.display = 'block';

    document.getElementById('tSem1').style.display = 'block';
    document.getElementById('p1S1').style.display = 'block';
    
}


function clickAvanti() {
    cambiaPaginaS1();
    
    contatoreSemaforo1++;
    

}

function clickIndietro() { 
    
    cambiaPaginaS1();
    contatoreSemaforo1--;
    
   

}



//---------------------------------- //
//        FUNZIONE CONTEGGIO         //
//-----------------------------------//
function cambiaPaginaS1() {
    switch (contatoreSemaforo1) {


        case 0:
            document.getElementById('p3S1').style.display = 'none';
            document.getElementById('p1S1').style.display = 'none';
            document.getElementById('p2S1').style.display = 'block';
            document.getElementById('indietro').style.display = 'block'
            console.log('case0 ' +contatoreSemaforo1);
            break;
        case 1:
            document.getElementById('p2S1').style.display = 'none';
            document.getElementById('p3S1').style.display = 'block';
            document.getElementById('indietro').style.display = 'block'
            console.log('case1 ' +contatoreSemaforo1);



            break;


    }

}
*/