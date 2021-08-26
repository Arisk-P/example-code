// const now = Date.now()
const now = new Date()
const startYear = new Date('2021-01-01')

console.log(now.toString()) // string
console.log(startYear.toString()) // string

console.log(now.valueOf()) // number
console.log(startYear.valueOf()) // number

console.log((now - startYear) / 1000 / 60 / 60 / 24 / 30)

// hour = 60 minute
// 1 minute = 60 second
// 1 second = 1000 millisecond (ms)

console.log(now.getHours(), now.getMinutes())

// console.log('Before:', now)
// now.setFullYear(2022)
// console.log('2022:', now)

// now.setFullYear(2565)
// console.log('2565:', now)

console.log('Thai:', now.toLocaleString('th-TH'))
console.log('Thai:', now.toLocaleString('th-TH', { dateStyle: 'full', timeStyle: 'full' }))
console.log('คุณเกิด',now.toLocaleString('th-Th', {dateStyle: 'full'}))