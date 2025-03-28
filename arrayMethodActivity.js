/*
BELEN, Mariane I.
BSCS 1B
MIDTERM EXAM - DSA
arrayMethodActivity.js
*/

//create arrays and store the given names.
let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
//create another array use .concat() to join the 2 arrays
let array = arr1.concat(arr2);
//log the joined array
console.log(array);

//create array fruits and store the given fruits
let fruits = ["Banana", "Orange", "Apple", "Mango"];
//use.pust to add kiwi at the end of the list of fruits
fruits.push("Kiwi");
//log the fruits
console.log(fruits);

//create an array and store the given numbers
let array1 = [1, 2, 3];
//use .unshift() to add the 4 & 5 in thebeginning of tthe list
array1.unshift(4,5);
//log the array
console.log(array1);

//from the fruits array use .pop() to remove the last element inthe list
fruits.pop();
//log the fruits 
console.log(fruits);

//create an array & store the given numbers
let array2 = [1, 2, 3];
//use .shift to remove the 1st element in the list
array2.shift();
//log the array
console.log(array2);

//from the fruits array use .sort() to sort the fruits
fruits.sort();
//log the fruits
console.log(fruits);

//create another variable & use .slice() to create new array having a portion of the fruits
let fruits2 = fruits.slice(0, 3);
//log the fruits2
console.log(fruits2);

//create an array containing months
let months = ["February", "March", "December"];
//use .splice to add
months.splice(0, 0, "January");
//use .splice to remove
months.splice(3, 1);
//log the mpnths
console.log(months);