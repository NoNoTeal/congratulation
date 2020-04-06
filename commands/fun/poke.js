const Discord = require('discord.js')
const botconfig = require('./../../botconfig.json')

module.exports = {
    name: "poke",
    group: "fun",
    command: true,
    guildOnly: true,
    cooldown: 10,
    async run(message) {
if(message.channel instanceof Discord.DMChannel) return
else

if(message.member.roles.some(r => botconfig.trustedroles.includes(r.id)) !== true && botconfig.trustedroles !== null && !message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send(`no.`)
else

var args = message.content.split(' ').slice(1);
let user = message.mentions.members.first() || message.guild.members.get(args[0])

if(!user) return message.channel.send(`You need to poke someone, please \`ping\` someone or use their \`ID\`!`)
else

if(user.id == message.client.user.id) return message.channel.send(`<@${message.author.id}>, POKE! ||From Blast :)||`)
else
message.channel.send(`<@${user.id}>, POKE! ||From ${message.author.username}||`)
    }
}