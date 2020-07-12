const { DMChannel, RichEmbed } = require("discord.js");
const { trustedroles } = require(`../../botconfig.json`);
const { phrases } = require("../../phrases/8ball");

module.exports = {
    name: "8ball",
    group: "fun",
    command: true,
	guildOnly: true,
	description: 'Ask the 8ball a question',
    async run(message) {

		if (message.member.roles.some((r) => trustedroles.includes(r.id)) !== true &&
			trustedroles !== null &&
			!message.member.hasPermission(["ADMINISTRATOR"])) {
			return message.channel.send("Hmm, doesn't seem you have the role required to ask the magic 8 ball a question.");
		}

		let args = message.content.split(" ").slice(1);
		if (!args || args.length < 1) return message.channel.send("You must ask magic 8 ball a question!");
		let randPhrase = () => phrases[Math.floor(Math.random() * phrases.length)];

		return message.channel.send({
			embed: new RichEmbed()
				.setColor("#000000")
				.setAuthor(message.author.tag, message.author.avatarURL)
				.setTitle(randPhrase())
				.setDescription(`>>> ${args.join(" ")}`)
		});
	}}
