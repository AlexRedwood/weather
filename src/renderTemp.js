import countries from "i18n-iso-countries";
import domElements from "./domElts.js";

countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const capitalize = (text) => {
  if (typeof text !== "string") return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
};

function applyDegreeAndRound(temperature) {
  return `${Math.round(temperature)} \u00B0C`;
}

function changeDisplay(elements, option) {
  // params array and string
  elements.forEach((element) => {
    element.style.display = `${option}`;
  });
}

function renderNotFound() {
  changeDisplay(
    [
      domElements.country,
      domElements.additionalWeather,
      domElements.temp,
      domElements.description,
      domElements.photoContainer,
    ],
    "none"
  );

  domElements.city.textContent = "City is not found";
}

function renderTemp(data) {
  if (data === undefined) return renderNotFound();

  domElements.additionalWeather.style.display = "flex";
  changeDisplay(
    [
      domElements.country,
      domElements.temp,
      domElements.description,
      domElements.photoContainer,
    ],
    "block"
  );

  domElements.city.textContent = capitalize(data.name);
  domElements.country.textContent = countries.getName(data.sys.country, "en");
  domElements.temp.textContent = applyDegreeAndRound(data.main.temp);
  domElements.description.textContent = capitalize(data.weather[0].description);
  domElements.feelsTemp.textContent = `Feels like: ${applyDegreeAndRound(
    data.main.feels_like
  )}`;
  domElements.humidity.textContent = `Humidity: ${data.main.humidity} %`;
}

export { renderTemp, renderNotFound };
