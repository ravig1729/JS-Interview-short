 // Closures
 function outer(){
    let a=10;
    function inner(){
      console.log(a);
    } 
    inner();
  } 
  outer();

  //self-invoking or IIFE
  (function () { 
    console.log("Good Morning1")
 })();

  //setTimeout
setTimeout(function () {
    console.log("Good morning2");
  }, 2000);

  //setInterval
setInterval(function () {
    console.log("Good morning3");
  }, 2000);

 //Spread Operator
 let x;
 x=[1,2,3,4];
 y=x;
 y=[...x];

 //strict mode..

 //in normal we can write like ..
 ac=10;
 console.log("value of ac ", ac);

 //in strict mode.
 "use strict"
 bc = 10;
 console.log(bc);  // it shows error , becoz var is not defined.

 //Promises:
 function print(num){
  return new Promise ((resolve, reject) =>{
     if(num % 2 == 0){
      resolve("condn satisfied");
     }
     else{
      reject("condn unsatisfied");
     }
  })
 }
 print(23).then((response)=>{
  console.log(response);
 }).catch((error) =>{
  console.log(error);
 }).finally(()=>{
  console.log("Promise completed successfully.")
 })

 //Generator Function:
 function * generatorFunction() { // Line 1
  console.log('This will be executed first.');
  yield 'Hello, ';   // Line 2
  console.log('I will be printed after the pause');  
  yield 'World!';
}
const generatorObject = generatorFunction(); // Line 3
console.log(generatorObject.next().value); // Line 4
console.log(generatorObject.next().value); // Line 5
console.log(generatorObject.next().value); // Line 6

//Bubbling:
document.getElementById("child").addEventListener("click", function () {
              console.log("You clicked the Child element!");
          }, false);
   
document.getElementById("parent").addEventListener("click", function () {
              console.log("You clicked the parent element!");
          }, false);

//callback
function printA(){
  console.log("A");
}
function printB(){
  console.log("B");
}
printA()
printB()
printA(printB());

//useRef
import { useState,useEffect,  useRef, Fragment } from "react";

function UseRef() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <Fragment>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </Fragment>
  );
}

export default UseRef;

//Negative Infinity:
function checkNumber(smallNumber) {
  if (smallNumber === Number.NEGATIVE_INFINITY) {
    return 'Process number as -Infinity';
  }
  return smallNumber;
}

console.log(checkNumber(-Number.MAX_VALUE));
// expected output: -1.7976931348623157e+308

console.log(checkNumber(-Number.MAX_VALUE * 2));
// expected output: "Process number as -Infinity"

//Left Triangle Pattern
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

//Remove characters from an array.
let char = ['A', 'B', 'A', 'C', 'B'];
let uniqueChar = [...new Set(char)];
console.log(uniqueChar);

//Fetch data from https://jsonplaceholder.typicode.com/todos
fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => response.json())
  .then(json => console.log(json))

//Find Repeated Numbers from Array
const arr = [1, 2, 1, 3, 4, 3, 5];
const repeat = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
console.log(repeat(arr));

//Find the vowels in string ?
var Str = 'RaviViswanadh'
console.log(Str.split("").filter(x =>(x=='a' || x=='e' || x=='i' || x=='o'|| x=='u')));
//console.log(Str.match(/[aeiou]/gi))