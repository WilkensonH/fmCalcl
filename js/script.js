

let runningTotal = 0; // keep track of running number
let buffer = "0"; //resetting
let prevOperator = null; // keep track of  previous operator
const screen = document.querySelector(".screen"); // inherent by reRender ƒ();

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
    default:
      handleMath(value);
      break;
  }
}
function handleMath(value) {
  const intBuffer = parseInt(buffer);
  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }

  prevOperator= value;

  buffer = "0";
}
function flushOperation(intBuffer) {
  if (prevOperator === "+") {
    runningTotal += intBuffer;
  } else if (prevOperator === "-") {
    runningTotal -= intBuffer;
  } else if (prevOperator === "x") {
    runningTotal *= intBuffer;
  } else {
    runningTotal /= intBuffer;
  }
}
function reRender(value) {
  screen.innerText = buffer;
}
