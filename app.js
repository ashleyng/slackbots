// var hellobot = require('./hellobot');
// var gilbot = require('./gilbot');

var express = require('express');
var bodyParser = require('body-parser');
var Slack = require('slack-client');

var token = 'xoxb-8763789941-QBvyNgGhW9ziBPVCFbvs8jdL'

var slack = new Slack(token, true, true);
 
slack.on('message', function(message) {
  var user = slack.getUserByID(message.user);
  var messagetext = message.text
  var channel = slack.getChannelGroupOrDMByID(message.channel);

  if (messagetext) {
    var lowercase = messagetext.toLowerCase();
    var exclamationmarks = lowercase.match(/!/g);

    if (channel.name !== 'allagile' && user.name !== 'gilbot') {
      if (lowercase === "dude") {
        channel.send('Dude, chill.') 
      }
      else if (exclamationmarks && exclamationmarks.length >= 2) {
        channel.send('Dude, chill.')
      }
      else if (lowercase.indexOf("lemonade") > -1 || lowercase.indexOf("milkshake") > -1) {
        channel.send('Dude, lemonade and milkshakes.')
      }
      else if (lowercase.indexOf("smash") > -1) {
        channel.send("Dude, Smash!");
      }
      else if (lowercase.indexOf("choo") > -1 || lowercase.indexOf('dinner') > -1) {
        channel.send("CHOO CHOO! :steam_locomotive:")
      }
      else if (lowercase == "unleash the horses" || lowercase.indexOf(":horse:") > -1) {
        channel.send(":horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: :horse: ");
      }
    }
  }
})

slack.login();
 
var app = express();
var port = process.env.PORT || 3000;
 
// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
 
// test route
app.get('/', function (req, res) { res.status(200).send('Hello world!') });
 
// error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});
 
app.listen(port, function () {
  console.log('Slack bot listening on port ' + port);
});

// app.post('/hello', hellobot);
// app.post('/gilbot', gilbot)