"use strict"
const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailInput = event.target.elements.email;
    const passwordInput = event.target.elements.password;
    if (!emailInput.value || !passwordInput.value) {
        alert('Please fill in all fields!');
        return;
    }
    const formData = {
        email: emailInput.value,
        password: passwordInput.value
    };
    console.log(formData);
   loginForm.reset();
    
});