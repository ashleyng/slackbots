function gilbot(channel, lowercase) {
  var exclamationmarks = lowercase.match(/!/g);
  
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

exports.gilbot = gilbot;