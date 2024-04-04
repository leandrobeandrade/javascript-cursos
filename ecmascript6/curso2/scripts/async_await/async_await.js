let assincrono1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Sucesso 1'), 3000)
  })
  
  let assincrono2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Sucesso 2'), 3000)
  })
  
  // Execução assincrona
  function recuperarDados1() {
    assincrono1.then(dados => console.log(dados))
  
    console.log('Função 1')
  
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log('1 ', json))
  
    console.log('Processo assincrono 1')
  }
  
  // Execução assincrona coordenada
  async function recuperarDados2() {
    await assincrono2.then(dados => console.log(dados))
  
    console.log('Função 2')
  
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log('2', json))
  
    console.log('Processo assincrono 2')
  }
  
  // Execução assincrona coordenada
  async function recuperarDados3() {
    await assincrono2.then(dados => console.log(dados))
  
    console.log('Função 3')
  
    await fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log('3', json))
  
    console.log('Processo assincrono 3')
  }
  
  recuperarDados1()
  recuperarDados2()
  recuperarDados3()
  // recuperarDados3().then(() => console.log('FIM'))
  
  console.log('FIM')