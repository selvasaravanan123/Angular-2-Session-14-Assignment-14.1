var express = require('express')
var app = express()
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST,DELETE,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

let cricketer = [];

/**Get the player list */
app.get('/api/getPlayerType', function (req, res) {
  res.json([{
    id: 1,
    type: 'Batsman'
  },
  {
    id: 1,
    type: 'Bowler'
  }, {
    id: 1,
    type: 'Wicket Keeper'
  }])
})

/** Post the data for crickets */
app.post('/api/addPlayers', function (req, res) {
  let cricketerObject = {
    firstName: req.body.cricketerDetail.firstName,
    lastName: req.body.cricketerDetail.lastName,
    favShot: req.body.cricketerDetail.favShot,
    playerType: req.body.cricketerDetail.playerType,
    yearlyIncome: req.body.cricketerDetail.yearlyIncome,
    dob: req.body.cricketerDetail.dob
  }
  cricketer.unshift(cricketerObject);
  res.json(`${cricketer.length} sucessfully added`);
})

/**Get the player list */
app.get('/api/getPlayers', function (req, res) {
  res.json(cricketer);
})

/**Delete data */
app.delete('/api/deletePlayer/:id', function (req, res) {
  cricketer.splice(req.params.id, 1);
  res.json(`${req.params.id} deleted sucessfully `);
})

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})