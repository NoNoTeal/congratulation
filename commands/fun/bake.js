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

var args = message.content.split(/\s+/).slice(1).join(' ')
var useray = args.split(' | ').shift()
var regex = /\d+/g
var users = useray.match(regex)
var c = []
for(var user in users) {
    if(!message.guild.members.get(users[user])) continue
    if(users[user] == message.member.id) continue
    if(users[user] == message.guild.me.id) continue
    if(c.includes(`<@!${users[user]}>`) == true) continue
    c.push(`<@!${users[user]}>`)
}  
if(c.length > 10) {c.slice(0, 10)}
if(c.length == 0) return message.channel.send(`${message.author} baked an Error`)

var object = bakehelper.objects[Math.floor(Math.random() * bakehelper.objects.length)] 

var phrases = [
    `${c.join(', ')} is getting baked by \`${message.author.tag}\` in ${object}.`,
    `\`${message.author.tag}\` bakes ${c.join(', ')} in ${object}.`
]

var phrase = phrases[Math.floor(Math.random() * phrases.length)]

message.channel.send(phrase)

}}

module.exports = bake;