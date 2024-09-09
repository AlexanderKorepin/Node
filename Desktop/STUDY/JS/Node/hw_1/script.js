
// Напишите HTTP сервер и реализуйте два обработчика, где:
// — По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
// — А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
// — Также реализуйте обработку несуществующих роутов (404).
// — * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница.
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
        res.end('<a href = "/about">Перейти на страницу обо мне!</a>');
        console.log('Запрос получен');
        console.log('Счетчик просмотров: ', ++counter);

    }
    else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
        res.end('<a href = "/">Обо мне страница</a>');
        console.log('Запрос получен');
        console.log('Счетчик просмотров: ', ++counter);

    } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8'} ) 
        res.end('<a href = "/" >Страница не найдена</a>');
        console.log('Запрос получен');
        console.log('Счетчик просмотров: ', counter);
        counter = 0; // обнуляем счетчик просмотров после обработки 404
        return;
    }

    console.log('Запрос получен');
    // console.log('Счетчик просмотров: ', counter);
    // counter = 0; // обнуляем счетчик просмотров 
});
const port = 4000;
server.listen(port);

console.log(`Сервер запущен на порту ${port}`);

let counter = 0; // счетчик просмотров для каждой страницы








