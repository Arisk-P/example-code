function BMI(weight, height) {
    return (weight) / Math.pow((height)/100, 2)
}

function getBMILabel(value) {
    if (value < 18.5) {
        return 'Underweight'
    } else if (value <= 24.9) {
        return 'Normal weight'
    } else if (value <= 29.9) {
        return 'Overweight'
    } else if (value <= 34.9) {
        return 'Obesity class I'
    } else if (value <= 39.9) {
        return 'Obesity class II'
    } else if (value >= 40) {
        return 'Obesity class III'
    }
}
const myBMI = BMI(60, 170)
const myMassSize = getBMILabel(myBMI)

alert(`Output: (${myBMI}) ${myMassSize}`)