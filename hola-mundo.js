//console.log('Hola Mundo');

let arr = ["hola", "murcielago", "caballo", "choclo", "poco", "luz", "sol"];
var cuenta = 0;
var acum = 0;


function mostrarValorLista() {
    for (let n of arr) {
        if (n.length <= 6){
            //console.log(cuenta,') Lista:' + n + ' / #char:' + n.length);
            cuenta++;
            acum = acum + n.length;
            console.log(cuenta, acum)
        }
        
    }
}

mostrarValorLista(); 
 