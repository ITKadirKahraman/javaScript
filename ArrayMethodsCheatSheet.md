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

4. array.shift()
- Definition: entfernt den ersten Element des Arrays
- Syntax: array.shift();
- Example: 

```javascript
let shiftArray = [1, 2, 3, 4, 5, 6, 7];
let elemet = shiftArray.shift();
console.log(shiftArray); // Output: 2, 3, 4, 5, 6
console.log(elemet); // Output: 1
```

5. array.unshift()
- Definition: fügt am Anfang des Arrays einen oder mehrere neue Elemente hinzu
- Syntax: array.unshift(elementX, ..., elementN);
- Example:

```javascript
let unshiftArray = [1, 2, 3, 4, 5];
let unshiftElement = unshiftArray.unshift(2, 11, 5, 88);
console.log(unshiftArray); // Output: 2, 11, 5, 88, 1, 2, 3, 4, 5
console.log(unshiftElement); // Output: Length of Array
```

6. array.concat()
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
let newA = mapArray.filter(element => element % 2 == 0); 
console.log(newA) // [12, 54, 100]
```
