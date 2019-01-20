const board = [
    [null, 'x', 'x'],
    ['o', 'o', null],
    ['x', 'x', 'x']
]

const isWinningLine = line => line[0] !== null && new Set(line).size === 1

const calculateWinner = (board) => {
    const rows = board.map(row => [...row])
    const { columns, diagonals } = transposeToColumnsAndDiagonals(board)
    const lines = [ ...rows, ...columns, ...diagonals]
    const winningLine = lines.find(isWinningLine)

    if(winningLine) return winningLine[0]
    return null
}


function transposeToColumnsAndDiagonals(board) {
    return board.reduce((boardAcc, row, rowIndex, board) => {
        // Since we're going over all symbols we might as well do columns, diagonals at once
        let { columns, diagonals } = row.reduce((rowAcc, symbol, index) => {
            // convert rows to columns
            const columns = [ ...rowAcc.columns ]
            columns[index] = columns[index].concat(symbol)

            // Check if the current symbol is part of either diagonal
            // If so, add them to a diagonal array
            let diagonals = [...rowAcc.diagonals]
            if (rowIndex === index) {
                diagonals[0] = diagonals[0].concat(symbol)
            }

            if (index === (board.length - 1) - rowIndex) {
                diagonals[1] = diagonals[1].concat(symbol)
            }

            return { columns, diagonals};
        }, { columns: [...boardAcc.columns], diagonals: [...boardAcc.diagonals]});

        return {
            columns,
            diagonals
        };
    }, { columns: new Array(board.length).fill([]), diagonals: [[], []] });
}

const displayWinner = () => {
    const winner = calculateWinner(board)
    if(winner !== null) {
        return console.log(`${winner} is the winner all hail ${winner.toUpperCase()}!!`)
    }

    console.log('Nobody has won (yet)')
}

displayWinner()