const Discord = require(`discord.js`);
const Util = require("../../util/util");
module.exports = {
    name: "nerdpole",
    group: "fun",
    command: true,
    guildOnly: true,
cooldown: 5,
description: 'call someone a nerdpole',
async run(message) {

var args = message.content.split(/\s+/).slice(1);
let user = await Util.userParsePlus(message, args, 'member');

if(!user) return message.channel.send(`You need to call someone a nerdpole, please \`ping\` someone or use their \`ID\`!`)
else

var nou = new Discord.MessageEmbed()
    .setTitle(`Nerdpole Alert 🤓`)
    .setAuthor(`${message.author.tag}`, message.author.avatarURL())
    .addField(`User`, message.author)
    .setColor(`#00ffbb`)
    .setTimestamp()

if(user.id == message.client.user.id) return message.channel.send(nou)
else

message.delete()
var embed = new Discord.MessageEmbed()
    .setTitle(`Nerdpole Alert 🤓`)
    .setAuthor(`${user.user.tag}`, user.user.avatarURL())
    .addField(`User`, user)
    .setColor(`#00ffbb`)
    .setTimestamp()
    Math.random() > 0.8 ? embed.addField(`They did it!`, message.author) : ''

message.channel.send(embed)

}}