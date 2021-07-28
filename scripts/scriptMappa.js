


var s=0;

function contatore() {
    s=s+1;

  console.log(s);
    
    switch (s) {
        case 1:
            document.getElementById('p1').style.display='inline';
            break;
            case 2:
                document.getElementById('p1').style.display='none';
        document.getElementById('p2').style.display='inline';
                
                break;
    
        default: 
            break;
    }
}

