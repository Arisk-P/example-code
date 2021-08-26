function findMin (numbers) {
    // numbers = [2, 4, 6, 1, 5]
    let result = numbers[0]
    for (let number of numbers) {
        // 2 < 2 not
        // 4 < 2 not
        // 6 < 2 not
        // 1 < 2 ok; result = 1
        // 5 < 1 not
        if (number < result) {
            result = number
        }
    }
    return result
}

function findMax (numbers) {
    return 'TODO'
}

console.log(findMin([2, 4, 6, 1, 5])) // 1
console.log(findMin([10, 8, 12, 14, -1, -7])) // -7

console.log(findMax([2, 4, 6, 1, 5])) // 5
console.log(findMax([10, 8, 12, 14, -1, -7])) // 14
