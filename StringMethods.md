STRING METHODS CHEAT SHEET 

1. string.length
- Definition: gibt die Länge des Strings zurück
- Syntax: string.length;
- Example: 

```javascript
let text = "AHZSGNYHSUIWQKSMSB";
let laenge = text.length;
console.log(laenge); // Output: 18
console.log(text.length; // Output: 18
```

2. string.charAt()
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

3. string.charCodeAt()
- Definition: Gibt den Index der Zeichen im UTF-16 zurück
- Syntax: string.charCodeAt();
- Example: 

```javascript
let text3 = "Hello World!";
let zeichenIndex = text3.charCodeAt(6);
console.log(zeichenIndex); // Output: 87 Index in UTF-16
console.log(text3.charCodeAt(11)); // Output: 33 Index in UTF-16
```

3. string.codePointAt()
- Definition: Get code point value at the first position in a string
- Syntax: string.codePointAt();
- Example: 

```javascript
let text4 = "Hello World!";
let code = text3.codePointAt(0);
console.log(code); // Output: 72
console.log(text4.codePointAt(8)); // Output: 114
```

4. string.at()
- Definition: gibt den Zeichen der Zeichenkette vom angebenen Index zurück
- Syntax: string.at() OR string[];
- Example: 

```javascript
let text5 = "Hello World!";
let at = text3.at(4);
console.log(at); // Output: o
console.log(text5[8]); // Output: r
```

5. string.at()
- Definition: gibt den Zeichen der Zeichenkette vom angebenen Index zurück
- Syntax: string.at() OR string[];
- Example: 

```javascript
let text5 = "Hello World!";
let at = text3.at(4);
console.log(at); // Output: o
console.log(text5[8]); // Output: r
```

6. string.concat()
- Definition: verknüpft mehrere Zeichenketten miteinander
- Syntax: string.concat() OR "TEXT".concat(" ", ... );
- Example: 

```javascript
let text6 = "Hello World!";
let text7 = "I am Kadir Kahraman, a Developer.";
let concat = text6.concat(" ", text7);
console.log(concat);
console.log(text6.concat(" ", text7));
```

7. string.slice()
- Definition: von den vorhandenen String ein String exrahieren mit einem Startposition und eventuell ein Endposition
- Syntax: string.slice(start) OR string.slice(start, end);
- Example: 

```javascript
let text8 = "I am Kadir Kahraman, a Developer.";
let slice = text8.slice(5);
console.log(slice); // Output: Kadir Kahraman, a Developer.
console.log(text8.slice(5, 18)); // Output: Kadir Kahraman
console.log(text8.slice(-10)); // Output: Developer
```

8. string.substring()
- Definition: hat ein Startposition und ein Endposition, wenn Endposition nicht dekleiert wurde, schneidet die Methode den Rest raus
- Syntax: string.substring(start, end) OR string.slice(2, 15);
- Example: 

```javascript
let text9 = "I am Kadir Kahraman, a Developer.";
let substring = text8.substring(5);
let substring2 = text8.substring(5, 19);
console.log(substring); // Output: Kadir Kahraman, a Developer.
console.log(substring2); // Output: Kadir Kahraman
```

9. string.toUpperCase()
- Definition: der ganze String wird in Großbuchstaben geschrieben
- Syntax: string.toUpperCase();
- Example: 

```javascript
let text10 = "I am Kadir Kahraman, a Developer.";
let toUpperCase = text10.toUpperCase();
console.log(toUpperCase); // Output: I AM KADIR KAHRAMAN, A DEVELOPER.
console.log(text6.toUpperCase()); // Output: HELLO WORLD!
```

10. string.toLowerCase()
- Definition: der ganze String wird in Kleinbuchstaben geschrieben
- Syntax: string.toLowerCase();
- Example: 

```javascript
let text10 = "I am Kadir Kahraman, a Developer.";
let toUpperCase = text10.toUpperCase();
console.log(toUpperCase); // Output: I AM KADIR KAHRAMAN, A DEVELOPER.
console.log(text6.toUpperCase()); // Output: HELLO WORLD!
```

11. string.toLowerCase()
- Definition: der ganze String wird in Kleinbuchstaben geschrieben
- Syntax: string.toLowerCase();
- Example: 

```javascript
let text11 = "I am Kadir Kahraman, a Developer.";
let toLowerCase = text11.toLowerCase();
console.log(toLowerCase); // Output: i am kadir kahraman, a developer.
console.log(text6.toLowerCase()); // Output: hello world!
```

12. string.trim()
- Definition: die Leerzeichen des Strings werden entfernt
- Syntax: string.trim();
- Example: 

```javascript
let text12 = "   Kadir Kahraman, a Developer.     ";
let trim = text12.trim();
console.log(trim); // Output: Kadir Kahraman, a Developer.
console.log(text12.trim()); // Output: Kadir Kahraman, a Developer.
```

13. string.trim()
- Definition: die Leerzeichen des Strings werden entfernt
- Syntax: string.trim();
- Example: 

```javascript
let text12 = "   Kadir Kahraman, a Developer.     ";
let trim = text12.trim();
console.log(trim); // Output: Kadir Kahraman, a Developer.
console.log(text12.trim()); // Output: Kadir Kahraman, a Developer.
```

13. string.trimStart()
- Definition: die Leerzeichen am Anfang des Strings werden entfernt
- Syntax: string.trimStart();
- Example: 

```javascript
let text13 = "    Kahraman, a    ";
let trimStart = text13.trimStart();
console.log(trimStart); // Output: Kahraman, a    
console.log(text13.trimStart()); // Kahraman, a    
```

13. string.trimEnd()
- Definition: die Leerzeichen am Anfang des Strings werden entfernt
- Syntax: string.trimEnd();
- Example: 

```javascript
let text14 = "    Kadir Kahraman, a Developer.    ";
let trimEnd = text14.trimEnd();
console.log(trimEnd); // Output:      Kadir Kahraman, a Developer.
console.log(text14.trimEnd()); // Output:     Kadir Kahraman, a Developer.
```

13. string.padStart()
- Definition: Zeichenkette wird x-Mal am Anfang des String(Number umgewandelt in String) hinzugefügt 
- Syntax: string.padStart(length, "string");
- Example: 

```javascript
let text15 = "10";
let padded = text15.padStart(4, "J");
console.log(padded); // Output: JJ10
console.log(text15.padStart(10, "TS")); // Output: TSTSTSTS10

let numb = 5;
let text16 = numb.toString();
let padded2 = text16.padStart(10, "PY");
console.log(padded2);
```

14. string.padEnd()
- Definition: Zeichenkette wird x-Mal am End des String(Number umgewandelt in String) hinzugefügt 
- Syntax: string.padEnd(length, "string");
- Example: 

```javascript
let text17 = "10";
let padded3 = text17.padEnd(4, "J");
console.log(padded3); // Output: 10JJ
console.log(text17.padEnd(10, "AS")); // Output: 10ASASASAS

let numb2 = 5;
let text18 = numb.toString();
let padded4 = text18.padEnd(10, "Y");
console.log(padded4); // Output: 5YYYYYYYYY
```

14. string.padEnd()
- Definition: Zeichenkette wird x-Mal am End des String(Number umgewandelt in String) hinzugefügt 
- Syntax: string.padEnd(length, "string");
- Example: 

```javascript
let text17 = "10";
let padded3 = text17.padEnd(4, "J");
console.log(padded3); // Output: 10JJ
console.log(text17.padEnd(10, "AS")); // Output: 10ASASASAS

let numb2 = 5;
let text18 = numb.toString();
let padded4 = text18.padEnd(10, "Y");
console.log(padded4); // Output: 5YYYYYYYYY
```

15. string.repeat()
- Definition: Zeichenkette wird x-Mal wiedergegeben ohne Veränderungen 
- Syntax: string.repeat(count);
- Example: 

```javascript
let text19 = "Developer ";
let repeat = text19.repeat(4);
console.log(repeat); // Output: Developer Developer Developer Developer 
console.log(text19.repeat(10)); 
// Output: Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer 
```

16. string.replace()
- Definition: Eine neue Zeichenkette wird erstellt mit neuen Values in dem es vorhande ausgewechselt hat  
- Syntax: string.replace("string", "string");
- Example: 

```javascript
let text20 = "Kadir Kahraman, a Developer.";
let text21 = "Kadir Kahraman, a Developer a good Developer";
let replace = text20.replace("Developer.", "Cyber Security Engineer.");
console.log(replace); // Output: Kadir Kahraman, a Cyber Security Engineer.
console.log(text20.replace("Developer.", "AI Engineer.")); // Output: Kadir Kahraman, a AI Engineer.
console.log(text20);
```

16. string.replaceAll()
- Definition:   
- Syntax: string.replaceAll("string", "string");
- Example: 

```javascript
let text22 = "Kadir Kahraman, a Developer a good Developer";
let replaceALL = text22.replaceAll("Kadir", "kadir");
console.log(replaceALL); // kadir Kahraman, a Developer a good Developer
```

16. string.split()
- Definition: Splittet die Zeichenkette je nach Value
- Syntax: string.split("");
- Example: 

```javascript
let text23 = "Kadir Kahraman a Developer a good Developer";
let split = text23.split("");
let split2 = text23.split(" , ");
console.log(split); // Output: (43) ['K', 'a', 'd', 'i', 'r', ' ', 'K', 'a', 'h', 'r', 'a', 'm', 'a', 'n', ' ', 'a', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', ' ', 'a', ' ', 'g', 'o', 'o', 'd', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
```
