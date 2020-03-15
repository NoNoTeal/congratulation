const Discord = require(`discord.js`);
const Commando = require(`discord.js-commando`);
const botconfig = require(`../../botconfig.json`);
const fighthelper = require(`../../phrases/fighthelper.json`);

class fight extends Commando.Command{
    constructor(client) {
        super(client, {
            name: 'fight',
            group: 'fun',
            memberName: 'fight',
            description: 'fight',
            throttling:{
                usages: 2,
                duration: 10
            }
        })
    }
async run(message) {

if(message.author.bot) return message.channel.send(`I'm sorry, but two bots fighting are NOT a thing! (They are but for me, no...)`)
else
if(message.channel instanceof Discord.DMChannel) return message.channel.send(`Who are you going to fight in a DM channel?!`)
else

if(message.member.roles.some(r => botconfig.trustedroles.includes(r.id)) !== true && botconfig.trustedroles !== null && !message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send(`Hmm, doesn't seem you have the role required to fight.`)
else

var args = message.content.split(' ').slice(1);
var user = message.mentions.members.first() || message.guild.members.get(args[0])

if(!user) return message.channel.send(`You need someone else to fight, please \`ping\` someone or use their \`ID\`!`)
else

if(user.id == message.client.user.id) return message.channel.send(`I'm sorry, \`pain.js\` wasn't located.`)
else

if(user.id == message.author.id) return message.channel.send(`You can try to fight yourself all you want, but I'm keeping your hands from hitting yourself.`)
else

var good = fighthelper.good[Math.floor(Math.random() * fighthelper.good.length)] 
var fail = fighthelper.fail[Math.floor(Math.random() * fighthelper.fail.length)] 

var phrases = [
    `<@${user.id}> is getting hit by \`${message.author.tag}\` with ${good}.`,
    `\`${message.author.tag}\` tried to fight <@${user.id}> with ${fail} but it wasn't that good..`,
]

var phrase = phrases[Math.floor(Math.random() * phrases.length)]

message.channel.send(phrase)

}}

module.exports = fight;