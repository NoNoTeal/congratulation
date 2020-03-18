const Discord = require(`discord.js`);
const Commando = require(`discord.js-commando`);
const updater = require('discord-bot-updater');

class RS extends Commando.Command{
    constructor(client) {
        super(client, {
            name: 'rs',
            group: 'fun',
            memberName: 'rs',
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

  message.channel.send(`Attempting to restart bot.`)
var npm = "npm i"
var run = "node ./";
  var { exec } = require('child_process')
  message.client.destroy();
  exec(npm, function() {
    exec(run) 
  })
}}

module.exports = RS;