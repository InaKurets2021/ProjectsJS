const calcEntry = document.querySelector("#mainInput");
const inputPart = document.querySelector(".weather");
const inputField = inputPart.querySelector("input");
const locationBtn = inputPart.querySelector("button");

//Блок с погодой
const weatherBlock = document.querySelector("#weather");

async function loadWeather() {
  calcEntry.focus();
  const cityName = inputField.value;

  weatherBlock.innerHTML = `
		<div class="weather__loading">
			<div class="lds-ripple"><div></div><div></div></div>
		</div>`;

  const server = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=522f7ec766b55c89fccbc47a4e7a72c0`;

  const response = await fetch(server, {
    method: "GET",
  });
  const responseResult = await response.json();

  if (response.ok) {
    getWeather(responseResult);
  } else {
    weatherBlock.innerHTML = responseResult.message;
  }

  inputField.value = "";
}

function getWeather(data) {
  //обрабатываем видимые данные
  const location = data.name;
  const temp = Math.round(data.main.temp);
  const feelsLike = Math.round(data.main.feels_like);
  const weatherStatus = data.weather[0].main;
  const weatherIcon = data.weather[0].icon;

  //HTML шаблон
  const template = `
		<div class="weather-result__header">
	   <div class="weather-result__main">
		<div class="weather-result__city">${location}</div>
		<div class="weather-result__status">${weatherStatus}</div>
	</div>
		<div class="weather-result__icon">
		<img src="https://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherStatus}">
	</div>
 </div>
<div class="weather-result__temp">${temp}</div>
<div class="weather-result__feels-like">Feels like: ${feelsLike}</div>`;
  weatherBlock.innerHTML = template;
}

locationBtn.addEventListener("click", () => loadWeather());
