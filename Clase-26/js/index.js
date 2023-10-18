const API_KEY = '97edc8bd2f51ffd99517bf6568e95789';

//usando los servicios de geolocaclizacion, obtenemos la ubicacion del usuario (se debe pedir permiso al usuario)
const getWeatherData = (position) => {
    const {latitude, longitude} = position.coords;

    //hacemos destructuracion de objetos, nos permite acortar codigo
    //al ponerlos en llaves {} nos crea una variable y busca el dato que necesitamos
    //se puede renombrar al desctructurar es decir latitude: latitud, podemos cambiarle el nombre a la variable final
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=es`;

    fetch(url).then((response ) => response.json())
              .then(showWeather);
    
    
};

const getWeatherDatabyRegion = (event) => {
    event.preventDefault()

    const search = document.getElementById('txt-search').value;

    const url = `https://api.openweathermap.org/data/2.5/find?q=${search}&appid=${API_KEY}&units=metric&lang=es`;
    
    fetch(url).then((response) => response.json())
              .then(showWeatherList);
}

const showWeatherList = (data) => {
    const resultcontainer = document.getElementById('result');
    
    resultcontainer.innerHTML = '';

    for( region of data.list){

    resultcontainer.innerHTML += `
                                <img src='https://openweathermap.org/img/wn/${region.weather[0].icon}.png'/>
                                <ul>
                                    <li>Pais: ${region.sys.country}</li>
                                    <li>Region: ${region.name}</li>
                                    <li>Temperatura: ${region.main.temp}</li>
                                    <li>Sensacion Terminca: ${region.main.feels_like}</li>
                                    <li>Humedad: ${region.main.humidity}</li>
                                    <li>Presion: ${region.main.pressure}</li>
                                    <li>Viento: ${region.wind.speed}</li>
                                </ul>
                                `;
    }
}

const showWeather = ({name,sys,main,weather,wind}) => {
    const resultcontainer = document.getElementById('result');
    

    resultcontainer.innerHTML = `
                                <img src='https://openweathermap.org/img/wn/${weather[0].icon}.png'/>
                                <ul>
                                    <li>Pais: ${sys.country}</li>
                                    <li>Region: ${name}</li>
                                    <li>Temperatura: ${main.temp}</li>
                                    <li>Sensacion Terminca: ${main.feels_like}</li>
                                    <li>Humedad: ${main.humidity}</li>
                                    <li>Presion: ${main.pressure}</li>
                                    <li>Viento: ${wind.speed}</li>
                                </ul>
                                `;
}
const handleGetcurrentPosition = () => {
    console.log('error al geolocalizar al usuario');
};

navigator.geolocation.getCurrentPosition(
    getWeatherData, 
    handleGetcurrentPosition
);  

const btnSearch = document.getElementById('btn-search');
btnSearch.addEventListener('click', getWeatherDatabyRegion);

