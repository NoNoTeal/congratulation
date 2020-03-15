const Discord = require(`discord.js`);
const Commando = require(`discord.js-commando`);
const botconfig = require(`../../botconfig.json`);

class mock extends Commando.Command{
    constructor(client) {
        super(client, {
            name: 'mock',
            group: 'fun',
            memberName: 'mock',
            description: 'mock',
            throttling:{
                usages: 2,
                duration: 10
            }
        })
    }
async run(message) {

message.react(`⚠`)

/*
if(message.author.bot) return 
else
if(message.channel instanceof Discord.DMChannel) return 
else

message.delete()

if(message.member.roles.some(r => botconfig.trustedroles.includes(r.id)) !== true && botconfig.trustedroles !== null && !message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send(`Hmm, doesn't seem you have the role required to mock.`)
else

var args = message.content.split(' ').slice(1);
var user = message.mentions.members.first() || message.guild.members.get(args[0])
let text = args.slice(1).join(' ');  

if(!user) return message.channel.send(`You need someone else to mock, please \`ping\` someone or use their \`ID\`!`)
else

if(user.id == message.client.user.id) return message.channel.send(`I'm sorry, \`dwiowejfiejdiwjierjirtjuwhdobowkfiwejfirjwiowjdioefiojfewfgdiweogerfefefer.js\` ejwfoiewjfoijwegijerwioghtewhjgifjeigjpw;f`)
else

if(user.id == message.author.id) return message.channel.send(`You can't mock yourself.`)
else

if(!text) return message.channel.send(`Can't mock with nothing!`)
else

var name = user.user.username;
var hook = await message.channel.createWebhook(name, user.user.avatarURL).catch(error => console.log(error))
await hook.edit(name, user.user.avatarURL).catch(error => console.log(error))

hook.send(text).then(async (m)  => {m.delete()}, 20000)
await hook.delete()
*/
}}

module.exports = mock;