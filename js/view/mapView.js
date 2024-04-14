import weatherService from '/js/service/weatherService.js';

function render() {
  const container = document.querySelector('#container');
  container.innerHTML = '';

  const item = document.createElement('div');
  item.className = `input-group mb-3 mt-3`;
  item.innerHTML = `<input type="text" class="form-control" placeholder="Enter a city name" aria-label="Enter a city name" aria-describedby="button-addon2" id="city-name">
                    <button class="btn btn-outline-secondary" type="button" id="btn-weather">Search</button>`

  container.appendChild(item);

  const btnWeather = document.getElementById('btn-weather');

  btnWeather.onclick = async (e) => {
    e.preventDefault();
    const cityInput = document.getElementById('city-name');
    console.log(cityInput.value);

    const result = await weatherService.getWeatherByCity(cityInput.value);
    console.log(result);
  }

  console.log(document.querySelector('#btn-weather'));
};


export default { render };
