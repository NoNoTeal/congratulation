const Discord = require(`discord.js`);
const botconfig = require(`../../botconfig.json`);

module.exports = {
    name: "yell",
    group: "fun",
    command: true,
    guildOnly: true,
    cooldown: 5,
    description: 'Yell at someone',
async run(message) {
if(message.member.roles.some(r => botconfig.trustedroles.includes(r.id)) !== true && botconfig.trustedroles !== null && !message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send(`Hmm, doesn't seem you have the role required to call someone a yell.`)
else

var args = message.content.split(' ').slice(1);
let user = message.mentions.members.first() || message.guild.members.get(args[0])

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
