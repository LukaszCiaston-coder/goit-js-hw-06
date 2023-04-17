'use strict';
const input = document.getElementById('validation-input');
const dataLength = input.dataset.length;
input.addEventListener('blur', () => {
    if (input.value.length === Number(dataLength)){
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid')
        input.classList.remove('valid')
    }
});

