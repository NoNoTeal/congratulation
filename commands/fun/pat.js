

module.exports = {
    name: "pat",
    group: "fun",
    command: true,
    guildOnly: true,
cooldown: 5,
description: 'Pat someone',
async run(message) {

var args = message.content.split(/\s+/).slice(1);
var user = message.mentions.members.first() || message.guild.members.cache.get(args[0])

if(!user) return message.channel.send(`You pat the air.`)
else

if(user.id == message.client.user.id) return message.channel.send(`\`Body.js\` wasn't found.`)
else

if(user.id == message.author.id) return message.channel.send(`You pat yourself.`)
else

message.channel.send(`\`${message.author.tag}\` proceeds to pat \`${user.user.tag}\`. 🖐️`)


}}