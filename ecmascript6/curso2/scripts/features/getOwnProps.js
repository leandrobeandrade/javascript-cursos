let objeto__ = {
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

console.log('Descriptors: ', objeto__)
console.log(Object.getOwnPropertyDescriptors(objeto__))

// configurable => Controla a deleção da propriedade
// enumerable   => Controla em loops
// writable     => Controla o valor
// value        => Valor

// Exemplo configurable
Object.defineProperty(objeto__, 'nome', {
  configurable: false  // não permite deletar a propriedade e modificar outras funcionalidades
})

// Exemplo enumerable
Object.defineProperty(objeto__, 'hobbies', {
  enumerable: false  // não permite percorrer o array
})

// Exemplo writable
Object.defineProperty(objeto__, 'nome', {
  value: 'Fulano', // seta um valor padrão e vira uma constante
  writable: false  // não permite que nome receba um novo valor
})

// configurable não deleta e só deixa modificar o writable desta propriedade para false