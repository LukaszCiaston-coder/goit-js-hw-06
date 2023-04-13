'use strict';
function countCategoriesByld() {
    const categories = document.getElementsByTagName(`h2`);
    let sum = 0
    for (let i = 0; i < categories.length; i++){
        sum += 1;
    }
    console.log(`Number of categories: ${sum}`);
};

countCategoriesByld(`categories`);