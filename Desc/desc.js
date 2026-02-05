// const student={
//     name:"Kavin Gupta",
//     age:21,
//     address:{
//         city:"Lko",
//         state:"UP",

//     }
// }
// // // const {name,age,address:{city}}=student; //destructuring
// // const{name:studname="amit",age,address:{city}}=student; //renaming during destructuring
// // //used for by default amit if name is not present in object
// // console.log(studname);
// // console.log(age);
// // console.log(city);  
// // document.write(studname);
// // document.write(age);
// // document.write(city);


// function displaystud({name,age,address:{city,state}}){
// console.log(`My name is ${name} and my age is ${age} and i am from ${city},${state}`);

// }
// displaystud(student);

let numbers=[1,2,33]
let a,b,c=numbers;
console.log(a);
console.log(b); 
console.log(c);
//undefined a and b because array destructuring syntax is different but c is array as it is near to nmbers

// function displaynum([a,b,c]){

let numberss=[1,2,33]
let [aa,bb,cc]=numberss;
console.log(aa);
console.log(bb); 
console.log(cc);
//now it gives values because of correct array destructuring syntax

let data=[1,2]
let[e=10,f=20]=data;
console.log(e); //1
console.log(f); //2
//default values are not used as data array has values

let p=10;
let q=90;
[p,q]=[q,p];
console.log(p); //90
console.log(q); //10
//swapping using destructuring      

let colors=["red","green","blue"]
let [,secondcolor]=colors;
console.log(secondcolor); //green
//skipping first value in array destructuring