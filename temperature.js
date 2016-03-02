"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
  var result;
  var temp = original.value;
  var regexp = /\s*([-+]?\d+(?:\.\d*)?)\s*[e]?\s*([+-]?\d*)\s*([Cc](?:elsius)?|[Ff](?:a|ar|ahrenheit)?)\b/;

  var m = temp.match(regexp);

  if (m) {
    var num = m[1];
    var ep = m[2];
    var type = m[3];
    var res = type.toUpperCase();
    num = parseFloat(num);
    if (res == 'C' || res ==  'CELSIUS') {
      result = (num * Math.pow(10,ep) * 9/5)+32;
      result = result.toFixed(1)+" Farenheit"
    }
    else {
      result = (num * Math.pow(10,ep) - 32)*5/9;
      result = result.toFixed(1)+" Celsius"
    }
    converted.innerHTML = result;
  }
  else {
    converted.innerHTML = "ERROR! intenta algo como '-4.2C'";
  }
  return false;
}
