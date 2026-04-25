// findIndex()
/*
08 - Aufgabe: findIndex-Methode
Aufgabe
Mache das Gleiche wie mit Filter auch mit findIndex(), um den Index von Justus heraus zu finden.
*/
let object = [
    {
        "name": "Max",
        "isGoodGuy": true
    },
    {
        "name": "Peter",
        "isGoodGuy": false,
    },
    {
        "name":"Arnold",
        "is_a_good_guy": true 
    },
    {
        "name":"Justus",
        "is_a_good_guy": true 
    },
    {
        "name":"Bombur",
        "is_a_good_guy": false
    }
];

let fi = object.findIndex((element) => element.name == "Justus");
console.log(fi);
