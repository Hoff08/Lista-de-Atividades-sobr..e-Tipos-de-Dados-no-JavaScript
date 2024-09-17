// Declare a variável numStr
let numStr = "123.45";

// Converta para número
let num = parseFloat(numStr);
console.log(num); // Saída: 123.45

// Arredonde para o inteiro mais próximo
let numArredondado = Math.round(num);
console.log(numArredondado); // Saída: 123

// Converta para string com 3 casas decimais
let numStr3Decimais = numArredondado.toFixed(3);
console.log(numStr3Decimais); // Saída: 123.000

// Verifique se numStr é NaN
console.log(isNaN(numStr)); // Saída: false
