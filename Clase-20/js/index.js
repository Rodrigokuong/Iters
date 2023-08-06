let productos = ['mouse', 'teclado', 'laptop', 'impresora', 'webcam', 'ssd'];

productos[1] = 'pipo'; 

for (i = 0; i < productos.length; i++) {
    console.log(productos[i]);
}

/* let i = 0;

while (i < productos.length) {
    console.log(productos[i]);
    i++;
} */

//mensaje y nombre se toman como variables, se les pasa los valores al llamar la funcion

function saludar(mensaje, nombre){
    console.log(mensaje + ' ' +nombre );
}

saludar('Hola', 'Elon');
saludar('Chau', 'Bill');
saludar('Bienvenido', 'Richard');
saludar('Adios', 'Maria');
// llamada recursiva se da cuando una funcion se llama a si misma dentro de ella 