function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxesContainer = document.querySelector('#boxes');
const boxAmount = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

const makeABox = (index) => {
  const box = document.createElement('div');
  box.style.backgroundColor = getRandomHexColor();
  box.style.width = `${30*index}px`;
  box.style.height = `${30*index}px`;
  return box;
}

const createBoxes = (amount) => {
  if(amount > 0) {
    let boxes = [];
    for(let i=1; i<=amount; i++) {
      boxes.push(makeABox(i))
    }
    boxesContainer.append(...boxes);
  }
}

const onCreateBtnClick = () => {
  createBoxes(boxAmount.value);
}
const onDestroyBtnClick = () => {
  boxesContainer.innerHTML = "";
}
createBtn.addEventListener('click', onCreateBtnClick);
destroyBtn.addEventListener('click', onDestroyBtnClick);