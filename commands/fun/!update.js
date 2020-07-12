const updater = require('discord-bot-updater');

module.exports = {
  name: "update",
  group: "fun",
  command: true,
  guildOnly: true,
  description: 'Update bot via github',
cooldown: 5,
async run(message) {

if(message.author.id !== '329023088517971969') return 
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