function getCityData(city) {
  const apiKey = "2a3f1aef41947a293f81d100088be3c3";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  function not2xxresponse(response) {
    return Promise.reject(`Error: ${response.status}.`);
  }

  const data = fetch(url, { mode: "cors", credentials: "omit" }) // get http data (Response object)
    .then((response) => {
      return response.ok ? response.json() : not2xxresponse(response);
    })
    .catch((err) => console.log(err));

  return data;
}

export { getCityData };
