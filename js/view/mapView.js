import weatherService from '/js/service/weatherService.js';

function render() {
  const container = document.querySelector('#container');
  container.innerHTML = '';

  //search
  const item = document.createElement('div');
  item.className = `input-group mb-3 mt-3`;
  item.innerHTML = `<input type="text" class="form-control" placeholder="Enter a city name" aria-label="Enter a city name" aria-describedby="button-addon2" id="city-name">
                    <button class="btn btn-outline-secondary" type="button" id="btn-weather">Search</button>`;

  container.appendChild(item);

  const btnWeather = document.getElementById('btn-weather');

  btnWeather.onclick = async (e) => {
    e.preventDefault();
    const cityInput = document.getElementById('city-name');
    console.log(cityInput.value);

    const result = await weatherService.getWeatherByCity(cityInput.value);
    console.log(result);

    // table header creation
    if (!document.querySelector('#weather-table')) {
      const table = document.createElement('table');
      table.id = 'weather-table';
      table.className = 'table';
      container.appendChild(table);

      const tableHeader = document.createElement('thead');
      tableHeader.innerHTML = `
        <tr>
          <th>City Name</th>
          <th></th>
          <th>Weather</th>
          <th>current Temp</th>
          <th>Max Temp</th>
          <th>Min Temp</th>
          <th>Action</th>
        </tr>
      `;
      table.appendChild(tableHeader);
    }

    // adding row
    const tableBody = document.createElement('tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${result.name}</td>
      <td><img src="https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png" alt="image icon" style="width: 35px"></td>
      <td>${result.weather[0].main}</td>
      <td>${result.main.temp} Cº</td>
      <td>${result.main.temp_max} Cº</td>
      <td>${result.main.temp_min} Cº</td>
      <td><button class="btn btn-danger delete-btn">Delete</button></td>
    `;
    tableBody.appendChild(newRow);
    document.querySelector('#weather-table').appendChild(tableBody);

    // delete button
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
      button.addEventListener('click', () => {
        const row = button.closest('tr');
        row.remove();
      });
    });
  };
}

export default { render };
