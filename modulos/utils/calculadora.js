const PI = 3.14;

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

function performOperation(val1, val2, operator) {
    switch (operator) {
        case 'somar':
            return somar(val1, val2);
            
        case 'subtrair':
            return subtrair(val1, val2);
        
        case 'multiplicar':
            return multiplicar(val1, val2);
    
        case 'dividir':
            return dividir(val1, val2);
    
        default:
            break;
    }
}

module.exports = {
    PI,
    somar,
    subtrair,
    multiplicar,
    dividir,
    performOperation
}