const Discord = require(`discord.js`);


module.exports = {
    name: "yell",
    group: "fun",
    command: true,
    guildOnly: true,
    cooldown: 5,
    description: 'Yell at someone',
async run(message) {
var args = message.content.split(/\s+/).slice(1);
let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])

if(!user) return message.channel.send(`Yell at someone, please \`ping\` someone or use their \`ID\`!`)
else

var phrases = [
    `\`${user.user.tag}\` is getting yelled at by ${message.author} over \`someone\``,
    `\`${user.user.tag}\` is getting yelled at by ${message.author}`
    ]

    if(user.id == message.client.user.id) return message.channel.send(`\`${message.author.tag}\` is getting yelled at by ${message.client.user}`)
    else
    
    if(user.id == message.author.id) return message.channel.send(`You cannot yell at yourself`)
    else
    
    var phrase = phrases[Math.floor(Math.random() * phrases.length)]
    
    message.channel.send(phrase)
    
}}
