const apikey = "73c2a35d2697d8abe38864d35ad785ba";

const url = (location) => 
  `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`;


async function getWeatherByLocation(location) {
  const resp = await fetch(url(location), {
    origin: "cors",
  });
  const respData = await resp.json();

  addWeatherToPage(respData)
}


