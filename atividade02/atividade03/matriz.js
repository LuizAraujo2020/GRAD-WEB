// 2 x 2
const matriz = [[1, 2], 
                [3, 4]];
let auxiliary = [[0,0], [0,0]]

// 3 x 3
// const matriz = [[1, 2, 3], 
//                 [4, 5, 6],
//                 [7, 8, 9]];
// let auxiliary = [[0,0], [0,0], [0,0,0]]

function transporMatriz(mat, aux) {
    let columnAux = 0;
    let rowAux = 0;

    for (let column = 0; column < mat.length; column++) {
        columnAux = 0;
        for (let row =  0; row < mat[column].length; row++) {
            aux[columnAux][rowAux] = mat[column][row];
            columnAux++;
        }
        rowAux++;
    }

    return aux
}
console.table(matriz);
console.table(transporMatriz(matriz, auxiliary));