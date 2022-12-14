const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  const inputVal = event.currentTarget.value;

  spanEl.textContent = inputVal != "" ? inputVal : "Anonymous";
});
