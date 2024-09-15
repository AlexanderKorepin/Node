// Задание_1
// Необходимо найти, установить и применить библиотеку, которая позволит
// избежать проблем со сложением и умножением чисел с плавающей запятой

//должен быть результат 78.66
require('colors');
const {calculateResultSum} = require('./calculateResultSum');

const total = calculateResultSum([12.1, 32.2, 43.1], 0.9);
//по факту получаем 78.66000000000001
console.log(total < 50 ? `${total}` .red : `${total}`.green);
