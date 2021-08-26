function getFullAge (timeObject) {
const birth = new Date(`${timeObject.year-543}-${timeObject.month}-${timeObject.day}`)
const now = new Date()
const newBirth = birth.valueOf()
const newNow = now.valueOf()
const trueBirth = new Date(newNow-newBirth)
const extraTrueBirth = birth.getDay()


// -------------------------------age----------------------------------------
const age = (now-birth) / 1000 / 60 / 60 / 24 / 365

if (Number(extraTrueBirth) = 0) {
    return (`คุณเกิดวันทร์ อายุ${Math.floor(age)}`)
} else if (Number(extraTrueBirth) = 1) {
    return (`คุณเกิดวันอังคาร อายุ${Math.floor(age)}`)
} else if (Number(extraTrueBirth) = 2) {
    return (`คุณเกิดวันพุธ อายุ${Math.floor(age)}`)
} else if (Number(extraTrueBirth) = 3) {
    return (`คุณเกิดวันพฤหัสบดี อายุ${Math.floor(age)}`)
} else if (Number(extraTrueBirth) = 4) {
    return (`คุณเกิดวันศุกร์ อายุ${Math.floor(age)}`)
} else if (Number(extraTrueBirth) = 5) {
    return (`คุณเกิดวันเสาร์ อายุ${Math.floor(age)}`)
} else if (Number(extraTrueBirth) = 6) {
    return (`คุณเกิดวันอาทิตย์ อายุ${Math.floor(age)}`)
}

}
    
console.log(getFullAge({ day: 11, month: 12, year: 2538 }))
console.log(getFullAge({ day: 7, month: 10, year: 2540 }))