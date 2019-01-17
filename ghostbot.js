console.log("Software started!");
KEY=""

//const Discord = require('discord.js');
const discord = require('discord.js');
const commando = require('discord.js-commando');
const dan = require('danbooru');
const req = require('request');

const ghostbot = new commando.Client({
	commandPrefix: '~',
	owner: '305008449417117709'
});

ghostbot.on('ready', () => {
	console.log('Bot started!');
	ghostbot.user.setActivity('Say ~help for Help', 1);
	console.log("Bot is playing: Say ~help for Help");
})

ghostbot.on('guildMemberAdd', member => {
	const channel = member.guild.channels.find('general', 'member-log');
	if(!channel) return;
	
	channel.send('Welcome, ${member}');
})


ghostbot.registry.registerGroup('user','User');
ghostbot.registry.registerDefaults();
ghostbot.registry.registerCommandsIn(__dirname +'/commands');

ghostbot.login(KEY);
