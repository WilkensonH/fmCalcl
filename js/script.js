00;
console.log("00:", 00);


document
  .querySelector(".btn-container")
  .addEventListener("click", function (e) {
    document.querySelector(".screen").innerText += e.target.innerText;
    console.log("line 11", "button click", e.target.innerText);
  });

document.querySelector(".clear").addEventListener("click", function (e) {
  const currentScreen = 0;
  console.log("currentScreen:", currentScreen);
});
