module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    text : 'Dude, chill!'
  };
 
  // avoid infinite loop
  if (userName !== 'gilbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}

slack.on('message', function(message) {
  var lowercase = message.toLowerCase();

  if (lowercase.indexOf("dude")) {
    channel.send('Dude, chill!') 
  }
})