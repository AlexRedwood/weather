function isLSavailable() {
  var test = "test";
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}

function saveToLocalStorage(city) {
  localStorage.setItem("city", city);
}

export { isLSavailable, saveToLocalStorage };
