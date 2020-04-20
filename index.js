const Discord = require('discord.js');
const {prefix,token}=require('./config.json');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const config = require("./config.json");

client.once('ready',() =>{
    console.log('Ready!');
})

    client.on("message", async message => {
        const args = message.content.slice(config.prefix.length).trim().split(' ');
        const command = args.shift().toLowerCase();
        let command2 = args.slice(1);

        if(command === "help") {
            switch(command2){
                case 'currency':
                    const embed = new MessageEmbed()
                    .setTitle('Currency Bot Commands')
                    .setColor(0xff0000)
                    .addField('Currency','mh!help currency',true)
                    .addField('Mee6','mh!help mee6',true)
                    .setThumbnail('http://imgur.com/a/5cry5PF')
                    .addField('Fun','mh!help fun',true)
                    .addField('Music','mh!help music',true)
                    .addField('Suggestions','mh!help suggestions',true);
                    message.channel.send(embed);
            }
        const embed = new MessageEmbed()
        .setTitle('Dali Bot Commands')
        .setColor(0xff0000)
        .addField('Currency','mh!help currency',true)
        .addField('Mee6','mh!help mee6',true)
        .setThumbnail('http://imgur.com/a/5cry5PF')
        .addField('Fun','mh!help fun',true)
        .addField('Music','mh!help music',true)
        .addField('Suggestions','mh!help suggestions',true);
        message.channel.send(embed);
        }

})

client.login(config.token);