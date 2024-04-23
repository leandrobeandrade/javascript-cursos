let promessa1 = new Promise((resolve, reject) => {
  try {
    // throw new Error('Erro lançado!')

    setTimeout(() => {
      resolve('FOI')
    }, 3000)
  } catch (e) {
    setTimeout(() => {
      reject(e) // throw cai aqui
    }, 3000)
  }
})

setTimeout(() => console.log(promessa1), 6000)

let resposta = {}
let promessa2 = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      resposta = { dados: { msg: 'Sucesso na requisição.' } }
    }, 3000)
  } catch (e) {
    setTimeout(() => {
      reject(e)
    }, 3000)
  }
})

setTimeout(() => {
  console.log(resposta)
}, 5000)