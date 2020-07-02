const Discord = require(`discord.js`);
const botconfig = require(`../../botconfig.json`);
const fs = require("fs");

module.exports = {
    name: "repcheck",
    group: "fun",
    command: true,
    guildOnly: true,
    cooldown: 5,
async run(message) {

    let replist = JSON.parse(fs.readFileSync("./commandhelper/rep.json", "utf8"))

if(message.member.roles.some(r => botconfig.trustedroles.includes(r.id)) !== true && botconfig.trustedroles !== null && !message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send(`Hmm, doesn't seem you have the role required to rep.`)
else

var args = message.content.split(' ').slice(1);
var user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member

if(!user) return message.channel.send(`User doesn't exist.`)
else

if(user.id == message.client.user.id) return message.channel.send(`
\`\`\`json
Rep for ${message.client.user.tag}

Total rep: Yes
Last rep: Wumpus#0000
\`\`\``)
else

if(!replist[user.id]) return message.channel.send(`User has no rep.`)

message.channel.send(`
\`\`\`json
Rep for ${user.user.tag}

Total rep: ${replist[user.id].count}
Last rep: ${message.guild.members.get(replist[user.id].prevrep).user.tag}
\`\`\``)

}}