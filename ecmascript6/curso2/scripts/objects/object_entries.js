let objeto_ = {
  nome: 'Fulano',
  profissional: {
    site: 'https://leandrobeandrade.github.io/',
    profissao: 'desenvolvedor'
  },
  hobbies: [
    { id: 1, hobbie: 'Escutar música' },
    { id: 2, hobbie: 'Jogar futebol' }
  ],
  pais: 'Brasil'
}

console.log('Entries: ', objeto_)
console.log(Object.entries(objeto_))