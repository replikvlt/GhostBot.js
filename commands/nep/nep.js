const commando = require('discord.js-commando');

class nepAnswerCommand extends commando.Command{
	constructor(client){
		super(client, {
			name: 'nep',
			group: 'user',
			memberName: 'nep',
			description: 'Answers Nep'
		});
	}
	
	async run(message, args){
		message.reply('Nep');
	}
}

module.exports = nepAnswerCommand;