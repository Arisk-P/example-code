// const age = 18
const age = 18
const salary = 12000
const bonus = 3.5259
// Number = constructor <== static method
// age = instance <== instance method

console.log(age)
console.log(salary)
console.log(bonus)

console.log(Number.isInteger(age))
console.log(Number.isInteger(salary))
console.log(Number.isInteger(bonus))

console.log(age.toFixed(3))
console.log(salary.toFixed(3))
console.log(bonus.toFixed(3))

const second1 = '45'
const second2 = '45 seconds'
const second3 = 'time: 45s'

console.log(Number(second1))
console.log(Number(second2))
console.log(Number(second3))

function convertTimeToNumber (timestamp) {
    // for of [array]
    // for of string
    let result = ''
    for (let charAsString of timestamp) {
        const charAsNumber = Number(charAsString)
        if (!Number.isNaN(charAsNumber)) {
            result = result + charAsString
        }
    }
    return Number(result)
}

console.log(convertTimeToNumber(second1))
console.log(convertTimeToNumber(second2))
console.log(convertTimeToNumber(second3))
