let processos = [1, 2, 3, 4, 5]

for (let processo of processos) {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Resolveu')
      resolve()
    }, 2000)
  })

  console.log(processo)
}

let iteracao_async = async () => {
  for (let processo of processos) {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Resolveu')
        resolve()
      }, 2000)
    })

    console.log(processo)
  }
}

iteracao_async()