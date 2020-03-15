const Discord = require("discord.js");
const Commando = require("discord.js-commando");
const botconfig = require("../../botconfig.json");

class remind extends Commando.Command
{
    constructor(client) {
        super(client, {
            name: "remind",
            group: "fun",
            memberName: "remind",
            description: "remind",
            throttling: {
                usages: 2,
                duration: 10
            },
        })
    }
async run(message) {

    if(message.author.bot) return
    else
  if (message.channel instanceof Discord.DMChannel) return 
  else
  var args = message.content.split(/ +/).slice(1);
  let time = args[0];

  if(message.member.roles.some(r => botconfig.trustedroles.includes(r.id)) !== true && botconfig.trustedroles !== null && !message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send(`Hmm, doesn't seem you have the role required to remind yourself.`)
  else

if(!time) return message.channel.send(`Please put a valid time! (\`s\`||econds||,\`m\`||inutes||,\`h\`||ours||,\`d\`||ays||,\`w\`||eeks||,\`y\`||ears||)`)
else

  var tb = time[time.length - 1]
  var reason = args.slice(1).join(' '); 
  
if(!reason.length > 0) return message.channel.send(`Please put what you'd want to remind yourself!`)
else

    time = time.slice(0, -1)

switch (tb) {
    case 's':
		time = time * 1000;
		break
	case 'm':
		time = time * 1000 * 60;
		break
	case 'h':
		time = time * 1000 * 60 * 60;
		break
	case 'd':
		time = time * 1000 * 60 * 60 * 24;
        break
    case 'w':
        time = time * 1000 * 60 * 60 * 24 * 7;
        break
    case 'y':
        time = time * 1000 * 60 * 60 * 24 * 365
        break
	default:
		time = time * 1000;
		break;
}

message.delete()
message.channel.send(`📌 Ok, now reminding you in **${args[0]}** to do ${reason}. Please enable DM's in this server to recieve your reminder.`)

var int = setInterval(() => {
    time--;
    if(time !== 0) {
    message.author.send(`**You have been reminded to:** ${reason}, this was delayed by ${args[0]}`)
    }
}, 1000);
clearInterval(int)


}}
module.exports = remind;