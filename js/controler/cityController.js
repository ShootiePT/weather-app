import weatherService from '/js/service/weatherService.js';
import cityView from '/js/view/cityView.js';

async function init() {
  await weatherService.getWeatherByCity('aveiro');
  cityView.render();
};

export default { init };
