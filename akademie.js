/*
******* DEVELOPER AKADEMIE
*/

/*
****** JAVASCRIPT
*/

/*
****** BASICS
*/

// Funktion mit Ausgabe

function helloWorld() {
    let begin = "Hello World!";
    console.log(begin);
}

helloWorld();
// Funktion aufrufen

// Variablen

let firstVaiableAge = 33; // veränderbar
const constantValue = 100; // unveränderbar
console.log(firstVaiableAge, constantValue);
firstVaiableAge = 34;
console.log(firstVaiableAge);

// Datentypen (data types)

let myString = 'das ist ein Text'; // url sind auch nur Strings
let myNumber = 14.1234;
let myFloat = 32.0;
let myInt = 41;
let myBooleanT = true;
let myBooleanF = false;
let myArray = ['Kadir', 'Kahraman']; // eine Liste mit Elemente
let myObject = {age: 33, height: 177}; // Objekte ist eine Liste mit key:value Paaren

// Strings und Numbers

let myDivision = 10/5;
let myMulti = 10*5;
let myAddition = 10+5;
let mySubtraktion = 10-5;
let myModulo = 11%2;
let myPotenz = 2**4;
console.log(myPotenz);

let myContent = "Hallo, ich bin neu hier!";
let myFirstName = "Kadir";
let myLastName = "Kahraman";
let myFullName = "Kadir " + "Kahraman";
let myAllName = "Kadir" - " Kahraman"; // NaN (Not a Number) Strings zusammen fügen nur mit +
console.log(myAllName);

let myPersonObject = {firstName: "Kadir", lastName: "Kahraman", age: 33, wealth: 1000000};
console.log(myPersonObject);

let myCombinationPlus = 5 + "5"; // wird als String umgewandelt
let myCombinationMinus = "5" - 5; // Reihenfolge egal Ergebnis ist gleich
let myCombinationMal = "5" * 5; // auch 
let myCombinationDivision = "5" / 5; // auch
let myCombinationModulo = "5" % 2; // auch
console.log(myCombinationModulo);
// Mathematische Operatoren funktionieren nur mit Numbers bei Strings kommt NaN


// Boolean und Operatoren ("&&" und "||" und "!")
let myTrue = true;
let myFalse = false;
let myNotTrue = !true;
let myNotFalse = !false;
console.log(myTrue);

myTrue = !myTrue; // WICHTIG VARIABELN neue VALUES zuweisen
myFalse = !myFalse;
console.log(myTrue);

let myOrBooleanTest = true || true; // true
let myOrBooleanTest2 = true || false; // true
let myOrBooleanTest3 = false || true; // true
let myOrBooleanTest4 = false || false; // false
let myOrBooleanTest5 = myTrue || myFalse; // true
let myOrBooleanTest6 = myTrue || myTrue; // false
let myOrBooleanTest7 = myTrue || myTrue || true; // true
console.log(myOrBooleanTest7);
// ist eine Variable true innerhalb der Verketttung, dann ist alles true
// bei || Operator

let myAndBooleanTest = true && true; // true
let myAndBooleanTest2 = true && false; // false
let myAndBooleanTest3 = false && true; // false
let myAndBooleanTest4 = false && false; // false
let myAndBooleanTest5 = myTrue && myFalse; // false
let myAndBooleanTest6 = myTrue && myTrue && true; // false
console.log(myAndBooleanTest4);
// ist eine oder alle Variablen false innerhalb der Verketttung, dann ist alles false
// bei && Operator

console.log(" ");
console.log(true && false); // false
console.log(true || false); // true
console.log(false && true); // false
console.log(true && (false || true)); // true
console.log((true && false) || true); // true
console.log(!(true && false)); // true
console.log(!(false || true)); // false
console.log(!(true && (false || true))); // false
console.log((true && !(false || true)) || (false && (true || false))); // false
console.log((true || !(false && true)) && (!(true || false) || (false && true))); // false
console.log(" ");


// Boolean und Operatoren ("==" "<=" "===" usw.)

let myGleichBooleanTest = 45 == 45; // true
let myGleichBooleanTest2 = 45 == 55; // false
let myGleicherTypeBooleanTest = "45" === "45"; // true
let myGleicherTypeBooleanTest2 = "12" === "5"; // false
console.log(myGleicherTypeBooleanTest2);
// == gleicher Value ; === gleicher Value mit selben Datentype

let myGroeßerBooleanTest = 25 > 20; // true
let myGroeßerBooleanTest2 = 19 > 355; // false
let myGroeßerGleichBooleanTest = 25 >= 25; // true
let myGroeßerGleichBooleanTest2 = 19 >= 21; // false
console.log(myGroeßerGleichBooleanTest2);
// value1 > value2 oder value >= value2

let myKleinerBooleanTest = 33 < 21; // false
let myKleinerBooleanTest2 = 29 < 55; // true
let myKleinerGleichBooleanTest = 25 <= 25; // true
let myKleinerGleichBooleanTest2 = 25 <= 20; // false
console.log(myKleinerGleichBooleanTest);
// value1 < value2 oder value <= value2

let myNotGleichBooleanTest = 33 != 21; // true
let myNotGleichBooleanTest2 = 29 != 29; // false
let myNotGleichBooleanTest3 = "25" != "25"; // false
let myNotGleichBooleanTest4 = "25" != "20"; // true
console.log(myNotGleichBooleanTest3);
// != nicht der selbe value: true ansonsten false

let myNotGleichGleichBooleanTest = 11 !== 11; // false
let myNotGleichGleichBooleanTest2 = 15 !== 11; // true
let myNotGleichGleichBooleanTest3 = "15" !== "20" // true;
let myNotGleichGleichBooleanTest4 = "35" !== "35" // false;
let myNotGleichGleichBooleanTest5 = 15 !== "20" // false;
console.log(myNotGleichGleichBooleanTest5);
// !== nicht der selbe value sowie der selbe type: true ansonsten false


console.log(" ");
console.log(5 <= 10); // true
console.log(15 == 15); // true
console.log(20 > 10); // true
console.log((7 <= 7) == (5 < 10)); // true
console.log((10 > 5) == (3 < 2)); // false
console.log((12 >= 8) && (8 < 9)); // true
console.log((3 == 3) || (10 > 20)); // true
console.log((6 != 6) || (15 <= 20)); // true
console.log((7 < 5) == !(10 >= 10)); // true
console.log((4 >= 4) && (8 < 15) && (3 == 3)); // true 
console.log(" ");
