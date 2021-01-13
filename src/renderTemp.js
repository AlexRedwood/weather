const capitalize = (text) => {
  if (typeof text !== "string") return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
};

function applyDegreeAndRound(temperature) {
  return `${Math.round(temperature)} \u00B0C`;
}

function renderNotFound() {
  const city = document.getElementById("city");
  const temp = document.getElementById("temp");
  const minmax = document.getElementById("minmax");
  const feelsTemp = document.getElementById("feels-temp");
  const humidity = document.getElementById("humidity");

  city.textContent = "City is not found";
  temp.textContent = "";
  minmax.textContent = "";
  feelsTemp.textContent = "";
  humidity.textContent = "";
}

function renderTemp(data) {
  if (data === undefined) return renderNotFound();
  // render temperature from open weather api data
  const city = document.getElementById("city");
  const temp = document.getElementById("temp");
  const minmax = document.getElementById("minmax");
  const feelsTemp = document.getElementById("feels-temp");
  const humidity = document.getElementById("humidity");

  city.textContent = capitalize(data.name);
  temp.textContent = applyDegreeAndRound(data.main.temp);
  minmax.textContent = `Min: ${applyDegreeAndRound(
    data.main.temp_min
  )} Max: ${applyDegreeAndRound(data.main.temp_max)}`;
  feelsTemp.textContent = `Feels like: ${applyDegreeAndRound(
    data.main.feels_like
  )}`;
  humidity.textContent = `Humidity: ${data.main.humidity} %`;
}

export { renderTemp };
