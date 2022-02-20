const a = 1;
const b = 2;
const c = -3;

//b^2 - 4 * a * c
let delta = (b ** 2) - 4 * a * c;

let x1 = (-b + Math.sqrt(delta)) / (2 * a);

let x2 = (-b - Math.sqrt(delta)) / (2 * a);

console.log(`X1 = ${x1} e X2 = ${x2}`);