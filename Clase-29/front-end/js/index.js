const BASE_URL = 'http://localhost:9000';

const mostrarJsonEnTabla = (clientes) => {

    const clientesContainer = document.getElementById('clientes-container');

    let clientesBody = '';

    clientes.forEach((cliente) => {
        clientesBody += `
                        <tr>
                            <td>${cliente.nombre}</td>
                            <td>${cliente.apellido}</td>
                            <td>
                            <button class= 'btn btn-primary'>Editar</button>
                            <button class= 'btn btn-danger'>Eliminar</button>
                            </td>
                        </tr>
                        `;
    });

    clientesContainer.innerHTML = `
                                <table class= table>
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Apellido</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${clientesBody}
                                    </tbody>
                                </table>
                                `


}

const mostrarClientes = () => {
    const url = `${BASE_URL}/clientes`;

    fetch(url)
        .then((response) => response.json())
        .then(mostrarJsonEnTabla);
};

const agregarClientes = async(e) => {

    e.preventDefault();

    const nombre = document.getElementById('nombre-cliente').value;
    const apellido = document.getElementById('apellido-cliente').value; 

    const cliente = {
        nombre,apellido
    };

    const url = `${BASE_URL}/clientes`;

    const response = await fetch(url,{
                                        method: 'POST', 
                                        body: JSON.stringify(cliente),
                                        headers: {'Content-Type': 'application/json'}});

    console.log(response.status)

    const data = await response.json();

    alert(data.mesagge);
};



const btnNuevo = document.getElementById('btn-nuevo');

btnNuevo.addEventListener('click', agregarClientes);

mostrarClientes();

//2:09