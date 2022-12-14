const form = document.querySelector('.login-form');

const onSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    if(email.value === "" || password.value === "") {
        return alert('всі поля повинні бути заповнені');
    }
    const formData = {
        email: email.value,
        password: password.value,
    };
    console.log(formData);
    event.currentTarget.reset();
}

form.addEventListener('submit', onSubmit);
