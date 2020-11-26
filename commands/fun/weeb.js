const Discord = require(`discord.js`);
const Util = require("../../util/util");


module.exports = {
    name: "weeb",
    group: "fun",
    description: 'call someone a weeb',
    command: true,
    guildOnly: true,
    cooldown: 5,
async run(message) {

var args = message.content.split(/\s+/).slice(1);
let user = await Util.userParsePlus(message, args, 'member');

if(!user) return message.channel.send(`You need to call someone a weeb, please \`ping\` someone or use their \`ID\`!`)
else
var nou = new Discord.MessageEmbed()
    .setTitle(`New Weeb 🕸️`)
    .setAuthor(`${message.author.tag}`, message.author.avatarURL())
    .addField(`Weeb Tag`, message.author)
    .addField(`ID`, message.author.id)
    .addField(`Highest Role`,message.member.roles.highest || 'None')
    .setColor(`#fcd303`)
    .setTimestamp()

if(user.id == message.client.user.id) return message.channel.send(nou)
else

message.delete()
var embed = new Discord.MessageEmbed()
    .setTitle(`New Weeb 🕸️`)
    .setAuthor(`${user.user.tag}`, user.user.avatarURL())
    .addField(`Weeb Tag`, user)
    .addField(`ID`, user.id)
    .addField(`Highest Role`,user.roles.highest || 'None')
    .setColor(`#fcd303`)
    .setTimestamp()
    Math.random() > 0.8 ? embed.addField(`They did it!`, message.author) : ''

message.channel.send(embed)

}}