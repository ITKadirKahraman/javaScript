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
let id = [];

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

// first and last name publish 
// Array rückwärts ausgeben

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

function  ternaryOperator(n) {
    return n < 5 ? 100 : n >= 5 && n < 10 ? 95 : 90;
}

console.log(ternaryOperator(8));
