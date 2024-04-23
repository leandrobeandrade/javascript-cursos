const p1 = new Promise((resolve, reject) => {
  setTimeout(() => reject('P1 resolvida'), 3000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('P2 resolvida'), 2000)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject('P3 resolvida'), 4000)
})

let promises = [p1, p2, p3]

Promise.any(promises).then(resolvida => console.log(resolvida)).catch(e => console.log(e))

// Se a promise for rejeitada, a próxima seria a que for resolvida primeiro
// Se todas forem rejeitadas um erro é lançado após o tempo de resolução de todas