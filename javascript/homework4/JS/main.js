
let myArray = ['Aysel', 'Heydarova', 25, 1994, undefined, false, '34', true];


let newArray = [];

function filterBy(Array, datatype) {
     newArray = Array.filter((item) => {
     return typeof(item) !== datatype;
 });
}

filterBy(myArray,'string');

filterBy(myArray, 'number');

console.log(newArray);

