// var generateName = require("sillyname"); // using CJS module
import generateName from "sillyname"; // using ES module
var sillyName = generateName();

console.log(`My name is ${sillyName}`);

import superheroes from "superheroes";
let heroName = superheroes.random();

console.log(`My name is ${heroName}!`);
