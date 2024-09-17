// Declare a função multiplica
function multiplica(x, y) {
  return x * y;
}

// Chame a função multiplica
console.log(multiplica(7, 8)); // Saída: 56

// Declare a função quadrado
function quadrado(n) {
  return n * n;
}

// Use a função map
let array = [1, 2, 3, 4, 5];
let arrayQuadrado = array.map(quadrado);
console.log(arrayQuadrado); // Saída: [1, 4, 9, 16, 25]
