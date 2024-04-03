// STRINGS
const alo = 'Alô mundo!'

console.log(alo)
console.log(...alo)
console.log([...alo])
console.log({ ...alo })

// ARRAYS
const lista1 = ['Angular', 'Vue', 'React']
const lista2 = ['Node', 'Express', 'Mongo']
const lista3 = ['Front-end', 'Back-end']

let lista = [...lista1, ...lista2]
console.log(lista)

// OBJECTS
const pessoa = { nome: 'Fulano', idade: 10 }
const endereco = { rua: 'Exemplo', num: 1000, ...pessoa }

console.log(endereco)