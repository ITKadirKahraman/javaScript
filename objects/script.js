/*
****** OBJECTS

// Objelt erstllen
let testObject = {
    'key': 'value',
    'key': 'value'
};

// Verschachtelte Objekte

let testObject2 = {
    'key': 'value',
    'key': 'value',
    'subObject': {
        'key': 'value',
        'key': 'value',
        'key': 'value'
    },
    'key': boolean,
};

let testObject3 = {
    'key': 'value',
    'key': 'value',
    'subObject': {
        'key': 'value',
        'key': 'value',
        'key': 'value',
        'subObject2': {
            'key': 'value',
            'key': 'value',
            'key': 'value'
        },
    },
    'key': boolean,
};

// Object zuweisen sowie zugreifen
let variable = subObject;

console.log(testObject2);
console.log(testObject2.key);
console.log(testObject2.subObject.key);
console.log(testObject2['key']);
console.log(testObject2[variable]);
console.table(testObject2['key']);
console.table(testObject2[variable]);
console.table(testObject2.subObject[variable]);
*/
let person = {
    'firstName': 'Kadir',
    'lastName': 'Kahraman',
    'gender': 'men',
    'age': 33,
    'degree': "computer science",
    'job': {
        'title': 'developer',
        'company': 'eule gmbh'
    },
    'goodGuy': true
};

let objKey = 'job';
console.log(person);
console.log(person.firstName);
console.log(person['degree']);
console.log(person[objKey]);
console.table(person);
console.table(person.gender);
console.table(person.job['company'])

// object wiht function and parameter
let person2 = {
    'fullName': 'Kadir Kahraman',
    'age': 33,
    'job': function(string){
        console.log("My Degree is computer science and my job is: " + string);
    }
};

person2.job('Cyber Security Developer.');


// object keys and entries

console.log("");
console.log(Object.entries(person2));
let objKeys = Object.keys(person2);

function ourA(person2, objKeys) {
    let ourArray = [];
    for (let i = 0; i < objKeys.length; i++) {
        ourArray.push(person2[objKeys[i]]);
    }
    return ourArray;
}

console.table(ourA(person2, objKeys));
const result = ourA(person2, objKeys);
console.log(result);
