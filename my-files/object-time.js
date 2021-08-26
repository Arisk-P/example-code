function timeToSecond(object) {
   let hour = object.hour * 3600
   let day = object.day * 86400
   let minute = object.minute * 60
   let second = object.second
   return day + hour + minute + second
}

console.log(timeToSecond({ hour: 0, day: 0, minute: 0, second: 1 })) // 1
console.log(timeToSecond({ day: 0, hour: 0, minute: 1, second: 0 })) // 60
console.log(timeToSecond({ day: 0, hour: 0, minute: 2, second: 0 })) // 120
console.log(timeToSecond({ day: 0, hour: 1, minute: 0, second: 0 })) // 3600
console.log(timeToSecond({ day: 0, hour: 2, minute: 0, second: 0 })) // 7200
console.log(timeToSecond({ hour: 1, day: 0, second: 0, minute: 1 })) // 3360
console.log(timeToSecond({ day: 1, hour: 0, minute: 0, second: 0 })) // 86400
console.log(timeToSecond({ day: 1, hour: 1, minute: 1, second: 1 })) // 90061

