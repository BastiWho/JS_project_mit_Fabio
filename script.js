// Single Line Comment

/*
Multi
Line
Comment
*/

console.log("Hi von Script.js");

let name = "Basti";



let age = 30;
let money = 0.5;

console.log(age, money, name);

let isStudent = false;

console.log(isStudent);

let hobbies = ["Javascript", "Pyhton","Fotografie"];
let lieblingshobby = hobbies[2];


console.log(lieblingshobby,hobbies);

let arrName = [0,1,2,3,4,5];
console.log(arrName[3]);

arrName[5] = 5;

let person = {
    name: "Basti",
    age: 30,
    Hobbies: ["Fotografie"],
    isStudent: true
}

console.log(person);

person.Hobbies[1] = "Javascript";
console.log(person);

const volljährigAb = 18;

function greet(name, age) {
    console.log("Hallo", name);
    console.log("Du bist", age," Jahre alt.");
}

greet("Sebastian", 30);
greet("Melissa", 25);
greet("Can", 35);
greet("Melina", 14);

let nr = 19;

if (nr > volljährigAb){
    console.log("Ist Völljährig")
}else if (nr === volljährigAb){
    console.log("Du bist 18 Jahre alt!")
}else{
    console.log("Ist nicht völljährig")
}



for (let i = 0; i <= 100; i++){
    console.log(i);
}

let meinArr = ["Javascript", "Pyhton", "Ruby", "HTML", "CSS"];
for (let i = 0; i < meinArr.length; i++) {
    meinArr[i] = "Test";
}

let running = true;
let i = 0;
while (running){
    i++;
    console.log("Inside a while Loop", i);
    if (i>5) {
        running = false
    }
}