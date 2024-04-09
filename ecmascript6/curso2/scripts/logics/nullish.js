let v1 = 10
let v2 = null

// logica de atibuição (nula)
v1 ??= 50
v2 ??= 100

console.log(v1)
console.log(v2)

let carro = {
  marca: 'Fiat',
  // modelo: 'Línea'
}

carro.marca ??= 'Chevrolet'
carro.modelo ??= 'Bravo'
carro.ano ??= 2021

console.log(carro)

let arr = ['uva', 'joão', null, undefined, 5, []]
arr.forEach((item, i) => {
  arr[i] ??= 'Não informado'
})

console.log(arr)