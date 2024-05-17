/*
Se solicitan 10 números enteros comprendidos entre 1 y 500, estos números se almacenarán en un array.
1º Almacenar todos los números en un array
2º Almacenar en otro array los números comprendidos entre el 1 y 250
3º Almacenar en otro array los números comprendidos entre el 251 y 500
*/
let numerosMayores = [];
let numerosMenores = [];

function validarNumero(num, numMin = -Infinity, numMax = Infinity){
    let numeroSeparado = parseInt(num, 10);
    if(numeroSeparado == num) {
        if (numMin <= num && num <= numMax){
            return true
        } else {
            return false
        }
    } else {
            return false
    }
};

function solicitarNumeros(minimo, maximo){
    let numeros = []
    let cantidad = prompt("¿Cuantos números quieres introducir?")
    for (let i=0; numeros.length < cantidad; i++){
        let numeroSolicitado = prompt(`Escribe un numero, te quedan: ${cantidad - numeros.length}`)
        let numeroFinal = parseInt(numeroSolicitado, 10)
        let respuestaValidacion = validarNumero(numeroSolicitado, minimo, maximo)
        if(respuestaValidacion){
            numeros.push(numeroFinal)
        } else {
            alert(`Escribe un numero entero del ${minimo} al ${maximo}`)
        }
        
    }
    return numeros
};

function divisionArray(){
listaNumeros = solicitarNumeros(1, 500);
numerosMenores = listaNumeros.filter(function(numero) {
    return numero <= 250;
  });
numerosMayores = listaNumeros.filter(function(numero) {
    return numero > 250;
  });
console.log(listaNumeros);
console.log(numerosMenores);
console.log(numerosMayores);
};

divisionArray();