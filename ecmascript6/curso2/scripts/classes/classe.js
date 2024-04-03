class Pessoa {
  constructor() {
    this.nome = 'João'
    this.idade = 45
  }

  saudacao() {
    console.log(`Olá, meu nome é ${this.nome} :)`)
  }
}

let pessoa = new Pessoa()
pessoa.saudacao()