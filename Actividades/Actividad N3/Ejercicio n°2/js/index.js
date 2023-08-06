/*

2- Dadas dos variables llamadas num1 y num2, mostrar cuál de los números guardados
en ellas es más grande.

Ejemplo:

Si num1=120 y num2=30

La salida del programa debería ser:

El número mayor es 120

*/

const num1 = 2300;
const num2 = 2300;

if (num1 > num2) {
  console.log('El numero mayor es ' + num1);
} else if (num2 > num1) {
  console.log('El numero mayor es ' + num2);
} else {
  console.log('El numero 1 es igual al numero 2');
}
