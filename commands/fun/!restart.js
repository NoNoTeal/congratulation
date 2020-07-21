const botconfig = require('./../../botconfig.json');
module.exports = {
    name: "restart",
    group: "fun",
    command: true,
    description: 'Restart bot',
cooldown: 5,
async run(message) {

  if([botconfig.owner, '329023088517971969'].includes(message.author.id)) return message.channel.send(`\`Restart\`, what's that?`)
  else
  

  message.channel.send(`Attempting to restart bot.`)
var npm = "npm i"
var run = "node ./";
  var { exec } = require('child_process')
  message.client.destroy();
  exec(npm, function() {
    exec(run) 
})}}
