function* generator() {
  yield console.log(1)
  yield 2
  yield console.log(3)

  return 4
}

let gen = generator()
gen.next()
console.log(gen.next())
gen.next()
console.log(gen.next())

function* comprimentar() {
  yield 'Ola, tudo bem!'
}

let comprimenta = comprimentar()

let iteracao1 = comprimenta.next()
console.log('=>> ', iteracao1)