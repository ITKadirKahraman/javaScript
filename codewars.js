let arrr = ["aa", "bcs", "cesdd", "wertz", "a", "poiujkl"];

function cutIt(arr){
  //coding here...
  let short = arrr[0];
  let ar = [];
  for(let i = 0; i < arr.length; i++){
    if(short.length > arr[i].length){
        short = arr[i];
    }
  }  

  for(let i = 0; i < arr.length; i++){
    ar.push(arr[i].slice(0, short.length));
  }

  return [short, ar]; // eigentlich nur ar ohne []
}

console.log(cutIt(arrr));
