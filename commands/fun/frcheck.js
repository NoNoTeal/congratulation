const Discord = require(`discord.js`);
const Commando = require(`discord.js-commando`);

class frcheck extends Commando.Command{
    constructor(client) {
        super(client, {
            name: 'frcheck',
            group: 'fun',
            memberName: 'frcheck',
            description: 'frcheck',
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

message.channel.send(`Take it and go.`, {files: ['./frusers.json']})

}}

module.exports = frcheck;