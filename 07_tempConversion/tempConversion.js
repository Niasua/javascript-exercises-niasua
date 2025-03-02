const convertToCelsius = farenheit => parseFloat(((farenheit - 32) * 5/9).toFixed(1));
const convertToFahrenheit = celcius => parseFloat(((celcius * 9/5) + 32).toFixed(1));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
