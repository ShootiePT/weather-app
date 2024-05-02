<div id="user-content-toc">
  <ul align="center">
    <h1>Weather App</h1>
  </ul>
</div>

At the moment, I'm working on this SPA project to test my frontend skills and apply new ones. It's a web app for checking the weather in cities around the world.

<div id="user-content-toc">
  <ul align="center">
    <h4>Technologies used</h4>
  </ul>
</div>

<div align="center">
  <a href="https://www.javascript.com/" target="_blank"><img src="https://skillicons.dev/icons?i=javascript" alt="JavaScript"></a>
  <a href="https://html.com/" target="_blank"><img src="https://skillicons.dev/icons?i=html" alt="HTML"></a>
  <a href="https://github.com/ShootiePT" target="_blank"><img src="https://skillicons.dev/icons?i=css" alt="CSS"></a>
</div>

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Usage](#usage)
- [Contributing](#contributing)

## Introduction

This app is used to simultaneously check multiple cities and view the weather in them, or to focus on a specific city for more detailed information. Currently, it is possible to view the weather using an API key from <a href="https://home.openweathermap.org/">Open Weather</a>.

## Features

### <h3>Done:</h3>
- [x] Search bars.
- [x] View the weather of multiple cities and present it in a table.
- [x] View detailed information of a specific city.

### <h3>To Implement:</h3>
- [ ] Presentation home page.
- [ ] Comparison chart between cities.
- [ ] Map API.
- [ ] Contact page.

## Usage
Don't forget to include an API key to test the app.

```js
async function getWeatherByCity (city) {
    const params = {
        APPID: 'apiKEY',
        q: city,
        units: 'metric'
    };

    const URL = `https://api.openweathermap.org/data/2.5/weather?${new URLSearchParams(params).toString()}`;
```

## Contributing

All tips and assistance are welcome, both in collaborating on the project and providing ideas for improvement. I'm still in the learning phase, and this project is something I'm dedicating myself to in order to explore SPAs (Single Page Applications).


## Screenshots

<img scr="/resources/read1.PNG" alt="compare city">
<img scr="/resources/read2.PNG" alt="detailed city">

## Contact

<!-- CONTACTS -->
<div align="center">
  <a href="mailto:jose.f.rocha92@gmail.com" target="_blank"><img src="https://skillicons.dev/icons?i=gmail" alt="gmail"></a>
  <a href="https://www.linkedin.com/in/joseflrocha" target="_blank"><img src="https://skillicons.dev/icons?i=linkedin" alt="linkedIn"></a>
</div>
