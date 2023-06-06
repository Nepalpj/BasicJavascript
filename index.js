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

// let result = "hello world";
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


// const arr = [1,5,6,4,8,9,7,8]
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

// const Obj = {
//    name : "prasanna",
//    age : 21 ,
//    country : "nepal",
// };
// console.log(Obj);

// const arr = new Array(1,2,3);
// console.log(arr);

// const arr = [];
// for (let i=0; i<=10; i++){
//    arr.push(i);
// }
// console.log(arr);

//object
// const obj = {
   // car: "Toyota",
   // model:"camry",
   // color:"red",
   // wheel:"4",
   // iseletrc:"false",

   // StartEngine:function(){
   //    console.log("Start");
   //    return true;
   // },

   // CloseEngine:function(){
   //    console.log("close");
   //    return false;
   // },
// };
// console.log(obj);

// if(obj.StartEngine()){
//    console.log("your car is ready to start!");
// }else if (obj.CloseEngine()){
//    console.log("your car is notready to start!");
// }else {
//    console.log("Invalid")
// }



// const my = {
//    name:"Prasanna joshi",
//    age:"22",
//    ismarried:"false",
// };
// console.log(my);

// function myfunc() {
//    let x =5;
//    let y =10;
//    let ans = x+y;
//    console.log(ans)
// }
// myfunc();


// function myfunct(a,b,c=36) {
//    console.log(c)
//    return a + b +c;
// }

// const result = myfunct(5, 6);
// console.log(result);

// function SumArr(arr=[]){
//  let total = 0;
//  for (let i =0; i<arr.length; i++){
//    //total = total+arr[i]
//    // console.log(arr[i])
//    total +=arr[i];
//  }
//  return total;
// }
// const ans = SumArr([4,5,6,8,5,2,4,6]);
// console.log(ans);

//scoping

// let x = 90;
// {
//    let y = 9+5;
//    console.log(x)
// }

// console.log(y);


//varscope

// var x = 90;
// function myvar() {
//    if(true){
//       var x = 5+6;
//    }
//    console.log(x);
// }

// console.log(x);
// myvar();

//let

// let x = 90;
// function mylet() {
//    if(true){
//       let x = 5/6;
//       console.log(x);
//    }
// }

// console.log(x);
// mylet();

//const

// const x = 90;
// function myconst() {
//    if(true){
//       const x = 5-6;
//       console.log(x);
//    }
// }

// console.log(x);
// myconst();


// console.log(window)
// console.log(window.document);

// //Dom
// const header = document.getElementById("color");
// console.log(header);
// header.innerHTML ="changed!"
// header.style.background = "green";
// header.style.color= "white";

// const change = document.getElementsByClassName("para");
// console.log(change[0]);
//  change[0].innerHTML="k cha";
// console.log(change);     // arry rakhnu parxa yedi elements xa vaye

// change[0].style.color = "red";
// change[0].style.background = "white";


//dom manipulation

// const text = document.getElementById("first");
// const text1 = document.getElementsByClassName("second");
// const mayor = document.getElementsByTagName("span");
// const Btn = document.querySelectorAll("button");
// const clickBtn =document.querySelector("#click");


// //  console.log(clickBtn.getAttribute("id"));
// //  clickBtn.setAttribute("class", "classchanged");

// function ShowWhenClick() {  
//    const h1 = document.createElement("h1");
//    h1.innerHTML = "policy";
//    document.body.prepend(h1);
//    // document.body.append(h1);
// }

// function deletewhenclick(){
//       const h1 = document.querySelector("h1");
//       h1.remove();
// }
// console.log(mayor)
// text.innerHTML = "<h1>Have fun </h1>";
// text.style.backgroundColor="lightgreen"
// text.style.color="blue";
// text.style.alignContent="center"
// console.log(text);

// // console.log(text1);
// text1[0].style.backgroundColor="red";
// text1[0].style.color="white";

// mayor[0].innerHTML = "Balen";
// mayor[1].innerHTML = "Harka";

// Btn[1].style.color = "white";
// Btn[1].style.borderRadius = "5px"
// Btn[1].style.backgroundColor="red"
// Btn[1].style.boder = "none";
// Btn[1].style.margin = "10px"
// Btn[1].style.padding = "5px";
// Btn[1].onclick = deletewhenclick;


// clickBtn.style.color = "black";
// clickBtn.style.borderRadius = "5px"
// clickBtn.style.backgroundColor="green"
// clickBtn.style.boder = "none";
// clickBtn.style.margin = "10px"
// clickBtn.style.padding = "5px"
// clickBtn.onclick= ShowWhenClick;

// advance array method 

// const arr = [1,5,3,64,6,5,2,6,4];

// const myfunc=(a,b)=>{
//    return a+b;

// }

// const myfunc=(value,index)=>{
//    if (value === 6){
//       console.log("yes")
//    }

// };

// arr.find((value,index)=>{
//    if (value === 6){
//       console.log("yes")
//    }

// });

//find
// arr.find((value,index) => console.log(value, index));
// const newArr = arr.find((value,index) => value > 5);
// console.log(newArr)

// //filter
// const newArr = arr.filter((value,index) => value > 5);
// console.log(newArr)

// //sort
// const newArr = arr.sort((a,b) => a-b);
// console.log(newArr)


// const Subarr = [[1,5,4,6,4],[5,8,9,7,9,7,9],[0,5,3,7,6,4,8]]
// const newArr = Subarr.flat();
// console.log(newArr)

// //some
// const result = arr.some((value,index)=> value > 6);
// console.log(result);

// //every
// const result = arr.every((value,index)=> value > 6);
// console.log(result);

// //for each
// const result = arr.forEach((value,index)=> value += 6);
// console.log(result);
// console.log(arr);

// // //map
// const result = arr.map((value,index)=> value += 6);
// console.log(result);
// console.log(arr);

//reduce

// const result = arr.reduce((prevalue, currentvalue) =>
// prevalue + currentvalue
// );
// console.log(result);
// console.log(arr);


// add event listener
// const header = document.querySelector("#header");
// const box = document.querySelector("#box");
// const Btn = document.querySelector("#listen");
// const input = document.querySelector("input");


// input.addEventListener("change",(event) =>{
//    console.log(event.target.value);
// });

// Btn.classList.add("classdiv");

// Btn.addEventListener("click",()=>{
//    header.innerHTML ="Prachanda ley bahise lera aayo";
//    box.classList.add("classbox");
// });


// Btn.addEventListener("contextmenu",(e)=>{
//    e.preventDefault();
//    Btn.style.backgroundColor="green";
// })

// box.addEventListener("mouseover",()=>{
//    header.style.backgroundColor ="lightblue";
//    header.style.color="red";
//    Btn.style.transform = "scale(1.2)";
// });


// box.addEventListener("mouseout",()=>{
//    header.style.backgroundColor ="";
//    header.style.color="";
//    Btn.style.transform = "";
//    Btn.style.filter = "";


// });

// // window.addEventListener("contextmenu", (e)=>{
// //    e.preventDefault();
// //    Btn.style.filter = "blur(10px)";
// // })


// box.addEventListener("dblclick", ()=>{
//    document.body.style.backgroundColor = "black";
// })


// box.addEventListener("click", ()=>{
//    document.body.style.backgroundColor = "#fff";
// })

//math pbject

   // const result = Math.floor(4.5);
   // document.write(result);
   // console.log(result);


   // const result = Math.round(4.5);
   // document.write(result);
   // console.log(result);

// const result = Math.ceil(4.1);
// document.write(result);
// console.log(result);


// const result = Math.trunc(6.5);
// document.write(result);
// console.log(result);


// const result = Math.pow(4, 5);
// document.write(result);
// console.log(result);


// const result = Math.sqrt(625);
// document.write(result);
// console.log(result);


// const result = Math.random(4.5);
// document.write(result);
// console.log(result);


// const result = Math.sin((90 * Math.PI)/180);
// document.write(result);
// console.log(result);

// const result = Math.log2(8);
// document.write(result);
// console.log(result);


// const result = Math.log10(100);
// document.write(result);
// console.log(result);

// const result = new Date();
// console.log(result.getDay());
// document.write(result.toISOString());

// const result = new Date();
// document.write(result.getFullYear());
// console.log(result.getFullYear());

const input = document.querySelector("input");
const addBnt = document.querySelector("#add");
const Bntlogout = document.querySelector("#clear");

// const AddWebStorage = ()=>{
//       sessionStorage.setItem("key",input.value);
// };
// addBnt.addEventListener("click",AddWebStorage);
// Bntlogout.addEventListener("click", ()=>{
//    sessionStorage.clear();
// })
// if(sessionStorage.getItem("key")){
//    alert(sessionStorage.getItem("key"));
// }


const AddWebStorage = ()=>{
   localStorage.setItem("key",JSON.stringify({   // JSON.stringify to covert object to string
      name:"prasanna",
      roll:1,
      class:"BCA",
   }));
};
addBnt.addEventListener("click",AddWebStorage);
Bntlogout.addEventListener("click", ()=>{
localStorage.clear();
})
if(localStorage.getItem("key")){
console.log(JSON.parse(localStorage.getItem("key")));
}