import mapView from '/js/view/cityForecastView.js';
import weatherService from '/js/service/weatherService.js';

async function init() {
  await weatherService.getWeatherByCity('aveiro');
  mapView.render();
};

export default { init };
