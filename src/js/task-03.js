const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector('ul');
images.forEach((image) => {
  const li = `<li>
    <img src="${image.url}" alt="${image.alt}">
    </li>`;
  list.insertAdjacentHTML('beforeend', li);
  const gallery = document.querySelector(".gallery")
  gallery.style.display = 'flex';
  gallery.style.flexWrap = 'wrap';
  gallery.style.justifyContent = 'center';
  gallery.style.listStyle = 'none';
  const items = document.querySelectorAll('li');
  items.forEach((item) => {
    item.style.flexBasis = '50%';
    item.style.padding = '15px';
    item.style.boxSizing = 'border-box';
    const img = item.querySelector('img');
    img.style.maxWidth = '100%';
    img.style.height = 'auto';
    img.style.borderRadius = '10%';
    
  })
  
});


console.log(list)