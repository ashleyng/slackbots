// var hellobot = require('./hellobot');
// var gilbot = require('./gilbot');

var express = require('express');
var bodyParser = require('body-parser');
var Slack = require('slack-client');

var token = 'xoxb-8766272068-HcErbipxskzfTa8ea1rX5YvZ'

var slack = new Slack(token, true, true);
 
slack.on('message', function(message) {
  var user = slack.getUserByID(message.user);
  var channel_name = slack.getChannelByID(slack.channel);
  var messagetext = message.text
  var channel = slack.getChannelGroupOrDMByID(message.channel);
  var lowercase = messagetext.toLowerCase();
  console.log("user: " + user.name + " channel: " + channel_name);

  // if (channel !== 'general') {
    if (lowercase === "dude") {
      channel.send('Dude, chill!') 
    }

  // }
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