async function getWeatherByCity (city) {
    const params = {
        APPID: 'apiKEY',
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