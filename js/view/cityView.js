import weatherService from '/js/service/weatherService.js';

function render() {
  const container = document.querySelector('#container');
  container.innerHTML = '';

  // Search input and button
  const searchForm = document.createElement('form');
  searchForm.className = 'input-group mb-3 mt-3 box-sh btn-weather';
  searchForm.innerHTML = `
    <input type="text" class="form-control" placeholder="Enter a city name" aria-label="Enter a city name" aria-describedby="button-addon2" id="city-name">
    <button class="btn btn-warning" type="submit" id="btn-search">Search</button>
  `;
  container.appendChild(searchForm);

  // Alert message
  const alertMessage = document.createElement('div');
  alertMessage.className = 'd-none';
  alertMessage.id = 'alert-message';
  alertMessage.innerHTML = `
    <div class="alert alert-danger" role="alert">
      The selected city was not found. Please enter a valid city.
    </div>`;
  container.appendChild(alertMessage);

  

  const cityNameInput = document.getElementById('city-name');
  const btnSearch = document.getElementById('btn-search');

  async function searchCity(cityName) {
    try {
      const result = await weatherService.getWeatherByCity(cityName);
      if (result.cod === '404') {
        showAlertMessage();
        setTimeout(hideAlertMessage, 1800);
      } else {
        populateCityTable(result);
      }
    } catch (error) {
      console.error('Error fetching city weather:', error);
      showAlertMessage();
      setTimeout(hideAlertMessage, 1800);
    }
  }

  // Table for city weather information
function populateCityTable(cityWeather) {
  let cityTable = document.getElementById('city-table');

  // If table doesn't exist, create one
  if (!cityTable) {
    cityTable = document.createElement('table');
    cityTable.id = 'city-table';
    cityTable.className = 'table';
    container.appendChild(cityTable);
  }

  const tableHeader = document.createElement('thead');
  tableHeader.innerHTML = `
    <tr class="tr-c">
      <th colspan="2">${cityWeather.name}</th>
    </tr>`;
  cityTable.innerHTML = ''; // Clear existing content
  cityTable.appendChild(tableHeader);

  // Adding city info
  const tableBody = document.createElement('tbody');
  tableBody.innerHTML = `
    <tr>
      <td>${cityWeather.weather[0].description}</td>
      <td><img src="https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}.png" alt="weather icon" style="width: 35px"></td>
    </tr>
    <tr>
      <td>Weather</td>
      <td>${cityWeather.weather[0].main}</td>
    </tr>
    <tr>
      <td>Temperature</td>
      <td>${cityWeather.main.temp} Cº</td>
    </tr>
    <tr>
      <td>Max Temperature</td>
      <td>${cityWeather.main.temp_max} Cº</td>
    </tr>
    <tr>
      <td>Min Temperature</td>
      <td>${cityWeather.main.temp_min} Cº</td>
    </tr>
    <tr>
      <td>Latitude</td>
      <td>${cityWeather.coord.lat}</td>
    </tr>
    <tr>
      <td>Longitude</td>
      <td>${cityWeather.coord.lon}</td>
    </tr>
    <tr>
      <td>Ground Level</td>
      <td>${cityWeather.main.grnd_level}</td>
    </tr>
    <tr>
      <td>Sea Level</td>
      <td>${cityWeather.main.sea_level}</td>
    </tr>
    <tr>
      <td>Humidity</td>
      <td>${cityWeather.main.humidity} %</td>
    </tr>
    <tr>
      <td>Pressure</td>
      <td>${cityWeather.main.pressure} hPa</td>
    </tr>
    <tr>
      <td>Country</td>
      <td>${cityWeather.sys.country}</td>
    </tr>
    <tr>
      <td>Sunrise</td>
      <td>${new Date(cityWeather.sys.sunrise *1000)}</td>
    </tr>
    <tr>
      <td>Sunset</td>
      <td>${new Date(cityWeather.sys.sunset * 1000)}</td>
    </tr>
    <tr>
      <td>Time Zone</td>
      <td>${new Date(cityWeather.timezone).toLocaleString()}</td>
    </tr>
    <tr>
      <td>Wind</td>
      <td>${cityWeather.wind.speed} m/s</td>
    </tr>
  `;
  cityTable.appendChild(tableBody);
}


  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const cityName = cityNameInput.value.trim();
    if (cityName !== '') {
      searchCity(cityName);
    }
  });

  function showAlertMessage() {
    document.getElementById('alert-message').classList.remove('d-none');
  }

  function hideAlertMessage() {
    document.getElementById('alert-message').classList.add('d-none');
  }
}

export default { render };
