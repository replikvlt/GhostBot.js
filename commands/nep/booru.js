const commando = require('discord.js-commando');
const url = require('url');
const dan = require('danbooru');
const req = require('request');
const discord = require('discord.js');

const SFWTITLE = "Safebooru";
const NSFWTITLE = "Danbooru";
const SFWR = 'rating:safe';
const BASE = 'https://safebooru.donmai.us' || 'https://danbooru.donmai.us'

const booru = new dan();

var title = '';
var tags = '';



class booruShowCommand extends commando.Command{
	constructor(client){
		super(client, {
			name: 'booru',
			group: 'user',
			memberName: 'booru',
			description: 'Shows picture from random danbooru/safebooru post '+
			'in non nsfw channel will use `rating:s`/`safebooru.donmai.us` on default'+
			'in nsfw channel will use `danbooru.donmai.us` on default'+
			'for specifying tags type ~booru <tags(2 max)> '+
			' Example: ~booru cute rating:s'
		});
	}
	
	async run(message, args){
		if (message.channel.nsfw || (args.indexOf("rating:s") != -1)) {
			tags = args;
			title = NSFWTITLE;
			
		} else {
			title = SFWTITLE;
			tags = SFWR+' '+args;
		}
		console.log(title);
		const posts = await booru.posts({limit: 27,
						tags: tags
						})
		if (!posts.length <= 0){
		//console.log(posts); //outputs json normally
		//creates object array from json KEK IT IS ALREADY AN OBJECT
		//console.log(obj.length);//full length of array confirmed
		//console.log(posts[0].raw.file_url);
		const post_num = Math.floor(Math.random()*posts.length);//i didn't know fucking random can random after dot
		console.log(post_num);
		if (posts[post_num].raw.file_url.includes('http')) {
			booru['base'] = '';
		}else{
			booru['base'] = BASE;
		};
		let fileurl = booru.base + posts[post_num].raw.file_url;
		console.log(fileurl);

		let embed = new discord.RichEmbed()
			.setAuthor(message.author.username, message.author.displayAvatarURL)
			.setTitle(title)
			.setDescription("Tag(s):"+args)
			.setColor([Math.random()*255,Math.random()*255,Math.random()*255])
			.setImage(fileurl)
			.setFooter('Uploaded by'+posts[post_num].raw.uploader_name);
		message.reply("", {embed});
		}else	{
			message.reply("Images not found under tag(s):`"+args+"`");
			}
	}
}
module.exports = booruShowCommand;
