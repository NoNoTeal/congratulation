const Discord = require(`discord.js`);
const Commando = require(`discord.js-commando`);
const botconfig = require(`../../botconfig.json`);
const bakehelper = require(`../../phrases/bakehelper.json`);

class bake extends Commando.Command{
    constructor(client) {
        super(client, {
            name: 'bake',
            group: 'fun',
            memberName: 'bake',
            description: 'bake',
            throttling:{
                usages: 2,
                duration: 10,
            },

        })
    }
async run(message) {

if(message.author.bot) return message.channel.send(`I'm sorry, but two bots baking each other are NOT a thing! (They are but for me, no...)`)
else
if(message.channel instanceof Discord.DMChannel) return message.channel.send(`Who are you going to bake in a DM channel?!`)
else

if(message.member.roles.some(r => botconfig.trustedroles.includes(r.id)) !== true && botconfig.trustedroles !== null && !message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send(`Hmm, doesn't seem you have the role required to bake or cook.`)
else

var args = message.content.split(' ').slice(1);
var user = message.mentions.members.first() || message.guild.members.get(args[0])

if(!user) return message.channel.send(`You need someone else to bake, please \`ping\` someone or use their \`ID\`!`)
else

if(user.id == message.client.user.id) return message.channel.send(`I'm sorry, \`pain.js\` wasn't located.`)
else

if(user.id == message.author.id) return message.channel.send(`You can't bake yourself.`)
else

var object = bakehelper.objects[Math.floor(Math.random() * bakehelper.objects.length)] 

var phrases = [
    `<@${user.id}> is getting baked by \`${message.author.tag}\` in ${object}.`,
    `\`${message.author.tag}\` bakes <@${user.id}> in ${object}.`
]

var phrase = phrases[Math.floor(Math.random() * phrases.length)]

message.channel.send(phrase)

}}

module.exports = bake;