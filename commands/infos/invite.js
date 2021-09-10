const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'invite',
    aliases: ['link'],
    category: 'info',
    utilisation: '{prefix}invite (URL)',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            let invitelink = new MessageEmbed()
            .setColor('RANDOM')
            .setAuthor('DoodoooMusic', 'https://images-ext-2.discordapp.net/external/HUgqnUDe35CRN0ppRbTznQWXAHw2zZRkLbH7KkJS4_Q/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/809592550813073478/3b7ce71cd8977c79079dd4825e3e5a3a.png')
            .setDescription('Thank for invite my bot ;)')
            .setFooter('Made by DoodoooWasTaken')
            .addField('Invite link', '[CLICK HERE](https://dsc.gg/k.music)')
            .setTimestamp()
            
            message.channel.send(invitelink);
    }
}
};
