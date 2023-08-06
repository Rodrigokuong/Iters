/*
Dadas dos variables llamadas num1 y num2, intercambiar el valor de ellas. Es decir que, al 
finalizar el script, el valor de num1 debe estar en num2 y el de num2 en num1.
Ejemplo:
Si num1=20 y num2=36
Al terminar el programa num1 debería contener el valor 36 y num2 el valor 20.
 */

let num1 = 10;
let num2 = 20;

const auxiliar = num1;
num1 = num2;
num2 = auxiliar;

console.log('numero1=', num1, 'numero 2=', num2);