const Discord = require(`discord.js`);
const botconfig = require(`../../botconfig.json`);

module.exports = {
    name: "dice",
    group: "fun",
    command: true,
    guildOnly: true,

async run(message) {

if(message.member.roles.some(r => botconfig.trustedroles.includes(r.id)) !== true && botconfig.trustedroles !== null && !message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send(`Hmm, doesn't seem you have the role required to throw die.`)
else

var num = message.content.split(' ').slice(1)[0]

if(!num) return message.channel.send(`You need to put a number, put one between\`2\` and \`100,000,000,000,000\`!`)
else

if(isNaN(num)) {
    return message.channel.send(`Not a number.`)
}

if(num.length > 1024 || num < 2) return message.channel.send(`Please put a number between\`2\` and below \`1024\` characters`)
else

var dice = Math.floor(Math.random() * num)

var embed = new Discord.RichEmbed()
    .setTitle(`Dice rolled`)
    .addField(`Result`, `**${dice}**`)
    .addField(`Sides`, `**${num}**`)
    .setColor(`#f54320`)
    .setTimestamp()

message.channel.send(embed)

}}
