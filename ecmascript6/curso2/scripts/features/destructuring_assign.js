// DESTRUCTURING ASSIGNMENTS ARRAYS
const frutas = ['Maça', 'Abacaxi', 'Limão']
let [a, , b, c = 'Uva'] = frutas

console.log(a, b, c)

const varios = [['Maça', 'Abacaxi', 'Limão'], ['Fulano', 'Beltrano']]
let [, x] = varios
let [, [, y]] = varios

console.log(x)
console.log(y)

// DESTRUCTURING ASSIGNMENTS OBJECTS
const produto = {
  descricao: 'Notebook',
  preco: 6500,
  detalhes: {
    fabricante: 'Exemplo',
    modelo: 'tal'
  }
}

let { descricao, preco: p, desconto: d = 500 } = produto
console.log(descricao, p, d)

let { descricao: desc, detalhes: { fabricante: fab, modelo } } = produto
console.log(desc, fab, modelo)