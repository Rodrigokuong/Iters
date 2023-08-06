console.log('hola');

let nombre = 'Elon';
let apellido = 'Musk';
let edad = 56;

let nombre2 = 'Bill';
let apellido2 = 'Gates';

if (nombre === 'Elon' && apellido === 'Musk') {
    console.log('Es el fundador de Tesla');
}
else {
    console.log('No es el fundador de Tesla');
}

if (
    (nombre2 === 'Bill' && apellido === 'Gates') ||
    (nombre === 'Elon' && apellido === 'Musk')
) {
    console.log('Es dueño de una Empresa Exitosa');
}
else {
    console.log('No es dueño de una Empresa Exitosa');
}
// Tabla de Verdad && 

/* 
    Contenido1 && Contenido2
        V               V       ->  V
        V               F       ->  F
        F               V       ->  F
        F               F       ->  F
*/

//Tabla de Verdad || 

/* 
    Contenido1 && Contenido2
        V              V    ->  V
        V              F    ->  V
        F              V    ->  V
        F              F    ->  F
*/

let numero = 36;

numero--;

for(let i = 0; i < 30; i++){
    console.log('Hello World');
    console.log(i);
}

let i = 0;

if( i < 5 ){
    console.log (i);
}

while( i < 5 ){
    console.log(i);
    i++;
}

