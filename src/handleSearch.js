import { renderWeather } from "./renderGif";

function handleSearch(event) {
  const input = document.getElementById("city-search");
  const city = input.value;
  renderWeather(city);

  event.preventDefault();
}

export default handleSearch;
