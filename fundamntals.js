// 1. Hoe to declare a variable using let and const
const fathersName = 'Shimul'; //unchanged
let season = 'rainy';
season = 'winter'; // changeable

// 2. Conditions
// 6 basic condition how to write:  (<, >, ===, !== , <=, >= )
// Multiple condition how to write:  (&& , || )

if (fathersName === 'shimul' || season === 'rainy') {

} else if (fathersName === 'Shimul') {

} else {

};


///array
//indext strat 0,1,2,3
//arrayName.length diye leangth ber korte hoyi
//push

const numbers = [89, 35, 98, 12]
numbers[0] = 56;

//4.for loop

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    //console.log(number);
};

//5. function
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}
const output = multiply(35, 78);
//console.log(output);

//6. Object
//3 ways to access property by name
const student = {
    name: 'shimul raj',
    age: 32,
    movise: ['king Khan', 'dhakar mastan']

};
const myVariable = 'age';


console.log(student.name);// direct access by property
console.log(student.age);//direct access by property

console.log(student['age']);//access vis property name string
console.log(student[myVariable]);//access vis property name in a variable
console.log(student.movise);
console.log(student.movise[0]);
console.log(student.movise[1]);
console.log(student.movise[2]);