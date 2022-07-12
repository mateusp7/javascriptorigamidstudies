// imgs.forEach(function(item, index, array){
//     // console.log(item, index, array);
// });

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

// console.log(titulos); // HTML COLLECTION
// console.log(titulosArray) // NodeList

titulosArray.forEach(function(item){
    // console.log(item);
});

const imgs = document.querySelectorAll('img');

imgs.forEach((item) => {
    console.log(item)
});

// Particularidades do arrow

imgs.forEach((item) => console.log(item));

