// PARAMETROS UNICOS
function soma(...params) {
  let resultado = 0

  params.forEach(param => {
    resultado += param
  })

  return resultado
}

console.log(soma(10))
console.log(soma(10, 20, 30))

// PARAMETROS DIVERSOS
function multi(m, ...n) {
  let resultado = 0;

  n.forEach(v => {
    resultado += m * v
    console.log(m)
  })
  return resultado
}

console.log(multi(10, 2))
console.log(multi(2, 1, 2, 3))

/*
 resultado => 2 x 1 = 2
 resultado => 2 x 2 = 4
 resultado => 2 x 3 = 6
 resultado =          12
*/