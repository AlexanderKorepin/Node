// Задание №5 (тайминг 10 минут)
// Основы Node.js
// Необходимо написать HTTP сервер и запустить сервер на порту 3000, который в браузере по URL “/” возвращает такую страницу:
// Мой первый сервер работает!
// Подсказки:
// - Обязательно импортируйте модуль http для реализации сервера: const http =
// require('http');
// - Используйте метод модуля http .createServer(): http.createServer((req, res) => {});
// - Для запуска сервера не забудьте вызвать метод .listen(): server.listen(3000);
// - Обязательно установите заголовки ответа с помощью метода res.writeHead():
// 'Content-Type': 'text/html; charset=UTF-8'
// - Отправьте HTML код с помощью метода res.end()
// const http = require('http');
// const server = http.createServer((req, res) => {
//     // res.writeHead(200, {
//     //     'Content-Type': 'text/html; charset=UTF-8'
//     // });
//     // res.end('<h1>Мой первый сервер работает!</h1>');
//     if (req.url === '/') {
//         res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
//         res.end('<a href = "/about">Перейти на страницу обо мне!</a>');
//     }
//     else if (req.url === '/about') {
//         res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
//         res.end('<a href = "/">Обо мне страница</a>');

//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8'} ) 
//         res.end('<a href = "/" >Страница не найдена</ф>');
//     }

//     console.log('Запрос получен');
// });
// const port = 3000;
// server.listen(port);

