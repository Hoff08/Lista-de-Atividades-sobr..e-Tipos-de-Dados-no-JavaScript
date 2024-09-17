// Crie os símbolos chave1 e chave2
let chave1 = Symbol("chave");
let chave2 = Symbol("chave");

// Verifique se são iguais ou diferentes
console.log(chave1 === chave2); // Saída: false

// Declare o objeto usuario
let usuario = {};
usuario[chave1] = "valor do símbolo";

// Exiba o valor da propriedade
console.log(usuario[chave1]); // Saída: valor do símbolo
