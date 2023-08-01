// 0:00  Thapa Technical Introduction✔️
// 2:02  JavaScript Project Overview✔️
// 6:22  Subscribe Thapa Technical✔️
// 6:57  Why JavaScript? How Website Work✔️
// 11:40  Live Practical Example✔️
// 20:45  Install VS Code Editor✔️
// 24:30  Values and Variables in JS✔️
// 38:45  Data Types in JavaScript✔️
// 47:52  Challenge Time✔️
// 55:18  Interview Question ✔️
// 1:02  Interview Question✔️
// 1:11:00  Expressions and Operators✔️
// 2:04:15  Control Statements and Loops✔️
// 3:47:00  ECMAScript 2015 (ES6) Part 1✔️
// 4:19:45  Arrays in JavaScript✔️
// 6:40:39  Strings in JavaScript✔️
// 7:40:25  Date and Time in JavaScript✔️
// 8:16:00  Math Object in JavaScript✔️
// 8:33:00  DOM, BOM, WINDOW OBJECT ✔️
// 9:40:20  Events in JavaScript✔️
// 10:31:00  Timing Based Events ✔️
// 10:47:10  Interview Question✔️
// 11:16:45  ECMAScript 2015 to 2020  Part 2✔️
// 12:07:20  Advanced JavaScript Part 1
// 12:31:20  Asynchronous JavaScript
// 13:05:40  Event Loop in JavaScript 
// 13:14:45  Advanced JavaScript Part 2
// 13:26:25  Project 1 AJAX+XMLHTTPReq
// 13:49:40  Project 2 Promises/Async-Await
// 14:15:15  Project 3 Light Bulb ON OFF
// 14:24:10  Project 4 Animated Thermometer
// 14:36:48  Project 5 Temperature Converter
// 15:03:05  Project 6 Increment Counter Web Page
// 15:21:35  Final Project 7 Google Keep Clone
// 16:20:16  Thapa Technical Outro


///////////////////////////////////////////////////////////////////////////////////////////////////
//===================================JAVASCRIPT   LEARNING=======================================//
///////////////////////////////////////////////////////////////////////////////////////////////////

const fib = (n,memo={}) => {
   if(n in memo) return memo[n]
   if(n <= 2) return 1
   memo[n] = fib(n-1,memo) + fib(n-2,memo)
   return memo[n]
}

console.log(fib(50))

// const array=[1,12,37,41,59,66,17,28,39]

// Normal  For  Loop ::::

/*  arr=[]
   for (let i = 0; i < array.length; i++){
    arr.push(array[i] * 3719)
   }
 console.log(arr)

 // Map FUNCTION ::::
  const arr=array.map((i)=>{
      return i**2
 })
 */

 // FILTER  FUNCTION ::::

 /*  const arr=array.filter((i)=>{
     return i<=41
  }) */


//   console.log(arr)
//   console.log(array)

// function swap(a,b){
//   a=a+b
//   b=a-b
//   a=a-b
//   console.log(`the swapped Number are a=${a} and b=${b}`)
// }

// swap(-8,-1)

// //👉=========if....else statement :::::
// let a=1

// if(a===2) console.log(`a is ${a}`)
// else (console.log(`a is not 2`));

// let a=2200
// debugger;
// if ((a%4==0 && a%400==0)  && a%100!==0 ){
//   console.log('Its a leap year')
// }else{
//   console.log('Its not a leap year')
// }

//=========== TERNARY OPERATOR:::::
// let a=false
// x = a ? 'its a true':'its a false'
// console.log(x)

////👉=========SWITCH AND CASE STATEMENT
/*
function whatIsA(a) {
  switch (a) {
    case 1:
      return console.log("A is 1");
      break;
    case 2:
      return console.log("A is 2");
      break;
    case 3:
      return console.log("A is 3");
      break;
    case 4:
      return console.log("A is 4");
      break;
    case 5:
      return console.log("A is 5");
      break;
    default:
      console.log("Less Than 1 or Greater Than 5");
  }
}

whatIsA(1)
whatIsA(3)
*/

////👉============WHILE LOOP & DO_WHILE LOOP:::::

/*
let x=0

while(x<=10){
  console.log(x) // it will print n times(n=10)||first check condition then clg
  x+=1
}

do{
  console.log(x) // it will print n+1 times(n=10) || first clg then check condition
  x++
}while(x<=10)

// The best and shorter version of both is FOR loop*****

*/

////👉=============FOR LOOP
//=====(i) FOR (ii)FOR in (iii)FOR of both (ii)&(iii) used in arrays

/*

const tableOf = (arg)=>{
  for (i=1;i<=10;i++){
    console.log(`${arg} * ${i} = ${arg*i} `)
  }
}
*/

//------------------------------------------------------------------------------------------------
//================================ ECMAScript (MODERN JS 2015)  ES6==============================//
///////////////////////////////////////////////////////////////////////////////////////////////////
/*
1.) LET & CONST (BLOCK SCOPE unlike VAR as GLOBE SCOPE)
2.) DEFAULT ARGUMENTS
3.) FAT ARROW FUNCTION
4.) DESTRUCTURING
5.) TEMPLATE STRING
6.) REST OPERATOR
7.) SPREAD OPERATOR
8.) OBJECT PROPERTIES
*/

////👉======(1)LET & CONST======👈//
/*
var realName='Rock' //Globe Scope
bioData = () => {
  var firstName='Asim' // Functional Scope
  const lastName = 'Shah' // Block scope or Function scope
  console.log('The full name is '+firstName+' '+ lastName)
}

bioData()
let lastName = "khan"
console.log(realName +' '+ lastName)
console.log(firstName +' '+ lastName)
*/

////👉========(2)Function With DEFAULT ARGUMENTS========👈//

/*
 let mul = (a=1,b=1,c=1)=>{
  return console.log(a*b*c)
}
mul(5,6,2) //a=5,b=6,c=2
mul(5,6) //a=5,b=6,c=1
mul(5) //a=5,b=1,c=1 
*/

////////// //👉==========ARRAYS & METHODS============👈//////////
/* 
let arr=['asim','sultan','imran','zeeshan']

console.log(arr[arr.length])

//👉===========FOR IN====(in for index)==========👈
for(let i in arr){
  console.log(i) // 0 1 2 3 
}
///👉========== FOR OF============👈
for(let i of arr){
  console.log(i) // asim sultan imran zeeshan
} 
 */
//---------------------------------------💪IMP--------------------------------------------------
//===============forEach(current elemnent, index, array)**===========
////////////////////////////////////////////////////////////////////
//Returns undefined
// not chainable
/*
arr.forEach((ele,i,arr)=>{
console.log(` element : ${ele}, index: ${i}, array: ${arr}`)
})
 */
/* 
let newArr = arr.forEach((ele,i)=> ele==='imran')
console.log(newArr)

////👉==========indexOf(string,number)!==lastIndexOf(string,number)===========👈
/* 
//FORWARD serarch Method()
//IndexOf("string",from index) returns index if element found else return -1.
let IndOf = arr.indexOf('imran')
let IndOfs = arr.indexOf('khan')

console.log(IndOf)  //2
console.log(IndOfs) //-1
 */
//BACKWARD serarch Method()
// console.log(arr.lastIndexOf('sultan'))


// let momo=['chicken','onion','garlic','wheatflour','spices']

////👉============includes(string,from index)**Plural**===========👈
/*
//includes() returns boolean value i.e true or false
//Forward search method(): Search For the element

let ingre = momo.includes('garlic')
let noIngre = momo.includes('salt')
console.log(ingre) //true
console.log(noIngre) //false
*/

////👉==================find(callback(CurEle,index,string)={})================👈

//this method can iterate through all values
/* 
let findIngre = momo.find((curVal)=>{
  if(curVal) {console.log(`Yes there is ${curVal}`)}
}) 
*/
/*
//this method return only one value as the condition meet. else returns'undefined'**
let priceTag = [100,159,199,250,300,420,500]

const findTag = priceTag.find((curTag) => curTag < 250)
console.log(findTag) //return 100 only
//const findTag = priceTag.find((curTag) => curTag < 50)
//console.log(findTag) // undefined

*/
////👉================findIndex(callback(CurEle,index,string)={})===============👈

//return the index of first element which satisfied the condition, else returns -1**
/* 
//const findInd = momo.findIndex((curInd)=> curInd==='wheatflour')
//console.log(findInd) //3
const findInd = momo.findIndex((curInd)=> curInd==='wheat')
console.log(findInd) //-1
*/

//-------------------------------------------💪IMP---------------------------------------------
//=======#######=======filter((curVal,index,array)=>{})=====#######======
//////////////////////////////////////////////////////////////////////

//Return a new array containing all elements of parent array provided with the filteration. else empty array

// let prices = [50,399,259,20,10,350,149,450,500]
/*
const newFilter = prices.filter((curEle)=> curEle>200)
console.log(prices)
console.log(newFilter) //[ 250, 300, 349, 400, 500 ]

const newFilterTag = prices.filter((elem,index)=>{
        return elem==320
})
console.log(newFilterTag) // []
*/
//--------------------------------------------------------------------------------------------
////👉##########=========Sort() Method in Array=======#########👈

//Return the sorted(default ASC) array, built upon converting the elements into strings,
//then using their sequence of UTF-16 code units values.
// Works well with strings. It arranges like in DICTIONARY.
// EVEN WITH NUMBER AS IT COVERTS THEM FIRST INTO STRING i.e 20>100

/* 
let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
let sorted = months.sort()
console.log(months) 
*/
//--------------------------------------------💪IMP-------------------------------------------
/////////// CURD OPERATION WITH ARRAYS METHODS////////////////
/////ADD===unshift(start) and push(end)/////SUB===shift(start) and pop(end) //////

//let fruits=['apple','orange','grapes','banana']
/*
////👉(a) push(strings) : returns the new length of array. Alter Parent array.
let fr1= fruits.push('guava','litchi')
console.log(fruits) //['apple','orange','grapes','banana','guava','litchi' ]
console.log(fr1) //6
*/
/*
////👉(b) unshift(strings) : returns the new length of array. Alter Parent array.
let fr2= fruits.unshift('guawa','litchi')
console.log(fruits) //['guawa','litchi','apple','orange','grapes','banana' ]
console.log(fr2) //6
*/
/*
////👉(c) pop() : returns the poped element(only 1 so no need of arg). Alter parent array.
let fr3=fruits.pop()
console.log(fruits)
console.log(fr3)
*/
////👉(d) shift() : returns the poped element(only 1 so no need of arg). Alter parent array.
/*
let fr4=fruits.shift()
console.log(fruits)
console.log(fr4)
*/
//------------------------------------------💪IMP-----------------------------------------------
////////////////=============SPLICE() METHOD===============/////////////////
//splice(start-number,delete-count,string-to-add)
// Returns the array of deleted elements

//let fruits=['Apple','Orange','grapes','Banana']
////👉(1)lets add guawa in the end
/* 
let frs1= fruits.splice((fruits.length),0,'Guawa')
console.log(fruits) //['Apple','Orange','grapes','Banana','Guawa']
console.log(frs1) //[]
 */
////👉(2)Lets Change grapes to Grapes
/* 
let frs2= fruits.splice(fruits.indexOf('grapes'),1,'Grapes')
console.log(fruits) //['Apple','Orange','Grapes','Banana']
console.log(frs2)  //['grapes']
 */
/* 
let upper = (arg1,arg2) => {
  let check = fruits.includes(arg1)
  let startIndex = fruits.indexOf(arg1)
      if(check){
        result = fruits.splice(startIndex,1,arg2);
        return console.log("New Array:",fruits,'\n',"Deleted Element are:",result)
      }else{ console.log('No such element Found')}
}
 upper('grapes','Grapes')
 */
/* 
 let frs3= fruits.splice(fruits.indexOf('Orange'),Infinity)
console.log(fruits) //['Apple']
console.log(frs3)  //['Orange','Grapes','Banana]
 */
//-------------------------------------💪💪VV-IMP💪💪------------------------------------//
//============================== MAP((curEle,index,array)=>{})==========================//
//______________________________________________________________________________________//

//let num = [4,9,16,25,36,49]
//Returns  a new array with transformed value as per the condition.
//Without mutating parent array.
//Ability to chain other methods [map().reduce().filter etc]

/* 
let newNum= num.map((curNum,i) =>  curNum > 7 )
console.log(newNum) //[false,true,false,false,true,true,true,true,true]
 */
/* 
 let sqrtNum = num.map((ele)=>{ return Math.sqrt(ele)})
 console.log(sqrtNum) // [2, 3, 4, 5,6, 7]

 let sqrtNum1 = num.map((ele)=>{ return Math.sqrt(ele)}).filter((ele)=>ele>4)
 console.log(sqrtNum1) // [ 5, 6, 7 ]
*/
////👉------------CHAINING----------👈
/* 
let sqrtNum2 = num.map((ele)=>{ return Math.sqrt(ele)}).filter((ele)=>ele>4).map((ele)=>{
  return ele*2
})
console.log(sqrtNum2) // 
 */

//----------------------------------------💪IMP-------------------------------------//
//===================REDUCE((Accumlator,curEle,curIndex,array)=>{})======================//
//________________________________________________________________________________//
//USED TO FLATTEN AN ARRAY : MEANS TO CONVERT A 3D/2D-ARRAY INTO A SIMPLE ARRAY.
//Returns a single value which is the function's accumulated result.
//Does not execute the function for empty array elements also does not change the original array.
/* 
let num1 = [1,2,3,4,5]

let sumArray= num1.reduce((acc,ele)=> {
  return acc+=ele;
})
console.log(sumArray) // 15

let mulArray= num1.reduce((acc,ele)=> acc*=ele)
console.log(mulArray) // 120
 */
/* 
let arr2D = [
  ['zone1','zone2'],
  ['zone3','zone4'],
  ['zone5','zone6'],
  ['zone7','zone8']
]
//💪💪
let flat2D = arr2D.reduce((acc,curEle)=>{
  return acc.concat(curEle)
})
console.log(flat2D) // ['zone1','zone2','zone3','zone4','zone5','zone6','zone7','zone8']
*/
/* 
let mArr = [[1,2],[3,4],[5,6]]
let nArr = mArr.reduce((acc,curVal)=>{
  return acc.concat(curVal)
})
console.log(nArr) //[ 1, 2, 3, 4, 5, 6 ]
 */
// 🛑 but RN it cant concat array inside array of array.
// We will cover it later , we will use es2019 method 🎇flat()
//_____________________________________________________________________________________________________

//----------------------------------------------------------------------------//
//👉==================================STRINGS==================================👈//
//____________________________________________________________________________//
/* 
////👉---ESCAPE CHARACTER:
let str1 = 'HELLO "ASIM" is MY NAME'
let str2 = "HELLO 'ASIM' is MY NAME"
let str3 = "HELLO \"ASIM\" IS MY NAME" // HELLO "ASIM" IS MY NAME
console.log(str1,'\n',str2,'\n',str3)
 */

/* 
////👉---STRING CONSTRUCTOR:
let newStr = new String('ASIM SHAH IS A PROGRAMMER')
console.log(newStr) //[String: 'ASIM SHAH IS A PROGRAMMER']
////👉--STRING LENGTH:
console.log(newStr.length) // 25
////👉--STRING INDEX:
console.log(newStr.indexOf('HA',0)) //6 (else -1)(caseSensitive)
////👉--STRING INCLUDES STRING:
console.log(newStr.includes("IM",0)) //true
////👉--STRING INSIDE STRING:
console.log(newStr.search("MM")) //21
console.log(newStr.substr(10)) //IS A PROGRAMMER
console.log(newStr.substr(10,4)) //IS A
console.log(newStr.substring(10,14)) //IS A
 */

//👉 --EXTRACTING STRING PARTS---👈
// let str = 'THIS IS VS CODE EDITOR'
/* 
//👉(a) slice(stratNum,endNum)
//Here endNum is exclluded(endNum-1)
console.log(str.slice(0,4))      //THIS
console.log(str.slice(4))       //IS VS CODE EDITOR
console.log(str.slice(4,-3))   //IS VS CODE EDI (omot 3 letter from last)
 */
/* 
//👉(b) replace(searchValue,newValue)
//Returns a new String, where the specified value(s) has been replaced by the new value.
console.log(str.replace('EDITOR','EDITOR PRO'))  //THIS IS VS CODE EDITOR PRO
console.log(str.replace('editor','EDITOR PRO')) //THIS IS VS CODE EDITOR (same string/case sensitive)
console.log(str) //THIS IS VS CODE EDITOR
 */

//👉 --EXTRACTING STRING CHARACTER---👈
/* 
let str1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' // so A=0 & Z=25
let str2 = 'abcdefghijklmnopqrstuvwxyz'
//👉(a) charAt(indexNum) : Returns the charcter 
//👉(b) charCodeAt(indexNum) : Returns UTF-8 code

console.log(str1.charAt(10)) //K
console.log(str1.charCodeAt(0))   //65  returns UTF-8 code of 
console.log(str2.charCodeAt(0))   //97
console.log(str1.charCodeAt(1))   //66
console.log(str2.charCodeAt(1))    //98
console.log(str1.charCodeAt(25))   //90
console.log(str2.charCodeAt(25))   //122
 */

//----------------------------------------------------------------------------//
//👉========================OTHER USEFUL METHODS============================👈//
//____________________________________________________________________________//

//👉(a)str.toUpperCase()
//👉(b)str.toLowerCase()
//👉(c)str.concat()
/* 
let  str1 = 'Asim'
let str2 = 'Shah'
console.log(str1.concat(str2)) //AsimShah
console.log(str1.concat(' ',str2)) //Asim Shah
 */
//👉(d)str.trim() ||str.trimLeft ||str.trimRight ||str.trimStart ||str.trimEnd
/* 
let  str3 = "       Asim  "
console.log(str3) //       Asim  
console.log(str3.trim()) //Asim
 */
//(e)----💪--str.split----💪--
// Converts a string to an array
// split(separator:string , limit:number)
/* 
let txt = 'a b c d e f'
let txt1 = 'a&b&c&d&e&f'
console.log(txt.split(' ')) // [ 'a', 'b', 'c', 'd', 'e', 'f' ] : space is the seperator
console.log(txt1.split('&')) //[ 'a', 'b', 'c', 'd', 'e', 'f' ] & is the seperator
 */


//----------------------------------------------------------------------------//
//👉========================DATE & TIME IN JS============================👈//
//____________________________________________________________________________//


/* 
let clk = () => {
  document.getElementById('clock').innerHTML = Math.ceil(Math.random()*100);
}
setInterval(clk,1000)

function goBack (){
  window.history.back();
}
function goBack (){
  window.history.forward();
}
 */
//----------------------------------------------------------------------------//
//👉========================PLAY WITH DOM & BOM============================👈//
//____________________________________________________________________________//

function changeHeading(){
  let xyz = document.getElementById('heading')
  xyz.innerHTML = 'Loading...👻' 
  setTimeout(()=>{
    xyz.innerHTML = 'Asim Shah'
    xyz.style.color = 'Red'
  },1200)
  // let count = 0;
  // let countTimer = setInterval(() => {
  //   document.getElementById('count').innerHTML= count;
  //   count++
  //   if(count===6){
  //     clearInterval(countTimer)
  //     count=null
  //   }
  // }, 1000);
}




//----------------------------------------------------------------------------//
//👉========================EVENTS IN JAVASCRIPT============================👈//
//____________________________________________________________________________//

// section 1️⃣ 4 ways of writing Events in JavaScript

// 👉1: using inline events alert();
/* 
onclick='alert("Hello Im Asim Shah")'
 */
///////////////////////////////////////////////
// 👉2: By Calling a funcion (We already seen and most common way of writing) 
/* 
onclick='changeHeading()'
 */
/////////////////////////////////////////////
// 👉3: using Inline events (HTML onclick="" property and element.onclick)
/* 
let ch1 = document.getElementById('child-1');
          ch1.onclick = function(){
              alert('Im CHILD ONE')
          }
*/
////////////////////BEST////////////////////////
// 👉4: using Event Listeners (addEventListener and IE's attachEvent)
/*
ch2 = document.getElementById('child-2');
          ch2.addEventListener('click',function(){
              alert('Im Second Child')
          })
*/
///////////////////////////////////////////

// section 2️⃣: What is Event Object?
// *💪Event💪* object is the parent object of the event object. 
// for Example 
// MouseEvent, focusEvent, KeyboardEvent etc 



// section ️3️⃣ MouseEvent in JavaScript
// The MouseEvent Object
// Events that occur when the mouse interacts with the HTML 
// document belongs to the MouseEvent Object.



// section ️4️⃣ KeyboardEvent  in JavaScript
// Events that occur when user presses a key on the keyboard, 
// belongs to the KeyboardEvent Object.
// https://www.w3schools.com/jsref/obj_keyboardevent.asp





// Section 5️⃣ InputEvents in JavaScript 
// The onchange event occurs when the value of an element has been changed.
// For radiobuttons and checkboxes, the onchange event occurs when the 
// checked state has been changed.


// **********************************************************************

// 👉  JavaScript Timing Events

// **********************************************************************


// The window object allows execution of code at specified time intervals.

// These time intervals are called timing events.

// The two key methods to use with JavaScript are:

// setTimeout(function, milliseconds)
// Executes a function, after waiting a specified number of milliseconds.

// setInterval(function, milliseconds)
// Same as setTimeout(), but repeats the execution of the function continuously.


// 1️⃣ setTimeout()

// 2️⃣clearTimeout()

// 3️⃣ setInterval()

// 4️⃣ clearInterval()


// **********************************************************************

// 👉 object oriented Javascript

// **********************************************************************


// 1️⃣ What is Object Literal?

// Object literal is simply a key:value pair data structure. 

// Storing variables and functions together in one container, 
// we can refer this as an Objects.

// object = school bag 

// How to create an Object?
/* 
let profile = {
  fName:'Asim',
  sName: 'Shah',
  age: 27,
  height: '5ft 11"',
  flName: function(){
    return `${profile.fName} ${profile.sName}`
  },
  add: function(x,y){ //call as profile.add()
    return x+y
  }
}
console.log(profile.add(5,6)) // 11
 */
///////////////////////// IMP ////////////////////////////
//🚧 THE ES6 WAY TO WRITE A METHOD IN AN OBJECT IS ::::⏬
//////////////////////////////////////////////////////////
/* 
let newProfile = {
  Name:'Asim Shah',
  age: 28,
  mul(x,y){
    return x*y
  }
}
console.log(newProfile.mul(5,6)) // 30
 */
//OBJECT UNDER OBJECT:::::
/* 
let info = {
    name:{
      owner:'Asim Shah',
      nickName: 'King',
      pet:'kallu',

    }
}
console.log(info.name.owner) // Asim Shah
 */
////////////////////////////////////////👉THIS👈/////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

// 👉2️⃣ What is this(aka the execution context) Object?

// The definition  of "this" object is that it contain the current context. 

// The this object can have different values depending on where it is placed.  

// console.log(this.alert('Awesome')); {try in browser console}

// It refers to the current context and that is window global object 
/* 
let profile2 = {
  name:'Asim Shah',
  age: 28,
  info(){
    console.log(this.name , this.age)
  }
  }
profile2.info() //Asim Shah 28 
*/
/* 
let profile3 = {
  name:'Asim Shah',
  age: 28,
  info(){
    console.log(this)
  }
  }
  profile3.info()  // { name: 'Asim Shah', age: 28, info: [Function: info] } returns full object
   */
/* 
  let profile3 = {
    name:'Asim Shah',
    age: 28,
    info : () =>{
      console.log(this) // {}
      console.log(this.age) // undefined
    },
    }
    profile3.info() //{} 
     */
// 🟡 NOTE::::
// 🟡 this object will not work with arrow function bcz arrow function is bound to class.
// 🟡 The arrow function doesn’t define its own execution context. 
/* 
const myObject = {
  myName:'Asim',
  myMethod(items) {
    console.log(this); // gives myObject :{ myName: 'Asim', myMethod: [Function: myMethod] }
    const callback = () => {
      console.log(this); //  // gives myObject * 3 times
    };
    items.forEach(callback);
  }
}
myObject.myMethod([1,2,3])
 */
// 🟡 this value inside the arrow function callback() equals to this of the outer function myMethod().

///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////


// 4️⃣ Destructuring in ES6
// The destructuring assignment syntax is a JavaScript expression 
// that makes it possible to unpack values from arrays, 
// or properties from objects, into distinct variables.

  //  ➡ Array Destructuring  🏁

  // const myBioData = ['asim', 'shah', 27];

  // let myFName = myBioData[0];
  // let myLName = myBioData[1];
  // let myAge = myBioData[2];
  
// let [myFName,myAge, myLName] = myBioData;
// console.log(myAge);

  // we can add values too 
  
  // let [myFName,myLName,myAge, myDegree="MCS"] = myBioData;
  // console.log(myDegree);



  // ➡ Object destructuring 🏁
  // const myBioData = {
  //   myFname : 'asim',
  //   myLname : 'shah',
  //   myAge : 27
  // }

  // let age = myBioData.age;
  // let myFname = myBioData.myFname;

  // let {myFname,myLname,myAge, myDegree="MCS"} = myBioData;
  // console.log(myLname);





// 5️⃣ Object Properties 

// ➡ we can now use 💪Dynamic💪 Properties // 🟡NOTE

      // let myName = "asim";
      // const myBio = {
      //   [myName] : "hello how are you?",   // 🟡NOTE Dynamic data adding
      //   [20 + 7] : "is my age"      // 🟡NOTE : Dynamic calculation
      // }

      // console.log(myBio); //{ '27': 'is my age', asim: 'hello how are you?' }

      
      // let myName = "Asim shah";
      // let myAge = 26;
      
      // const myBio = {myName,myAge}
      
      // console.log(myBio); //{ myName: 'Asim shah', myAge: 26 }
      
      // ➡ no need to write key and value, if both are same // 🟡NOTE
      /* 
      const myBio1 = {myName,myAge}
      console.log(`my nmame is ${myBio1.myName} and my age is ${myBio1.myAge}`) //my nmame is Asim shah and my age is 26
       */

// 6️⃣Spread Operator

// const colors = ['red', 'green', 'blue', 'white', 'pink'];

// const myColors = ['red', 'green', 'blue', 'white','pink', 'yellow', 'black'];

// // // 2nd time add one more color on top and tell we need to write it again 
// // // on myColor array too 

// const MyFavColors = [ ...colors, 'yellow', 'black'];

// console.log(MyFavColors);

/* 
 arr = [1,2,3,4,5]

 let arr1 = [...arr,6,7]
 console.log(arr1)
 */


////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////👉 ECMA SCRIPT FEATURES 👈///////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

// 1️⃣ES7 - 2016 features 

//👉1: array include 
// const colors = ['red', 'green', 'blue', 'white', 'pink'];
// const isPresent = colors.includes('purple');
// console.log(isPresent);

//👉 2: **
// console.log(2**3); 


// 2️⃣ES8 - 2017 Features   ////////////IMPORTANT//////////////

//👉 String padding(Blank-space)
//👉 Object.values(any_object)  //from object into array
//👉 Object.entries(any_object)  //from object into array
//👉 Object.fromEntries(array)  //from array into object
/* 
const message = "my name is asim";
console.log(message); //my name is asim
console.log(message.padStart(35)); //                    my name is asim(20 spaces)
console.log(message.padEnd(50)); //35 spaces in end
//// 🟡NOTE padding gives blank spaces of totalLength-padding(message.length-35)
 */
/* 
const person = { name: 'Fred', age: 87 };
console.log( Object.values(person) ); //[ 'Fred', 87 ]
const arrObj =  Object.entries(person);
console.log(Object.fromEntries(arrObj)); //{ name: 'Fred', age: 87 } 
 */
/* 
let bio = {
  name:'asim',
  class:'engg',
  home:'jamia'
}
console.log(Object.values(bio)) //[ 'asim', 'engg', 'jamia' ]
console.log(Object.entries(bio)) //[ [ 'name', 'asim' ], [ 'class', 'engg' ], [ 'home', 'jamia' ] ]
 */

///////////////////////////////////////////////////////////////////////////////////
// 🎯 IMP :: 🟡NOTE :: with Object.values(obj) one can convert an object into an array

//if you want an object from an array you can use Object.fromEntries(array).i.e,
/* 
bioArr = [[ 'name', 'asim' ], [ 'class', 'engg' ]]
console.log(Object.fromEntries(bioArr)) //{ name: 'asim', class: 'engg' }
 */


//3️⃣ ES2018
/* 
const person = { name: 'Fred', age: 87, degree : "engg" };
const sPerson = { ...person };

console.log(person); //{ name: 'Fred', age: 87, degree: 'engg' }
console.log(sPerson); //{ name: 'Fred', age: 87, degree: 'engg' }

// even after time, if you add smnthg to person, it shall automatically added to person1
 */

//4️⃣ ES2019
// 🎯Array.prototype.{flat,flatMap}🎯
// Object.fromEntries()
/* 
let arr2D = [
  ['zone1','zone2'],
  ['zone3','zone4'],
  ['zone5',['zone6','zone7']]
]
console.log(arr2D.flat()) // ['zone1','zone2','zone3','zone4','zone5',['zone6','zone7']]
console.log(arr2D.flat(2)) // ['zone1','zone2','zone3','zone4','zone5','zone6','zone7']
console.log(arr2D.flat(Infinity)) // ['zone1','zone2','zone3','zone4','zone5','zone6','zone7']
 */
//🟡NOTE:: The default depth level of flat() method is 1, the max is Infinity.

//5️⃣ ES2020
// #1: BigInt

// let oldNum = Number.MAX_SAFE_INTEGER;
// // console.log(oldNum);
// // console.log( 9007199254740991n + 12n );
// const newNum = 9007199254740991n + 12n;

// console.log(newNum);
// console.log(typeof newNum);


// const foo = null ?? 'default string';
// console.log(foo);

////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////👉 ADVANCED JAVASCRIPT👈 ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

// // 1️⃣: Event Propagation (Event Bubbling and Event Capturing):::
// // The event propagation mode determines in which order the elements receive the event.
// // Event bubbling and capturing are two ways of event propagation in the HTML DOM API,
// // when an event occurs in an element inside another element, and both elements have 
// // registered a handle for that event. The event propagation mode determines in which 
// // order the elements receive the event.

// // With bubbling, the event is first captured and handled by the innermost element and 
// // then propagated to outer elements. (Bubbling a default event)

// // With capturing, the event is first captured by the outermost element and propagated 
// // to the inner elements.

// //  To skip the event propagation we have one method called 'stopPropagation()'

/*
    div1 = document.getElementById('childDiv')
    div1.addEventListener("click", function (event) {
      alert("you clicked on child div");
      event.stopPropagation();
    });
*/

// // If we want capturing then we need to use the third arg of addEventListener('',(){},false/true)
// // false is default for bubbling and true is for capturing. 

/////////////////////////////////////////////////////////////////////////////////////////////////

// // 2️⃣: Higher Order Function
// // function which takes another function as an arguments is called HOF 
// // wo function jo dusre function ko as an argument accept krta hai use HOF 

// // Lets create a calculator using HOF :::
/* 
const add = (a,b) => {
    return a+b;
}
const sub = (a,b) => {
    return Math.abs(a-b);
}
const mul = (a,b) => {
    return a*b;
}
const calculator = (num1,num2, operator) => { //This is HOF
  return operator(num1,num2);
}

console.log(calculator(5,2,mul)); //10
 */

////////////////////////////////////////////////////////////////////////////////////////////////

// // 3️⃣: Callback Function
// // function which get passed as an argument to another function is called CBF 
// // A callback function is a function that is passed as an argument to 
// // another function, to be “called back” at a later time. 
// // Jis bhi function ko hum kisi or function ke under as an arguments passed 
// // krte hai then usko hum CallBack fun bolte hai 

// // Difference Between Higher Order Function and Callback Function ?

///////////////////////////////////////////////////////////////////////////////////////////////


// // 5️⃣ Hoisting in JavaScript 
// // we have a creation phase and execution phase.
// // Hoisting in Javascript is a mechanism where variables and functions
// // declarations are moved to the top of their scope before the code execute.
// For Example 👇
// console.log(myName);
// let myName;
// myName = "thapa";

///////////////////////////////////////////////////////////////////////////////////////////////

// // 6️⃣ What is Scope Chain and Lexical Scoping in JavaScript? 
// // The scope chain is used to resolve the value of variable names in JS.
// // scope chain in js is lexically defined, which means that we can 
// // see what the scope chain will be by looking at the code. 
// // At the top, we have the Global Scope, which is the window Object
// // in the browser.
// // Lexical Scoping means Now, the inner function can get access to 
// // their parent functions variables But the vice-versa is not true.

// // For Example 👇
/* 
let a = "Hello guys. "; // global scope
const first= () => {
  let b = " How are you?"
    const second = () => {
      let c = " Hii, I am fine thank you🙏";
      console.log(a+b+c);
    }
    second();
    //console.log(a+b+c); //I can't use 'c' , it will give error
}
first();
 */
//                                    ////////////
////////////////////////////////////// IMPORTANT ////////////////////////////////////
//                                   ////////////
// // 7️⃣ What is Closures in JavaScript 🤔
// // Closure is an important JavaScript pattern to give private access to a variable.
// // A closure is the combination of a function bundled together (enclosed) with references 
// // to its surrounding state (the lexical environment). 
// // In other words, a closure gives you access to an outer function’s scope from an inner function. 
// // In JavaScript, closures are created every time a function is created, at function creation time.
// // For Example 👇
/* 
const outerFun = (a) => {
    const innerFun = (a) => {
      let double = a+a;
      return console.log(`the sum of the two no is ${double}`);
    }
    innerFun(a);
}
outerFun(50);
 */
//// it is same, like lexical scoping. Lets have One more Example 👇
/* 
const outerFun = (a) => {
  let b = 10;
  const innerFun = () => {
    let sum = a+b;
    console.log(`the sum of the two no is ${sum}`);
  }
  return innerFun;
}
let checkClousure = outerFun(5);
console.dir(checkClousure);
 */
////////////////////////////////////////////////////////////////////////////////////
///////////////////// //  👉 ASYNCHRONOUS JAVASCRIPT 👈 // ///////////////////////
/////////////////////////////////////////////////////////////////////////////////

// // 6️⃣:   Synchronous JavaScript Prog 

// 1work = 10min
// 2work = 5s

// const fun2 = () => {
//   console.log(`Function 2️⃣ is called`);
// }

// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called Again ✌`);
// }

// fun1();

////////////////////////////////////////////////////////////////
// Asynchronous JavaScript Prog 

// const fun2 = () => {
//   setTimeout(()=> {
//       console.log(`Function 2️⃣  is called`);
//   }, 2000);
// }

// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called Again ✌`);
// }

// fun1();

/////////////////////////////////////////////////////////////////////////////

// Currying


// const sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3); 

// sum(5)(3)(8);

/////////////////////////////////////////////////////////////////////////////

// // 8️⃣: CallBack Hell 

// setTimeout(()=>{
//     console.log(`1️⃣ work1 is done`);    
//     setTimeout(()=>{
//         console.log(`2️⃣ work2 is done`); 
//         setTimeout(()=>{
//             console.log(`3️⃣ work3 is done`);  
//             setTimeout(()=>{
//                 console.log(`4️⃣ work4 is done`); 
//                 setTimeout(()=>{
//                     console.log(`5️⃣ work5 is done`);   
//                     setTimeout(()=>{
//                         console.log(`6️⃣ work6 is done`);    
//                     }, 1000) 
//                 }, 1000)   
//             }, 1000)  
//         }, 1000)   
//     }, 1000)
// }, 1000)

///////////////////////////////////////////////////////////////////////////////


// let work = (n) => {
//   setTimeout(() => {
//     console.log(`Work${n++} is done!`);
//     setTimeout(() => {
//       console.log(`Work${n++} is done!`);
//       setTimeout(() => {
//         console.log(`Work${n++} is done!`);
//         setTimeout(() => {
//           console.log(`Work${n++} is done!`);
//           setTimeout(() => {
//             console.log(`Work${n++} is done!`);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// };


let printOne = () =>{
  setTimeout(() => {
    console.log(1);
  }, 1000);
}

let printTwo = ()=>{
  setTimeout(() => {
    console.log(2);
  }, 2000);
}


//// CALLBACK
// let printTwo = (cb)=>{
//   setTimeout(() => {
//     console.log(2);
//     cb()
//   }, 2000);
// }

//// PROMISE
// let printTwo =()=>new Promise((resolve,reject)=>{
//   try {
//     setTimeout(() => {
//           console.log(2);
//           resolve()
//         }, 2000);
//   } catch (error) {
//     reject(error);
//   }
// })

// PrintTwo().then(()=>printOne())

////// ASYNC-AWAIT
async function printNum(){
  await printTwo()
}
printNum()

























































































































































