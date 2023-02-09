let arr=[10,20,30,40,50];
//for each in js we can give a call back function as an argument to the an 
//it executes for each element in the array.
// function print(element,index,array){
//   console.log(element);
//   console.log(index);
//   console.log(array);
// }
// arr.forEach(print);


//map function it return an array by appling the given call back function
//to all the elemtns of the array.

// function plus1(element,index,array){
//     console.log(element);
//     console.log(index);
//     return element +1;
// }
// let arr2= arr.map(plus1);
// console.log(arr2);


//filter functon returns an array of elements which passes the given 
//callback function.

// function check(element , index , array){
//   return element > 30;
// }

// let arr3= arr.filter(check);
// console.log(arr3);


//reduce method  is used to reduce an array into a single value

// function sum(total,element){
//   return total+element;
// }
// let s= arr.reduce(sum);
// console.log(s);


//sort method 

// function ascending(x,y){
//   return x-y;
// };
// function descending(x,y){
//   return y-x;
// };

// let arr2=arr.sort(ascending);
// arr2=arr.sort(descending);
// console.log(arr2);


//function expresions == anonymous functions


//objects collection of properties and methods
// const car={
//   Name:'Mustang',
//   colour:'red',

//   drive: function(){
//     console.log("you are driving ");
//   },

//   brake:function(){
//     console.log("you pressed brake ");
//   }
// }

// console.log(car.Name);
// console.log(car.colour);
// console.log(car.drive());
// console.log(car.brake());


//classes 

// class player{
//     score=0;

//   pr(){
//     console.log("method called !");
//   }
// }
// const obj = new player();
// console.log(obj.score);
// console.log(obj.pr());
// obj.score+=1;
// console.log(obj.score);


// constructers

// class student{
//   constructor(name,age,roll){
//     this.name=name;
//     this.age=age;
//     this.roll=roll;
//   }
//   display(){
//     console.log(`name = ${this.name}`);
//     console.log(`age = ${this.age}`);
//     console.log(`roll = ${this.roll}`);
//   }
// }
// const obj=new student("kaustubh",19,21);
// console.log(obj.name);
// obj.display();


//static variables

// class cars{
//   static count=0;
//   constructor(name){
//     this.name=name;
//     cars.count+=1;
//   }
//   static race(){
//     console.log("race function called");
//   }
// }
// const obj1 = new cars('mustang');
// const obj2 = new cars('fararri');
// console.log(cars.count);
// const obj3 = new cars('lambo');
// console.log(obj2.name);
// console.log(cars.count);
// cars.race();


//Inheritance

// class parent{
// school="kvs";
//    greet(){
//      console.log("inside parent function");
//    }
// }
// class derived extends parent{
//   name="kaustubh";
//   fxn(){
//     console.log("inside derived class");
//   }
// }
// const obj = new derived;
// obj.greet();
// console.log(obj.school);
// console.log(obj.name);
// obj.fxn();


//promise

// const promise = new Promise(
//   (resolve,reject) =>{
//     let fileloaded = true;

//     if(fileloaded){
//       resolve("fileloaded successfully");
//     }
//     else{
//       reject("file not found");
//     }
//   }
// );

// promise.then((value) =>{
//     console.log(value);
// }).catch( (value)=>{
//   console.log(value);
// }  
// );


//async functions are compact way of using promise.
//async makes a function return a promise.

// async function fxn(){
//   let fileloaded=false;
//   if(fileloaded){
//     return "file loaded";
//   }
//   else{
//     throw "file not found";
//   }
// }
// fxn().then((value)=>{
//   console.log(value);
// }).catch((value)=>{
//   console.log(value);
// })


//await = makes a async function wait for a Promise.
//it can only be used inside a promise.

// async function fxn(){
//   let fileloaded=false;
//   if(fileloaded){
//     return "file loaded";
//   }
//   else{
//     throw "file not loaded!";
//   }
// }
// async function temp(){
//   try{ 
//     let message =await fxn();
//     console.log(message);
//   }
//   catch(error){
//     console.log(error);
//   }
// }
// temp();
