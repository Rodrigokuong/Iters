/*
Dadas tres variables, llamadas num1, num2 y num3, mostrar el valor de la menor y el 
valor de la mayor. 
Ejemplo:
Si num1=25, num2=10, num3=15
La salida del programa debería ser:
Menor=10
Mayor=2
*/

let num1 = 25;
let num2 = 50;
let num3 = 75;

if( num1 < num2 && num1 < num3){
    console.log('el Numero menor es ' + num1);
}else if( num2 < num1 && num2 < num3){
    console.log('el Numero menor es ' + num2);
}else if( num3 < num1 && num3 < num2){
    console.log('el Numero menor es ' + num3);
}

if( num1 > num2 && num1 > num3){
    console.log('el Numero mayor es ' + num1);
}else if( num2 > num1 && num2 > num3){
    console.log('el Numero mayor es ' + num2);
}else if( num3 > num1 && num3 > num2){
    console.log('el Numero mayor es ' + num3);
}