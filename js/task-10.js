const controls = document.getElementById('controls'); 
const createButton = controls.querySelector('[data-create]'); 
const destroyButton = controls.querySelector('[data-destroy]'); 
const boxesContainer = document.getElementById('boxes'); 

function createBoxes(amount) {
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div'); 
    box.style.width = `${size}px`; 
    box.style.height = `${size}px`; 
    box.style.backgroundColor = getRandomHexColor(); 
    boxesContainer.append(box); 
    size += 10; 
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = ''; 
}

createButton.addEventListener('click', () => { 
  const amount = Number(document.querySelector('#controls input').value); 
  createBoxes(amount); 
});

destroyButton.addEventListener('click', () => { 
  destroyBoxes(); 
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`; 
}