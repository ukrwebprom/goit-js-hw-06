function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

const onBtnClick = () => {
  const rndColor = getRandomHexColor();
  spanEl.textContent = rndColor;
  document.body.style.backgroundColor = rndColor;
};
btn.addEventListener("click", onBtnClick);
