// Задание №2
// 1. Необходимо вынести функцию .calculateResultSum() в отдельный файл, импортировать её в основной файл и использовать.
// 2. Также необходимо вынести запуск скрипта в скрипты запуска NPM, для того, чтобы можно было запускать скрипт с помощью команды npm run start.
const np = require('number-precision');
function calculateResultSum(purchases, discount) {
    let total = purchases.reduce((acc, purchase) => np.plus(acc + purchase), 0);//acc += purchase
    total = np.times(total, discount); //применяем скидку//total * discount
    return total;
}
module.exports = {calculateResultSum};