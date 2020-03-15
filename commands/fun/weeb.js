const Discord = require(`discord.js`);
const Commando = require(`discord.js-commando`);
const botconfig = require(`../../botconfig.json`);

class weeb extends Commando.Command{
    constructor(client) {
        super(client, {
            name: 'weeb',
            group: 'fun',
            memberName: 'weeb',
            description: 'weeb',
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

if(message.member.roles.some(r => botconfig.trustedroles.includes(r.id)) !== true && botconfig.trustedroles !== null && !message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send(`Hmm, doesn't seem you have the role required to call someone a weeb.`)
else

var args = message.content.split(' ').slice(1);
let user = message.mentions.members.first() || message.guild.members.get(args[0])

if(!user) return message.channel.send(`You need to call someone a ~~qt~~ weeb, please \`ping\` someone or use their \`ID\`!`)
else

var nou = new Discord.RichEmbed()
    .setTitle(`New Weeb 🕸️`)
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
    .addField(`Weeb Tag`, message.author)
    .addField(`ID`, message.author.id)
    .addField(`Highest Role`,message.member.highestRole)
    .setColor(`#fcd303`)
    .setTimestamp()

if(user.id == message.client.user.id) return message.channel.send(nou)
else

message.delete()
var embed = new Discord.RichEmbed()
    .setTitle(`New Weeb 🕸️`)
    .setAuthor(`${user.user.tag}`, user.user.avatarURL)
    .addField(`Weeb Tag`, user)
    .addField(`ID`, user.id)
    .addField(`Highest Role`,user.highestRole)
    .setColor(`#fcd303`)
    .setTimestamp()

message.channel.send(embed)

}}

module.exports = weeb;