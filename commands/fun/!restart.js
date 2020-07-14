module.exports = {
    name: "restart",
    group: "fun",
    command: true,
    description: 'Restart bot',
cooldown: 5,
async run(message) {

if(message.author.id !== '329023088517971969') return 
else

  message.channel.send(`Attempting to restart bot.`)
var npm = "npm i"
var run = "node ./";
  var { exec } = require('child_process')
  message.client.destroy();
  exec(npm, function() {
    exec(run) 
})}}
