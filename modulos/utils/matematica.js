
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


module.exports = {
    verificarNumeroPrimo
}