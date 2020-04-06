const Discord = require(`discord.js`);

  module.exports = {
    name: "restart",
    group: "fun",
    command: true,
    guildOnly: true,
cooldown: 10,
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
