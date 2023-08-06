// Dado un array con 20 números, determinar cuál es número mayor.

const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

if (numeros.length > 0) {
  let mayor = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }

  console.log(mayor);
} else {
  console.log('El array esta vacio.');
}
