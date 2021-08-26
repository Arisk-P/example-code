function timeToSecond(day, hour, minute, second = 0) {
    return (day) * 86400 + (hour) * 3600 + (minute) * 60 + second
}

console.log(timeToSecond(0, 0, 0, 1)) // 1
console.log(timeToSecond(0, 0, 1, 0)) // 60
console.log(timeToSecond(0, 0, 2, 0)) // 120
console.log(timeToSecond(0, 1, 0, 0)) // 3600
console.log(timeToSecond(0, 2, 0, 0)) // 7200
console.log(timeToSecond(0, 1, 1, 0)) // 3360
console.log(timeToSecond(1, 0, 0, 0)) // 86400
console.log(timeToSecond(1, 1, 1, 1)) // 90061
