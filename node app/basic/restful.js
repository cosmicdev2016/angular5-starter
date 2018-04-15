var express = require('express'),
  bodyParser = require('body-parser');

var app = express();
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

var users = [
  { id: 1, name: 'john' },
  { id: 2, name: 'jane' },
  { id: 3, name: 'roy' }
]

app.get('/listUsers', function (req, res) {
  res.end(JSON.stringify(users));
});

app.put('/edituser', function (req, res) {
  for (var i = 0; i < users.length; i++) {
    if (users[i].id === req.body.id) {
      console.log("replacing " + JSON.stringify(users[i]) + " -- with -- " + JSON.stringify(req.body));
      users[i] = req.body;
      console.log("update success..");
      break;
    }
  }
  res.end(JSON.stringify(users));
});

app.post('/adduser', function (req, res) {
  console.log(req.body);
  users.push(req.body);
  res.end(JSON.stringify(users));
});

app.delete('/deleteUser/:id', function (req, res) {
  users.splice(req.params.id, 1);
  res.end(JSON.stringify(users));
})

var server = app.listen(8081, function () {
  console.log("listening..");
})