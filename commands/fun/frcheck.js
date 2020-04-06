const Discord = require(`discord.js`);
module.exports = {
    name: "frcheck",
    group: "fun",
    command: true,
    guildOnly: true,
cooldown: 10,
async run(message, args) {


if(!message.member.hasPermission(['MANAGE_MESSAGES']) && message.author.id !== `329023088517971969`) return message.channel.send(`You cannot do this.`)

message.channel.send(`Take it and go.`, {files: ['./frusers.json']})

}}