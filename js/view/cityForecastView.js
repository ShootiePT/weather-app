import cityView from '/js/view/cityView.js';
import weatherService from '/js/service/weatherService.js';

function render() {
  const container = document.querySelector('#container');
  container.innerHTML = '';

  // Search input and button
  const item = document.createElement('div');
  item.className = `input-group mb-3 mt-3 box-sh btn-weather`;
  item.innerHTML = `<input type="text" class="form-control" placeholder="Enter a city name" aria-label="Enter a city name" aria-describedby="button-addon2" id="city-name">
                    <button class="btn btn-primary" type="button" id="btn-weather">Search</button>`;
  container.appendChild(item);

  // Alert message
  const alertMessage = document.createElement('div');
  alertMessage.className = 'd-none';
  alertMessage.id = 'alert-message';
  alertMessage.innerHTML = `<div class="alert alert-danger" role="alert">
                              The selected city was not found. Please enter a valid city.
                            </div>`;
  container.appendChild(alertMessage);

  const btnWeather = document.getElementById('btn-weather');

  // Function to create city table
  function createCityTable(cityWeather) {
    const table = document.createElement('table');
    table.id = 'weather-table';
    table.className = 'table';
    container.appendChild(table);

    const tableHeader = document.createElement('thead');
    tableHeader.innerHTML = `
      <tr class="tr-c">
        <th>City Name</th>
        <th></th>
        <th>Weather</th>
        <th>current Temp</th>
        <th>Check</th>
        <th>Delete</th>
      </tr>
    `;
    table.appendChild(tableHeader);

    // Adding row for the city
    const tableBody = document.createElement('tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${cityWeather.name}</td>
      <td><img src="https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}.png" alt="weather icon" style="width: 35px"></td>
      <td>${cityWeather.weather[0].main}</td>
      <td>${cityWeather.main.temp} Cº</td>
      <td><button class="btn btn-outline-success success-btn">See More</button></td>
      <td><button class="btn btn-outline-danger delete-btn">Delete</button></td>
    `;
    tableBody.appendChild(newRow);
    table.appendChild(tableBody);

    // "See More" button click event
    const seeMoreButtons = document.querySelectorAll('.success-btn');
    seeMoreButtons.forEach(button => {
      button.addEventListener('click', async () => {
        const cityName = cityWeather.name;
        cityView.render(cityName);
      });
    });
  }

  // Function to show alert message
  function showAlertMessage() {
    alertMessage.classList.remove('d-none');
  }

  // Function to hide alert message
  function hideAlertMessage() {
    alertMessage.classList.add('d-none');
  }

}

export default { render };
