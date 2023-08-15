const sum = +prompt("Введите желаемую сумму кредита")
const period = +prompt("Введите количесство месяцев для кредита")
const rate = +prompt("Введите процентную ставку") / 100

//Ануитетный кредит
// summa * period (ежемесячная процентная ставка) / (1 - (1 /(1 + ежемесячная процентная ставка ^ n)))

const monthRate = rate / 12
const topPart = +(sum * monthRate).toFixed(2)
const bottomPart = +(1 - (1 / Math.pow(monthRate + 1, period))).toFixed(2)
const ann = +(topPart / bottomPart).toFixed(2)




//Диференцированный кредит

let dif = 0
let persents = 0
let remainSum = sum
let mainDebt = +(sum / period).toFixed(2)
const table = document.querySelector(".table")
let str = "<table><tr><th>Долг на начало периода</th><th> Основнойдолг</th><th>Проценты</th><th>Ежемесячный платеж</th></tr>"

for (let i = 0; i < period; i++ ) {
   str += `<tr><td>${remainSum}</td><td>${mainDebt}</td>`
   console.log("Долг: " + remainSum);
   persents = +(remainSum * monthRate).toFixed(2)
   str +=`<td>${persents}</td>`
   console.log("Проценты: " + persents);
   remainSum -= +(mainDebt).toFixed(2)
   remainSum = +(remainSum).toFixed(2)
   dif = +(persents + mainDebt).toFixed(2)
   str += `<td>${dif}</td></tr>`
   console.log("Основной долг: " + mainDebt);
   console.log("Ежемесячный платеж: " + dif);
}
str += "</table>"
table.innerHTML = str
