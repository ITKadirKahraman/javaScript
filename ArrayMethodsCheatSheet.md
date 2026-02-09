ARRAY METHODS CHEAT SHEET 

1. array.push()
- Definition: füght am Ende des Arrays einen oder mehrere neue Elemente hinzu und verlängert dadurch die länge des Arrays
- Syntax: array.push(elementX,...,elementX);
- Example: 

```javascript
let pushArray = [1, 2, 3, 4, 5, 6, 7];
pushArray.push(1);
console.log(pushArray); // Output: 1, 2, 3, 4, 5, 6, 7, 1
```
2. array.pop()
- Definition: entfernt am Ende des Arrays das letzte Element
- Syntax: array.pop()
- -Example:

```javascript
let popArray = [1, 2, 3, 4, 5, 6, 7];
let lastElemet = popArray.pop();
console.log(popArray); // Output: 1, 2, 3, 4, 5, 6
console.log(lastElemet); // Output: 7
```

3. array.shift()
- Definition: entfernt den ersten Element des Arrays
- Syntax: array.shift();
- Example: 

```javascript
let shiftArray = [1, 2, 3, 4, 5, 6, 7];
let elemet = shiftArray.shift();
console.log(shiftArray); // Output: 2, 3, 4, 5, 6
console.log(elemet); // Output: 1
```

4. array.unshift()
- Definition: fügt am Anfang des Arrays einen oder mehrere neue Elemente hinzu
- Syntax: array.unshift(elementX, ..., elementN);
- Example:

```javascript
let unshiftArray = [1, 2, 3, 4, 5];
let unshiftElement = unshiftArray.unshift(2, 11, 5, 88);
console.log(unshiftArray); // Output: 2, 11, 5, 88, 1, 2, 3, 4, 5
console.log(unshiftElement); // Output: Length of Array
```

5. array.concat()
- Definition: the elements from first element and later from second array
- Syntax: array.unshift(arrayX, ..., arrayN);
- Example:

```javascript
let concatArray = [13, 12, 43, 54, 75];
let concatElement = concatArray.concat(unshiftArray);
console.log(concatElement); // Output: 13, 12, 43, 54, 75, 2, 11, 5, 88, 1, 2, 3, 4, 5
```

6. array.slice()
- Definition: call all elements after the parameter or call all elements from start and end counter
- Syntax: array.slice(start, (end));
- Example:

```javascript
let sliceArray = [13, 12, 43, 54, 75];
let sliceArray2 = [13, 12, 43, 54, 75];
let sliceElement = sliceArray.slice(1);
let sliceElement2 = sliceArray2.slice(1, 4);
console.log(sliceElement); // Output: 12, 43, 54, 75
console.log(sliceElement2); // Output: 12, 43, 54
```

7. array.splice()
- Definition: start from element and chance the element with items
- Syntax: array.splice(start, ..., deleteCounter, itemX, itemN);
- Example:

```javascript
let spliceArray = [13, 12, 43, 54, 75, 100, 231];
spliceArray.splice(1, 3, 'aa', 'bb', 'cc');
console.log(spliceArray); // Output: 13, aa, bb, cc, 75, 100, 231
```

8. array.forEach()
- Definition: Man nutzt forEach(), wenn man etwas mit jedem Element machen, aber kein neues Array erzeugen möchte (z. B. ausgeben, zählen, verändern von externen Variablen)
- Syntax: array.forEach(callback(currentValue [, index [, array]])[, thisArg])
- Example:

```javascript
let arrowArray = [13, 12, 43, 54, 75, 100, 231];
spliceArray.forEach(element => {
    console.log(element * 2)
}); // Output: 26, 24, 86, 108, 150, 200, 462
```

9. array.map()
- Definition: create a new array whit the results from updates the elements 
- Syntax: array.map(callback(currentValue [, index [, array]])[, thisArg]);
- Example:

```javascript
let mapArray = [13, 12, 43, 54, 75, 100, 231];
let newArr = mapArray.map(element => element * 2); 
console.log(newArr) // [26, 24, 86, 108, 150, 200, 462]
```

10. array.filter()
- Definition: checkt all elements and create a new array whit the filter function
- Syntax: array.filter(callback(currentValue [, index [, array]])[, thisArg]);
- Example:

```javascript
let filterArray = [13, 12, 43, 54, 75, 100, 231];
let filterArray2 = ["Anna", "Lia", "Sarah", "Melek"];
let filterA = filterArray.filter(element => element % 2 == 0);
let filterA2 = filterArray2.filter(filterArray2.length >= 4);
console.log(filterA); // [12, 54, 100]
console.log(filterA2); // [Anna, Sarah, Melek]
```

11. array.find()
- Definition: create a new array whit the first find perfect match element
- Syntax: array.filter(callback(currentValue [, index [, array]])[, thisArg]);
- Example:

```javascript
let findArray = [13, 12, 43, 54, 75, 100, 231];
let findA = findArray.find(element => element > 10); 
console.log(findA) // Output: [13]
```

12. array.findIndex()
- Definition: create a new array whit the first find perfect match element and the output is the index from element
- Syntax: array.findIndex(callback(currentValue [, index [, array]])[, thisArg]);
- Example:

```javascript
let findIndexArray = [13, 12, 43, 54, 75, 100, 231];
let findIndexA = findArray.findIndex(element => element > 10); 
console.log(findIndexA) // Output: [0]
```

13. array.every()
- Definition: the returns is a boolean value the tests all elements from array pass the test by implemented by the provided function 
- Syntax: array.every(callback(currentValue [, index [, array]])[, thisArg])
- Example:

```javascript
let everyArray = [13, 12, 43, 54, 75, 100, 231];
let everyA = everyArray.every(element => element > 20); 
console.log(everyA) // Output: false
let everyArray2 = [43, 54, 75, 100, 231];
let everyA2 = everyArray2.every(element => element > 20); 
console.log(everyA2) // Output: true
```

14. array.some()
- Definition: the returns is a boolean value the tests all elements from array pass the test by implemented by the provided function 
- Syntax: array.some(callback(currentValue [, index [, array]])[, thisArg])
- Example:

```javascript
let someArray = [13, 12, 43, 54, 75, 100, 231];
let someA = someArray.some(element => element > 20); 
console.log(someA) // Output: false
let someArray2 = [43, 54, 75, 100, 231];
let someA2 = someArray2.some(element => element > 75); 
console.log(someA2) // Output: true
```

15. array.includes()
- Definition: Determines whether an array includes a certain value among its entries, returning true or false as appropriate. 
- Syntax: array.includes(valueToFind [, fromIndex])
- Example:

```javascript
let includesArray = [13, 12, 43, 54, 75, 100, 231];
let includesA = includesArray.includes(20); 
console.log(includesA) // Output: false
let includesArray2 = [43, 54, 75, 100, 231];
let includesA2 = includesArray2.includes(231); 
console.log(includesA2) // Output: true
```

16. array.indexOf()
- Definition: Returns the first index at which a given element can be found in the array, or -1 if it is not present. 
- Syntax: array.indexOf(searchElement [, fromIndex])
- Example:

```javascript
let indexOfArray = [13, 12, 43, 54, 75, 100, 231];
let indexOfA = indexOfArray.indexOf(54); 
console.log(indexOfA) // Output: 3
let indexOfArray2 = [43, 54, 75, 100, 231];
let indexOfA2 = indexOfArray2.indexOf(231); 
console.log(indexOfA2) // Output: 4
```

17. array.reduce()
- Definition: Executes a reducer function on each element of the array, resulting in a single output value.
- Syntax: array.reduce(callback(accumulator, currentValue[, index, array])[, initialValue])
- Example:

```javascript
let reduceArray = [13, 12, 43, 54, 75, 100, 231];
let reduceSum = reduceArray.reduce((element,curr ) => element + curr); 
console.log(reduceSum) // Output: 528
let reduceArray2 = [43, 54, 75, 100, 231];
let reduceSum2 = reduceArray2.reduce((element, curr) => element + curr); 
console.log(reduceSum2) // Output: 503
```

18. array.reduceRight()
- Definition: Similar to reduce(), but applies the function from right to left instead of left to right.
- Syntax: array.reduceRight(callback(accumulator, currentValue[, index, array])[, initialValue])
- Example:

```javascript
let reduceArray = [13, 12, 43, 54, 75, 100, 231];
let reduceSum = reduceArray.reduce((element,curr ) => element + curr); 
console.log(reduceSum) // Output: 528
let reduceArray2 = [43, 54, 75, 100, 231];
let reduceSum2 = reduceArray2.reduce((element, curr) => element + curr); 
console.log(reduceSum2) // Output: 503
```

19. array.join()
- Definition: Creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.
- Syntax: array.join(separator)
- Example:

```javascript
let joinArray = ['Hi', 'my', 'name', 'is', 'Kadir', 'Kahraman.'];
let joinSting = joinArray.join(' '); 
console.log(joinSting) // Output: Hi my name is Kadir Kahraman
```

20. array.reverse()
- Definition: Reverses the elements of an array in place. The first array element becomes the last, and the last array element becomes the first.
- Syntax: array.reverse()
- Example:

```javascript
let reverseArray = ['Hi', 'my', 'name', 'is', 'Kadir', 'Kahraman.'];
let reverseSting = reverseArray.reverse(); 
console.log(reverseSting) // Output: Kahraman. Kadir is name my Hi
```

21. array.sort()
- Definition: Sorts the elements of an array in place and returns the sorted array.
- Syntax: array.sort([compareFunction])
- Example:

```javascript
let sortArray = [13, 12, 1, 4, 15, 31, 44];
let sortA = sortArray.sort((a, b) => a - b); 
console.log(sortA); // Output: [1, 4, 12, 13, 15, 31, 44]
let sortArray2 = [1, 3, 12, 18, 4, 17, 26, 25];
let sortA2 = sortArray2.sort((a, b) => a - b);
console.log(sortA2); // Output: [1, 3, 4, 12, 17, 18, 25, 26]
```

22. array.toString()
- Definition: Sorts the elements of an array in place and returns the sorted array.
- Syntax: array.toString()
- Example:

```javascript
let toStringArray = [13, 12, 1, 4, 15, 31, 44];
let toStringA = toStringArray.toString(); 
console.log(toStringA); // Output: '1', '4', '12', '13', '15', '31', '44'
```

23. array.flat()
- Definition: Returns a string representing the specified array and its elements.
- Syntax: array.flat([depth])
- Example:

```javascript
let flatArray = [13, 12, [1, 4, [15, 31, 44]]];
let flatA = flatArray.flat(2); 
console.log(flatA); // Output: [13, 12, 1, 4, 15, 31, 44]
```

24. array.flatMap()
- Definition: First maps each element using a mapping function, then flattens the result into a new array.
- Syntax: array.flatMap(callback(currentValue[, index[, array]])[, thisArg])
- Example:

```javascript
let flatMapArray = [13, 12, 1, 4, 15, 31, 44];
let flatMapA = flatMapArray.flatMap(a => [x * 3]); 
console.log(flatMapA); // Output: [39, 36, 3, 12, 45, 63, 132]
```

25. array.length()
- Definition: Return the value of elements in the array.
- Syntax: array.length
- Example:

```javascript
let lengthArray = [13, 12, 1, 4, 15, 31, 44];
let lengthA = lengthArray.length; 
console.log(lengthA); // Output: 7
```

26. array.isArray()
- Definition: Determines whether the passed value is an Array.
- Syntax: Array.isArray(value)
- Example:

```javascript
let isArrayA = [13, 12, 1, 4, 15, 31, 44];
console.log(Array.isArray(isArrayA)); // Output: 7
```

27. array.fill()
- Definition: Fills all the elements of an array from a start index to an end index with a static value.
- Syntax: array.fill(value[, start[, end]])
- Example:

```javascript
let fillA = [13, 12, 1, 4, 15, 31, 44];
fillA.fill(1, 3, 6);
console.log(fillA); // Output: 13, 12, 1, 1, 1, 1, 44
```

28. array.keys()
- Definition: Returns a new Array Iterator object that contains the keys for each index in the array.
- Syntax: array.keys()
- Example:

```javascript
let fillA = [13, 12, 1, 4, 15, 31, 44];
fillA.fill(1, 3, 6);
console.log(fillA); // Output: 13, 12, 1, 1, 1, 1, 44
```

29. array.values()
- Definition: Returns a new Array Iterator object that contains the values for each index in the array.
- Syntax: array.values()
- Example:

```javascript
let valueA = ['13', '12', '1', '4', '15', '31', '44'];
let iterator2 = valueA.values();
for(let value of iterator2 ) {
    console.log(value);     
}
```

30. array.entries()
- Definition: Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
- Syntax: array.entries()
- Example:

```javascript
let valueA = ['13', '12', '1', '4', '15', '31', '44'];
let iterator2 = valueA.values();
for(let value of iterator2 ) {
    console.log(value);     
}
```

31. array.from()
- Definition: Creates a new, shallow-copied Array instance from an array-like or iterable object.
- Syntax: Array.from(arrayLike[, mapFn[, thisArg]])
- Example:

```javascript
let fromA = 'Hello';
let fA = Array.from(fromA);
console.log(fA);
```

32. array.copyWithin()
- Definition: Copies a sequence of array elements within the array.
- Syntax: Array.from(arrayLike[, mapFn[, thisArg]])
- Example:

```javascript
let fromA = 'Hello';
let fA = Array.from(fromA);
console.log(fA);
```

33. array.at()
- Definition: Creates a new, shallow-copied Array instance from an array-like or iterable object.
- Syntax: Array.from(arrayLike[, mapFn[, thisArg]])
- Example:

```javascript
let atA = [10, 20, 30, 40, 50, 60];
console.log(atA.at(3)); // Output: 40
```

34. array.lastIndexOf()
- Definition: Creates a new, shallow-copied Array instance from an array-like or iterable object.
- Syntax: Array.from(arrayLike[, mapFn[, thisArg]])
- Example:

```javascript
let lastIndexOfA = [2, 9, 9, 4, 6];
let index = lastIndexOfA.lastIndexOf(9);
console.log(index);
```

35. array.toLocaleString()
- Definition: Creates a new, shallow-copied Array instance from an array-like or iterable object.
- Syntax: Array.from(arrayLike[, mapFn[, thisArg]])
- Example:

```javascript
let localA = [1, new Date(), 'a', { key: 'value' }];
let str = localA.toLocaleString();
console.log(str);
```

36. array.of()
- Definition: Creates a new Array instance with a variable number of arguments.
- Syntax: Array.of(element0[, element1[, ...[, elementN]]])
- Example:

```javascript
let arr = Array.of(1, 2, 3, 4, 5);
console.log(arr); // Output: [1, 2, 3, 4, 5]
```
