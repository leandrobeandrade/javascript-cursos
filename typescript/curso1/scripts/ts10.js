function Teste(callback) {
    callback.call(undefined, 'Fulano');
    callback.apply(null, ['Beltrano']);
    callback('Belciclano');
} 
function Executar(nome) {
    console.log(nome);
}
Teste(Executar); 
function Calculadora1(num1, num2, tipo) {
    switch (tipo) {
        case "add":
            return num1 + num2;
        case "mul":
            return num1 * num2;
        default:
            return 0;
    }
}
function Add(num1, num2) {
    return num1 + num2;
}
function Mul(num1, num2) {
    return num1 * num2;
}
function Calculadora2(num1, num2, callback) {
    return callback(num1, num2);
}
function Calculadora3(num1, num2, callback) {
    return callback(num1, num2);
}
console.log(Calculadora1(10, 10, 'mul'));
console.log(Calculadora1(10, 10, 'add'));
console.log(Calculadora1(10, 10, '   '));
console.log(Calculadora2(25, 25, Add));
console.log(Calculadora2(25, 25, Mul));
console.log(Calculadora3(10, 20, function (num1, num2) {
    return num1 - num2;
})); 
