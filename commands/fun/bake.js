const bakehelper = require(`../../phrases/bakehelper.json`);

module.exports = {
    name: "bake",
    group: "fun",
    command: true,
    guildOnly: true,
    description: 'Bake a person',
cooldown: 5,
async run(message) {

    var args = message.content.split(/\s+/).slice(1);
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    
    if(!user) return message.channel.send(`You need to bake, please \`ping\` someone or use their \`ID\`!`)
    else

if(user.id == message.client.user.id) return message.channel.send(`I'm not a object able to bake.`)
else

if(user.id == message.author.id) return message.channel.send(`You can't bake yourself.`)
else

var object = bakehelper.objects[Math.floor(Math.random() * bakehelper.objects.length)] 

var phrases = [
    `${user} is getting baked by \`${message.author.tag}\` in ${object}.`,
    `\`${message.author.tag}\` bakes ${user} in ${object}.`
]

var phrase = phrases[Math.floor(Math.random() * phrases.length)]

message.channel.send(phrase)

}}
