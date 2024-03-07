let promessa = new Promise((resolve, reject) => {
	// Arquivo aberto
	let aberto: boolean = true;

	if(aberto) resolve('Aberto');
	else reject('Não aberto');
});

/*promessa.then((fromResolve) => {
	console.log(fromResolve)
}).catch((fromReject) => {
	console.log(fromReject);
}); */

function abrirArquivo() {
	 return new Promise((resolve, reject) => {
		let aberto: boolean = true;

		if(aberto) resolve('Aberto');
		else reject('Não aberto');
	})
}

function lerArquivo() {
	 return new Promise((resolve, reject) => {
		let aberto: boolean = true;

		if(aberto) resolve('Lido');
		else reject('Não lido');
	})
}

function deletarArquivo() {
	 return new Promise((resolve, reject) => {
		let aberto: boolean = true;

		if(aberto) resolve('Deletado');
		else reject('Não deletado');
	})
}

abrirArquivo()
    .then(() => lerArquivo()
    	.then(() => deletarArquivo()
    		.then(() => console.log("Tudo OK!"))
    		.catch((frj) => console.log(frj))
    	.catch((frj) => console.log(frj))))
    .catch((frj) => console.log(frj));


Promise.all([abrirArquivo(),lerArquivo(),deletarArquivo()])
.then().catch();	// retorna todas

Promise.race([abrirArquivo(),lerArquivo(),deletarArquivo()])
.then().catch();	// retorna 1° encontrada
