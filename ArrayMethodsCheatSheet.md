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
- Definition: call all elements after the parameter
- Syntax: array.slice(start, (end));
- Example:

```javascript
let sliceArray = [13, 12, 43, 54, 75];
let sliceArray2 = [13, 12, 43, 54, 75];
let sliceElement = sliceArray.slice(1);
let sliceElement2 = sliceArray2.slice(3);
console.log(sliceElement);
console.log(sliceElement2);
```
