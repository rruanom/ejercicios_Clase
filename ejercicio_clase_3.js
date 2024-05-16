/*
1º Solicite al usuario el ingreso por teclado de 3 notas
2º Saque la media de las notas
3º Muestre por pantalla
si la nota es menor que 5 'SUSPENSO'
si la nota es mayor o igual 5 y menor que 7 'APROBADO'
si es mayor o igual que 7 y menor o igual que 10 'sobresaliente'
*/
let nota1 = prompt("ingresa tu nota 1")
let nota2 = prompt("ingresa tu nota 2")
let nota3 = prompt("ingresa tu nota 3")
function calcularMedia(nota1, nota2, nota3){
    let media = (nota1 + nota2 + nota3) / 3
    console.log(media)
    if (media < 5){
        return "SUSPENSO"
    } else if (5 > media <= 7){
        return "APROBADO"
    } else {
        return "sobresaliente"
    };
};

