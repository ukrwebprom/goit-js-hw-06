const categoryItem = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItem.length}`);

categoryItem.forEach(category => {
    console.log(`Category: ${category.querySelector('h2').textContent}`);
    console.log(`Elements: ${category.querySelectorAll('li').length}`);
})
