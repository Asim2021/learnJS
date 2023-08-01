////   🚫LINKED WITH 001.HTML🚫   ///

/*/////////////////////////////////////////////////////////////////////
------------- DATA TYPES 1) PRIMITIVE. 2)Composite Types. ------------
////////////////////////////////////////////////////////////////////*/

/*
✨ PRIMITIVE DATA TYPES:
🎇 1. NUMBERS
🎇 2. BIGINT(1234n)
🎇 3. STRING
🎇 4. BOOLEAN
🎇 5. NULL
🎇 6. UNDEFINED

✨ COMPOSITE/NON-PRIMITIVE DATA TYPES:
🎇 1. OBJECTS
🎇 2. ARRAYS
*/

/* 
let a= 2
let b = 6
let c = 8

console.log(typeof(a));
let Name = 'asim'
let Class = 6
let students = {Name,Class}
console.log(students)
console.log(b+c+'ASIM'+c+a); //14ASIM82 : goes left to right
console.log(a+b*c) // 50 s follow bodmass rule
 */

// let obj = {}

// console.log(obj.person.class);  // error
// console.log(obj?.person?.class); // undefined

/*///////////////////////////////////////////////////////////////////
------------------- 🟡 NULLISH COALESCING (??) 🟡-------------------
//////////////////////////////////////////////////////////////////*/

// The nullish coalescing operator ( ?? ) is a logical operator that returns its RIGHT-HAND SIDE operand when its left-hand side operand is null or undefined , and otherwise returns its left-hand side operand.

// Nullish coalescing means that it allianced with nullish values.
// Nullish Values are : undefined, null.
// Falsy Values : 0, false, NaN, (null and undefined).
// OR Operator Print Right side value if left is false.

// console.log(false || 10); // 10
// console.log(true || 10); // true
// console.log(0 || 10); // 10
// console.log(undefined || 10); // 10
// console.log(null || 10); // 10
// console.log(NaN || 10); // 10
// console.log(0 ?? 10); // 0
// console.log(undefined ?? 10); // 10
// console.log(null ?? 10); // 10
// console.log(NaN ?? 10); // NaN
// console.log(false ?? 10); // false
// console.log(true ?? 10); // true

/*////////////////////////////////////////////////////////////////////
------------------------ 🟡CALL METHOD 🟡 --------------------------
//////////////////////////////////////////////////////////////////*/

// The call() method is a predefined method used to invoke a method/function with an owner OBJECT as an argument.
//With call(), an object can use a method belonging to another object.

// IT INVOKES METHOD DIRECTLY
let person = { firstName: 'Asim', lastName: 'Shah' }
let students = { firstName: 'Sachin', lastName: 'Tendulakar' }

function fullName(state) {
  console.log(`${this.firstName} ${this.lastName} Belongs to ${state}`)
}

// fullName.call(students,"delhi")
// fullName.call(person,"punjab")

function print() {
  console.log(`Hello ${this}`)
}
// print.call('World');

/*////////////////////////////////////////////////////////////////////
------------------------ 🟡 APPLY METHOD 🟡 --------------------------
//////////////////////////////////////////////////////////////////*/

// THE ONLY DIFFERENCE IS THE WAY TO PASS THE ARGUMENTS AS ARRAY LIST
// fullName.apply(person,["UttarPradesh"])

/*////////////////////////////////////////////////////////////////////
------------------------ 🟡 BIND METHOD 🟡 --------------------------
//////////////////////////////////////////////////////////////////*/

// BIND DOESNT CALL THE METHOD DIRECTLY BUT IT RETURNS A FUNCTION
let myFullName = fullName.bind(students, 'Haryana')
// myFullName()

//// CLOSURES WITH BIND ////
// function f2(n = 5) {
//   for (var i = 1; i <= n; i++) {
//     setTimeout(
//       function (x) {
//         if (x % 2 === 0) console.log(`${x} is Even`)
//         if (x % 2 !== 0) console.log(`${x} is Odd`)
//       }.bind(null, i),
//       1000 * i
//     )
//   }
// }
// f2(5)

/////////////////////////////////////////////////////////////////////
function printName(town, state, country) {
  console.log(
    `${this.firstName} ${this.lastName} belongs to ${town},${state},${country}`
  )
}

/*////////////////////////////////////////////////////////////////////
--------------------- 🟡 POLYFILL FOR CALL 🟡 ----------------------
//////////////////////////////////////////////////////////////////*/

Function.prototype.myCall = function (obj = {}, ...args) {
  if (typeof this !== 'function') throw new Error(this + 'It is not callable')
  obj.fn = this
  obj.fn(...args)
}

// printName.myCall(person, 'okhla', 'delhi', 'India')

/*////////////////////////////////////////////////////////////////////
--------------------- 🟡 POLYFILL FOR APPLY 🟡 ---------------------
//////////////////////////////////////////////////////////////////*/

Function.prototype.myApply = function (obj = {}, args = []) {
  if (typeof this !== 'function') throw new Error(this + 'It is not callable')
  obj.fn = this
  obj.fn(...args)
}

// printName.myApply(person, ['okhla', 'delhi', 'India'])

/*////////////////////////////////////////////////////////////////////
--------------------- 🟡 POLYFILL FOR BIND 🟡 ----------------------
//////////////////////////////////////////////////////////////////*/

Function.prototype.myBind = function (obj = {}, ...args) {
  obj.fn = this
  return function (...args2) {
    obj.fn(...args, ...args2)
  }
}
const info = printName.myBind(person, 'okhla', 'delhi', 'India')

// info()

///////////////////////////////////////////////////////////////////

// console.info(isNaN('1'), isNaN(12), isNaN(true), isNaN('Asim')) //false(type coercion) false false true

/*////////////////////////////////////////////////////////////////////
------------------------ 🟡 HOISTING 🟡 --------------------------
//////////////////////////////////////////////////////////////////*/

//// 1️⃣ FUNCTION HOISTING /////
// The advantages of hoisting is that it lets you use a function before you declare it in your code.
// To avoid hoisting, you can run javascript in strict mode using “use strict” on top of the code.

// catName('Tiger')
function catName(name) {
  console.log("My cat's name is " + name) // "My cat's name is Tiger"
}

// console.log(abc); //undefined (memory context take abc as 'undefined')
var abc = 5

//// 2️⃣ VARIABLE HOISTING /////
hoistedVariable = 3 //variable initialization
// console.log(hoistedVariable) // hoistedVariabl:3
var hoistedVariable // variable declaration

// console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num // Declaration
num = 6 // Initialization
// console.log(num); // Returns 6 after the line with initialization is executed.

// console.log(num1); // Returns 'undefined' from hoisted var declaration (not 6)
var num1 = 6 // Initialization and declaration.
// console.log(num1); // Returns 6 after the line with initialization is executed.

////3️⃣ 🟡 LET AND CONST HOISTING 🟡////

//Variables declared with let and const are also hoisted but, unlike var, they are not initialized by javascript with a default value(undefined).
//An exception will be thrown if a variable declared with let or const is read before it is initialized.
// console.log(num2); // Throws ReferenceError exception as the variable value is uninitialized
let num2 = 6 // Initialization

////4️⃣ CLASS HOISTING /////
// Classes defined using a class declaration are hoisted, which means that JavaScript has a reference to the class.
//However the class is not initialized by default, so any code that uses it before the line in which it is initialized is executed will throw a ReferenceError.

/*////////////////////////////////////////////////////////////////////
---------- 🟡 JAVASCRIPT WITH BASIC ARITHEMATIC OPERATION 🟡---------
//////////////////////////////////////////////////////////////////*/

// console.log(isNaN("hello")) // true
// console.log(isNaN("1")) //false , default type coercion

//// 1️⃣ SUBTRACTION /////
// console.log(2-"2","2"-"2","A"-"A") // 0, 0, NaN
// console.log(1-true) // 0

//// 2️⃣ MULTIPLICATION /////
// console.log(2*"2","2"*"2","a"*"a") // 4, 4, NaN
// console.log(true*2) // 2

//// 3️⃣ DIVISION /////
// console.log(2/"2","2"/"2", "a"/"a") // 1, 1, NaN

//// 4️⃣ ADDITION 🟡EXCEPTION🟡/////
// console.log(2+"2","2"+"2", "a"+ "a") // 22, 22, aa : EXCEPTION WITH ADDITION (A number on addition to a string in JS treated as a string.

// console.log(true+"2")  // true2 : as true = 1 and on addition treated as "true"
// console.log(true+2) // 3

/////////////////////////////////////////////////////////////////////

let string = ' olleh ym eman si misa hahs '

// function reverseString(str){
//     newStr = []
//     str.trim().split(" ").forEach(ele=>{
//         newStr.push(ele.split('').reverse().join(''))
//     })
//     return newStr.join(' ')
// }
// console.log(reverseString(string))
// function reverseArrayWords(str){
//     let strArray = str.trim().split(" ")
//     let a = strArray.map(ele=>ele.split("").reverse().join(""))
//     return a.join(" ")
// }
// console.log(reverseArrayWords(string))

arr = []
obj5 = { 1: 'one', 2: 'two' }

// console.log(arr.length) // 0
// console.log(Array.isArray(arr)) // true
// console.log(obj5.length) // undefined
// console.log(Object.keys(obj5).length,Object.values(obj5).length ); // 2, 2

/*////////////////////////////////////////////////////////////////////
--------------------- 🟡INFINITE CURRING 🟡 -----------------------
//////////////////////////////////////////////////////////////////*/

function add(a) {
  return function (b) {
    if (b) return add(a + b)
    return a
  }
}
////            ➡️ ➡️ ➡️ ➡️ ➡️ ➡️ ➡️
let result = add(5)(6)(7)(7)() /// Traverse L2R 11->+7->18+7->25
// console.log(result)

/*////////////////////////////////////////////////////////////////////
--------------------- 🟡 COMPOSE AND PIPE 🟡 ----------------------
//////////////////////////////////////////////////////////////////*/

// BY DEFAULT COMPOSE EXECUTE RIGHT TO LEFT AND PIPE LEFT TO RIGHT
// Also pipe and compose aren't native functions. We need to create in order to utilize them.

const addTwo = (x) => x + 2
const double = (x) => x * 2
const squares = (x) => x ** 2

const compose = (...functions) => {
  return (args) => {
    return functions.reduceRight((arg, fn) => fn(arg), args)
  }
}
const pipe = (...functions) => {
  return (args) => {
    return functions.reduce((arg, fn) => fn(arg), args)
  }
}

// console.log(compose(double,squares,addTwo)(2)); // 2+2->4^(2)->16*2 = 32
// console.log(pipe(double,squares,addTwo)(2)); // 2*2->4^(2)->16+2 = 18

/*////////////////////////////////////////////////////////////////////
------------------------- 🟡 CALLBACKS 🟡 --------------------------
//////////////////////////////////////////////////////////////////*/

const posts = [
  { title: 'post 1', body: 'body 1' },
  { title: 'post 2', body: 'body 2' },
  { title: 'post 3', body: 'body 3' },
]

function getPosts() {
  let output = ''
  setTimeout(() => {
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`
    })
    document.getElementById('orderList').innerHTML = output
  }, 1000)
}
// getPosts()

function addPost(post, cb) {
  setTimeout(() => {
    posts.push(post)
    cb()
  }, 2000)
}
// addPost({title:"post 4",body : "body 4"},getPosts)

/*////////////////////////////////////////////////////////////////////
-------------------------- 🟡 PROMISES 🟡 --------------------------
//////////////////////////////////////////////////////////////////*/

// let ul =  document.getElementById('orderList');
function getPostsPromise() {
  let output = ''
  setTimeout(() => {
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`
    })
    ul.innerHTML = output
  }, 2000)
}
// getPostsPromise()

function addPostPromise(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post)
      error = false
      if (!error) {
        resolve()
      } else {
        reject('Error: Something Went Wrong')
      }
    }, 2000)
  })
}
// addPostPromise({ title: "post 4", body: "body 4" }) /// no need to callback we will use .then as addPost returning a promise
//   .then(() => getPosts())
//   .catch((err) => console.log(err));

function showMyName(name, time_sec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(name)
    }, time_sec * 1000)
  })
}
// let result = showMyName("Asim Shah", 2);
// result.then((res) => console.log(res));

//// PROMISE METHODS ////
// let p1 =new Promise((resolve,reject)=>{setTimeout( function() {
//     resolve("Success p1!")
//   }, 2040)})
// let p2 = new Promise((resolve,reject)=>{setTimeout( function() {
//     resolve("Success p2!")
//   }, 2030)})
// let p3 =  new Promise((resolve,reject)=>{setTimeout( function() {
//     resolve("Success p3!")
//   }, 2020)})
// let p4 =  new Promise((resolve,reject)=>{setTimeout( function() {
//     reject("Rejected p4!")
//   }, 2010)})
// let p5 =  new Promise((resolve,reject)=>{setTimeout( function() {
//     // resolve("Success a5!")
//     resolve("Success p5")
//   }, 2050)})

// Promise.all([p1,p2,p3,p4,p5]).then(value=>console.log(value))
/* WITH .CATCH =>['Success p1!','Success p2!','Success p3!',undefined,'Success p5']
WITHOUT .CATCH => gives error
*/

// Promise.any([p1,p2,p3,p4,p5]).then(value=>console.log(value))
/* Success p3! */

// Promise.race([p1,p2,p3,p4,p5]).then(value=>console.log(value))
/* 'ERR_UNHANDLED_REJECTION' */

// Promise.allSettled([p1,p2,p3,p4,p5]).then(value=>console.log(value))
/*
 [
  { status: 'fulfilled', value: 'Success p1!' },
  { status: 'fulfilled', value: 'Success p2!' },
  { status: 'fulfilled', value: 'Success p3!' },
  { status: 'rejected', reason: 'Rejected p4!' },
  { status: 'fulfilled', value: 'Success p5' }
]
*/

/*////////////////////////////////////////////////////////////////////
---------------- 🟡 POLYFILL FOR PROMISE.ALL() 🟡 ------------------
//////////////////////////////////////////////////////////////////*/

/* 
function promiseAll(promises){
    let promiseArr = [];
    return new Promise((resolve,reject)=>{
        promises.forEach((p,i)=>{
            p.then(res=>{
            promiseArr.push({ status: 'fulfilled', value:res })
            if(i===promises.length-1){
                resolve(promiseArr)
            }
        }).catch((err)=>{
            promiseArr.push({ status: 'rejected', reason: err })
        })
    })
})}
promiseAll([a,b,c]).then(value=>console.log(value))
 */
/**
 [
  { status: 'fulfilled', value: "I'm Resolve" },
  { status: 'rejected', reason: "I'm Reject" },
  { status: 'fulfilled', value: "I'm Resolve" }
]
 */

/*////////////////////////////////////////////////////////////////////
------------------------- 🟡 ASYNC AWAIT 🟡 -----------------------
//////////////////////////////////////////////////////////////////*/

async function getUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const usersArray = await response.json()
  console.log(usersArray)
  let userNames = ''
  usersArray.forEach((post) => {
    userNames += `<li><span style="color:red;">Username: </span>${post.name}, <span style="color:red;">Email: </span>${post.email}</li>`
  })
  ul.innerHTML = userNames
}

// getUser()

///////////////////////////////////////////////////////////////

// let arr = [1, 2, 3, [4, 5], 6, [7, [8, 9], 10]];
// let arr1 = [1, 2, 3, 2, 6, 7, 1, 5, 2];
// const rs1 = arr.forEach((ele,i)=>{
//     arr[i]=ele+1
// })
// console.log(arr);
// let newArr = arr.reduce((sum=0,ele)=>{
//     return sum+=ele
// })
// console.log(newArr);

// const ul = document.querySelector('ul')
// ul.addEventListener("click",(e)=>{
//     if(e.target.nodeName==="LI"){
//         window.location.href += `/${e.target.innerText}`
//     }
// })

// console.log(arr.flat(0));

// let flatArray = [].concat(...arr)
// console.log(flatArray);

// function customFlat(array, num = 1) {
//   let result = [];
//   array.forEach((arr) => {
//     if (Array.isArray(arr) && num > 0) {
//       result.push(...customFlat(arr, num - 1));
//     } else {
//       result.push(arr);
//     }
//   });
//   return result;
// }
// console.log(customFlat(arr));

// function print(time,num=1){
//     for(var i=1;i<=num;i++){
//         setTimeout(()=>{
//             console.log(i)
//         },time*i)
//     }
// }

// print(1000,5)

// for (var i = 0; i < 5; i++) (function(i) {
//     setTimeout(function() {
//         console.log(i)
//      }, 1000);
// })(i)

// let person = {
//   firstName: "Asim",
//   lastName: "Shah",
// };
// function callMyName(state, country) {
//   console.log(
//     `Hello! My name is ${this.firstName} ${this.lastName} from ${state},${country}`
//   );
// }

// // let anotherPerson = {
// //     firstName:"John",
// //     lastName:"Wick"
// // }

// //person.callName.bind(anotherPerson, "Delhi", "India");

// callMyName.call(person,"Delhi","India")

// function add(a){
//     return (b)=>{
//         if(b) return add(a+b)
//         return a
//     }
// }

// console.log(add(8)(7)(6)(5)(4)());

// (function (name){
//     console.log(name)
// })("Asim Shah")

// function doSomething() {
//     console.log(this);
//   }

//   doSomething();

// let person = {
//     name:"Asim Shah",
//     age:"28",
//     add : "Okhla",
//     personDetail:function(){
//         console.log(`${this.name} ${this.age} live in ${this.add}`)
//     }
// }

// const person1 = {
//     name:"Amir Sid",
//     age:"27",
//     add : "Jamia Nagar",
// }

// person.personDetail.call(person1)

// obj = {name:"asim"}
// obj1 = {name:"asim"}

// console.log(JSON.stringify(obj)===JSON.stringify(obj1))

// let array1 = ["a","b","c","d","e","f","g"]
// let array2 = ["m","n","o","p","q","r","a"]

// function getName() {
//     console.log(`${this.fName} ${this.lName}`)
// }

// person ={
//     fName:"Asim",
//     lName:"Shah"
// }

/*////////////////////////////////////////////////////////////////////
----------------------- 🟡 ARRAY POLYFILL 🟡 ----------------------
//////////////////////////////////////////////////////////////////*/

class MyArray {
  constructor() {
    this.length = 0
    this.data = {}
  }
  get(index) {
    return this.data[index]
  }
  push(value) {
    this.data[this.length] = value
    this.length++
    return this.length
  }
  pop() {
    delete this.data[this.length - 1]
    this.length--
  }
  delete(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
    this.length--
  }
}

// let newArray = new MyArray
// newArray.push(5)
// newArray.push(true)
// newArray.push("asim")
// newArray.push("shah")
// newArray.push(10)
// newArray.pop()
// newArray.delete(1)
// console.log(newArray)
// console.log(newArray.length)

/*////////////////////////////////////////////////////////////////////
------------------- 🟡 POLYFILL HASH TABLES 🟡 ---------------------
//////////////////////////////////////////////////////////////////*/

class HashTable {
  constructor(size) {
    this.data = new Array(size)
    this.keys = []
    this.keysSet = []
  }
  #_hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = hash + key.charCodeAt(i) * i
    } //O(1)
    return hash % this.data.length
  }
  set(key, value) {
    let keyPair = {}
    let keyHash = this.#_hash(key)
    if (!this.data[keyHash]) {
      this.data[keyHash] = []
    } //O(1)
    this.data[keyHash].push([key, value])
    this.keys.push(key)
    keyPair[keyHash] = key
    this.keysSet.push(keyPair)
    return keyHash
  }
  get(key) {
    let keyHash = this.#_hash(key)
    let currentBucket = this.data[keyHash]
    for (let i = 0; i < currentBucket.length; i++) {
      if (currentBucket[i][0] === key) {
        return currentBucket[i][1]
      }
    } //O(1)
    return 'Searched key does not exist.'
  }
  keys() {
    return this.keys
  }
  delete(key) {
    let keyHash = this.#_hash(key)
    delete this.data[keyHash]
    let indexOfKey = this.keys.indexOf(key)
    this.keys.splice(indexOfKey, 1)
    this.keysSet.splice(indexOfKey, 1)
  }
}

// let hTable = new HashTable(50);
// hTable.set("grapes",500)
// hTable.set("apples",24)
// hTable.set("oranges",12)
// console.log(hTable);
// console.log(hTable.get("apples"));
// // console.log(hTable.keys);
// // hTable.delete("grapes")
// // console.log(hTable);
// console.log(hTable.keys);
// console.log(hTable.keysSet);
//////////////////////////////////////////////////////////////

var obj1 = { name: 'Shah', age: '28' }
var obj2 = JSON.parse(JSON.stringify(obj1))

// console.log(delete obj1.name)
// console.log(Object.getOwnPropertyNames(obj3).length)

////////////////////////////////////////////////
class Car {
  constructor(brand, name, model) {
    ;(this.brand = brand), (this.name = name), (this.model = model)
  }
  carDescription() {
    // document.write(`${this.name} ${this.model} a car by ${this.brand} <br/>`);
  }
}

let car1 = new Car('KIA', 'Seltos', 'XLS')
let car2 = new Car('Tata', 'Nano', 'SL')
car1.engine = '1200cc'
// car1.carDescription()
// car2.carDescription()
///////////////////////////////////////////

function KTM(str) {
  let n = parseFloat(str)
  let unit = str.replace(/[0-9]/g, '').trim().toLowerCase()
  switch (unit) {
    case 'km':
      console.log(0.62 * n + ' miles')
      break
    case 'miles':
      console.log(1.6 * n + ' km')
      break
    default:
      console.log('Please insert km and miles')
      break
  }
}

// KTM("55 miles")

function numOfVowels(str) {
  return str.length - str.replace(/[a,e,i,o,u]/g, '').length
}
// console.log(numOfVowels("gfstweatchoyytbcfsaaerfxf"));

let a = 7
let b = 12
// console.log((~a&b)|(a&~b))

//============= Closures =============//

//(a) increment func as a closure
const increment = () => {
  let i = 0
  return () => {
    i++
    return i
  }
}
let myIncrement = increment()
console.log(myIncrement())
console.log(myIncrement())
console.log(myIncrement())
console.log(myIncrement())
console.log(myIncrement())

//(b) Print num from 1 to 5 using setTimeout (let vs var)

const printToNum = (num = 5) => {
  for (var i = 1; i <= num; i++) {
    setTimeout(() => {
      console.log(i)
    }, i * 1000)
  }
}

printToNum()
const counter = () => {
  let count = 0

  return {
    increment: (val = 1) => {
      count += val
    },
    getValue: () => count,
  }
}

let myCounter = counter()

var users = [
  { customer: 'john', age: 26, active: false },
  { customer: 'jonny', age: 34, active: true },
  { customer: 'johnson', age: 12, active: false },
]
const vehicles = [
  { make: 'toyota', year: 2021, isUsed: false },
  { make: 'toyota', year: 2019, isUsed: true },
  { make: 'ford', year: 2012, isUsed: true },
  { make: 'ford', year: 2021, isUsed: false },
  { make: 'ford', year: 2017, isUsed: true },
  { make: 'mazda', year: 2021, isUsed: false },
  { make: 'mazda', year: 2018, isUsed: true },
]
const vehiclesObject = {
  stall1: { make: 'toyota', year: 2021, isUsed: false },
  stall2: { make: 'toyota', year: 2019, isUsed: true },
  stall3: { make: 'ford', year: 2012, isUsed: true },
  stall4: { make: 'ford', year: 2021, isUsed: false },
  stall5: { make: 'ford', year: 2017, isUsed: true },
  stall6: { make: 'mazda', year: 2021, isUsed: false },
  stall7: { make: 'mazda', year: 2018, isUsed: true },
}

function partition(collection, check) {
  let checkArray = []
  let notCheckArray = []
  if (typeof check === 'function') {
    collection.forEach((ele) => {
      if (check(ele)) {
        checkArray.push(ele)
      }
      if (!check(ele)) {
        notCheckArray.push(ele)
      }
    })
  }
  if (typeof check === 'object') {
    // let keysArray = Object.keys(check)
    // let valuesArray = Object.values(check)
    // for (let i = 0; i < check.length; i++) {
    //     if(collection.some(ele=>keysArray)){
    //         console.log(ele);
    //     }
    // }
  }
  return [notCheckArray, checkArray]
}
// console.log(partition(users,d=>d.active));
// console.log(partition(vehicles, { make: "toyota", isUsed: false }));

let object1 = new Object()
// console.log(object1);
let array1 = [
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
  [4, 'four'],
]
// console.log(array1);
let newMap = new Map()
array1.forEach((ele) => newMap.set(ele))
newMap.set()
// console.log(newMap);

/*////////////////////////////////////////////////////////////////////
---------------- 🟡 EVENT BUBBLING AND CAPTURING 🟡 ----------------
//////////////////////////////////////////////////////////////////*/

// let btn = document.getElementById("btn")
// let root1= document.getElementById("root")
// let root2= document.getElementById("root2")
// let root3= document.getElementById("root3")

// root1.addEventListener("click",()=>{
//     console.log("I am Root 1")
// },true)

// root2.addEventListener("click",()=>{
//     console.log("I am Root 2")
// },false)

// root3.addEventListener("click",()=>{
//     console.log("I am Root 3")
// },true)

// btn.addEventListener("click",()=>{
//     console.log("I am button")
// },false)

let newArray = [1, 2, 3, 4, 5, 6]

// console.log(newArray.reduce((sum,ele)=>sum+=ele))

// console.log((12).toString(2));
// console.log(5>>>1) ??????? DOUBT ???????//;

// console.log(('object').padStart(5,'e'));

class Apple {
  constructor(color, weight) {
    this.color = color
    this.weight = weight
  }
  eat() {
    console.log(`I eat ${this.color} Apple`)
  }
}
Apple.prototype.throw = function () {
  console.log(`I throw core of ${this.weight} Apple after eat`)
}

let apple1 = new Apple('red', '20gm')

// apple1.eat();
// apple1.throw();

function Person(name, age) {
  ;(this.name = name), (this.age = age)
}
function getPerson() {
  console.log(`I am ${this.name} and I am ${this.age}`)
}

Person.prototype.getPerson = getPerson

let asim = new Person('asim', 28)

// asim.getPerson();

const person2 = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`)
  },
}

const me = Object.create(person2)

me.name = 'Matthew'
me.isHuman = true

// me.printIntroduction();

/*////////////////////////////////////////////////////////////////////
------------------- 🟡 MAP, FILTER & REDUCE 🟡 --------------------
//////////////////////////////////////////////////////////////////*/

/*
 1. Given two days' worth of tasks.
 2. Convert the task durations to hours instead of minutes.
 3. Filter out everything that took two hours or more.
 4. Sum it all up.
 5. Multiply the result by a per-hour rate for billing.
 6. Output a formatted dollar amount.
 */
const monday = [
  { name: 'Write a tutorial', duration: 180 },
  { name: 'Some web development', duration: 120 },
  { name: 'Bug fixing', duration: 40 },
  { name: 'Writing Tests', duration: 180 },
]

const tuesday = [
  { name: 'Keep writing that tutorial', duration: 240 },
  { name: 'Some more web development', duration: 180 },
  { name: 'A whole lot of nothing', duration: 240 },
]

let tasks = [monday, tuesday]

let bill = function (tasks, rate = 70) {
  tasks = tasks.flat(2)
  let result = tasks
    .map((ele) => {
      let duration = ele.duration / 60
      return { ...ele, duration: duration }
    })
    .filter((ele) => ele.duration >= 2)
    .map((ele) => {
      let amount = ele.duration * rate
      return { name: ele.name, amount: amount }
    })
    .reduce((pre, cur) => {
      pre += cur.amount
      return pre
    }, 0)
  return ` $ ${result} need to pay.`
}

//////////////////////////////////////////////////
// console.log([] == ![]); // -> true
// console.log(
//   (![] + [])[+[]] +
//     (![] + [])[+!+[]] +
//     ([![]] + [][[]])[+!+[] + [+[]]] +
//     (![] + [])[!+[] + !+[]]
// );   // -> fail
// console.log(+[]); // -> 0
// console.log(Boolean("")); //-> false

/*////////////////////////////////////////////////////////////////////
--------------------- 🟡 PROMISES VS ASYNC-AWAIT🟡 ------------------
//////////////////////////////////////////////////////////////////*/

function delay(input, time) {
  let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ input })
    }, time)
  })
  return p1
}

// delay("Hello After 1 sec", 1000)
//   .then((res) => {
//     console.log(res);
//     return delay("hello after 2 sec", 1000);
//   })
//   .then((res) => {
//     console.log(res);
//     return delay("hello after 3 sec", 1000);
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

let run = async () => {
  try {
    let res1 = await delay('Hello After 1 sec', 1000)
    console.log(res1)
    let res2 = await delay('Hello After 2 sec', 1000)
    console.log(res2)
    let res3 = await delay('Hello After 3 sec', 1000)
    console.log(res3)
  } catch (error) {
    console.log(error)
  }
}
// run();

/////////////////////////////////////////////////////////////

let person1 = {
  firstName: 'Lydia',
  lastName: 'Hallie',
  pet: {
    name: 'Mara',
    breed: 'Dutch Tulip Hound',
  },
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  },
}

// console.log(person1.pet?.family?.name); //-> undefined
// console.log(person1.getFullName?.()); //-> Lydia Hallie

/////////==== NOTE ====//////////
const user = {
  email: 'my@email.com',
  updateEmail: (email) => (this.email = email),
}

user.updateEmail('new@email.com')
// console.log(user.email); // => "my@email.com" NOTE: Arrow Function represent process object by "this" not current object
////////////////////////////////////

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => data.map((user) => console.log(user.name)));

/*////////////////////////////////////////////////////////////////////
----------------------- 🟡 MEMOIZATION 🟡 --------------------------
//////////////////////////////////////////////////////////////////*/

function slowFunc(num1, num2) {
  let i = 0
  while (i < 1500000000) {
    i++
  }
  return num1 + num2
}
// console.time("memo");
// slowFunc(5, 5);
// console.timeEnd("memo");

function myMemoFunc(fn) {
  let res = {}
  return function (...args) {
    let values = JSON.stringify(args)
    if (!res[values]) {
      res[values] = fn(...args)
    }
    return res[values]
  }
}

// console.time("first call");
// console.log(myMemoFunc(slowFunc(5,5)));
// console.timeEnd("first call");

// console.time("second call")
// console.log(myMemoFunc(slowFunc(5,5)));
// console.timeEnd("second call");

// console.time("third call")
// console.log(myMemoFunc(slowFunc(5,5)));
// console.timeEnd("third call");

/*////////////////////////////////////////////////////////////////////
------------------------- 🟡 RECURSION 🟡 -------------------------
//////////////////////////////////////////////////////////////////*/

let number = 95

let array = [1, 2, 3, 4]

// const inverted = array.reverse() // inverted===array => true ????

array.concat([4, 5, 6]) // concat returns new array**

const str = 'abc'

// console.log(result);

function call(n) {
  n = parseInt(n)
  if (n <= 10) {
    return n
  } else {
    let a = n % 10
    let b = n / 10
    return a + call(a + b)
  }
}

// console.log(call(5126))

/*///////////////////////////////////////////////////////////////////
 -------------------- 20 JavaScript snippets ----------------------
 /////////////////////// 08-06-2022 //////////////////////////////*/

/*////////////////////////////////////////////////////////////////////
---------------- 🟡 JavaScript | Generator fn*() 🟡 ----------------
///////////////////////////////////////////////////////////////////*/

function* myGen(i) {
  yield i
  yield i + 10
}

let gen = myGen(10)

// console.log(gen.next().value)
// console.log(gen.next().value)

// Function keyword followed by an asterisk defines a generator function, which returns a Generator object.

// Generators are functions that can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances.

// Generators when combined with Promises are a very powerful tool for asynchronous programming as they mitigate the problems with callbacks

/*////////////////////////////////////////////////////////////////////
------------------------- 🟡 NODE V18 🟡 --------------------------
//////////////////////////////////////////////////////////////////*/

// try {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   console.log('wait')
//   const myUsers = await res.json()
//   const myUsersNames = myUsers.map((user) => user.name)
//   console.log('🚀 ~ file: completeJS.js ~ line 1119 ~ myUsersNames',myUsersNames)
// } catch (error) {
//   console.log(error);
// }

// console.log('first');
// await new Promise((resolve)=>{
//   setTimeout(()=>{
//     console.log('Second');
//     resolve()
//   },2000)
// })
// .then(()=>console.log('Third'))
// console.log('Forth')
