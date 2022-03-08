const products = [
    { name: 'laptop', price: 3200, brand: 'lenevo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'wath', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'ribon', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];
const product2 = [];
//when need returen, thean use map
//const Name = product2.map(product => product);
//console.log(Name);
const brands = products.map(product => product.brand);
//console.log(brands);
const pric = products.map(product => product.price);
//console.log(pric);
const Color = products.map(product => product.color);
//console.log(Color);

//if didn't want to returen, thean use for each
product2.forEach(product => console.log(product));
//products.forEach(product => console.log(product.price));

//multiline forEach
/* products.forEach(product => {

}); */

//3. using filter. ikts returen array

const cheap = product2.filter(product => product.price <= 5000);
console.log(cheap);


const specificName = products.filter(product => product.name.includes('n'));
//console.log(specificName);

//find

const special = products.find(product => product.name.includes('n'));
//console.log(special);
