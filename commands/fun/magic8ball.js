const { DMChannel, MessageEmbed } = require("discord.js");
const { trustedroles } = require(`../../botconfig.json`);
const { phrases } = require("../../phrases/8ball");

module.exports = {
    name: "8ball",
    group: "fun",
    command: true,
	guildOnly: true,
	description: 'Ask the 8ball a question',
    async run(message) {

		let args = message.content.split(" ").slice(1);
		if (!args || args.length < 1) return message.channel.send("You must ask magic 8 ball a question!");
		let randPhrase = () => phrases[Math.floor(Math.random() * phrases.length)];

		return message.channel.send({
			embed: new MessageEmbed()
				.setColor("#000000")
				.setAuthor(message.author.tag, message.author.avatarURL())
				.setTitle(randPhrase())
				.setDescription(`>>> ${args.join(" ")}`)
		});
	}}
