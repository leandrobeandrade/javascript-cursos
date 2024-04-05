let objeto = {
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

console.log('Values: ', objeto)
console.log(Object.values(objeto))