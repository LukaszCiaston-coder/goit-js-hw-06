'use strict';
function countCategoriesAndFindHeaderAndCount() {
    const listItems = document.querySelectorAll('ul#categories li.item');
    const numCategories = listItems.length;
    console.log(`Number of categories: ${numCategories}`);
    listItems.forEach((item) => {
        const header = item.querySelector('h2').innerText;
        const count = item.querySelectorAll('li').length;
        console.log(`Category:${header}`) 
        console.log(`Elements: ${count}`)
    });
}

countCategoriesAndFindHeaderAndCount(`listItems`) 