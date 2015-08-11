// var hellobot = require('./hellobot');
var gilbot_file = require('./gilbot');

var express = require('express');
var bodyParser = require('body-parser');
var Slack = require('slack-client');

var gilbot_slack = new Slack(process.env.GILBOT_SLACK_TOKEN, true, true);
// var wilbot_slack = new Slack(process.env.WILBOT_SLACK_TOKEN, true, true);
 
gilbot_slack.on('message', function(message) {
  var user = gilbot_slack.getUserByID(message.user);
  var messagetext = message.text
  var channel = gilbot_slack.getChannelGroupOrDMByID(message.channel);

  if (messagetext && channel.name !== 'allagile') {
    var lowercase = messagetext.toLowerCase();

    if (user.name !== 'gilbot' && user.name !== "wilbot") {
      gilbot_file.gilbot(channel, lowercase);
    }
  }
})

// wilbot_slack.on('message', function(message) {
//   var user = wilbot_slack.getUserByID(message.user);
//   var messagetext = message.text
//   var channel = wilbot_slack.getChannelGroupOrDMByID(message.channel);

//   if (messagetext && channel.name !== 'allagile') {
//     var lowercase = messagetext.toLowerCase();

//     if (user.name !== "wilbot" && lowercase === 'dude, chill.') {
//       channel.send('Dude, fuck off.')
//     }
//   }
// })

gilbot_slack.login();
// wilbot_slack.login();
 
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