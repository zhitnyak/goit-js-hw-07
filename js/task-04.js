const boxButton = {
  container: document.querySelector("#counter"),
  increase: document.querySelector("[data-action='increment']"),
  span: document.querySelector("#value"),
  decrease: document.querySelector("[data-action='decrement']"),
};

let counterValue = 0;
const increment = () => {
  counterValue += 1;

  document.getElementById("value").textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;

  document.getElementById("value").textContent = counterValue;
};
boxButton.increase.addEventListener("click", increment);
boxButton.decrease.addEventListener("click", decrement);
