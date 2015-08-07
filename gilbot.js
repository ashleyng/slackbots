module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    text : 'Dude, chill!'
  };
  var message = req.body.text;

  // avoid infinite loop
  if (message === "Dude, chill!") {
    return res.status(200).end();
  }
  else if (userName !== 'gilbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}