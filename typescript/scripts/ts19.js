var promessa = new Promise(function (resolve, reject) {
    // Arquivo aberto
    var aberto = true;
    if (aberto) {
        resolve('Aberto');
    }
    else {
        reject('Não aberto');
    }
});
;
/*promessa.then((fromResolve) => {
    console.log(fromResolve)
}).catch((fromReject) => {
    console.log(fromReject);
}); */
function abrirArquivo() {
    return new Promise(function (resolve, reject) {
        var aberto = true;
        if (aberto)
            resolve('Aberto');
        reject('Não aberto');
    });
}
function lerArquivo() {
    return new Promise(function (resolve, reject) {
        var aberto = true;
        if (aberto)
            resolve('Lido');
        reject('Não lido');
    });
}
function deletarArquivo() {
    return new Promise(function (resolve, reject) {
        var aberto = true;
        if (aberto)
            resolve('Deletado');
        reject('Não deletado'); 
    });
}
abrirArquivo() 
    .then(function () { return lerArquivo()
    .then(function () { return deletarArquivo()
    .then(function () { return console.log("Tudo OK!"); })["catch"](function (frj) { return console.log(frj); })["catch"](function (frj) { return console.log(frj); }); }); })["catch"](function (frj) { return console.log(frj); });
Promise.all([abrirArquivo(), lerArquivo(), deletarArquivo()]).then()["catch"](); // retorna todas
Promise.race([abrirArquivo(), lerArquivo(), deletarArquivo()]).then()["catch"](); // retorna 1° encontrada
