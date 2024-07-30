const { count } = require("console");

//1
const data = [
  { key: "item", value: "Pencil" },

  { key: "price", value: 250 },

  { key: "inStock", value: true },
];

const newObject = data.reduce((acc, curr) => {
  acc[curr.key] = curr.value;
  return acc;
}, {});
console.log(newObject);

//2
const students = [

  {item: "Pen", color: "blue"},

  {item: "Pen", color: "black"},

  {item: "Pen", color: "red"},

]
const arrOfColors = students.reduce((acc,curr) => {
  acc.push(curr.color);
  return acc;
},[])
console.log(arrOfColors);

//3
const countries = [

  { item: "Car", manufacturingCity: "New York" },

  { item: "Car", manufacturingCity: "Los Angeles" },

  { item: "Car", manufacturingCity: "Chicago" },

];

const arrOfCities = countries.reduce((acc,curr) =>{
  acc.push(curr.manufacturingCity);
  return acc;
},[])
console.log(arrOfCities);

//4
const groceryItems = [

  { item: "Fruit", name: "Apple" },

  { item: "Fruit", name: "Banana" },

  { item: "Fruit", name: "Orange" },

];
const arrOfFruits = groceryItems.reduce((acc,curr)=>{
  acc.push(curr.name);
  return acc;
},[])
console.log(arrOfFruits);

//5
const details = [

  { key: "category", value: "Electronics" },

  { key: "rating", value: 4.5 },

  { key: "available", value: true },

];
const generateObject = details.reduce((acc,curr) => {
  acc[curr.key] = curr.value;
  return acc;
},{})
console.log(generateObject);
