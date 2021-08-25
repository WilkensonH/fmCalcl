00;
console.log("00:", 00);

let runningTotal = 0;
let buffer = "0";
let prevOperator;
const screen = document.querySelector(".screen");

document
  .querySelector(".btn-container")
  .addEventListener("click", function (e) {
    btnClick(e.target.innerText);
  });

function btnClick(value) {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNum(value);
  }
  reRender();
}

function handleNum(value) {
  if (buffer === "0") {
    buffer = value;
  } else {
    buffer += value;
  }
  
}

function handleSymbol(value) {
  switch (value) {
    case "C":
      buffer = "0";
      runningTotal = null;
      return;
    case "=":
      if (prevOperator === null) {
        return;
      }
      flushOperation(parseInt(buffer));
      prevOperator = null;
      buffer = "" + runningTotal;
      runningTotal = 0;
      return;
    case "←":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      return;
      default:handleMath(value);
      break;
  }
}

function reRender(value) {
  screen.innerText = buffer;
}
