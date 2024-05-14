/*Ejercicio 1:
Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase
*/
function contarLetras(frase, letra){
    let count = 0;
    for (i = 0; i < frase.length; i++){
        if (frase[i] == letra) {
            count++;
        }
    }
    return count;
};

/*Ejercicio 2:
Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números
*/
function numerosImpares(numeroRamdom){
    let arrImpares = [];
    for(let i = numeroRamdom; i < numeroRamdom + 50; i++){
        if (i % 2 !== 0) {
            arrImpares.push(i);
        }
    }
    return arrImpares;
}


