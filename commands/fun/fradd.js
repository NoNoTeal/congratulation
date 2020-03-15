const Discord = require(`discord.js`);
const Commando = require(`discord.js-commando`);
const fs = require('fs')

class fradd extends Commando.Command{
    constructor(client) {
        super(client, {
            name: 'fradd',
            group: 'fun',
            memberName: 'fradd',
            description: 'fradd',
            throttling:{
                usages: 1,
                duration: 10
            }
        })
    }
async run(message, args) {

if(message.author.bot) return 
else
if(message.channel instanceof Discord.DMChannel) return
else
if(!message.member.hasPermission(['MANAGE_MESSAGES']) && message.author.id !== `329023088517971969`) return message.channel.send(`You cannot do this.`)

var dmusers = JSON.parse(fs.readFileSync("./frusers.json", "utf8"))

var user = message.guild.members.get(args[0]) || message.mentions.members.first();

if(!user) return message.channel.send(`Put a valid user!`)
else

if(dmusers.find(e => e == user.id)) return message.channel.send(`User already in the DB!`)

dmusers.push(user.id)

fs.writeFile("./frusers.json", JSON.stringify(dmusers, null, `\t`),(err) => {
    if(err) console.log(err);
});

await message.react(`☑`)

}}

module.exports = fradd;