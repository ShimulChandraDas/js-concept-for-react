const amounts = [89, 35, 98, 12];
const person = {
    name: 'shimul raj',
    age: 32,
    movise: ['king Khan', 'dhakar mastan']
};

//1. template string
const about = `my name is ${person.name}. Age of ${person.age} has amiunt ${amounts[2]} also liked movies ${person.movise[1]}`;

//console.log(about);


//2. arroe function

const getFityFive = () => 55
const addSixtyFive = num => num + 65
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2

    return sum;
};
//console.log(getFityFive);

//spread Operator
const newNumber = [...amounts];

amounts.push(99);
amounts.push(99);
amounts.push(99);

//console.log(newNumber);


// creat a new array from an older arry and add an element
const currentNumber = [...amounts, 55]

console.log(currentNumber)