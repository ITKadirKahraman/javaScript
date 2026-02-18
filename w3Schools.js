/*
****** STRING REFERENCE
*/

// length

let text = "AHZSGNYHSUIWQKSMSB";
let laenge = text.length;
console.log(laenge); // Output: 18
console.log(text.length); // Output: 18

// charAt()

let text2 = "Hello World!";
let zeichen = text2.charAt(0);
let zeichen2 = text2.charAt(6);
console.log(zeichen+ " " + zeichen2); // Output: H W
console.log(text.charAt(5) + " " + text2.charAt(2)); // Output: N l

// charCodeAt()

let text3 = "Hello World!";
let zeichenIndex = text3.charCodeAt(6);
console.log(zeichenIndex); // Output: 87 Index in UTF-16
console.log(text3.charCodeAt(11)); // Output: 33 Index in UTF-16

// codePointAt()

let text4 = "Hello World!";
let code = text3.codePointAt(0);
console.log(code); // Output: 72
console.log(text4.codePointAt(8)); // Output: 114

// at()

let text5 = "Hello World!";
let at = text3.at(4);
console.log(at); // Output: o
console.log(text5[8]); // Output: r

// concat()

let text6 = "Hello World!";
let text7 = "I am Kadir Kahraman, a Developer.";
let concat = text6.concat(" ", text7);
console.log(concat); // Output: Hello World! I am Kadir Kahraman, a Developer.
console.log(text6.concat(" ", text7)); // Output: Hello World! I am Kadir Kahraman, a Developer.

// slice()

let text8 = "I am Kadir Kahraman, a Developer.";
let slice = text8.slice(5);
console.log(slice); // Output: Kadir Kahraman, a Developer.
console.log(text8.slice(5, 18)); // Output: Kadir Kahraman
console.log(text8.slice(-10)); // Output: Developer

// substring()

let text9 = "I am Kadir Kahraman, a Developer.";
let substring = text8.substring(5);
let substring2 = text8.substring(5, 19);
console.log(substring); // Output: Kadir Kahraman, a Developer.
console.log(substring2); // Output: Kadir Kahraman

// toUpperCase()

let text10 = "I am Kadir Kahraman, a Developer.";
let toUpperCase = text10.toUpperCase();
console.log(toUpperCase); // Output: I AM KADIR KAHRAMAN, A DEVELOPER.
console.log(text6.toUpperCase()); // Output: HELLO WORLD!

// toLowerCase()

let text11 = "I am Kadir Kahraman, a Developer.";
let toLowerCase = text11.toLowerCase();
console.log(toLowerCase); // Output: i am kadir kahraman, a developer.
console.log(text6.toLowerCase()); // Output: hello world!

// trim()

let text12 = "   Kadir Kahraman, a Developer.     ";
let trim = text12.trim();
console.log(trim); // Output: Kadir Kahraman, a Developer.
console.log(text12.trim()); // Output: Kadir Kahraman, a Developer.

// trimStart()

let text13 = "    Kahraman, a    ";
let trimStart = text13.trimStart();
console.log(trimStart); // Output: Kahraman, a    
console.log(text13.trimStart()); // Kahraman, a    

// trimEnd()

let text14 = "    Kadir Kahraman, a Developer.    ";
let trimEnd = text14.trimEnd();
console.log(trimEnd); // Output:      Kadir Kahraman, a Developer.
console.log(text14.trimEnd()); // Output:     Kadir Kahraman, a Developer.

// padStart()

let text15 = "10";
let padded = text15.padStart(4, "J");
console.log(padded); // Output: JJ10
console.log(text15.padStart(10, "TS")); // Output: TSTSTSTS10

let numb = 5;
let text16 = numb.toString();
let padded2 = text16.padStart(10, "PY");
console.log(padded2); // Output: PYPYPYPYP5

// padEnd()

let text17 = "10";
let padded3 = text17.padEnd(4, "J");
console.log(padded3); // Output: 10JJ
console.log(text17.padEnd(10, "AS")); // Output: 10ASASASAS

let numb2 = 5;
let text18 = numb.toString();
let padded4 = text18.padEnd(10, "Y");
console.log(padded4); // Output: 5YYYYYYYYY

// repeat()

let text19 = "Developer ";
let repeat = text19.repeat(4);
console.log(repeat); // Output: Developer Developer Developer Developer 
console.log(text19.repeat(10)); 
// Output: Developer Developer Developer Developer Developer Developer Developer Developer Developer Developer 

// replace()

let text20 = "Kadir Kahraman, a Developer.";
let text21 = "Kadir Kahraman, a Developer a good Developer";
let replace = text20.replace("Developer.", "Cyber Security Engineer.");
console.log(replace); // Output: Kadir Kahraman, a Cyber Security Engineer.
console.log(text20.replace("Developer.", "AI Engineer.")); // Output: Kadir Kahraman, a AI Engineer.
console.log(text20);

// replaceAll()

let text22 = "Kadir Kahraman, a Developer a good Developer";
let replaceALL = text22.replaceAll("Kadir", "kadir");
console.log(replaceALL); // kadir Kahraman, a Developer a good Developer

// split()

let text23 = "Kadir Kahraman a Developer a good Developer";
let split = text23.split("");
let split2 = text23.split(" , ");
console.log(split); // Output: (43) ['K', 'a', 'd', 'i', 'r', ' ', 'K', 'a', 'h', 'r', 'a', 'm', 'a', 'n', ' ', 'a', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', ' ', 'a', ' ', 'g', 'o', 'o', 'd', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
