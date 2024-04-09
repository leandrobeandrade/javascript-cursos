// OR (||)
let teste1 = null || 'Valor a direita'
let teste2 = undefined || 'Valor a direita'
let teste3 = 0 || 'Valor a direita'
let teste4 = 1 || 'Valor a direita'
let teste5 = true || 'Valor a direita'
let teste6 = false || 'Valor a direita'
let teste7 = 'Valor a esquerda' || 'Valor a direita'
let teste8 = '' || 'Valor a direita'

console.log('teste 1: ', teste1)
console.log('teste 2: ', teste2)
console.log('teste 3: ', teste3)
console.log('teste 4: ', teste4)
console.log('teste 5: ', teste5)
console.log('teste 6: ', teste6)
console.log('teste 7: ', teste7)
console.log('teste 8: ', teste8)

console.log('------------------------')

// Coalescing
teste1 = null ?? 'Valor a direita'
teste2 = undefined ?? 'Valor a direita'
teste3 = 0 ?? 'Valor a direita'  // retorna 0
teste4 = 1 ?? 'Valor a direita'  // retorna 1
teste5 = true ?? 'Valor a direita'
teste6 = false ?? 'Valor a direita' // retorna false
teste7 = 'Valor a esquerda' ?? 'Valor a direita'
teste8 = '' ?? 'Valor a direita' // retorna string vazia

console.log('teste 1: ', teste1)
console.log('teste 2: ', teste2)
console.log('teste 3: ', teste3)
console.log('teste 4: ', teste4)
console.log('teste 5: ', teste5)
console.log('teste 6: ', teste6)
console.log('teste 7: ', teste7)
console.log('teste 8: ', teste8)