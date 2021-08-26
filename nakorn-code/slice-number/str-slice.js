const data = 'Foobar Hello World'

// F = 0
// o = 1
// o = 2
// b = 3
// a = 4
// r = 5

console.log(data)
console.log(data.slice(3, 6))
console.log(data.slice(3))
console.log(data.slice(-3))
console.log(data.slice(7, 12))

console.log('-------------')

// String.substring()
console.log(data)
console.log(data.substr(3, 3))
console.log(data.substr(3))
console.log(data.substr(-3))
console.log(data.substr(7, 5))
