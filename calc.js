"use strict";

let results = Array();

function add() {
  let i1 = parseInt(document.getElementById("firstNumber").value);
  let i2 = parseInt(document.getElementById("secondNumber").value);
  let i3 = i1 + i2;
  document.getElementById("result").value = i1 + i2;
  results.push(`${i1} + ${i2} = ${i3}`);
}

function minus() {
  let i1 = parseInt(document.getElementById("firstNumber").value);
  let i2 = parseInt(document.getElementById("secondNumber").value);
  let i3 = i1 - i2;
  document.getElementById("result").value = i1 - i2;
  results.push(`${i1} - ${i2} = ${i3}`);
  //results.push(document.getElementById("result").value = i1 - i2);
}

function divide() {
  let i1 = parseInt(document.getElementById("firstNumber").value);
  let i2 = parseInt(document.getElementById("secondNumber").value);
  let i3 = i1 / i2;
  document.getElementById("result").value = i1 / i2;
  results.push(`${i1} / ${i2} = ${i3}`);
  //results.push(document.getElementById("result").value = i1 / i2);
}

function multiply() {
  let i1 = parseInt(document.getElementById("firstNumber").value);
  let i2 = parseInt(document.getElementById("secondNumber").value);
  let i3 = i1 * i2;
  document.getElementById("result").value = i1 * i2;
  results.push(`${i1} * ${i2} = ${i3}`);
  //results.push(document.getElementById("result").value = i1 * i2);
}

function power() {
  let i1 = parseInt(document.getElementById("firstNumber").value);
  let i2 = parseInt(document.getElementById("secondNumber").value);
  let i3 = Math.pow(i1,i2);
  document.getElementById("result").value = Math.pow(i1,i2);
  results.push(`${i1} ^ ${i2} = ${i3}`);
  //results.push(document.getElementById("result").value = i1 * i2);
}

function clearValues() {
  document.getElementById("firstNumber").value = null;
  document.getElementById("secondNumber").value = null;
  document.getElementById("result").value = null;
  alert("Values Cleared");
}

function showHistory() {
  if (results.length === 0) {
    alert("empty history");
  } else {
    document.getElementById("hist").innerHTML = results.join("<br>");
  }
}
function clearHistory() {
  results = [];
  alert("History Cleared");
  document.getElementById("hist").innerHTML = results.join("<br>");
}
