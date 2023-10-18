/* const url = 'https://jsonplaceholder.typicode.com/users';

const data = fetch(url);

console.log(data);

function a(){
    console.log('hace algo');
    b();
}
function b(){
    console.log('hacer algo mas');
}
a();
b();
a();
console.log('fin');

//PILAs, LISTAS, COLAS, ARBOLES, GRAFOS 
//(FRIST OUT ('FIFO' = es un tipo de estructura))
//9
//14
  */

/* const url = 'https://jsonplaceholder.typicode.com/users';

const promesaDelFetch = fetch(url);

/* .then() es una funcion, se va a ejecutar cuando se llame 
    correctamente la promesa y cuando termine de llamar la promesa */
/* promesaDelFetch.then((response) => { 
    const promesaDelJson = response.json();
    
    promesaDelJson.then((data)=>{
        console.log(data);
    })
    //console.log(response);
}); */

/* .catch() es una funcion, se ejecuta cuando hay un error en la promesa
    se va a ejecutar una de las 2, .then() o .catch() dependiendo de si 
    se llama correctamente o no */
/* promesaDelFetch.catch(()=> {
    'termino la promesa del fetch con error'
}); */

//console.log(promesaDelFetch);


const url = 'https://jsonplaceholder.typicode.com/users'; //Endpoint

fetch(url).then((response) => response.json())
.then((showUsers))

function showUsers(users) {
    console.log(users);
    const usersCointainer = document.getElementById('users-container');

    for(i = 0; i < users.length ; i++){
        usersCointainer.innerHTML += `<p>${users[i].name}</p>`;
    }
}

