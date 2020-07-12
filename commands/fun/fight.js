const botconfig = require(`../../botconfig.json`);
const fighthelper = require(`../../phrases/fighthelper.json`);

module.exports = {
    name: "fight",
    group: "fun",
    command: true,
    guildOnly: true,
cooldown: 5,
description: 'Fight a person',
async run(message) {

if(message.member.roles.some(r => botconfig.trustedroles.includes(r.id)) !== true && botconfig.trustedroles !== null && !message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send(`Hmm, doesn't seem you have the role required to fight.`)
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
if(c.length > 3) return message.channel.send(`Theres only so much people you can fight at once.`)
if(c.length == 0) return message.channel.send(`${message.author} fought themselves in confusion.`)

var good = fighthelper.good[Math.floor(Math.random() * fighthelper.good.length)] 
var fail = fighthelper.fail[Math.floor(Math.random() * fighthelper.fail.length)] 

var phrases = [
    `${c.join(', ')} is getting hit by \`${message.author.tag}\` with ${good}.`,
    `\`${message.author.tag}\` tried to fight ${c.join(', ')} with ${fail} but it wasn't that good..`,
]

var phrase = phrases[Math.floor(Math.random() * phrases.length)]

message.channel.send(phrase)

}}
