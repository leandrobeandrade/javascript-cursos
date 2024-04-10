// DESTRUCTURING ASSIGNMENTS FUNÇÕES ARRAYS
const frutas_ = ['Maça', 'Abacaxi', 'Limão', 'Uva']

function testeArrays([a, , b, c, d = 'Banana']) {
  console.log(a, b, c, d)
}

testeArrays(frutas_)

// DESTRUCTURING ASSIGNMENTS FUNÇÕES OBJETOS
const produto_ = {
  descricao: 'Notebook',
  preco: 6500,
  fabricante: 'Exemplo',
  modelo: 'tal'
}

function testeObjects({ preco: b, fabricante, modelo = 'Banana', test: t = 'oi' }) {
  console.log(b, fabricante, modelo, t)
}

testeObjects(produto_)

// DESTRUCTURING ASSIGNMENTS REST ARRAYS
const arr_ = [10, 20, 30, 40]
let [j, f, ...xx] = arr_
console.log(j, f, xx)

// DESTRUCTURING ASSIGNMENTS REST OBJETOS
const obj = {
  a: 10,
  b: 20,
  c: 30,
  d: 40
}
let { a: l, c: c_, ...resto} = obj
console.log(l,c_, resto)