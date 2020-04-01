const lompatanKuda = position => {
    let [xPos, yPos] = position.split('')
    let letterToNumber = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    xPos = letterToNumber.indexOf(xPos) + 1

    let posCheck = [[2, 1], [1, 2], [1, -2], [2, -1], [-1, 2], [-2, 1], [-1, -2], [-2, -1]]

    return posCheck.reduce((acc, curr) => {
        if (xPos + curr[0] > 0 && xPos + curr[0] <= 8 && parseInt(yPos) + curr[1] <= 8 && parseInt(yPos) + curr[1] > 0)
            return acc + 1;
        return acc
    }, 0)
}

console.log(lompatanKuda('A1'))
console.log(lompatanKuda('G7'))
console.log(lompatanKuda('C4'))