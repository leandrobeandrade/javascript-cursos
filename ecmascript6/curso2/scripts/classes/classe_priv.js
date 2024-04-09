class Pessoa {
  #humor = 0  // atributo privado

  constructor(nome) {
    this.nome = nome
    this.#setHumor()
  }

  dizerOi() {
    return `Olá, meu nome é ${this.nome}!`
  }

  getHumor() {
    return this.#humor
  }

  // método privado
  #setHumor() {
    this.#humor = Math.floor(Math.random() * 2)
  }
}

let p = new Pessoa('Fulano')
console.log(p.dizerOi())
console.log(p.getHumor())