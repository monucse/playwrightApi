// 1.  word vs keyword

// student = word
// for = keyword

// 2. var const let

// varibles = value varies
// constant = value constant

// function myfirst (a, b) {
//     sum = a + b;
//     return sum;
// }

// const ans = myfirst(34,12);
// console.log(ans);

// Javascript Objects 

// const student = {
//     firstName   : 'Sonu',
//     lastName    : 'Madheshiya',
//     age         : 23,
//     fullname    : function (){
//         return this.firstName + " " + this.lastName;
//     }
// }

// console.log("Student first name : ", student.firstName);
// console.log("Student last name : ", student.lastName);
// console.log("Student age : ", student.age);
// console.log("Student fullname : ", student.fullname());

// Arrow function

const fullname = (firstName,lastName) =>{
    console.log(firstName +" "+ lastName);
}
fullname('Sonu','Madheshiya')