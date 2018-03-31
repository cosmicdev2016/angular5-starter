var http = require('http');

http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    res.writeHead(200, { 'Content-Type': 'application/json' });

    var users = [
        {
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "passwd": "abc123"
          },
          {
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "passwd": "abc1234"
          },
          {
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net",
            "passwd": "abc12345"
          },
          {
            "name": "Patricia Lebsack",
            "username": "Karianne",
            "email": "Julianne.OConner@kory.org",
            "passwd": "abc123456"
          },
          {
            "name": "Chelsey Dietrich",
            "username": "Kamren",
            "email": "Lucio_Hettinger@annie.ca",
            "passwd": "abc1234567"
          }
    ];

    res.end(JSON.stringify(users));

}).listen(8090);