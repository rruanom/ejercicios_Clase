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
}