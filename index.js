const weatherForm = document.getElementById('weather-form');
const weatherInfo = document.getElementById('weather-info');

weatherForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const cityTarget = event.target[0].value;
    const weatherData = await searchWeather(cityTarget);

    searchWeather(cityTarget);

    event.target[0].value = '';

    if (weatherData) {
        showWeather(weatherData);
    }
})

async function searchWeather (city) {
    const appKey ='7881848b7f82274361cf0d14e2c4bc72';
    const lang ='pt-br';
    const units = 'metric';
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appKey}&lang=${lang}&units=${units}`);
       
    if (weatherResponse.ok) {
        const weatherData = await weatherResponse.json();
        return weatherData;
    } else {
        console.error('Erro ao buscar dados de clima');
        return null;
    }
}

function showWeather(weather) {
    console.log(weather)

    const temperature = weather.main.temp;
    const description = weather.weather[0].description;
    const city = weather.name;
    const iconCode = weather.weather[0].icon; 
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    const weatherHtml = `
        <div class="items">
            <div>
                <h2>${city}</h2>
                <p>Temperatura: ${Math.trunc(temperature)}°C</p>
                <p>${description}</p>
            </div>
            <img src="${iconUrl}" alt="${description}">
        </div>
    `;

    weatherInfo.innerHTML = weatherHtml;
}

