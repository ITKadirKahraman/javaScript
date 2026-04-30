let library = {
    "info": {
        "name": "Stadtbibliothek",
        "location": {
            "city": "Musterstadt",
            "coordinates": {"lat": 48.1351, "lon": 11.582}
        }
    },
    "sections": {
        "fiction": [
            {
                "shelf": 1,
                "book": {
                    "title": "Die Verwandlung",
                    "author": {
                        "name": "Franz Kafka",
                        "born": "1883-07-03",
                        "died": "1924-06-03"
                    },
                    "year": 1915,
                    "status": "ausgeliehen"
                }
            },
            {
                "shelf": 2,
                "book": {
                    "title": "1984",
                    "author": {
                        "name": "George Orwell",
                        "born": "1093-06-25",
                        "died": "1950-01-21"
                    },
                    "year": 1949,
                    "status": "verfügbar"
                }
            }
        ],
        "nonFiction": [
            {
                "shelf": 3,
                "book": {
                    "title": "Eine kurze Geschichte der Zeit",
                    "author": {
                        "name": "Stephen Hawking",
                        "born": "1942-01-08",
                        "died": "2018-03-14"
                    },
                    "year": 1988,
                    "status": "verfügbar"
                }
            }
        ]
    }
}

let city = library.info.location.city;
let available = library.sections.fiction[1].book.status;
console.log(city);
console.log(available);
console.log(library);

function fictionsBooksTitle() {
    const arr = [];
    let fictionsBooks = library.sections.fiction;
    for(let i = 0; i < fictionsBooks.length; i++){
        arr.push(fictionsBooks[i].book.title);
    }
    return arr;  
}

console.log(fictionsBooksTitle());
