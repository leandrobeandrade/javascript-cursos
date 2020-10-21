# Union
Utilizado quando se quer declarar uma variável como sendo de 2 ou mais tipos.

    let id: string | number;
    let ot: string | number | undefined;

    function str() {
         return id = '100';
    }

    function num() {
        return id = 100;
    }
    
    function other() {
        return ot;
    }

    str();    // retorna "100"
    num();    // retorna 100
    other();  // retorna undefined
