class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
  }

  toString() {
    return `Marca: ${this.marca} | Modelo: ${this.modelo} | Ano: ${this.ano}`
  }
}

let carro = new Carro('Jeep', 'Compass', 2020)
console.log(carro)
console.log(carro.toString())