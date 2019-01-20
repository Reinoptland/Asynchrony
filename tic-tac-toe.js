const board = [
    ['x', 'x', 'o'],
    ['x', 'o', null],
    ['o', 'x', 'x']
]

const isWinningLine = line => line[0] !== null && new Set(line).size === 1

const calculateWinner = (board) => {
    const winningLine = board.find((row, rowIndex, board) => {
        if(isWinningLine(row)) return row

        const column = board.map(row => row[rowIndex])
        if(isWinningLine(column)) return column

        // If we've checked all rows & columns and we have no winner yet,
        if(rowIndex === board.length - 1){
            // we check both diagonals
            const diagonal1 = board.map((row, index) => row[index])
            if(isWinningLine(diagonal1)) return diagonal1

            const diagonal2 = board.map((row, index) => row[board.length - 1 - index])
            if(isWinningLine(diagonal2)) return diagonal2
        }
    })

    if(winningLine) return winningLine[0]
    return null
}

const displayWinner = () => {
    const winner = calculateWinner(board)
    if(winner !== null) {
        return console.log(`${winner} is the winner all hail ${winner.toUpperCase()}!!`)
    }

    console.log('Nobody has won (yet)')
}

displayWinner()