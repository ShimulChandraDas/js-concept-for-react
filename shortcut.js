//truethy:  'string', numbers,{},{anyObject}, [],[any Array]  
//falesy= '', 0, false, null,undefined 

//check truthy
let myVar = 5;
if (myVar) {
    myVar = myVar * 100;
} else {
    myVar = 0;
};


let myMoney = 50;
//you can check negative or falsy anything
if (!myMoney) {

}
const money = 80;
let food;
if (money > 100) {
    food = 'birayani';
} else {
    food = 'cha biscut';
}

//ternary
let food1 = money > 100 ? 'birayani' : 'cha biscut';
console.log(food1)

let drink = (money > 100 && myVar > 100) ? 'coke' : 'filer water';
console.log(drink)

//shorcut: number to string convert
const num1 = 52;
console.log(num1);
const numStr = num1 + '';
console.log(numStr);

const input = 500;
const inputNumb = +input
console.log(inputNumb);

//
let isActive = true;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');
isActive ? showUser() : hideUser();
//use %% if the left side is true then right side will be executed
//isActive && showUser();

//use || if the left side is false then right side will be executed
isActive || showUser();

//toggle boolean
isActive = !isActive