let askAge
let errorMessage = ''
// for ==> จำนวนนับที่ชัดเจน
// while ==> จนกว่าจะผิด
while (Number.isNaN(Number(askAge))) {
    askAge = Number(window.prompt(errorMessage + 'Ask age')) // `${errorMessage}Ask age`
    errorMessage = '(Only number allow) '
}

if (askAge < 0) {
    alert('Error!')
} else if (askAge <= 17) {
    alert('Young')
} else if (askAge <= 24) {
    alert('Young Adult')
} else if (askAge >= 25) {
    alert('Adult')
}