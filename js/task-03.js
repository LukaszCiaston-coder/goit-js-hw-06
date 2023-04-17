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
  gallery.style.padding = '60px 30px 60px 30px';
  gallery.style.justifyContent = 'center';
  gallery.style.height = '100vh';
  gallery.style.background = 'linear-gradient(to bottom,#141272, #00a78e)';
  gallery.style.listStyle = 'none';
  const items = document.querySelectorAll('li');
  items.forEach((item) => {
    item.style.flexBasis = '30%';
    item.style.padding = '30px';
    item.style.boxSizing = 'border-box';
    const img = item.querySelector('img');
    img.style.maxWidth = '100%';
    img.style.height = '250px';
    img.style.borderRadius = '10%';
    img.style["webkitBoxReflect"] ='below 0px linear-gradient(transparent,transparent,#0004)';
  })
  
});


console.log(list)