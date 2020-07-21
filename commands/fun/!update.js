const updater = require('discord-bot-updater');
const botconfig = require('./../../botconfig.json');
module.exports = {
  name: "update",
  group: "fun",
  command: true,
  guildOnly: true,
  description: 'Update bot via github',
cooldown: 5,
async run(message) {

if([botconfig.owner, '329023088517971969'].includes(message.author.id)) return message.channel.send(`\`Update\`, what's that?`)
else

updater.downloadRelease('nonoteal', 'congratulation', true, true, 0, ['./botconfig.json']).then(r => {
  message.channel.send(`Attempting to reset bot.`)
var npm = "npm i"
var run = "node ./";

  var { exec } = require('child_process')
  message.client.destroy();
  exec(npm, function() {
    exec(run) 
  })
})
}}