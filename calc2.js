"use strict";

function add() {
    let i1 = Number(document.querySelector("#firstNumber").value);
    let i2 = Number(document.querySelector("#secondNumber").value);
    let i3 = document.querySelector("#result");
    i3.value = i1 + i2;
  }

function multiply() {
  let i1 = Number(document.querySelector("#firstNumber").value);
  let i2 = Number(document.querySelector("#secondNumber").value);
  let i3 = document.querySelector("#result");
  i3.value = i1 * i2;
}

function divide() {
  let i1 = Number(document.querySelector("#firstNumber").value);
  let i2 = Number(document.querySelector("#secondNumber").value);
  let i3 = document.querySelector("#result");
  i3.value = i1 / i2;
}

function minus() {
    let i1 = Number(document.querySelector("#firstNumber").value);
    let i2 = Number(document.querySelector("#secondNumber").value);
    let i3 = document.querySelector("#result");
    i3.value = i1 - i2;
  }

  function clear() {
    document.querySelector("#firstNumber").value = null;
    document.querySelector("#secondNumber").value = null;
    document.querySelector("#result").value = null;
    alert("Values Cleared");
  }

/*let btn = document.querySelector('button');
btn.addEventListener()*/


