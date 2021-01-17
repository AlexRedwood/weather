import { getWeatherDataFromCity } from "./getWeatherData";
import { getWeatherImg } from "./getWeatherGif";
import { renderTemp } from "./renderTemp";
import { isLSavailable, saveToLocalStorage } from "./localStorage";

function getRandom1to20() {
  return Math.floor(Math.random() * 20);
}

function renderWeatherImg(url) {
  const img = document.getElementById("weather");
  img.src = url;
}

async function renderWeather(city) {
  const data = await getWeatherDataFromCity(city)
    .then((data) => {
      renderTemp(data);
      return data;
    })
    .catch((err) => console.log(err));
  if (data === undefined) return "No gif for no city";

  let weatherGifs = await getWeatherImg(data.weather[0].description);
  renderWeatherImg(weatherGifs.data[getRandom1to20()].images.original.url);

  // save city name to local storage
  if (isLSavailable()) saveToLocalStorage(data.name);

  return data;
}

export { renderWeather };
