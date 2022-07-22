*** *** Interview Preparation Questions *** ***
## 1. What is Closure ?
  It is a combination of inner fun & lexical scope that was created by inner fun.
  We are able to access varibles inside in a function because of closures.
  Closure will not remember value, it will always remember address location.
  function outer(){
    let a=10;
    function inner(){
      console.log(a);
    } inner();
  } outer();

## 2. Difference between var Let vs const difference .
   •	var declarations are globally scoped or function scoped, while let and const are block scoped.
   •	var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
   •	They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.
   •	While var and let can be declared without being initialized, const must be initialized during declaration.

## 3. What is this keyword?
  The this keyword refers to the current object in a method or constructor. 
  The most common use of the this keyword is to eliminate the confusion between class attributes &
  parameters with the same name(becoz a class attribute is shadowed by a method/constructor parameter).

## 4. What is the Difference between Local and session storage and what do you know about cookies?
   sessionStorage is similar to localStorage ; the difference is that while data in localStorage doesn't expire, data in sessionStorage is cleared when the page session ends. Whenever a document is loaded in a particular tab in the browser, a unique page session gets created and assigned to that particular tab.
   Cookies: Cookies are small pieces of text sent to your browser by a website you visit. They help that website remember information about your visit, which can both make it easier to visit the site again and make the site more useful to you.

## 5. What is debugger ?
The debugger keyword stops the execution of JavaScript, and calls the debugging function. This has the same function as setting a breakpoint in the debugger. If no debugging is available, the debugger statement has no effect.

## 6. What is Hoisting,Temperal Dead zone  and execution context  in javascript?
 # Hoisting: 
1.	Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope before code execution.
2.	In JavaScript, a variable can be declared after it has been used.
3.	In other words; a variable can be used before it has been declared.
4.	When we come to  functions  , It allows us to call functions before even writing them in our code. 
// Variable lifecycle
let a;        // Declaration
a = 100;      // Assignment
console.log(a);  // Usage
 # Temporal Dead Zone:
In case of let and const variables, Basically, Temporal Dead Zone is a zone. "before your variable is declared", i.e where you can not access the value of these variables, it will throw an error.
In short, temporal dead zone describes a zone where variables are un-reachable. There are variables in the current scope. However, these variables were not declared yet. Try to access those variables inside the temporal dead zone and JavaScript will throw a ReferenceError.
           let pi;
           let pi =3.14;
 # Execution Context:
The Execution Context contains the code that's currently running, and everything that aids in its execution.
During the Execution Context run-time, the specific code gets parsed by a parser, the variables and functions are stored in memory, executable byte-code gets generated, and the code gets executed.

## 7. Difference between == & === .
1. Two strings are strictly equal when they have the same sequence of characters, same length, and same characters in corresponding positions.
2. Two numbers are strictly equal when they are numerically equal. i.e, Having the same number value. There are two special cases in this, i. NaN is not equal to anything, including NaN. ii. Positive and negative zeros are equal to one another.
3. Two Boolean operands are strictly equal if both are true or both are false.
4. Two objects are strictly equal if they refer to the same Object.
5. Null and Undefined types are not equal with ===, but equal with ==. i.e, null===undefined --> false but null==undefined --> true

## 8. Difference between pass by value and pass by Reference .
The difference between pass-by-reference and pass-by-value is that modifications made to arguments passed in by reference in the called function have effect in the calling function, whereas modifications made to arguments passed in by value in the called function can not affect the calling function.
goto index.html

## 9. What is a function, What is self calling function?
# Functions: 
In Javascript, functions can also be defined as expressions. For example, // program to find the square of a number // function is declared inside the variable let x = function (num) { return num * num }; console.log(x(4)); // can be used as variable value for other variables let y = x(3); console.log(y); Run Code.
# Self-calling Functions:
In JavaScript, a “Self-Invoking” function is a type of function that is invoked or called automatically after its definition. The execution of such an anonymous function is done by enclosing it in a parenthesis set followed by another set of parenthesis.

## 10. What is IIFE?
An Immediately-invoked Function Expression (IIFE for friends) is a way to execute functions immediately, as soon as they are created. IIFEs are very useful because they don't pollute the global object, and they are a simple way to isolate variables declarations.
      (function () { //write your js code here })();

## 11. what is setTimeout and seInterval?
 # setTimeout::
The setTimeout() method is used to call a function or evaluate an expression after a specified number of milliseconds. For example, let's log a message after 2 seconds using setTimeout method,

       setTimeout(function () {
         console.log("Good morning");
       }, 2000);
 # setInterval::
The setInterval() method is used to call a function or evaluate an expression at specified intervals (in milliseconds). For example, let's log a message after 2 seconds using setInterval method,

       setInterval(function () {
         console.log("Good morning");
       }, 2000);

## 12. what is Spread operator?
Spread operator helps us to expand the strings or array literals or object literals. ...Using Spread operator in Function calls. We can use the spread operator to pass an array of numbers as a individual function arguments.
   Let a;
   a=[1,2,3,4];
   b=a;
   b=[…a];

## 13. what is strict mode?
Strict mode makes several changes to JavaScript semantics. It eliminates silent errors and instead throws them so that the code won't run with errors in the code. It will also point out mistakes that prevent JavaScript engines from doing optimizations.
    "use strict"   - write in the top of code.

## 14. what is promise in javascript?
Promise is a constructor fun , which takes two arguments/parameters, resolve and reject.If the promise has been resolved properly then it will go to the .then block and if the promise has been rejected due to some errors then it will go to the .catch block.
•	Promises avoid the problem of "callback hell", which happens due to nested callback functions.
the "Callbacks in JavaScript" article, callback functions used to handle asynchronous execution. A callback function indicates the operation which JavaScript should execute once an asynchronous operation finishes.

## 15. What does the break statement do ?
The break statement breaks out of a switch or a loop. In a switch, it breaks out of the switch block. This stops the execution of more code inside the switch. In a loop, it breaks out of the loop and continues executing the code after the loop

## 16. What does continue statement do?
The continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.

## 17. what is Generator function and what is yield?
yield keyword is used to resume or pause a generator function asynchronously. A generator function is just like a normal function but the difference is that whenever the function is returning any value, it does it with the help of 'yield' keyword instead of return it.

## 18. what is bubbling ?
Event bubbling is a method of event propagation in the HTML DOM API when an event is in an element inside another element, and both elements have registered a handle to that event. It is a process that starts with the element that triggered the event and then bubbles up to the containing elements in the hierarchy. 

## 19. what is event Loop?
The Event Loop is a queue of callback functions. When an async function executes, the callback function is pushed into the queue. The JavaScript engine doesn't start processing the event loop until the async function has finished executing the code. Note: It allows Node.js to perform non-blocking I/O operations even though JavaScript is single-threaded.
 follow this: http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

## 20. Difference between Syncronous and Asyncronous Javascript.
Synchronous code runs in sequence. This means that each operation must wait for the previous one to complete before executing. Asynchronous code runs in parallel. This means that an operation can occur while another one is still being processed.

## 21. What is Api & Rest Api?
An API, or application programming interface, is a set of rules that define how applications or devices can connect to and communicate with each other. A REST API is an API that conforms to the design principles of the REST, or representational state transfer architectural style.
ex for Api: Pay from paypal, travel booking.

## 22. What is react and why do we use it?
React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM and React is flexible.

## 23. What is a global state in React?
In React, originally, the state is held and modified within the same React component . In most applications, different components may need to access and update the same state. This is achieved by introducing the global states in your app.

## 24. What is Routing ?
Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application.

## 25. What is redux ?
Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments and are easy to test. While it's mostly used as a state management tool with React, you can use it with any other JavaScript framework or library.

## 26. what is virtual dom?
DOM is a document object model, created by converting HTML CSS and JS Real DOM, which is an object which gets created whenever any React application gets loaded on the screen for the first time., whenever React components gets mounted on the screen for the first time. Now when any user makes any changes on the screen like button click because of which the state variable will get updated so in this case the changes will not directly go to Real DOM , instead in react we have concept known Virtual DOM. So we are having two virtual doms, one virtual dom gets created at the time of mounting of react component so it is a copy of your real dom. Another virtual dom is the dom which contains the new changes, updated state variables values. Now these two virtual doms will get compared with each other and will check for the new changes. this complete procedure is known as diffing algorithm. Now the new changes will be updated in your Real dom. this procedure is known as Recoinciliation.

## 27. What is Axios and why do we use it?
Axios is a promised-based HTTP client for JavaScript. It has the ability to make HTTP requests from the browser and handle the transformation of request and response data.
It is mainly used to send asynchronous HTTP requests to REST endpoints. This library is very useful to perform CRUD operations. This popular library is used to communicate with the backend. Axios supports the Promise API, native to JS ES6.

## 28. what is useref hook?
useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
It is useful whenever you want to reference the same value on every render, but not trigger a re-render when its value changes.

## 29. what are callback function?
A callback function is a function that is passed as an argument to another function, to be “called back” at a later time. A function that accepts other functions as arguments is called a higher-order function, which contains the logic for when the callback function gets executed. It’s the combination of these two that allow us to extend our functionality.

## 30. what is jsx and which transpiler we use?
JSX stands for JavaScript syntax extension. It is a JavaScript extension that allows us to describe React's object tree using a syntax that resembles that of an HTML template. It is just an XML-like extension that allows us to write JavaScript that looks like markup and have it returned from a component.
Whenever we write React Code, we always build/transpile it to JavaScript that browsers can understand. This is generally done with tools like Babel or TypeScript. If you use tools and libraries like Create React App, they will do the transpilation for you behind the scenes.

## 31. what is state and props?
Props are used to pass data, whereas state is for managing data. Data from props is read-only, and cannot be modified by a component that is receiving it from outside. State data can be modified by its own component, but is private (cannot be accessed from outside).

## 32. what is negative infinity?
NEGATIVE_INFINITY is the same as the negative value of the global object's Infinity property. This value behaves slightly differently than mathematical infinity: Any positive value, including POSITIVE_INFINITY , multiplied by NEGATIVE_INFINITY is NEGATIVE_INFINITY .

## 33. Difference between Stateful and stateless component.
 # Stateless:
If the behaviour is independent of its state then it can be a stateless component. You can use either a function or a class for creating stateless components. But unless we need to use a lifecycle hook in your components, we should go for function components. There are a lot of benefits if you decide to use function components here; they are easy to write, understand, and test, a little faster, and you can avoid the this keyword altogether.
 # Stateful:
If the behaviour of a component is dependent on the state of the component then it can be termed as stateful component. These stateful components are always class components and have a state that gets initialized in the constructor. class App extends Component { constructor(props) { super(props) this.state = { count: 0 } }
 ## Notes:
 Hooks let you use state and other React features without writing classes. The Equivalent Functional Component import React, {useState} from 'react'

## 34. Explain React folder structure.
whenever we create a React project, it automatically creates a lot of files and folders. So, in this article, I am going to explain what these files and folders are.
When we create a React project, our application's structure looks like this.
# Readme.md : 
MarkDown Documentation= md This contains information about the project that which file contains what information and also contains info like how a new person who is starting with the project how they have to start with the project
# package.json : 
It contains the information about the project and also contains the libraries which the project is using and it also has the description of the commands which gets used to run test or build your project.
# package-lock.json : 
It contains information about the major libraries and if these libraries are having any extra dependency on other libraries so that information will also be stored over here.
# .gitignore: 
we can list down all the folders or file which we do not want to push during pushing the changes in github like node_modules.
# public/index.html: 
this file contains one div element in which a id is stored which is used to render your complete application at this id.
# src/index.js : 
In this file you will render your complete React application at the id given in index.html file.
# src/App.js : 
From this file ,developers can start building their React application.
# node_modules:
Modules are the blocks of encapsulated code that communicates with an external application on the basis of their related functionality. Modules can be a single file or a collection of multiples files/folders.

## 35. What is babel ?
Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be run by older JavaScript engines. Babel is a popular tool for using the newest features of the JavaScript programming language.

## 36. Difference between default export and named export.
Exports without a default tag are Named exports. Exports with the default tag are Default exports. Using one over the other can have effects on your code readability, file structure, and component organization. Named and Default exports are not React-centric ideas.
          //NAMED export:
          export const MyFunction = () => {
            // ...body
          }

          //DEFAULT export
          export default MyComponent;

## 37. What are hooks and types and use of hooks ?
Hooks are the new feature introduced in the React 16.8 version. It allows you to use state and other React features without writing a class. Hooks are the functions which "hook into" React state and lifecycle features from function components.
Use : Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes.
Types: They are 10 in-built hooks, but most commonly used.
          useState()
          useEffect()
          useContext()
          useReducer()

## 38. Show me example for star pattern.
--> go to index.js (line no:133-142))

## 39. REMOVE Duplicate elements in the array
--> go to index.js (line no:144-147)

## 40. Fetch data from https://jsonplaceholder.typicode.com/todos
--> go to index.js (line no:149-152)

## 41. Find Repeated Numbers from Array?
--> go to index.js (line no:154-157)

## 42. Find the vowels in string ?
--> go to index.js (line no:159-161)