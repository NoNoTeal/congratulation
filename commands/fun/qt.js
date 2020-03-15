const Discord = require(`discord.js`);
const Commando = require(`discord.js-commando`);
const botconfig = require(`../../botconfig.json`);

class qt extends Commando.Command{
    constructor(client) {
        super(client, {
            name: 'qt',
            group: 'fun',
            memberName: 'qt',
            description: 'qt',
            throttling:{
                usages: 2,
                duration: 10
            }
        })
    }
async run(message) {

if(message.author.bot) return 
else
if(message.channel instanceof Discord.DMChannel) return
else

if(message.member.roles.some(r => botconfig.trustedroles.includes(r.id)) !== true && botconfig.trustedroles !== null && !message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send(`Hmm, doesn't seem you have the role required to call someone a qt.`)
else

var args = message.content.split(' ').slice(1);
let user = message.mentions.members.first() || message.guild.members.get(args[0])

if(!user) return message.channel.send(`You need to call someone a qt, please \`ping\` someone or use their \`ID\`!`)
else

var nou = new Discord.RichEmbed()
    .setTitle(`New QT Incoming ✨`)
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
    .addField(`QT Tag`, message.author)
    .addField(`ID`, message.author.id)
    .setColor(`#ff00bb`)
    .setTimestamp()

if(user.id == message.client.user.id) return message.channel.send(nou)
else

message.delete()
var embed = new Discord.RichEmbed()
    .setTitle(`New QT Incoming ✨`)
    .setAuthor(`${user.user.tag}`, user.user.avatarURL)
    .addField(`QT Tag`, user)
    .addField(`ID`, user.id)
    .setColor(`#ff00bb`)
    .setTimestamp()

message.channel.send(embed)

}}

module.exports = qt;