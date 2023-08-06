/* 
Dados dos arrays con números, determinar cuál es el número menor teniendo en cuenta a 
ambos.
Ej:
let array1 = [50, 20, 30, 10, 125, 2]
let array2 = [50, 3, 10, 9, 15, 80, 36, 60, 45]
La salida esperada es “2”, ya que es el número menor de los dos arrays
*/

let array1 = [50, 20, 30, 10, 125, 2];
let array2 = [50, 3, 10, 9, 15, 80, 36, 60, 45];

let menor1 = 0;
let menor2 = 0;

if (array1.length > 0) {
    menor1 = array1[0];

    for (i = 0; i < array1.length; i++) {
        if (array1[i] < menor1) {
            menor1 = array1[i];
        }

    }
}

if (array2.length > 0) {
    menor2 = array2[0];

    for (i = 0; i < array2.length; i++) {
        if (array2[i] < menor2) {
            menor2 = array2[i];
        }

    }
}

if (menor1 !== null && menor2 !== null) {
    if (menor1 < menor2) {
      console.log('El menor es el', menor1);
    } else {
      console.log('El menor es el', menor2);
    }
  } else if (menor1 !== null) {
    console.log('El menor es el', menor1);
  } else if (menor2 !== null) {
    console.log('El menor es el', menor2);
  } else {
    console.log('Los dos arrays estan vacios.');
  }

