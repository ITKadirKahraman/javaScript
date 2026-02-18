STRING METHODS CHEAT SHEET 

1. string.indexOf()
- Definition: Gibt die Position des Strings zurück und bei kein gesuchten String gibt er den -1 Value zurück
- Syntax: string.indexOf("string") OR string.indexOf();
- Example: 

```javascript
let text24 = "Kadir Kahraman, a Developer a good Developer";
let indexOf = text24.indexOf("Developer");
let indexOf2 = text24.indexOf();
console.log(indexOf, indexOf2); // 18 -1
```

2. string.lastIndexOf()
- Definition: Gibt die Position des letzten Strings zurück vom gesuchten Value
- Syntax: string.lastIndexOf("Developer");
- Example: 

```javascript
let text25 = "Kadir Kahraman, a Developer a good Developer";
let lastIndexOf = text25.lastIndexOf("Developer");
let lastIndexOf2 = text25.lastIndexOf();
console.log(lastIndexOf, lastIndexOf2); // 35 -1
```

3. string.search()
- Definition: The two methods, indexOf() and search(), are equal?

        They accept the same arguments (parameters), and return the same value?

        The two methods are NOT equal. These are the differences:
        
        The search() method cannot take a second start position argument.
        The indexOf() method cannot take powerful search values (regular expressions).
        You will learn more about regular expressions in a later chapter.
- Syntax: string.search();
- Example: 

```javascript
let text31 = "Kadir Kahraman, a Developer a good Developer";
let search = text30.search("good");
console.log(search); // Output: 30
```

4. string.match()
- Definition: 
- Syntax: string.charAt();
- Example: 

```javascript
let text30 = "Kadir Kahraman, a Developer a good Developer";
let match = text30.match("per");
console.log(match); // Output: 24
```

5. string.matchAll()
- Definition: 
- Syntax: string.matchAll();
- Example: 

```javascript
let text29 = "Kadir Kahraman, a Developer a good Developer";
let matchAll = text29.matchAll("Kahraman");
console.log(matchAll); // Output: true
```

6. string.includes()
- Definition: Gibt true zurück, wenn der Value mit Zeichenkette übereinstimmt
- Syntax: string.includes("string");
- Example: 

```javascript
let text28 = "Kadir Kahraman, a Developer a good Developer";
let includes = text28.includes("Kahraman");
console.log(startsWith); // Output: true
```

7. string.endsWith()
- Definition: endet die Zeichenkette mit folgenden String gib true zurück ansonsten false
- Syntax: string.endsWith("string");
- Example: 

```javascript
let text26 = "John Doe";
let endWith = text26.endsWith("Doe");
console.log(endWith); // Output: true
```

8. string.startsWith()
- Definition: Gibt den Zeichen der angegeben Position zurück
- Syntax: string.startsWith("string");
- Example: 

```javascript
let text27 = "John Doe";
let startsWith = text27.startsWith("John");
console.log(startsWith); // Output: true
```
