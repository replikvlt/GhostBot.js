/*import { Channel, RichEmbed } from 'discord.js';*/

const commando = require('discord.js-commando');
const discord = require('discord.js');

class avatarShowCommand extends commando.Command{
	constructor(client){
		super(client, {
			name: 'avatar',
			group: 'user',
			memberName: 'avatar',
			description: 'Shows users current avatar'
		});
	}
	
	async run(message, args){
		let embed = new discord.RichEmbed()
		.setAuthor(message.author.username)
		.setColor([Math.random()*255,Math.random()*255,Math.random()*255])
		.setImage(message.author.displayAvatarURL);
		message.reply("here is your avatar", {embed}/*{embed:{
			color: "65314",
			image: {
				url: message.author.displayAvatarURL
			}} 
	}*/
	)
	 
}
}

module.exports = avatarShowCommand;