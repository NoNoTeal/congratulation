const Discord = require(`discord.js`);
const Commando = require(`discord.js-commando`);
const botconfig = require(`../../botconfig.json`);
const slaphelper = require(`../../phrases/slaphelper.json`)

class slap extends Commando.Command{
    constructor(client) {
        super(client, {
            name: 'slap',
            group: 'fun',
            memberName: 'slap',
            description: 'slap',
            throttling:{
                usages: 2,
                duration: 10
            }
        })
    }
async run(message) {

if(message.author.bot) return message.channel.send(`I'm sorry, but two bots slapping are NOT a thing! (They are but for me, no...)`)
else
if(message.channel instanceof Discord.DMChannel) return message.channel.send(`Who are you going to slap in a DM channel?!`)
else

if(message.member.roles.some(r => botconfig.trustedroles.includes(r.id)) !== true && botconfig.trustedroles !== null && !message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send(`Hmm, doesn't seem you have the role required to slap.`)
else

var args = message.content.split(' ').slice(1);
var user = message.mentions.members.first() || message.guild.members.get(args[0])

if(!user) return message.channel.send(`You need someone else to slap, please \`ping\` someone or use their \`ID\`!`)
else

if(user.id == message.client.user.id) return message.channel.send(`I'm sorry, \`pain.js\` wasn't located.`)
else

if(user.id == message.author.id) return message.channel.send(`You can try to hit yourself all you want, but I'm keeping your hands from slapping yourself.`)
else

var object = slaphelper[Math.floor(Math.random() * slaphelper.length)]

message.channel.send(`\`${message.author.tag}\` is slapping <@${user.id}> with ${object}!`)

}}

module.exports = slap;