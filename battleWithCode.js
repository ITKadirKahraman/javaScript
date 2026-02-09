let person = 
[
    {firstName: "Kadir", lastName: "Kahraman", bornYear: 1993, city: "Münster"},
    {firstName: "Melek", lastName: "Cosgun", bornYear: 1994, city: "Müchen"},
    {firstName: "Mihrima Nur", lastName: "Kahraman", bornYear: 2012, city: "Münster"},
    {firstName: "Sertan", lastName: "Cosgun", bornYear: 1998, city: "München"},
]

let firstName = ["Kadir", "Melek", "Mihrima Nur", "Sertan", "Sara", "Günther", "Dirk"];
let lastName = ["Kahraman", "Cosgun", "Kahraman", "Cosgun", "Demir", "Müller", "Zimmermann"];
let numbers = [5, 2, 4, 3, 1, 7, 6, 10, 13, 8, 9, 12, 11];
let reverseNumbers = [52, 22, 14, 33, 12, 71, 6, 10, 13, 28, 19, 12, 11, 1];
let oddEvenNumbers = [5, 2, 4, 3, 1, 7, 6, 10, 13, 8, 9, 12, 11, 52, 22, 14, 33, 12, 71, 6, 10, 13, 28, 19, 12, 11, 1]; 
let odd = [];
let even = [];
let id = [];

/*
****** dubble loop
*/

function duppleLoop() {
    for(let i = 0; i < firstName.length; i++){
        for(y = 0; y < lastName.length; y++){
            let fullName = firstName[i] + " " + lastName[y];
            console.log(fullName);
        }
    }
}

function human() {
    for(let i = 0; i < person.length; i++){
        id = person.length;
        let fullHuman =  person[i];
        console.log("No:" + id + ", " + "Person" + fullHuman);
    }
}

/*
****** bubble sort and call function
*/

function sortNumbers(number) {
    for(let i = 0; i < numbers.length; i++){
        for(let y = 0; y < numbers.length - 1; y++){
            if(number[y] > number[y + 1]){
                let temp = number[y];
                number[y] = number[y + 1];
                number[y + 1] = temp;
            }
        }
    }
    return number;
}

console.log(sortNumbers(numbers));

/*
****** first and last name publish Array rückwärts ausgeben
*/


function fullName() {
    for(let i = 0; i < firstName.length; i++){
        console.log(firstName + " " + lastName);
    }
}

function last() {
    let array = [];
    for(let i = reverseNumbers.length - 1; i >= 0; i--){
        number = reverseNumbers[i];
        array[i + 1] = number;
    }
    return console.log(array);
}

/*
****** function ternary operator and call function 
*/

function  ternaryOperator(n) {
    return n < 5 ? 100 : n >= 5 && n < 10 ? 95 : 90;
}

console.log(ternaryOperator(18));

/*
****** function loop ternary operator array and call function
*/

function oddEven(numbers) {
    for(let i = 0; i < numbers.length; i++){
        numbers[i] % 2 ? odd.push(numbers[i]) : even.push(numbers[i]);
    }
    return [odd, even];
}

console.log(oddEven(oddEvenNumbers));

/*
****** function loop switch case and call function
*/

function monthDays(month) {
    let days = 0;
    switch(month){
        case "Januar":
        case "März":
        case "Mai":
        case "Juli":
        case "August":
        case "Oktober":
        case "Dezember":
            days = 31;
            break;
        case "April":
        case "Juni":
        case "September":
        case "November":
            days = 30;
            break;
        case "Februar":
            days = 28;
            break;
    }
    return days;
}

console.log(monthDays("Januar"));

/*
****** ARRAY METHODS CHEAT SHEET 
*/

/* 
Definition: füght am Ende des Arrays einen oder mehrere neue Elemente hinzu und verlängert dadurch die länge des Arrays
Syntax: array.push(elementX,...,elementX);
Example: 
*/

let pushArray = [1, 2, 3, 4, 5, 6, 7];
pushArray.push(1);
console.log(pushArray); // Output: 1, 2, 3, 4, 5, 6, 7, 1

/* 
Definition: entfernt am Ende des Arrays das letzte Element
Syntax: array.pop();
Example: 
*/ 

let popArray = [1, 2, 3, 4, 5, 6, 7];
let lastElemet = popArray.pop();
console.log(popArray); // Output: 1, 2, 3, 4, 5, 6
console.log(lastElemet); // Output: 7

/* 
Definition: entfernt den ersten Element des Arrays
Syntax: array.shift();
Example: 
*/ 

let shiftArray = [1, 2, 3, 4, 5, 6, 7];
let elemet = shiftArray.shift();
console.log(shiftArray); // Output: 2, 3, 4, 5, 6
console.log(elemet); // Output: 1

/* 
Definition: fügt am Anfang des Arrays einen oder mehrere neue Elemente hinzu
Syntax: array.unshift(elementX, ..., elementN);
Example: 
*/ 

let unshiftArray = [1, 2, 3, 4, 5];
let unshiftElement = unshiftArray.unshift(2, 11, 5, 88);
console.log(unshiftArray); // Output: 2, 11, 5, 88, 1, 2, 3, 4, 5
console.log(unshiftElement); // Output: Length of Array

/* 
Definition: the elements from first element and later from second array
Syntax: array.unshift(arrayX, ..., arrayN);
Example: 
*/ 

let concatArray = [13, 12, 43, 54, 75];
let concatElement = concatArray.concat(unshiftArray);
console.log(concatElement); // Output: 13, 12, 43, 54, 75, 2, 11, 5, 88, 1, 2, 3, 4, 5

/* 
Definition: call all elements after the parameter or call all elements from start and end counter
Syntax: array.slice(start, (end));
Example: 
*/ 

let sliceArray = [13, 12, 43, 54, 75];
let sliceArray2 = [13, 12, 43, 54, 75];
let sliceElement = sliceArray.slice(1);
let sliceElement2 = sliceArray2.slice(1, 4);
console.log(sliceElement); // Output: 12, 43, 54, 75
console.log(sliceElement2); // Output: 12, 43, 54

/*
Definition: start from element and chance the element with items
Syntax: array.splice(start, ..., deleteCounter, itemX, itemN);
Example:
*/ 

let spliceArray = [13, 12, 43, 54, 75, 100, 231];
spliceArray.splice(1, 3, 'aa', 'bb', 'cc');
console.log(spliceArray); // Output: 13, aa, bb, cc, 75, 100, 231

/*
Definition: Man nutzt forEach(), wenn man etwas mit jedem Element machen, aber kein neues Array erzeugen möchte (z. B. ausgeben, zählen, verändern von externen Variablen)
Syntax: array.forEach(callback(currentValue [, index [, array]])[, thisArg])
Example:
*/ 

let arrowArray = [13, 12, 43, 54, 75, 100, 231];
spliceArray.forEach(element => {
    console.log(element * 2)
}); // Output: 26, 24, 86, 108, 150, 200, 462

/*
Definition: checkt all elements and create a new array whit the results from updates the elements 
Syntax: array.map(callback(currentValue [, index [, array]])[, thisArg]);
Example:
*/ 

let mapArray = [13, 12, 43, 54, 75, 100, 231];
let newArr = mapArray.map(element => element * 2); 
console.log(newArr) // Output: [26, 24, 86, 108, 150, 200, 462]

/*
Definition: checkt all elements and create a new array whit the filter function with filter elements 
Syntax: array.filter(callback(currentValue [, index [, array]])[, thisArg]);
Example:
*/ 

let filterArray = [13, 12, 43, 54, 75, 100, 231];
let filterArray2 = ["Anna", "Lia", "Sarah", "Melek"];
let filterA = filterArray.filter(element => element % 2 == 0);
let filterA2 = filterArray2.filter(element => element.length >= 4);
console.log(filterA); // Output: [12, 54, 100]
console.log(filterA2); // Output: [Anna, Sarah, Melek]

/*
Definition: create a new array whit the first find perfect match element
Syntax: array.find(callback(currentValue [, index [, array]])[, thisArg]);
Example:
*/ 

let findArray = [13, 12, 43, 54, 75, 100, 231];
let findA = findArray.find(element => element > 10); 
console.log(findA) // Output: [13]

/*
Definition: create a new array whit the first find perfect match element and the output is the index from element
Syntax: array.findIndex(callback(currentValue [, index [, array]])[, thisArg]);
Example:
*/ 

let findIndexArray = [13, 12, 43, 54, 75, 100, 231];
let findIndexA = findArray.findIndex(element => element > 10); 
console.log(findIndexA) // Output: [0]

/*
Definition: the returns is a boolean value the tests all elements from array pass the test by implemented by the provided function 
Syntax: array.every(callback(currentValue [, index [, array]])[, thisArg])
Example:
*/ 

let everyArray = [13, 12, 43, 54, 75, 100, 231];
let everyA = everyArray.every(element => element > 20); 
console.log(everyA) // Output: false
let everyArray2 = [43, 54, 75, 100, 231];
let everyA2 = everyArray2.every(element => element > 20); 
console.log(everyA2) // Output: true

/*
Definition: Tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value. 
Syntax: array.some(callback(element [, index [, array]])[, thisArg])
Example:
*/ 

let someArray = [13, 12, 43, 54, 75, 100, 231];
let someA = someArray.some(element => element > 20); 
console.log(someA) // Output: false
let someArray2 = [43, 54, 75, 100, 231];
let someA2 = someArray2.some(element => element > 75); 
console.log(someA2) // Output: true

/*
Definition: Determines whether an array includes a certain value among its entries, returning true or false as appropriate. 
Syntax: array.includes(valueToFind [, fromIndex])
Example:
*/ 

let includesArray = [13, 12, 43, 54, 75, 100, 231];
let includesA = includesArray.includes(20); 
console.log(includesA) // Output: false
let includesArray2 = [43, 54, 75, 100, 231];
let includesA2 = includesArray2.includes(231); 
console.log(includesA2) // Output: true

/*
Definition: Returns the first index at which a given element can be found in the array, or -1 if it is not present. 
Syntax: array.indexOf(searchElement [, fromIndex])
Example:
*/ 

let indexOfArray = [13, 12, 43, 54, 75, 100, 231];
let indexOfA = indexOfArray.indexOf(54); 
console.log(indexOfA) // Output: 3
let indexOfArray2 = [43, 54, 75, 100, 231];
let indexOfA2 = indexOfArray2.indexOf(231); 
console.log(indexOfA2) // Output: 4

/*
Definition: Similar to reduce(), but applies the function from right to left instead of left to right.
Syntax: array.reduceRight(callback(accumulator, currentValue[, index, array])[, initialValue])
Example:
*/ 

let reduceArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let reduceSting = reduceArray.reduceRight((element,curr ) => element + curr); 
console.log(reduceSting); // Output: gfedcba
let reduceArray2 = ['d', 'e', 'f', 'g'];
let reduceSting2 = reduceArray2.reduceRight((element, curr) => element + curr); 
console.log(reduceSting2); // Output: gfed

/*
Definition: Creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.
Syntax: array.join(separator)
Example:
*/ 

let joinArray = ['Hi', 'my', 'name', 'is', 'Kadir', 'Kahraman.'];
let joinSting = joinArray.join(' '); 
console.log(joinSting); // Output: Hi my name is Kadir Kahraman

/*
Definition: Reverses the elements of an array in place. The first array element becomes the last, and the last array element becomes the first.
Syntax: array.reverse()
Example:
*/ 

let reverseArray = ['Hi', 'my', 'name', 'is', 'Kadir', 'Kahraman.'];
let reverseSting = reverseArray.reverse(); 
console.log(reverseSting); // Output: Kahraman. Kadir is name my Hi

/*
Definition: Sorts the elements of an array in place and returns the sorted array.
Syntax: array.sort([compareFunction])
Example:
*/ 

let sortArray = [13, 12, 1, 4, 15, 31, 44];
let sortA = sortArray.sort((a, b) => a - b); 
console.log(sortA); // Output: [1, 4, 12, 13, 15, 31, 44]
let sortArray2 = [1, 3, 12, 18, 4, 17, 26, 25];
let sortA2 = sortArray2.sort((a, b) => a - b);
console.log(sortA2); // Output: [1, 3, 4, 12, 17, 18, 25, 26]

/*
Definition: Returns a string representing the specified array and its elements.
Syntax: array.flat([depth])
Example:
*/ 

let flatArray = [13, 12, [1, 4, [15, 31, 44]]];
let flatA = flatArray.flat(2); 
console.log(flatA); // Output: [13, 12, 1, 4, 15, 31, 44]

/*
Definition: First maps each element using a mapping function, then flattens the result into a new array.
Syntax: array.flatMap(callback(currentValue[, index[, array]])[, thisArg])
Example:
*/

let flatMapArray = [13, 12, 1, 4, 15, 31, 44];
let flatMapA = flatMapArray.flatMap(x => [x * 3]); 
console.log(flatMapA); // Output: [39, 36, 3, 12, 45, 63, 132]

/*
Definition: First maps each element using a mapping function, then flattens the result into a new array.
Syntax: array.length
Example:
*/

let lengthArray = [13, 12, 1, 4, 15, 31, 44];
let lengthA = lengthArray.length; 
console.log(lengthA); // Output: 7

/*
Definition: Determines whether the passed value is an Array.
Syntax: Array.isArray(value)
Example:
*/

let isArrayA = [13, 12, 1, 4, 15, 31, 44];
console.log(Array.isArray(isArrayA)); // Output: true

/*
Definition: Returns a new Array Iterator object that contains the keys for each index in the array.
Syntax: array.keys()
Example:
*/

let keyA = ['13', '12', '1', '4', '15', '31', '44'];
let iterator = keyA.keys();
for(let key of iterator ) {
    console.log(key);     
}

/*
Definition: Returns a new Array Iterator object that contains the values for each index in the array.
Syntax: array.values()
Example:
*/

let valueA = ['13', '12', '1', '4', '15', '31', '44'];
let iterator2 = valueA.values();
for(let value of iterator2 ) {
    console.log(value);     
}

/*
Definition: Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
Syntax: array.entries()
Example:
*/

let enteryA = ['13', '12', '1', '4', '15', '31', '44'];
let iterator3 = enteryA.entries();
for(let entry of iterator3 ) {
    console.log(entry);     
}

/*
Definition: Creates a new, shallow-copied Array instance from an array-like or iterable object.
Syntax: Array.from(arrayLike[, mapFn[, thisArg]])
Example:
*/

let fromA = 'Hello';
let fA = Array.from(fromA);
console.log(fA);     

/*
Definition: Copies a sequence of array elements within the array.
Syntax: array.copyWithin(target, start[, end])
Example:
*/

let copyWithinA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
copyWithinA.copyWithin(0, 5);
console.log(copyWithinA); // Output: [6, 7, 8, 9, 10, 6, 7, 8, 9, 10]

/*
Definition: Returns the element at the specified index in the array.
Syntax: array.at(index)
Example:
*/

let atA = [10, 20, 30, 40, 50, 60];
console.log(atA.at(3)); // Output: 40

/*
Definition: Returns the last index at which a given element can be found in the array, or -1 if it is not present. Searches the array from a specified index if provided.
Syntax: array.lastIndexOf(searchElement[, fromIndex])
Example:
*/

let lastIndexOfA = [2, 9, 9, 4, 6];
let index = lastIndexOfA.lastIndexOf(9);
console.log(index);

/*
Definition: Returns a string representing the elements of the array. The elements are converted to strings using their toLocaleString methods.
Syntax: array.toLocaleString([locales[, options]])
Example:
*/

let localA = [1, new Date(), 'a', { key: 'value' }];
let str = localA.toLocaleString();
console.log(str);

/*
Definition: Creates a new Array instance with a variable number of arguments.
Syntax: Array.of(element0[, element1[, ...[, elementN]]])
Example:
*/

let arr = Array.of(1, 2, 3, 4, 5);
console.log(arr); // Output: [1, 2, 3, 4, 5]
