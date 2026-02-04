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
    return days;;
}

console.log(monthDays("Januar"));

