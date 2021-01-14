function getWeatherImg(weather) {
  const key = "FbRxLgSRrEuLkZz89tnuu7fN4ROTajC5";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${weather}&limit=20&offset=0&rating=g&lang=en`;

  const data = fetch(url, {
    mode: "cors",
    credentials: "omit",
  }).then((response) => response.json());

  return data;
}

export { getWeatherImg };
