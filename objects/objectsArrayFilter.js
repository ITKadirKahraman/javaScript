// JSON Array functions

let objectArrayFunction = [
    {
        "name":"Kadir",
        "isAGoodGuy": true,
    },
    {
        "name":"Melek",
        "isAGoodGuy": false,
    },
    {
        "name":"Sertan",
        "isAGoodGuy": true,
    },
    {
        "name":"Murat",
        "isAGoodGuy": false,
    },
    {
        "name":"Mertan",
        "isAGoodGuy": false,
    },
    {
        "name":"Mihrima",
        "isAGoodGuy": false,
    },
    {
        "name":"Ann",
        "isAGoodGuy": true,
    },
    {
        "name":"Lia",
        "isAGoodGuy": true,
    },
    {
        "name":"Gülay",
        "isAGoodGuy": true,
    },
    {
        "name":"Sinan",
        "isAGoodGuy": true,
    },
    {
        "name":"Mustagfa",
        "isAGoodGuy": false,
    },
];

console.log("");
let filterName = objectArrayFunction.filter((element) => element.name.length >= 4);
let filterBoolean = objectArrayFunction.filter((element) => element["isAGoodGuy"] == false);
console.log(filterName);
console.log(filterBoolean);
