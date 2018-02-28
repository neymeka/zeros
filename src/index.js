module.exports = function getZerosCount(number) {
  var counter = 0;
  while (number) {
  number = (number/5) | 0;
  counter += number;
  }
return counter;
}
