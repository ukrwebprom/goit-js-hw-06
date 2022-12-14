const inputEl = document.querySelector('#validation-input');

const onBlur = (event) => {
    const inputStyle = event.currentTarget.value.length === Number(event.currentTarget.dataset.length)?
    'valid' : 'invalid';
    inputEl.classList.add(inputStyle);
}
const onFocus = () => {
    inputEl.classList.remove('valid');
    inputEl.classList.remove('invalid');
}

inputEl.addEventListener('blur', onBlur);
inputEl.addEventListener('focus', onFocus);