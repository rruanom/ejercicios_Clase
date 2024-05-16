/*Ejercicio 1
Declara una función que acepte una palabra como parámetro y la devuelva con todos sus caracteres en mayúsculas y 
separados por espacios. Ejemplo: Para "Ana" devolverá "A N A".*/
// Se podria hacer mas comodo convirtiendolo a array pero prefiero operar con String:
function separarLetras(palabraAleatoria){
    let palabraMayuscula = palabraAleatoria.toUpperCase();
    let palabraSeparada = "";
/* al principio lo hice con un for de limite palabraMayuscula.length pero me daba un espacio al final.
lo corrijo haciendo el bucle a .length -1 y sumando la última letra a parte. */
    for(let i = 0; i < palabraMayuscula.length -1; i++) {
        palabraSeparada += palabraMayuscula[i] + " "
        //`${palabraMayusculas[i]} patata`
    };
    palabraSeparada += palabraMayuscula[palabraMayuscula.length -1];
    return palabraSeparada;
};

/*Ejercicio 2
Declara una función que acepte un nombre como parámetro y 
devuelva el número de palabras que tiene el nombre. Ejemplo: Para "Antonio Alberto Jesús" devolverá 3.*/
function contarPalabras(nombreCompuesto){
    //let arrayNombre = nombreCompuesto.trim.split(" ").length;
    nombreCompuesto = nombreCompuesto.trim
    let arrayNombre = nombreCompuesto.split("")
    arrayNombre = arrayNombre.length
    return arrayNombre;
};
// se pueden usar metodos encadenados o hacerlo por partes dependiendo del caso es mejor uno u otro
