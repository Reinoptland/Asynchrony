// WIP .. needs more love

const board = [
    [null, 'x', 'x'],
    ['o', 'o', null],
    ['o', 'x', 'x']
]

// function rowWinner(row){
//     if(row)
// }

function isSymbol(symbol, compareToSymbol) {
    return symbol === compareToSymbol;
}
  
function calculateWinner(board, symbol){
    const oWinnerRow = board.map(row => row.every(value => isSymbol(value, symbol)))
    const oWinnerColumn = [
        board.map(row => row[0]), 
        board.map(row => row[1]), 
        board.map(row => row[2])
    ].map(row => row.every(value => isSymbol(value, symbol)))
    const oWinnerDiagonal1 = board.map((row, index) => {
        return row[index]
    })

    const oWinnerDiagonal2 = board.map((row, index, array) => {
        return row[(array.length - 1) - index]
    })

    const oWinnerDiagonal = (oWinnerDiagonal1.every(value => isSymbol(value, symbol))) 
        || oWinnerDiagonal2.every(value => isSymbol(value, symbol))
    console.log(oWinnerDiagonal)

    if(oWinnerRow.includes(true) || oWinnerColumn.includes(true) || oWinnerDiagonal){
        console.log(`${symbol} has won! All hail ${symbol}!`)
        return symbol
    }
}

calculateWinner(board, 'o')
calculateWinner(board, 'x')

