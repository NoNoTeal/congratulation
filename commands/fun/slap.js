
const botconfig = require(`../../botconfig.json`);
const slaphelper = require(`../../phrases/slaphelper.json`)

module.exports = {
    name: "slap",
    group: "fun",
    command: true,
    guildOnly: true,
    cooldown: 10,
async run(message) {

if(message.member.roles.some(r => botconfig.trustedroles.includes(r.id)) !== true && botconfig.trustedroles !== null && !message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send(`Hmm, doesn't seem you have the role required to slap.`)
else

var args = message.content.split(/\s+/).slice(1).join(' ')
var useray = args.split(' | ').shift()
var regex = /\d+/g
var users = useray.match(regex)
var c = []
for(var user in users) {
    if(!message.guild.members.get(users[user])) continue
    if(users[user] == message.member.id) continue
    if(c.includes(`<@!${users[user]}>`) == true) continue
    c.push(`<@!${users[user]}>`)
}  
if(c.length > 2) {c.slice(0, 2)}
if(c.length == 0) return message.channel.send(`${message.author} slapped themself.`)

var object = slaphelper[Math.floor(Math.random() * slaphelper.length)]

message.channel.send(`\`${message.author.tag}\` is slapping ${c.join(', ')} with ${object}!`)

}}