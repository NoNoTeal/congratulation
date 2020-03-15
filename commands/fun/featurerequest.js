const Discord = require(`discord.js`);
const Commando = require(`discord.js-commando`);
const frusers = require('../../frusers.json')

class fr extends Commando.Command{
    constructor(client) {
        super(client, {
            name: 'fr',
            group: 'fun',
            memberName: 'fr',
            description: 'fr',
            throttling:{
                usages: 1,
                duration: 20
            }
        })
    }
async run(message) {

if(message.author.bot) return 
else
if(message.channel instanceof Discord.DMChannel) return
else

var req = message.content.slice(1)

if(!req) return message.channel.send(`You need to put a request!`)
else

if(!req.length > 10) return message.channel.send(`Please put your request higher than \`10\` characters`)
else

if(!message.guild.members.get(`329023088517971969`)) {
    message.channel.send(`Bot owner isn't in the server, request @ <https://github.com/NoNoTeal/blast-source-code/issues>`)
}

else

var embed = new Discord.RichEmbed()
    .setTitle(`New Feature Request`)
    .addField(`Requester`, `**${message.author}**`)
    .addField(`Requester Tag`, `**${message.author.tag}**`)
    .setDescription(`${req}`)
    .setTimestamp()

if(fr.size == 0) return message.channel.send(`No users detected, request @ <https://github.com/NoNoTeal/blast-source-code/issues>`)

frusers.forEach(async (id)  => {
    var user = message.guild.members.get(id)
    if(!user) return
    else
    user.send(embed)
})

await message.react(`☑`)

}}

module.exports = fr;