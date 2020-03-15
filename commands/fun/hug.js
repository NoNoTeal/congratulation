const Discord = require(`discord.js`);
const Commando = require(`discord.js-commando`);
const botconfig = require(`../../botconfig.json`);

class hug extends Commando.Command{
    constructor(client) {
        super(client, {
            name: 'hug',
            group: 'fun',
            memberName: 'hug',
            description: 'hug',
            throttling:{
                usages: 2,
                duration: 10
            }
        })
    }
async run(message) {

if(message.author.bot) return message.channel.send(`I'm sorry, but two bots hugging are NOT a thing!`)
else
if(message.channel instanceof Discord.DMChannel) return message.channel.send(`Who are you going to hug in a DM channel?!`)
else

if(message.member.roles.some(r => botconfig.trustedroles.includes(r.id)) !== true && botconfig.trustedroles !== null && !message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send(`Hmm, doesn't seem you have the role required to hug.`)
else

var args = message.content.split(' ').slice(1);
var user = message.mentions.members.first() || message.guild.members.get(args[0])

if(!user) return message.channel.send(`You need someone else to hug, please \`ping\` someone or use their \`ID\`!`)
else

if(user.id == message.client.user.id) return message.channel.send(`I'm sorry, \`body.js\` wasn't located.`)
else

if(user.id == message.author.id) return message.channel.send(`Look, I need to get this straight. You can't hug yourself.`)
else

message.channel.send(`Hey <@${user.id}>, ${message.author.tag} just gave you a great big hug! 🤗`)

}}

module.exports = hug;