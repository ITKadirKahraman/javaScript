let person = 
[
    {firstName: "Kadir", lastName: "Kahraman", bornYear: 1993, city: "Münster"},
    {firstName: "Melek", lastName: "Cosgun", bornYear: 1994, city: "Müchen"},
    {firstName: "Mihrima Nur", lastName: "Kahraman", bornYear: 2012, city: "Münster"},
    {firstName: "Sertan", lastName: "Cosgun", bornYear: 1998, city: "München"},
]

let firstName = ["Kadir", "Melek", "Mihrima Nur", "Sertan", "Sara", "Günther", "Dirk"];
let lastName = ["Kahraman", "Cosgun", "Kahraman", "Cosgun", "Demir", "Müller", "Zimmermann"];

function duppleLoop() {
    for(let i = 0; i < firstName.length; i++){
        for(y = 0; y < lastName.length; y++){
            let fullName = firstName[i] + " " + lastName[y];
            console.log(fullName);
        }
    }
}
