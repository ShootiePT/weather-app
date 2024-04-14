async function getWeatherByCity (city) {
    const params = {
        APPID: '96d64b7a16971bbc205c578e1eecf518',
        q: city
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