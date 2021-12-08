const apikey = "73c2a35d2697d8abe38864d35ad785ba";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const url = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getWeatherByLocation(city) {
  const resp = await fetch(url(city), {
    origin: "cors",
  });
  const respData = await resp.json();

  console.log(respData);

  addWeatherToPage(respData);
}

function addWeatherToPage(data) {
  const temp = KtoC(data.main.temp);
  const tempMin = KtoC(data.main.temp_min);
  const tempMax = KtoC(data.main.temp_max);

  const weather = document.createElement("div");
  weather.classList.add("weather");

  weather.innerHTML = `
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" />
        <h2><small>Current: </small>${temp}°C</h2>
        <h2><small>Lowest Today: </small>${tempMin}°C</h2>
        <h2><small>Highest Today: </small>${tempMax}°C</h2>
    `;

  main.innerHTML = "";

  main.appendChild(weather);
}

function KtoC(K) {
  return (K - 273.15).toFixed(2);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = search.value;

  if (city) {
    getWeatherByLocation(city);
  }
});
