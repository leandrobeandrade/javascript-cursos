let promessa3 = new Promise((resolve, reject) => {
  let resposta = {}
  let teste = true

  setTimeout(() => {
    if (teste) {
      resposta = {
        codigo: 1050,
        erro: 'Falha de autenticação!'
      }
      reject(resposta)
    }
    resposta = { id: 1, nome: 'Fulano' }
    resolve(resposta)
  }, 5000)
}).then(dados => console.log('Operação sequencial: ', dados))
  .then(() => console.log('Dados 2'))
  .then(() => {
    console.log('Dados 3')
    return 'Dados 4'
  })
  .then(vem_de_cima => console.log(vem_de_cima, '^'))
  .catch(erro => {
    console.log(erro)
    return 'Enviado pelo catch' // Só se der erro
  })
  .then((teste) => {
    console.log('Dados 4 #')
    return teste
  })
  .then((vem_do_catch) => {
    console.log('Dados 5', vem_do_catch)

    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Promise dentro de promise')
      }, 6000)
    }).then((dados) => console.log(dados))
  })