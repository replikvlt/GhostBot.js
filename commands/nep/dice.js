const commando = require('discord.js-commando');

class diceRollCommand extends commando.Command{
	constructor(client){
		super(client, {
			name: 'dice',
			group: 'user',
			memberName: 'dice',
			description: 'Rolls a Dice '+
			'Default 6 sides, for cusom sides count use ~dice <sides number>'
		});
	}
	
	async run(message, args){
		var sideamount = 6;
		if (message.content.length > 5) sideamount = parseInt(message.content.slice(5));
		var dice = Math.floor(Math.random()*sideamount+1);
		message.reply('You rolled '+dice+" out of "+sideamount+" sides");
	}
}

module.exports = diceRollCommand;