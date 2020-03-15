const Discord = require(`discord.js`);
const Commando = require(`discord.js-commando`);
const botconfig = require(`../../botconfig.json`);

class dice extends Commando.Command{
    constructor(client) {
        super(client, {
            name: 'dice',
            group: 'fun',
            memberName: 'dice',
            description: 'dice',
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

if(message.member.roles.some(r => botconfig.trustedroles.includes(r.id)) !== true && botconfig.trustedroles !== null && !message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send(`Hmm, doesn't seem you have the role required to throw die.`)
else

var num = message.content.split(' ').slice(1)[0]

if(!num) return message.channel.send(`You need to put a number, put one between\`2\` and \`100,000,000,000,000\`!`)
else

if(isNaN(num)) {
    return message.channel.send(`Not a number.`)
}

if(num.length > 1024 || num < 2) return message.channel.send(`Please put a number between\`2\` and below \`1024\` characters`)
else

var dice = Math.floor(Math.random() * num)

var embed = new Discord.RichEmbed()
    .setTitle(`Dice rolled`)
    .addField(`Result`, `**${dice}**`)
    .addField(`Sides`, `**${num}**`)
    .setColor(`#f54320`)
    .setTimestamp()

message.channel.send(embed)

}}

module.exports = dice;