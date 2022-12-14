const controlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const onChange = (event) => {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
}

controlEl.addEventListener('input', onChange);
