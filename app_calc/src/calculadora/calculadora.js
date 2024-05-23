function calcular(v1, v2, op) {
    switch (op) {
        case '+':
            return v1 + v2;
        case '-':
            return v1 - v2;
        case '*':
            return v1 * v2;
        case '/':
            return v1 / v2;
    }
}

module.exports = calcular