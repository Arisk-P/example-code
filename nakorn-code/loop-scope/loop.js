// repeat = for()
// while = while()

// let count = 1
// let maxCount = 10

// while (count <= maxCount) {
//     console.log(count)
//     count = count + 2 // count = count + 1
// }

// for (initial; conditional; end) { ... }

// maxCount = 10
// for (count = 1; count <= maxCount; count = count + 2) {
//     console.log(count)
//     // count = count + 2
// }

// const fruits = ['Apple', 'Banana', 'Cherry']
// // array.length = จำนวนข้อมูล

// for (let index = 0; index < fruits.length; index++) {
//     console.log('Data:', fruits[index])
// }

const numbers = [1, 2, 3, 4, 5]
let result = 0
// 1 + 2 + 3 + 4 + 5 = 15

// for (let i = 0; i < numbers.length; i++) {
//     // console.log(numbers[i])
//     result = result + numbers[i]
//     // result = 0 + 1
//     // result = 1 + 2
//     // result = 3 + 3
//     // result = 6 + 4
//     // result = 10 + 5
// }

// for of = array
// for (let n of numbers) {
//     result = result + n
// }

// console.log(result)

// for in = object
// const person = { name: 'John Doe', age: 18, active: true, banned: false }
// for (let data in person) {
//     // person.age
//     // person['age']
//     console.log(data, ':', person[data])
// }

// 1 2 3 4 5 ... 29 -> 40 41 42 ... 50
// for (let n = 1; n <= 50; n++) {
//     if (n >= 30 && n <= 39) {
//         continue // skip
//         break
//     }
//     console.log(n)
// }

// *
// * *
// * * *
// * * * *
// * * * * *

//  let maxRow = 7
//  for (let row = 1; row <= maxRow; row++) {
//      let output = ''
// //     // row = 6
// //     // column <= 6
// //     // column = 1 ---> add *
// //     // column = 2 ---> add * *
// //     // column = 3 ---> add * * *
// //     // column = 4 ---> add * * * *
// //     // column = 5 ---> add * * * * *
// //     // column = 6 ---> add * * * * * *
//      for (let column = 1; column <= row; column++) {
//          output = output + '* '
//      }
//      console.log(output)
//  }

// - - - - * // 5 - 1 = 4
// - - - * * // 5 - 2 = 3
// - - * * *
// - * * * *
// * * * * *

let minRow = 1
let maxRow = 3
for (let row = 5; row > minRow; (row = row - 1)) {
    let output = ''
    let output2 = '* '
    
    for (let column = 1; column < row; column++) {
        output = output + '- ' 
    }
    console.log(output + output2)
}


    
