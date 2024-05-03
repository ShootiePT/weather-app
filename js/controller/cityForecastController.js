import cityForecastView from '/js/view/cityForecastView.js';
import weatherService from '/js/service/weatherService.js';

async function init() {
  await weatherService.getWeatherByCity('aveiro');
  cityForecastView.render();
};

export default { init };
