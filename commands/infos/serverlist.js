const Discord = require('discord.js')

module.exports = {
    name: 'serverlist',
    aliases: ['sv'],
    category: 'info',
    utilisation: '{prefix}serverlist',
	execute(client, message, args) {
		
	let embed = new Discord.MessageEmbed()
	.setAuthor('DoodoooMusic', 'https://images-ext-2.discordapp.net/external/HUgqnUDe35CRN0ppRbTznQWXAHw2zZRkLbH7KkJS4_Q/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/809592550813073478/3b7ce71cd8977c79079dd4825e3e5a3a.png')
	.setDescription(`I'm in ${client.guilds.cache.size} server`)
	
	message.channel.send(embed);
	}
};
