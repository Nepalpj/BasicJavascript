// console.log("hello")

// const length = prompt("enter length")
// const width = prompt("enter width")
// const area = length*width;

// console.log(area);
// alert("the area of rectangle is :" + area);
// document.write("The area of rectangle is :" + area);

// variable

// var x = 90;
// console.log(x)

// var x= 100;
// console.log(x)

// var x = 20+5;
// console.log(x)

// let y = 70
// console.log(y)
// y= 56;             // can declear upto 2 times
// console.log(y)

// let y = 3+3;     // not allowed
// console.log(y)

// const z = 78;
// console.log(z)

// const z = 50;
// console.log(z)
//not allowed
// const z = 50+60;
// console.log("z")

// const name="Amrit Gurung ";
// const y = 89;
// const ans = name + y;
// console.log(ans);

// let y = true;
// console.log( typeof y)

// let x = 59;
// let y = 66;
// let z = true;   // default value 1 if it is true

// let ans = x + y + z;
// console.log(ans)

// let y = null;
// console.log(y);
// console.log(typeof y)

// let z;
// console.log(z)
// console.log(typeof z)

// const name ="Harka";
// const lname="rai";

// // console.log("guitey : " +name + " " + lname);
// console.log(`haina k ho yo : ${name} ${lname} `);

// const name ="prasanna"
// const lname ="joshi"
// const age = "22"

// console.log(`my name is ${name} ${lname} and age is ${age}`)

// type conversion

// const x = "9";
// console.log(x)
// console.log (typeof x)          //converting number in string
// console.log (typeof String(x));

// const x = "hello world";
// console.log(x)
// console.log (typeof x)          // convertng into number
// console.log (typeof Number(x));

// string method

let result = "hello world";
// console.log(result.length)
// console.log(result[0]);

// let add = "I am here";
// console.log(result.concat("harka"));
// console.log(result.replace("hello","how"));
// console.log(result.split(" "));

//charat

// console.log(result.charAt(6));

//indexof
// console.log(result.indexOf("r"));

//include
// console.log(result.includes("world"))

//trim
// console.log(result.trim())     to remove space

//substring
// console.log(result.substring(0,4))

//slice
// console.log(result.slice(0,4))

// console.log(result.toLowerCase());
// console.log(result.toUpperCase());

//ifelse

// let email ="prawwwe22@gmail.com";
// let password ="12345689"

// if (email === "prawwwe22@gmail.com" && password === "12345689"){
//     console.log("welcome")
// }else{
//     console.log("Invalid credentials")
// }

// let day ="cloudy";
// if(day === "rainy"){
//     console.log("Its rainy day")

// }else if(day === "sunny"){
//     console.log("Its a beautiful day");

// }else if(day === "cloudy"){
//     console.log(" k aja pani parla");

// }else if(day === "winter"){
//     console.log("Its a cold day");

// }else {
//     console.log("Invalid day!!");

// }

// let x = 10;
// if(x > 15){
//     console.log("x is greater than 15")

// }else if ( x > 5) {
//     console.log("x is greater than 5 but not greater than 15")
// }else {
//     console.log("x is  not greater than 15")
// }

// let grade = "A";

//  if (grade === "A") {
//     console.log("excellent");

//  }else if (grade === "b") {
//     console.log("very good");

//  }else if (grade === "C") {
//     console.log("good");

//  }else if (grade === "D") {

//     console.log("Need to work hard");
//  }else {
//     console.log("Invalid");
//  }

// let day = new Date().getDay();
// switch (day) {
//   case 0:
//     console.log("Today is a Sunday!");
//     break;

//   case 1:
//     console.log("Today is a Monday!");
//     break;

//   case 2:
//     console.log("Today is a Tuesday!");
//     break;

//   case 3:
//     console.log("Today is a Wednesday!");
//     break;

//   case 4:
//     console.log("Today is a Thursday!");
//     break;

//   case 5:
//     console.log("Today is a friday!");
//     break;

//   case 6:
//     console.log("Today is a Saturday!");
//     break;

//   default:
//     console.log("Invalid day!");
//     break;
// }

// let month = "june";

// switch (month) {
//   case "january":
//   case "february":
//   case "march":
//    console.log("The month is Q1")
//     break;
//     case "April":
//       case "May":
//       case "June":
//        console.log("The month is Q2")
//        break;
//     case "july":
//   case "August":
//   case "September":
//    console.log("the month is Q3")
//    break;

//    case "October":
//   case "November":
//   case "december":
//    console.log("the month is Q4")
//    break;
//   default:
//    console.log("Invalid")
//     break;
// }


// let grade = "B";

// switch (grade) {

//    case "A":
//       console.log("Excellent");
      
//       break;

//       case "B":
//       console.log("Very Good");
      
//       break;

//       case "C":
//       console.log("Good");
//       break;

//       case "D":
//       console.log("Need to work hard");
      
//       break;

//    default:

//       console.log("Invalid");
//       break;
// }


// for (let i=0; i<=10; i++){
//    console.log("Iteration", i);
// }


// for (let i=0; i<=10; i++){
//    if(i%2===0)
//    console.log("even", i);
// }


// let inputvalue = prompt("enter a number")
// let number = Number(inputvalue);

// if(isNaN(Number)){
//    alert("enter the valid number");
// }else{
//    document.write("Even number are: ")
// }

// for(let i =0; i<=10; i++){
//    if( i % 2 === 0){
//       document.write("<br>",i)
//    }
// }


// let inputvalue = prompt("enter a number")
// let number = Number(inputvalue);

// if(isNaN(number)){
//    alert("enter the valid number");
// }else{
//    document.write("Odd number are: ")
//    for(let i =0; i<=10; i++){
//      if(i % 2 !==0){
//       document.write("<br>",i)
//      }

//    }


// }

//while loop 
// let i =0;
// while (i<= 10) {
//    console.log("iteration",i)
//    i++;
// }

//do while
// let i = 10;
// do {
//    console.log("hello world")
//    i++;

// } while (i <10);


//array

// const arr = [1,2,3,4,5,"string"];

// console.log(arr[1]);

// const arr = [];

// arr[0] =90;
// arr[1] = "hello";

// console.log(arr.) 


const arr = [1,5,6,4,8,9,7,8]
// console.log(arr.length)

// arr.push(6);
// console.log(arr);

// arr.pop();
// arr.unshift(5);
// arr.shift();
// const ans = arr.includes(5);

// const ans = arr.splice(2,5);
// const ans = arr.slice(1,3);
// console.log(ans);

// console.log(arr);


//object

const Obj = {
   name : "prasanna",
   age : 21 ,
   country : "nepal",
};
console.log(Obj);