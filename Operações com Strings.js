// Declare a variável frase
let frase = "JavaScript é incrível!";

// Encontre o comprimento de frase
console.log(frase.length); // Saída: 20

// Extraia a palavra "incrível"
let palavra = frase.slice(14, 22);
console.log(palavra); // Saída: incrível

// Substitua "incrível" por "fantástico"
let novaFrase = frase.replace("incrível", "fantástico");
console.log(novaFrase); // Saída: JavaScript é fantástico!
