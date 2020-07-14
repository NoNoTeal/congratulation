const Discord = require(`discord.js`);


module.exports = {
    name: "hug",
    group: "fun",
    command: true,
    guildOnly: true,
cooldown: 5,
description: 'Hug someone',
async run(message) {

var args = message.content.split(/\s+/).slice(1).join(' ')
var useray = args.split(' | ').shift()
var regex = /\d+/g
var users = useray.match(regex)
var c = []
for(var user in users) {
    if(!message.guild.members.cache.get(users[user])) continue
    if(users[user] == message.member.id) continue
    if(users[user] == message.guild.me.id) continue
    if(c.includes(`<@!${users[user]}>`) == true) continue
    c.push(`<@!${users[user]}>`)
}  
if(c.length > 10) {c.slice(0, 10)}
if(c.length == 0) return message.channel.send(`${message.author} hugged.`)

message.channel.send(`Hey ${c.join(', ')}, ${message.author.tag} just gave you a great big hug! 🤗`)

}}