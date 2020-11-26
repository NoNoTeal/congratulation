const Discord = require(`discord.js`);
const Util = require("../../util/util");


module.exports = {
    name: "yell",
    group: "fun",
    command: true,
    guildOnly: true,
    cooldown: 5,
    description: 'Yell at someone',
/**
 * 
 * @param {Discord.Message} message 
 */
async run(message) {
var args = message.content.split(/\s+/).slice(1);
let user = await Util.userParsePlus(message, args, 'member');

if(!user) return message.channel.send(`Yell at someone, please \`ping\` someone or use their \`ID\`!`)
else

var phrases = [
    `\`${user.user.tag}\` is getting yelled at by ${message.author} over \`${message.guild.members.cache.random().user.tag}\``,
    `\`${user.user.tag}\` is getting yelled at by ${message.author}`
    ]

    if(user.id == message.client.user.id) return message.channel.send(`\`${message.author.tag}\` is getting yelled at by ${message.client.user}`)
    else
    
    if(user.id == message.author.id) return message.channel.send(`You cannot yell at yourself`)
    else
    
    var phrase = phrases[Math.floor(Math.random() * phrases.length)]
    
    message.channel.send(phrase)
    
}}
