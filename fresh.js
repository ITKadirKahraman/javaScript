let goalBusiness = [
    {no: 1, name: "Kahraman House of Brands", acronym: "KHOB", industry: "ECommerce", annualRevenue: 2500, revenue: 0},
    {no: 2, name: "owl compass", acronym: "OW", industry: "Cyber Security", annualRevenue: 0, revenue: 0},
    {no: 3, name: "Home Evim Zuhause - Grundstück und Immobilien", acronym: "HEZ", industry: "Real Estate Industry ", annualRevenue: 0, revenue: 0},
];

function monthy( monthy) {
    let days = 0;
    switch(monthy){
        case 1:
        case 3:
        case 5:
        case 6:
        case 8:
            days = 31;
        case 4: 
        case 7:
        case 9:
        case 10:
        case 11:
        case 12:
            days = 30;
        case 2:
            days = 29;
    }

    return days;
}

function income() {
    let number = 0;
    if(number == monthy()){

    }
}

let arrayA = [4, 8, 2, 3, 1, 5, 9, 15, 10, 12, 11, 6, 7, 13, 14];

function loop(array) {
    for(let i = 0; i < arrayA.length; i++){
        for(let y = 0; y < arrayA - 1; y++){
            if(array[y] > array[y + 1]){
                let temp = array[y];
                array[y] = array[y + 1];
                array[y + 1] = temp;
            }
        }
    }

    return array;
}

console.log(loop(arrayA));


function cutIt(arr){
  let short = arr[0];
  let ar = [];
  
  for(let i = 0; i < arr.length; i++){
    if(short.length > arr[i].length){
      short = arr[i];
    }
  }
  
  for(let i = 0; i < arr.length; i++){
    ar.push(arr[i].slice(0, short.length));
  }
  
  return ar;
}


function firstToLast(str,c){
  let first = str.indexOf(c);
  let last = str.lastIndexOf(c);
  
  if(first === -1){
    return -1;
  }
  
  if(first === last){
    return 0;
  }
  
  return last - first;
}


function animal(obj){
  return "This" + " " + obj.color + " " + obj.name + " " + "has" + " " + obj.legs + " " + "legs.";
}
