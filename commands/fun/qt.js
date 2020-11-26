const Discord = require(`discord.js`);
const Util = require("../../util/util");


module.exports = {
    name: "qt",
    group: "fun",
    command: true,
    guildOnly: true,
    cooldown: 5,
    description: 'ur qt',
async run(message) {

var args = message.content.split(/\s+/).slice(1);
let user =await Util.userParsePlus(message, args, 'member');

if(!user) return message.channel.send(`You need to call someone a qt, please \`ping\` someone or use their \`ID\`!`)
else

var nou = new Discord.MessageEmbed()
    .setTitle(`New QT Incoming ✨`)
    .setAuthor(`${message.author.tag}`, message.author.avatarURL())
    .addField(`QT Tag`, message.author)
    .addField(`ID`, message.author.id)
    .setColor(`#ff00bb`)
    .setTimestamp()

if(user.id == message.client.user.id) return message.channel.send(nou)
else

message.delete()
var embed = new Discord.MessageEmbed()
    .setTitle(`New QT Incoming ✨`)
    .setAuthor(`${user.user.tag}`, user.user.avatarURL())
    .addField(`QT Tag`, user)
    .addField(`ID`, user.id)
    .setColor(`#ff00bb`)
    .setTimestamp()
    Math.random() > 0.8 ? embed.addField(`They did it!`, message.author) : ''

message.channel.send(embed)

}}
