/* ejercicio 1 
1º Solicite al usuario el ingreso por teclado de 3 notas
2º Saque la media de las notas
3º Muestre por pantalla
si la nota es menor que 5 'SUSPENSO'
si la nota es mayor o igual 5 y menor que 7 'APROBADO'
si es mayor o igual que 7 y menor o igual que 10 'sobresaliente'
*/

function calcularMedia(){
    let nota1 = prompt("ingresa tu nota 1")
    let nota2 = prompt("ingresa tu nota 2")
    let nota3 = prompt("ingresa tu nota 3")
    let numero1 = parseInt(nota1, 10)
    let numero2 = parseInt(nota2, 10)
    let numero3 = parseInt(nota3, 10)
    let media = (numero1 + numero2 + numero3) /3
    console.log(media)
    if (media < 5){
        return "SUSPENSO"
    } else if (5 > media <= 7){
        return "APROBADO"
    } else {
        return "sobresaliente"
    };
};

/* ejercicio 2
Se solicita al usuario que ingrese por teclado 10 números, el programa devolverá:
1º Cuantos son positivos
2º Cuantos son negativos
3º Cuantos son pares */

//creamos una funcion que solicite numeros en funcion de una cantidad

function solicitarNumeros() {
    let numeros = [];
    let cuenta = prompt("ingresa la cantidad de numeros")
    cantidad = parseInt(cuenta, 10)
    for (let i = 0; i < cantidad; i++) {
    let num = prompt ("ingresa un numero, te quedan " + cantidad);
    let num2 = parseInt(num,10)
    numeros.push(num2)
    cantidad--
    }
    return numeros;
}

function contarPositivos (listaNumeros){
    let count = 0;
    for (let i = 0; i < listaNumeros.length; i++){
        if (listaNumeros[i] >= 0){
            count++
        }
    }
    return count;
}
function contarNegativos (listaNumeros){
    let count = 0;
    for (let i = 0; i < listaNumeros.length; i++){
        if (listaNumeros[i] < 0){
            count++
        }
    }
    return count
}
function contarPares (listaNumeros){
    let count = 0;
    for (let i = 0; i < listaNumeros.length; i++){
        if (listaNumeros[i] % 2 == 0){
            count++
        }
    }
    return count
}

function devolverNumeros (){
    let listado = solicitarNumeros()
    let positivos = contarPositivos(listado)
    let negativos = contarNegativos(listado)
    let pares = contarPares(listado)
    return ("Cantidad de positivos: " + positivos + "; cantidad de negativos: " + negativos + "; cantidad de pares: " + pares)
};

