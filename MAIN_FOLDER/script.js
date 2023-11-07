"use strict";

// function sum(a, b) {

//     console.log(a+b);
// return a + b;

// }

// function sum(a, b, c){
//     return a + b + c;
// }

// // Sample usage
// sum(1, 3, 9);
// sum(2,3);
// return sum;

// let user = 'sai';

// function greet(){
//     return `hey ${user} welcome`
// }

// let str = greet(user);
// console.log(str);

// let arr = [1,2,3,4];

// arr = [1,2,3,4,5];
// // console.log(arr);

// arr.splice(2,0,false,4)
// console.log(arr);

// let user = {
//     email:"sai@gmail.com",
//     password: "nothing"
// }

// console.log(user.email);
// console.log(user["password"]);

// let x = "password";

// console.log(user[x]);

// let age = 22;

// age >=18 ? console.log("have a beer") : console.log("have a water");

// let x = true;

// let res = x ? 2 : 4

// console.log(res)

// let arr = [8,5,6,4,5,5,5,96];

// for(let x of arr){
//     console.log(x)
// }

// for(let x in arr){
//     console.log(x , arr[x])
// }

// for(let i =2; i<=4;i++){
//     console.log(i , arr[i] )
// }

// let arr = [
//     23 ,
//     false ,
//     undefined ,
//     true,
//     {
//         a : 10,
//         b : 11
//     }
// ]

// for(let i of arr){
//     console.log(i);
// }
// console.log(arr[4].b);

// for(let k of arr){
//     console.log(k);

// }

// let ob ={a:3,b:1,c:"cc"}
// for(let x in ob){
//     console.log(x, ob[x]);
// }

//   -------------------------------------
// FUNCTIONS

// function sumOfTwoObjests(a,b){
//     let sum = (a+b);
//     return sum;
// }
// sumOfTwoObjests(2,2)

// let func = function(a,b,c){
//     console.log(a+b+c);
//     return func;
// }
// func(4,4,4)

// let fun = function(q,w,e){
//     console.log(q+w+e);
//     return fun;
// }
// fun(1,1,1)

// let sm = function (a){
//     console.log(a*2);
// }

// sm(2);

// let ss = (a,b)=>{
//     console.log(a+b);
// }
// ss(2,5)

// function foo(a,b){
//     return a+b
// }
// var result = foo(2,3,4)
// console.log(result)
// let ss;

// function sai(a,b){
//     ss = console.log(a+b);
//     return ss;
// }

// console.log( sai(4,4) );

// let a =20;
// let b = 15;

// let test = function (){
//     let b = 10;
//     console.log(a+b);
// }
// b = 11;
// test()

// there r 2 phases
// 1.inistilizing
// 2.executing

// first the variables will inistilize in call StaticRange
// like a = undefined;

// one by one...

// then aftet completing creation part

// the var which were decleared will be in temporal red zone

// after that it will move to execution part..
// and it will get decleared one by one

// let a = 1;
// let b = "abc";
// let c = true;

//     console.log(a+b+c);

// console.log(x);
// function x(){
//     console.log("foo");
// }
// x();

// function callme(){
//     console.log(y);
//     var y=100;
//     let z = 200;
//     console.log(y+x+z);
// }
// callme()
// let x;

// let a = 10;
// let x = 70;
// function parent(a, b){
//     let y = 90;
//     function child(){
//         console.log(a+b+x,y)
//         var y;
//     }
//     child();
// }
// parent();

// let student = {
//     name: 'aravind',
//     age: 2
// }
// let student2 = student;

// student2.name = 'sai';

// console.log(student.name,student2);

// let a = 20;
// let x = () => {
//     console.log(a);
// }
// function callme(func){
//     let a = 100;
//     func();
// }
// a = 24;
// callme(x);

// function parent(){
//     let child = (a) => {
//         console.log(a+b)
//     }
//     let a = 20, b = 100;
//     return child;
// }

// let a = 32,b=50;
// let result = parent()
// result(a+b)
// *********************************************
// let str = "nuthan"

// console.log(str.charCodeAt(1))
// let splicedStr = str.slice(2,5);
// console.log(splicedStr);
// tha

// let {name , age} = {name:'sai', age:22};

// console.log(name,age)
// sai , 22

// let {name:firstName , age} = {name:'sai', age:22};

// console.log(firstName,age)

// let x = 10, y=20;
// console.log( {x:x, y:y})
// console.log( {x,y} )
// { x: 10, y: 20 }
// { x: 10, y: 20 }
// ********************************************************
//                   spread operator
// let a1 = [5,7,9];
// let a2 = [9, a1,9];
// console.log(a1,a2)
// [ 5, 7, 9 ] [ 9, 5, 9 ]
// console.log(a2)

// let arr = [1,2,9,3];

// arr.forEach(function(element,index,list){
//     console.log(element,index,list)
// })

// for(let i = 0; i<arr.length;i++){
//     console.log(element,index);
// }

// arr.forEach(function(element,index,list){
//     console.log(list,index)
//     console.log(element);
// }

// )

// arr.forEach(function(element,list,arr){
//     console.log(arr)
// })

// function AgeCal(birthYear){
//     let age = 2023 - birthYear;
//     return age;
// }

// let presentAge = AgeCal(2000);
// console.log(AgeCal(2000))

// let CalAge2 = birthYear => 2023 - birthYear;
// let age2 = CalAge2(2000);
// console.log(age2);

// let AgeCalc = birthyear => 2023 - birthyear;
// let age5 = AgeCalc(2000);
// console.log(age5);

// let retairment = birthyear => {
//     let age = 2023 - birthyear;
//     let ret = 65 - age;
//     return ret;
// }

// let timeReamaining = retairment(2000)
// console.log(timeReamaining);

// function retCal(birthYear){
//     let age = 2023 - birthYear;
//     let ret = 65 - age;
//     return `you still have ${ret} years`
// }
// let retairnmentAge1 = retCal(2000);
// console.log(retairnmentAge1);
// console.log(retCal(2000));

// function retCal(birthYear){
//     let age = 2023 - birthYear;
//     let ret = 65 - age;
//     return `you still have ${ret} years of service`
// }

// console.log(retCal(2000));

// const dolphinsScore1 = 44;
// const dolphinsScore2 = 23;
// const dolphinsScore3 = 71;
// const koalasScore1 = 65;
// const koalasScore2 = 54;
// const koalasScore3 = 49;

// function calcAverage(s1,s2,s3){
//     return(s1+s2+s3)/3;

// }

// const avgDolphins = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);
// const avgKoalas = calcAverage(koalasScore1, koalasScore2, koalasScore3);

// console.log(avgDolphins,avgKoalas)

// function checkWinner(avgDolphins,avgKoalas){
//     if(avgDolphins >= 2*avgKoalas){
//         // return "dolphins won"
//         console.log("dolphines won the match")
//     }
//     else if(avgKoalas >= 2 * avgDolphins){
//         // return "koalas won the match"
//         console.log("koalas won the match")
//     }
//     else{
//         // return "match draw"
//         console.log("match draw")
//     }

// }

// checkWinner(avgDolphins,avgKoalas)
// let a =10;
// a = a++
// console.log(a++)
// console.log(a)
// console.log(++a)

// let n = 9383728;

// let sum = 0;

// while(n !==0){
//     let digit = n % 10;
//     sum += digit;
//     n = parseInt(n / 10);
// }
// console.log(sum)

// let arr = [1,2,3,4,5,10];
// let n = arr.length;
// for(let i = n-1;i>=3;i--){
//     let temp = arr[i];
//     arr[i] = arr[i-1];
//     arr[i-1] = temp;
// }

// console.log(arr);

// let aar = [1,4,7,8,9,6];

// for(let i = aar.length-1;i>=3;i--){
//     let tempp = aar[i];
//     aar[i] = aar[i-1];
//     aar[i-1] = tempp
// }

// console.log(aar)

//////////////////////////////////////////////////////////////////////////////////////
// let arr = [1,2,3,4,5,6,7,8,9]

// for(let i in arr){
//     console.log(i,arr[i]);
// }

/////////////////////////////////////////////////////////////////////////////////////////

// let student = {
//     name: "nuthanSai",
//     age: 22,
//     study:{
//         school:"littleBuds",
//         inter:"geetham",
//         degree:"sanjeev",
//     }
// }

// for(let i in student){
//     console.log(student[i])
// }

///////////////////////////////////////////////////////////////////////////////////////////

// delete student.age,

// let arr = [2, 6, 5, 9, 4, 8, 5, 8, 5];
// let count = {};

// for (let i = 0; i < arr.length; i++) {
//   if (count[arr[i]] === undefined) {
//     count[arr[i]] = 1;

//   } else {

//     count[arr[i]]++;
//     console.log(count)
//   }
// }
// console.log(count)

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
//     if(count[arr[i]] === undefined){
//         count[arr[i]] = 1;
//         // console.log(arr[i])
//     }else{
//         count[arr[i]]++
//     }

// }
// // console.log(count)
// let arr = [1,5,6,4,7,5,2,9,4,3,5,9,5]

// let count = {};
// for(let i = 0;i<arr.length;i++){
//     if(count[arr[i]] === undefined){
//         count[arr[i]] = 1
//         console.log(count);
//     }else{
//         count[arr[i]]++
//         console.log(count);
//     }
// }
// console.log(count);
// class student{
//     constructor(name,age,group){
//         this.name = name;
//         this.age = age;
//         this.group=group
//     }
// }
// let s1 = new student("sai","22","BCA")

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let executor = function(sucess , faile){
//     // resolved()
//     setTimeout(()=>{
//         console.log(promise)
//         sucess()
       
    
//     } , 2000)
    
// }

// let promise = new Promise(executor)

// function sucesss(){
//     console.log("sucess_callback")
// }
// function failure(){
//     console.log("inside failure function")
// }
// function finall(){
//     console.log("inside finally function")
// }





// promise.then(sucesss)
// promise.catch(failure);
// promise.finally(finall)



//***************************************************************** */
// let pincode = 533003;

// let prom = fetch(`https://api.postalpincode.in/pincode/${pincode}`,{method: "GET"});

// prom.then(()=>{
//     console.log("done data")
// })
// prom.catch(()=>{
//     console.log("not fetched")
// })

//***********************************************

// let user = {
//     nam: 'pc',
//     age: 23,
//     getDetails(){
//         console.log(this);
//     }
// }

// user.getDetails();


// {nam: 'pc', age: 23, getDetails: ƒ}

//------------------------------------------------------

// let user = {
//     nam: 'prikshit',
//     age:23,
//     childObj:{
//         newName:'pc',
//         nam: 'vikas',
//         getDetails(){
//             let nam='test';
//             console.log(this.newName, " and " , this.nam, nam);
//         }
//     }
// }

// user.childObj.getDetails();

// pc  and  vikas test

//---------------------------------------------------------------------------
// let user ={
//     nam:'Prikshit',
//     age:23,         
//     getDetails: ()=>{           getting window
//         console.log(this);      if i use arrow ()=>{}
//     }
// }

// user.getDetails();            

// let user ={
//     nam:'Prikshit',
//     age:23,
//     getDetails: function () {           getting user if i use
//         console.log(this);              function (){}
//     }
// }

// user.getDetails();
//-------------------------------------------------------------------------


// let user = {
//     nam: 'Prikshit',
//     age: 23,
//     childObj: {
//         newName: 'pc',
//         getDetails: () => {          getting windiow for using()=>{}
//             console.log(this);
//         }
//     }
// }

// user.childObj.getDetails();

//---------------------------------------------------------------------------------
// let user = {
//     nam:'pc',
//     age: 23,
//     getDetails(){

//         const nestedArrow = () => console.log(this);     getting user
//         nestedArrow();
//     }
// }

// user.getDetails();

// {nam: 'pc', age: 23, getDetails: ƒ}
//-------------------------------------------------------------------------

// const user = {
//     firstName: 'pc',
//     getName(){
//         const firstName='prikshit';         getting pc
//         return this.firstName;
//     }
// }

// console.log(user.getName());

// pc
//---------------------------------------------------------------------------------

// function makeUser() {
//     return {
//         nam: 'pc',
//         ref: this,                live 
//     }
// }

// let user = makeUser();

// console.log(user.this);
//----------------------------------------------------------------------------------------

// let pincode = 500010;

// let prom = fetch(`https://api.postalpincode.in/pincode/${pincode}`)


// prom.then((info)=>{
//     console.log(prom)
//     // console.log(prom)
//    let s =  info.json()
// })

// s.then((data)=>{
//     console.
// })
// prom.catch((info)=>{
//     console.log(info)
// })
// prom.then((info)=>{
//     console.log(info) 
//     let s = info.json();

//     s.then((data)=>{
//         console.log(data);
//     })
//     s.catch((data)=>{
//         console.log("error")
//     })
// })
//********/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/ */
// prom.then((info)=>{
//     let s = info.json()

//     s.then((data)=>{
//         appen(data[0].PostOffice)
//     })
//     s.catch((aa)=>{
//         console.log(aa)
//         console.log("error")
//     })
// })
///*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/
// let pincode = 533006;

// let prom = fetch(`https://api.postalpincode.in/pincode/${pincode}`)



// prom.then((data)=>{
//     let s = data.json()

//     s.then((info)=>{
//         appen(info[0].PostOffice)
//     })
//     s.catch(()=>{
//         console.log("error")
//     })
// })
// prom.catch(()=>{
//     console.log("error")
// })

// let somthig = document.getElementById("divid")

// function appen(arr){
//     for(let i = 0;i<arr.length;i++){
//         let div = document.createElement("div")
//         div.innerText = arr[i].Name;
//         somthig.append(div)

//     }
// }

// let htmlE = document.getElementById("divid");

// function dummyData(){
//     let responce = fetch("https://jsonplaceholder.typicode.com/users");
//     responce.then((data)=>{
//         let s = data.json()

//         s.then((finalData)=>{
//             somthingg(finalData)
//         })
//     })
// }
// function somthingg(aa){
//     for(let i =0;i<aa.length;i++){
//         let div = document.createElement("div")
//         div.innerText = aa[i].email
//         htmlE.append(div)
//     }
// }

// let htmlE = document.getElementById("divid")

// function dummyData(){
//     const resposne = fetch("https://jsonplaceholder.typicode.com/users")
//     resposne.then((data)=>{
//         let s = data.json()

//         s.then((finalData)=>{
//             randomfun(finalData)
//         })
//     })
// }

// function randomfun(aa){
//     for(let i =0;i<aa.length;i++){
//         let div = document.createElement("div")
//         div.innerText = aa[i].name;
//         htmlE.append(div);
//     }
// }

// let obj = {
//     nam:"nuthanSai",
//     age:22,
//     mail:"nuthansai09@gmail.com",
//     id:60866931
// }

// function callBack(arg1,arg2,arg3,arg4){
//     console.log(arg1,arg2,arg3,arg4)
// }

// callBack.bind(obj);

// let arr  = [1,2,3,4,5,5,5,6];
// let obj = {};
// function abc(a){
//     console.log(a);
// }
// arr.push(1);
// arr.push(2);
// arr.push(3);
// arr.push(4);

// console.log(arr);
//******************************************************************* */
// let arr  = [1,2,3,4,5,5,5,6];
// let newarr = arr.map((number,index)=>{
//     // console.log(index);
//     return number
// })
// console.log(newarr)
//********************************************************************* */
// function displayCurrentTime(x, y) {
//     let count = 0;
  
//     function displayTime() {
//       const currentTime = new Date().toLocaleTimeString();
//       console.log(`Current time: ${currentTime}`);
//       count++;

//       if (count < y) {
//         setTimeout(displayTime, x * 1000);
//       }
//     }
  
//     displayTime();
//   }
  
//   // Example: Display time every 5 seconds, 3 times
//   displayCurrentTime(5, 5);
  
//*********************************************************************************************************** */







// Write a function capable of receiving another function and a number ‘x’ as an argument and then executing it after ‘x’ seconds

// function func(callbk,x){
//         setTimeout(()=>{
//             callbk()
//         }),x

            
//         }

//         function randon(){
//             console.log("text")
//         }


// func(randon,300000)

// function abc(callback,x){
//     setTimeout(() =>{
//       callback()
//     },x)
//   }
  
  
//   function dcf(){
//     console.log("print hello")
//   }
  
//   abc(dcf,3000)



// func(randon,50000)
// let div = document.getElementById("div1")
// let btn1 = document.getElementById("btn1")
// let btn2 = document.getElementById("btn2")
// let count1 = 0;
// let count2 = 0;
// func1(){
//     count1++
    
// }

// func2(){
//     count2++;
// }





// Find and Replace:Add a "Find" input and a "Replace"
//  input in the toolbar.Search for the input value in 
//  the cells and highlight them.If the "Replace" value 
//  is provided, replace the cell content.







let cellinnertext1 = document.getElementById("btn1")
let cellinnertext2 = document.getElementById("btn2")


let inputbox1 = document.getElementById("inpu")



function func1() {
  
  
}



function func2(params) {
  
}

function func( hrfunc){
  return
}

function hrfunc()