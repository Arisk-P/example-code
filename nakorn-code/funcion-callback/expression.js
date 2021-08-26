function sayHello (name, age) {
    let ageLabel
    if (age >= 18) {
        ageLabel = 'Adult'
    } else {
        ageLabel = 'Young'
    }
    console.log(`Hello! ${name} (${ageLabel})`)
}

// function expression, function anonymous, lambda function (python)
const sayHelloV2 = function (name, age) {
    console.log(`Hi ${name} your age is ${age}`)
}

sayHello('John', 18)
sayHello('Joe', 17)
sayHello('Jane', 21)

sayHelloV2('John', 18)
sayHelloV2('Joe', 17)
sayHelloV2('Jane', 21)

function sum(n1, n2, callback) {
    if (typeof n1 != 'number' || typeof n2 != 'number') {
        callback('Data is not number')
    } else {
        // null = undefined
        callback(null, n1 + n2)
    }
}

sum(3, 4, function (error, data) {
    // if (Boolean())
    // null = false
    // 0 = false
    // '' = false
    // undefined = false
    if (error) {
        console.warn(error)
    } else {
        console.log(data)
    }
})
sum('abc', 'def', function (error, data) {
    if (error) {
        console.warn(error)
    } else {
        console.log(data)
    }
})

// function registerUser (username, age) {
//     if (username == 'admin') {
//         return ['Error! admin is not allow']
//     } else if (username == 'owner') {
//         return ['Error! owner is not allow']
//     } else if (age < 18) {
//         return ['Error! age is not more than 18']
//     } else {
//         return [null, 'Success!']
//     }
// }

// const output1 = registerUser('john', 19)
// const output2 = registerUser('admin', 19)
// const output3 = registerUser('joe11', 15)
// // output = [ERROR_MESSAGE, SUCCESS]

// if (output1[0] == null) {
//     console.log(output1[1])
// } else {
//     console.error('PLEASE FIX THIS:', output1[0])
// }

// if (output2[0] == null) {
//     console.log(output2[1])
// } else {
//     console.error('PLEASE FIX THIS:', output2[0])
// }

// if (output3[0] == null) {
//     console.log(output3[1])
// } else {
//     console.error('PLEASE FIX THIS:', output3[0])
// }

function registerUser (username, age, callback) {
    if (username == 'admin') {
        callback('Error! admin is not allow')
    } else if (username == 'owner') {
        callback('Error! owner is not allow')
    } else if (age < 18) {
        callback('Error! age is not more than 18')
    } else {
        callback(null, `สมัครสมาชิกชื่อ ${username} เสร็จสิ้น`)
    }
}

const handleWhenRegisterUser = function (error, output) {
    if (error) {
        console.error('FIX IT PLEASE', error)
    } else {
        console.log('สำเร็จ!', output)
    }
}

registerUser('john123', 18, handleWhenRegisterUser)
registerUser('admin', 18, handleWhenRegisterUser)
registerUser('jae111', 15, handleWhenRegisterUser)
