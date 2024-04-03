function* conversar() {
  let opcao = yield 'Como vai?'

  if (opcao == 'sim') yield 'Tudo bem'
  else yield 'Nem tanto'
}

let conversa_ = conversar()

function acao() {
  let iteracao3 = conversa_.next()
  console.clear()
  console.log('=> ', iteracao3)

  iteracao3 = conversa_.next(resposta)
  console.log('=>>', iteracao3)

  iteracao3.done
}