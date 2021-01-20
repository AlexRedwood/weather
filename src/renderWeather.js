import { renderTemp } from "./renderTemp";
import { isLSavailable, saveToLocalStorage } from "./localStorage";

function getRandom1to20() {
  return Math.floor(Math.random() * 20);
}

function appendGifToDom(url) {
  const img = document.getElementById("weather");
  img.src = url;
}

async function renderWeather(weather) {
  const data = await weather;
  // render temperature, feels like temperature, humidity, city name and country from data
  renderTemp(data.weather);

  // render gif from data
  const gifURL = data.gifURL.data[getRandom1to20()].images.original.url;
  appendGifToDom(gifURL);
  // save city name to local storage
  if (isLSavailable()) saveToLocalStorage(data.weather.name);
  return data;
}

export { renderWeather };
