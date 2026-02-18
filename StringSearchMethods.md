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
- Definition: gibt die Länge des Strings zurück
- Syntax: string.search();
- Example: 

```javascript
let text = "AHZSGNYHSUIWQKSMSB";
let laenge = text.length;
console.log(laenge); // Output: 18
console.log(text.length; // Output: 18
```

4. string.match()
- Definition: Gibt den Zeichen der angegeben Position zurück
- Syntax: string.charAt();
- Example: 

```javascript
let text2 = "Hello World!";
let zeichen = text2.charAt(0);
let zeichen2 = text2.charAt(6);
console.log(zeichen+ " " + zeichen2); // Output: H W
console.log(text.charAt(5) + " " + text2.charAt(2)); // Output: N l
```

5. string.matchAll()
- Definition: gibt die Länge des Strings zurück
- Syntax: string.length;
- Example: 

```javascript
let text = "AHZSGNYHSUIWQKSMSB";
let laenge = text.length;
console.log(laenge); // Output: 18
console.log(text.length; // Output: 18
```

6. string.includes()
- Definition: Gibt true zurück, wenn der Value mit Zeichenkette übereinstimmt
- Syntax: string.includes("string");
- Example: 

```javascript
let text28 = "Kadir Kahraman, a Developer a good Developer";
let includes = text28.startsWith("Kahraman");
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
