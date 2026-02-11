/*
****** Training JS #1: create your first JS function and print "Hello World!"
*/
function helloWorld(){
  let str = "Hello World!";
  console.log(str);
}

/*
****** Training JS #2: Basic data types--Number
*/

let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1(){
  let a = v1,   
      b = v1;   
  return a + b;
}

//value is 100
function equal2(){
  let a =  v4, //set number value to a
      b =  v2; //set number value to b
  return a - b;
}

function equal3(){
  let a =  v1, //set number value to a
      b =  v5; //set number value to b
  return a * b;
}

function equal4(){
  let a =  v4, //set number value to a
      b =  v5; //set number value to b
  return a / b;
}

function equal5(){
  let a =  v6, //set number value to a
      b =  v3; //set number value to b
  return a % b;
}

/*
****** Training JS #3: Basic data types--String
*/

var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
  //select some variable to combine "Dad"
  return d1+a2+d2;
}
function Bee(){
  //select some variable to combine "Bee"
  return b1+e2+e2;
}
function banana(){
  //select some variable to combine "banana"
  return b2+a2+n2+a2+n2+a2;
}

//answer some questions if you finished works above
function answer1(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer2(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer3(){
  //the answer should be "yes" or "no"
  return "yes";
}


/*
****** Training JS #4: Basic data types--Array
*/

function getLength(arr){
  //return length of arr
  return arr.length;
}
function getFirst(arr){
  //return the first element of arr
  return arr[0];
}
function getLast(arr){
  //return the last element of arr
  return arr[arr.length - 1];
}
function pushElement(arr){
  var el=1;
  //push el to arr
  arr.push(el)
  return arr;
}
function popElement(arr){
  //pop an element from arr
  arr.pop()
  return arr;
}

/*
****** Training JS #5: Basic data types--Object
*/

function animal(obj){
  return 'This ' + obj.color + ' ' + obj.name + ' has ' + obj.legs + ' legs.';
}

/*
****** Training JS #6: Basic data types--Boolean and conditional statements
*/

function trueOrFalse(val){
  if (!val) return 'false';             
  else return 'true';
}

/*
****** Training JS #7: if..else and ternary operator
*/

function saleHotdogs(n){
  return n < 5 ? 100 * n : n >= 5 && n < 10 ? 95 * n : 90 * n;
}

/*
****** Training JS #8: Conditional statement--switch
*/

function howManydays(month){
  var days;
  switch (month){
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        days = 31;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        days = 30;
        break;
      case 2:
        days = 28;
        break;
  }
  return days;
}

/*
****** Training JS #9: loop statement --while and do..while
*/

function padIt(str,n){
  return n == 1 ? "*a" : n == 2 ? "*a*" : n == 3 ? "**a*" : n == 4 ? "**a**" : "***a**";
}

function padIt(str,n){
  //coding here
  while (n <= 5) 
  {
    if(n == 1) 
    {
      str = "*a";
      return str;
    } else if(n == 2) 
    {
      str = "*a*";
      return str;
    } else if(n == 3)
    {
      str = "**a*";
      return str;
    } else if(n == 4)
    {
      str = "**a**";
      return str;
    }
    else if(n == 5)
    {
      str = "***a**";
      return str;
    }
  }
}

function padIt(str,n){
  //coding here
  i = 0;
  while (i < n) {
    if(i % 2 == 0) {
      str = "*" + str;
    }else {
      str = str + "*";
    }
    i++;
  }
  return str;
}

/*
****** Training JS #10: loop statement --for
*/

function pickIt(arr){
  let odd = [], even = [];
  //coding here
  for(let i = 0; i < arr.length; i++){
    arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i]);
  }
  return [odd, even];
}

/*
****** Training JS #11: loop statement --break,continue
*/

function grabDoll(dolls){
  var bag=[];
  //coding here
  for(let i = 0; i < dolls.length; i++){
    if(dolls[i] !== "Hello Kitty" && dolls[i] !== "Barbie doll"){
      continue;
    }
    bag.push(dolls[i]);
    
    if(bag.length === 3){
      break;
    }
  }
  return bag;
}

/*
****** Training JS #12: loop statement --for..in and for..of
*/

function giveMeFive(obj){
  //coding here
  let value = [];
  for(let key in obj) {
    if(key.length === 5){
      value.push(key);
    }
    
    if(obj[key].length === 5) {
      value.push(obj[key]);
    }
  }
  return value;
}

/*
****** Training JS #13: Number object and its properties
*/

