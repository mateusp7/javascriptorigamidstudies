const regexp = /(\w+),\s(\w+)/gi;
// Rafael, André
// Paulo, Mateus
// Silva, Junior
//$2 $1

const regexp1 = /\d(?=px)/g;
console.log('2em, 4px, 5%, 2px, 1px'.replace(regexp1, 'X'))
