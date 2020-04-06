const Discord = require(`discord.js`);
const updater = require('discord-bot-updater');

module.exports = {
  name: "update",
  group: "fun",
  command: true,
  guildOnly: true,
cooldown: 10,
async run(message) {

if(message.author.id !== '329023088517971969') return 
else

updater.downloadRelease('nonoteal', 'congratulation', true, true, 0, ['./botconfig.json', './frusers.json','./commandhelper/rep.json']).then(r => {
  message.channel.send(`Attempting to reset bot.`)
  console.log(r)
var npm = "npm i"
var run = "node ./";

  var { exec } = require('child_process')
  message.client.destroy();
  exec(npm, function() {
    exec(run) 
  })
})
}}