// Write your JavaScript code here
let number = "";
let ans = 0;
document.querySelectorAll(".numbers").forEach(function (element) {
  element.addEventListener("click", function () {
    number += this.textContent.trim();
    document.getElementById("display").textContent = number;
  });
});
document.getElementById("dot").addEventListener("click", function () {
  const last = number.charAt(number.length - 1);
  if (!(last === ".")) {
    number += ".";
    document.getElementById("display").textContent = number;
  }
});
document.getElementById("plus").addEventListener("click", function () {
  const last = number.charAt(number.length - 1);
  if (
    !(
      last === "+" ||
      last === "-" ||
      last === "/" ||
      last === "*" ||
      last === ""
    )
  ) {
    number += "+";
    document.getElementById("display").textContent = number;
  }
});
document.getElementById("minus").addEventListener("click", function () {
  const last = number.charAt(number.length - 1);
  if (
    !(
      last === "+" ||
      last === "-" ||
      last === "/" ||
      last === "*" ||
      last === ""
    )
  ) {
    number += "-";
    document.getElementById("display").textContent = number;
  }
});
document.getElementById("multiply").addEventListener("click", function () {
  const last = number.charAt(number.length - 1);
  if (
    !(
      last === "+" ||
      last === "-" ||
      last === "/" ||
      last === "*" ||
      last === ""
    )
  ) {
    number += "*";
    document.getElementById("display").textContent = number;
  }
});
document.getElementById("divide").addEventListener("click", function () {
  const last = number.charAt(number.length - 1);
  if (
    !(
      last === "+" ||
      last === "-" ||
      last === "/" ||
      last === "*" ||
      last === ""
    )
  ) {
    number += "/";
    document.getElementById("display").textContent = number;
  }
});
document.getElementById("back").addEventListener("click", function () {
  number = number.slice(0, -1);
  document.getElementById("display").textContent = number;
});
document.getElementById("clear").addEventListener("click", function () {
  number = "";
  document.getElementById("display").textContent = number;
});
document.getElementById("clearEntry").addEventListener("click", function () {
  number = "";
  ans = 0;
  document.getElementById("display").textContent = number;
  document.getElementById("result").textContent = 0;
});
document.getElementById("equals").addEventListener("click", function () {
  ans = 0;
  ans = parseFloat(eval(number).toFixed(10));
  document.getElementById("result").textContent = ans;
  number = "";
});
document.getElementById("ans").addEventListener("click", function () {
  number += ans;
  document.getElementById("display").textContent = number;
});
