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
if(c.length == 0) return message.channel.send(`${message.author} hugged.`)

message.channel.send(`Hey ${c.join(', ')}, ${message.author.tag} just gave you a great big hug! 🤗`)

}}

module.exports = hug;