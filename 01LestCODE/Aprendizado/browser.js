// instalador da biblioteca do Node.js " npm install readline-sync "

const prompt = require("readline-sync");
const idade = prompt.question("Qual e a sua idade?");

const idadeNumber = Number(idade);

console.log("O usuário tem", idadeNumber, "anos de idade.", typeof idadeNumber);

// Coerção Explícita (Conversão Manual)

console.log(Number("X")); // NaN: Not a Number

console.log(String(10), typeof(10));

console.log(Boolean(0));


// Coerção Implícita

console.log(1 + "1"); // "11" (string) Concatenou
console.log("10" + 5); // "105" (string) Concatenou


// Se não for soma (+) ele transforma a string em numero para qualquer outro operador

console.log(10 - "5"); 
console.log(10 * "5"); 
console.log(10 / "5"); 

