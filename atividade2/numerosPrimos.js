
function verificarNumeroPrimo(number) {
    if (number <= 1) { return false; } 
    if (number == 2) { return true; }
    if (number > 2 && number % 2 == 0 ) { return false; }

    for (let i = 3; i < number; i += 2) {
        if (number % i == 0) {
            return false;
        }
    }

    return true;
}

function testCases(valores) {
    // const valores = { 0, 1, 2, 4, 7, 83, 100, 991, 104729, 14348907 };

    for (let element in valores) {
        let resultado = verificarNumeroPrimo(element);
    
        console.log(`O número ${element} é: ${resultado}`);
    }
}


const valoresTest = {
    0: false,
    1: false,
    2: true,
    3: true,
    7: true,
    83: true,
    100: false,
    991: true,
    104729: true,
    14348907: false
};


testCases(valoresTest);








// verificarNumeroPrimo(0); //false
// verificarNumeroPrimo(1); //false
// verificarNumeroPrimo(2); //true
// verificarNumeroPrimo(3); //true
// verificarNumeroPrimo(7); //true
// verificarNumeroPrimo(83); //true
// verificarNumeroPrimo(100); //false
// verificarNumeroPrimo(991); //true
// verificarNumeroPrimo(104729); //true
// verificarNumeroPrimo(14348907); //false