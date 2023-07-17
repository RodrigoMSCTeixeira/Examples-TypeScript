const x = "10";

console.time("Método Number");
const number = Number(x);
console.timeEnd("Método Number");

console.time("Método parseFloat");
const float = parseFloat(x);
console.timeEnd("Método parseFloat");

console.time("Método parseInt");
const int = parseInt(x);
console.timeEnd("Método parseInt");

console.log(typeof number, typeof float, typeof int);
console.log({
  number,
  float,
  int,
});
