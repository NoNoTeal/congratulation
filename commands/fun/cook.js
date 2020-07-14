const cookhelper = require(`../../phrases/cookhelper.json`);

module.exports = {
    name: "cook",
    group: "fun",
    command: true,
    guildOnly: true,
    description: 'Cook someone',
cooldown: 5,
async run(message) {

    var args = message.content.split(/\s+/).slice(1);
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    
    if(!user) return message.channel.send(`You need to call someone a qt, please \`ping\` someone or use their \`ID\`!`)
    else

    if(user.id == message.client.user.id) return message.channel.send(`I'm sorry, but I'm not an object.`)
    else
    
    if(user.id == message.author.id) return message.channel.send(`You can't cook yourself.`)
    else

var pan = cookhelper.pans[Math.floor(Math.random() * cookhelper.pans.length)] 
var object = cookhelper.objects[Math.floor(Math.random() * cookhelper.objects.length)] 

var phrases = [
    `${user} is getting cooked by \`${message.author.tag}\` with a ${pan} along with some ${object}.`,
    `\`${message.author.tag}\` tried to cook ${user} with a bad pan but it wasn't that good..`,
]

var phrase = phrases[Math.floor(Math.random() * phrases.length)]

message.channel.send(phrase)

}}