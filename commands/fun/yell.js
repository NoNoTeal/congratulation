const Discord = require(`discord.js`);
const Commando = require(`discord.js-commando`);
const botconfig = require(`../../botconfig.json`);

class yell extends Commando.Command{
    constructor(client) {
        super(client, {
            name: 'yell',
            group: 'fun',
            memberName: 'yell',
            description: 'yell',
            throttling:{
                usages: 2,
                duration: 10
            }
        })
    }
async run(message) {

if(message.author.bot) return 
else
if(message.channel instanceof Discord.DMChannel) return
else

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

module.exports = yell;