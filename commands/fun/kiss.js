const Discord = require(`discord.js`);


module.exports = {
    name: "kiss",
    group: "fun",
    command: true,
    guildOnly: true,
    description: 'Kiss someone',
cooldown: 5,
async run(message) {

var args = message.content.split(/\s+/).slice(1);
var user = message.mentions.members.first() || message.guild.members.cache.get(args[0])

if(!user) return message.channel.send(`You need someone else to kiss, please \`ping\` someone or use their \`ID\`!`)
else

if(user.id == message.client.user.id) return message.channel.send(`I'm sorry, \`lips.js\` wasn't located.`)
else

if(user.id == message.author.id) return message.channel.send(`Look, I need to get this straight. You can't kiss yourself.`)
else

message.channel.send(`Hey <@${user.id}>, ${message.author.tag} just gave you a great big kiss! 😘`)

}}