// Crie o objeto carro
let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020,
  detalhes: function() {
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
  }
};

// Chame o método detalhes
carro.detalhes(); // Saída: Marca: Toyota, Modelo: Corolla, Ano: 2020

// Adicione a propriedade cor
carro.cor = "vermelho";
console.log(carro); // Exiba o objeto atualizado
