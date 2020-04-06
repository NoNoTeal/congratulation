const Discord = require(`discord.js`);
const botconfig = require(`../../botconfig.json`);
const pkg = require("../../package.json");

module.exports = {
			name: "help",
			group: "fun",
			command: true,
	async run (message) {

		if (message.member.roles.some(r => botconfig.trustedroles.includes(r.id)) !== true && botconfig.trustedroles !== null && !message.member.hasPermission(["ADMINISTRATOR"])) {
			return message.channel.send(`Hmm, doesn't seem you have the role required to view help.`);
		} else {
			var pr = botconfig.prefix
			var commands = message.client.commands.array()
			var color = '#ff0000'
			const args = message.content.split(/\s+/).slice(1);
			var C = 15
		
			if(!args.length) {
		
				if(isNaN(C)) { C = 15 }
				if(C > 23) { C = 15 }
				if(C < 5) { C = 15 }
			
			  const commandList = (json, cpp=parseInt(C)) => {
					let counter = 0,
					pages = 0, 
					groupKey = `page${++pages}`,
					embed = [],
					p = {},
					eF = {},
					keys = Object.keys(json),
					fc = 0
			
				  embed[groupKey] = new Discord.RichEmbed()
				  .setTitle(`**${message.client.user.username}** commands`)
				  .addField(`Version`, `${pkg.version}`)
				  .addField(`Prefix`, `${pr}`)
				  .setColor(0xff0000)
				  .setTimestamp()
				  p[groupKey] = embed[groupKey]
				  embed[groupKey].setFooter(`Page ${groupKey.slice(4)}/${Math.ceil(keys.length / cpp)}`, message.author.avatarURL)
				  return Object.keys(json).reduce((final, key) => {
			
					  if(counter === cpp) {
					  counter = 0
					  groupKey = `page${++pages}`
					  final[groupKey] = {}
					  embed[groupKey] = new Discord.RichEmbed()
					  .setTitle(`**${message.client.user.username}** commands`)
					  .addField(`Version`, `${pkg.version}`)
					  .addField(`Prefix`, `${pr}`)
					  .setColor(0xff0000)
					  .setTimestamp()
			
					  embed[groupKey].setFooter(`Page ${groupKey.slice(4)}/${Math.ceil(keys.length / cpp)}`, message.author.avatarURL)
					}
		
					if(json[key].private == true) { ++fc;return final}
		
					embed[groupKey].addField(`${pr}${json[key].name}`, `Cooldown: ${json[key].cooldown}, Guild Only: ${json[key].guildOnly ? 'yes': 'no'}`, true)
					final[groupKey] = embed[groupKey]
					eF[groupKey] = embed[groupKey]
					++counter
					++fc
					if(fc !== keys.length) { return final }
					else
					var m = message.channel.send(embed['page1'])
				   Pagifier(eF, m)
				   return 
				  }, {[groupKey]: {}})
				}
			
				const Pagifier  = async (json, msg) => {
					var keys = Object.keys(json)
					if(keys.length < 2) return
				  
					msg.then(async (m) => {
				  
					if(m.deleted !== false) return
				  else
				  
					  await m.react(`◀`)
					  await m.react(`▶`)
					  await m.react(`⏏️`)
					  await m.react(`⏹️`)
				  
					  let page = 1;
				  
					  const backfilter = (reaction, user) => reaction.emoji.name === `◀` && user.id === message.author.id
					  const forefilter = (reaction, user) => reaction.emoji.name === `▶` && user.id === message.author.id
					  const trasfilter = (reaction, user) => reaction.emoji.name === `⏏️` && user.id === message.author.id
					  const stopfilter = (reaction, user) => reaction.emoji.name === `⏹️` && user.id === message.author.id
					  
					  const back = m.createReactionCollector(backfilter, { time: 60000})
					  const fore = m.createReactionCollector(forefilter, { time: 60000})
					  const trash = m.createReactionCollector(trasfilter, { time: 60000})
					  const stop = m.createReactionCollector(stopfilter, { time: 60000})
					  
					   back.on('collect', async (r) => {
						   if (page === 1) return
						  page--;
						  m.edit(json["page" + page])
						  r.remove(message.author.id)
						  })
					   fore.on('collect', async (r) => {
						  if (page === json.length) return
						  page++;
						  m.edit(json["page" + page])
						  r.remove(message.author.id)
					   })
					   trash.on('collect', async () => {
						  m.delete()
					   })
				  
					   stop.on('collect', async (r) => {
						 if(m.deleted !== false) return
						 else
						 m.clearReactions();
						 trash.stop()
						 fore.stop()
						 back.stop()
						 stop.stop()
					   })
				  
					   setTimeout(async () => {
						 if(m.deleted !== false) return
						 else
						 m.clearReactions()
					   }, 60000);
				  
				  })}
				  commandList(commands) 
				}
		var tempbed = '*No command found*'
		if(!args.length) return 
		else
		var cmd = message.client.commands.get(args[0].toLowerCase())
		if(!cmd) return message.channel.send(tempbed)
		tempbed = new Discord.MessageEmbed()
		.setTitle(`**${pr}${cmd.name}** information`)
		.addField(`**Guild Only**`, cmd.guildOnly ? 'Yes' : 'No',true)
		.addField(`**Cooldown**`, cmd.cooldown, true)
		.addField(`**Private**`, cmd.private ? 'Yes' : 'No', true)
		
		message.channel.send(tempbed)
			}}}
