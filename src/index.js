import "./styles.css";

var inputs = document.querySelectorAll(".color-box>input");
var range = document.querySelector(".booth-slider");

//as the value in the input changes, do something.
inputs.forEach(input => {
  input.addEventListener("input", handleInputChange);
});

range.addEventListener("input", handleSlider);

function handleInputChange(event) {
  let value = event.target.value;
  let inputId = event.target.parentNode.id;
  let inputBg = `--bg-${inputId}`;
  document.documentElement.style.setProperty(inputBg, value);
}

function handleSlider(event) {
  let value = event.target.value;
  document.documentElement.style.setProperty("--slider", value);
}
