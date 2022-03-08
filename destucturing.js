//1. array destructuring

const numbers = [42, 65];
//const x = numbers[0];
//const y = numbers[1];
//console.log(x, y)

const [x, y] = numbers;

function boxify(num1, num2) {
    const nums = [num1, num2]
    return nums
}
//const [first, second] = [90, 34];
const [first, second] = boxify(90, 34);
//console.log(boxify(90, 34))
const students = {
    name: 'shimul raj',
    age: 32,
    movie: ['king Khan', 'dhakar mastan']

};
//const [firstmovie, secondMovie] = ['king Khan', 'dhakar mastan'];
const [firstmovie, secondMovie] = students.movie;


//2. object  destructuring

const { names, age } = { names: 'alu', age: 14 };
const { names, age } = { id: 4545; salary: 50000, names: 'alu', age: 14 };
const employee = {
    ide: 'vs code',
    designation: 'developer',
    device: 'mac',
    language: ['html', 'css', 'js'],
    specification: {
        height: 63,
        weight: 64,
        address: 'agrabad',
        drink: 'honey',
        watch: {
            Color: 'black',
            price: 500,
            brand: 'garmin'
        }

    }
}

const { device, ide } = employee;
const { weight, address } = employee.specification;
const { brand } = employee.specification?.watch;
