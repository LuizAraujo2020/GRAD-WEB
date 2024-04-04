function createCalculatorPage(val1, val2, op, result) {
    return `
    <!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>ATIVIDADE 4</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <style>
        body { padding-top: 50px; }
    </style>
    </head>
    <body>

    <div class="container">
        <div class="jumbotron">
            <h1>DESCALCULATOR</h1><br>
            <form action="/calculadora" method="get">
                <!-- Values -->
                <label for="val1">VALOR 1: </label>
                <input type="number" id="val1" name="val1" value="${ val1 }"><br>

                <label for="val2">VALOR 2:</label>
                <input type="number" id="val2" name="val2" value="${ val2 }"><br><br>


                <!-- Operators -->
                <input type="radio" id="somar" name="op" value="somar" ${ op === 'somar' ? 'checked' : '' }>
                <label for="somar">Somar</label><br>

                <input type="radio" id="subtrair" name="op" value="subtrair" ${ op === 'subtrair' ? 'checked' : '' }>
                <label for="subtrair">Subtrair</label><br>

                <input type="radio" id="multiplicar" name="op" value="multiplicar" ${ op === 'multiplicar' ? 'checked' : '' }>
                <label for="multiplicar">Multiplicar</label><br>

                <input type="radio" id="dividir" name="op" value="dividir" ${ op === 'dividir' ? 'checked' : '' }>
                <label for="dividir">Dividir</label><br><br>


                <!-- Submit button -->
                <input type="submit" value="CALCULAR"><br><br>


                <!-- Result -->
                <div>
                    <h1>${ val1 } ${ getOperatorSymbol(op) } ${ val2 } = ${ result }</h1>
                </div>
            </form>
        </div>
    </div>
        
    </body>
    </html> 
    `
}

function getOperatorSymbol(op) {
    switch (op) {
        case 'somar':
            return '+';
            
        case 'subtrair':
            return '-';
        
        case 'multiplicar':
            return '*';
    
        case 'dividir':
            return '/';
    
        default:
            return '';
    }
}

module.exports = {
    createCalculatorPage
}