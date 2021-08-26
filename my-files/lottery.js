let mainMin = 0
let mainMax = 999999

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

const dataset = [
    random(mainMin, mainMax),
    random(mainMin, mainMax),
    random(mainMin, mainMax),
    random(mainMin, mainMax),
    random(mainMin, mainMax),
    random(mainMin, mainMax)
]

for (let item of dataset) {
    console.log(String(item).padStart(6, '0'), String(item).slice(4))
    // String.slice()
    // String.substr()
}