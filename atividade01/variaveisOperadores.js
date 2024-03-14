
// Operators
const operators = ['soma', 'subtração', 'multiplicação', 'divisão']

// Values
let number1 = 5
let number2 = 7


function calculate(operator, num1, num2)  {
    switch(operator) {
        case 'soma':
          return num1 + num2
          break;
        case 'subtração':
        return num1 - num2
        break;
        case 'multiplicação':
            return num1 * num2
            break;
        case 'divisão':
            return num1 + num2
            break;
        default:
          return 0
      }
}

function printResult(operator, num1, num2) {
    console.log(`Resultado da ${operator} entre ${num1} e ${num2}: ${calculate(operator, num1, num2)}`)
}


for (const op in operators) {
    printResult(operators[op], number1, number2)
}

