
let myArray = ['Aysel', 'Heydarova', 25, 1994, undefined, false, '34', true];


function filterBy(Array, datatype) {
    let newArray = Array.filter((item) => typeof(item) !== datatype);
    return newArray;
 }

console.log(filterBy(myArray, 'string'));

console.log(filterBy(myArray, 'number'));



