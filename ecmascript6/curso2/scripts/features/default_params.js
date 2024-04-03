function params(nome = 'Fulano', idade = 10) {
  return `O usuário tem o nome ${nome} e tem a idade ${idade}`
}

console.log(params())
console.log(params('Beltrano', 50))
console.log(params(undefined, 35))

console.log()