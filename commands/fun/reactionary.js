const Discord = require(`discord.js`);
const Commando = require(`discord.js-commando`);
const botconfig = require(`../../botconfig.json`);
const fs = require("fs");

class reactionarycheck extends Commando.Command{
    constructor(client) {
        super(client, {
            name: 'reactionarycheck',
            group: 'fun',
            memberName: 'reactionarycheck',
            description: 'reactionarycheck',
            throttling:{
                usages: 1,
                duration: 10
            }
        })
    }
async run(message) {

    let reactionary = JSON.parse(fs.readFileSync("./commandhelper/reactionary.json", "utf8"))

if(message.channel instanceof Discord.DMChannel) return message.channel.send(`?????????`)
else

if(message.member.roles.some(r => botconfig.trustedroles.includes(r.id)) !== true && botconfig.trustedroles !== null && !message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send(`Hmm, doesn't seem you have the role required to rep.`)
else

var args = message.content.split(' ').slice(1);
var user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member

if(!user) return message.channel.send(`User doesn't exist.`)
else

if(user.id == message.client.user.id) return message.channel.send(`
\`\`\`json
Reactionary Stats for ${message.client.user.tag}

Wins/Total Games: ${reactionary.globalgame / reactionary.globalgame}
Wins: ∞
Total Games: ${reactionary.globalgame}
\`\`\``)
else

if(!reactionary[user.id]) return message.channel.send(`User has never played.`)

message.channel.send(`
\`\`\`json
Reactionary Stats for ${user.user.tag}

Wins/Total Games: ${[reactionary[user.id] / reactionary.globalgame].slice(0, 7)}
Wins: ${reactionary[user.id]}
Total Games: ${reactionary.globalgame}
\`\`\``)

}}

module.exports = reactionarycheck;