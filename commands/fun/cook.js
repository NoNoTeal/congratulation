const Discord = require(`discord.js`);
const Commando = require(`discord.js-commando`);
const botconfig = require(`../../botconfig.json`);
const cookhelper = require(`../../phrases/cookhelper.json`);

class cook extends Commando.Command{
    constructor(client) {
        super(client, {
            name: 'cook',
            group: 'fun',
            memberName: 'cook',
            description: 'cook',
            throttling:{
                usages: 2,
                duration: 10
            }
        })
    }
async run(message) {

if(message.author.bot) return message.channel.send(`I'm sorry, but two bots cooking each other are NOT a thing! (They are but for me, no...)`)
else
if(message.channel instanceof Discord.DMChannel) return message.channel.send(`Who are you going to cook in a DM channel?!`)
else

if(message.member.roles.some(r => botconfig.trustedroles.includes(r.id)) !== true && botconfig.trustedroles !== null && !message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send(`Hmm, doesn't seem you have the role required to cook.`)
else

var args = message.content.split(' ').slice(1);
var user = message.mentions.members.first() || message.guild.members.get(args[0])

if(!user) return message.channel.send(`You need someone else to cook, please \`ping\` someone or use their \`ID\`!`)
else

if(user.id == message.client.user.id) return message.channel.send(`I'm sorry, \`pain.js\` wasn't located.`)
else

if(user.id == message.author.id) return message.channel.send(`You can't hurt yourself.`)
else

var pan = cookhelper.pans[Math.floor(Math.random() * cookhelper.pans.length)] 
var object = cookhelper.objects[Math.floor(Math.random() * cookhelper.objects.length)] 

var phrases = [
    `<@${user.id}> is getting cooked by \`${message.author.tag}\` with a ${pan} along with some ${object}.`,
    `\`${message.author.tag}\` tried to cook <@${user.id}> with a bad pan but it wasn't that good..`,
]

var phrase = phrases[Math.floor(Math.random() * phrases.length)]

message.channel.send(phrase)

}}

module.exports = cook;