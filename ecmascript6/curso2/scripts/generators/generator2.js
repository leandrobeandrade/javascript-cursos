function* conversar() {
  console.log(1)
  console.log(2)
  console.log(3)

  let opcao = yield 'Como vai?'

  console.log(4)
  console.log(5)
  console.log(opcao)
  yield 'Ótimo obrigado'
}

let conversa = conversar()

let iteracao2 = conversa.next()
console.log(iteracao2)

iteracao2 = conversa.next('sim')
console.log(iteracao2)