async function getWeatherByCity (city) {
    const params = {
        APPID: '5692bbc5d78a6719d6e10682ffaebcfe',
        q: city,
        units: 'metric'
    };

    const URL = `https://api.openweathermap.org/data/2.5/weather?${new URLSearchParams(params).toString()}`;

    const result = await fetch(
        URL,
        {
            method: 'GET',
        }
    );

    return await result.json();
}

export default {getWeatherByCity};