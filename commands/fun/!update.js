const Discord = require(`discord.js`);
const Commando = require(`discord.js-commando`);
const updater = require('discord-bot-updater');

class UPDATE extends Commando.Command{
    constructor(client) {
        super(client, {
            name: 'update',
            group: 'fun',
            memberName: 'update',
            description: 'shit',
            throttling:{
                usages: 2,
                duration: 10
            }
        })
    }
async run(message) {

if(message.channel instanceof Discord.DMChannel) return 
else

if(message.author.id !== '329023088517971969') return 
else

updater.downloadRelease('nonoteal', 'congratulation', true, true, 0, ['./botconfig.json', './frusers.json']).then(r => {
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

module.exports = UPDATE;