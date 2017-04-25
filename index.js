// Require modules
const Discord = require('discord.js');
const client = new Discord.Client();

const Commands = require('./commands/commands.js');
const Utils = require('./utils/utils.js');

let config = require('./config.json');

// my bot
client.login('MzA0NjgzOTgzOTQwMzU0MDQ4.C9qOnA.DuguWqeFdyeKxFIbrRBK5UHa1dY');
//MzA0NjgzOTgzOTQwMzU0MDQ4.C-Cs4A.8QMdrgpU3oZ9Enp4iNnqegJ530w

// kava-test-bot
//client.login("MzA2MDQzMTU5NTg5Mjg5OTg0.C9-Ang.GefddMkSR99lpFq44NFqz3_oB9Q");
// MzA2MDQzMTU5NTg5Mjg5OTg0.C-Cr9A.XqbxXeSKXageJtUnXueqqpX2Hfk

client.on('ready', () => {
  console.log('I am ready!');  
});

client.on("message", (message) => {

    // Help
    if (message.content === config.prefix + 'help') {

        let embed = new Discord.RichEmbed();

        embed = Commands.DisplayAllCommands(embed, (data) => {
            return data;
        });

        message.channel.sendEmbed(
        embed,
        '..generating help...',
        { disableEveryone: true }
        );   

    }

    // Leaderboard
    if (message.content === config.prefix + 'leaderboard') {

        Commands.Stats.GetLeaderboard((data) => {
            message.channel.sendMessage(data);
        });   

    }

    // Regiment Leaderboard
    if (message.content === config.prefix + 'regiment-leaderboard') {

        let embed = new Discord.RichEmbed();
        
        // Will need to parse any passed in args
        Commands.Stats.GetRegimentLeaderboard((data) => {        
            message.channel.sendMessage(data);
        }, undefined, undefined);       
    }

    // Looking for game
    if (message.content === config.prefix + 'looking-for-game') {
                    
        Commands.Members.LookingForGame((data) => {                

        }, message.guild, message.guild.member(message.author));                       
        
    }

    // Links
    if (message.content === config.prefix + 'links') {
                    
        let embed = new Discord.RichEmbed();

        embed = Commands.Links.GetAllLinks(embed, (data) => {
            return data;
        });

        message.channel.sendEmbed(
        embed,
        '..gathering links...',
        { disableEveryone: true }
        );
    }

    if (message.content === config.prefix + 'dev-stream') {
        let embed = new Discord.RichEmbed();

        embed = Commands.Streams.GetDevStreamInfo(embed, (data) => {
            return data;
        });
        
        message.channel.sendEmbed(
        embed,
        '..gathering stream info...',
        { disableEveryone: true }
        );
    }

    if (message.content.startsWith(config.prefix + 'dev-stream-update-previous')) {

        // Get passed in args        
        let args = message.content.split(' ').slice(1);

        // Get args supplying date and link
        let member = message.guild.member(message.author);
        if (Utils.MemberHelper.CheckIfAdmin(member) && args.length === 2) {
            Commands.Streams.UpdatePreviousStreamConfig(args[0], args[1], () => {
                // Decide how to report to the user, either in DM or require it to be posted in a seperate channel                
            });
        }
    }

    if (message.content === config.prefix + 'dev-stream-update-next') {

        // Get passed in args        
        let args = message.content.split(' ').slice(1);
        
        // Get args supplying date
        let member = message.guild.member(message.author);
        if (Utils.MemberHelper.CheckIfAdmin(member) && args.length === 2) {
            Commands.Streams.UpdateNextStreamConfig(args[0], (data) => {
                // Decide how to report to the user, either in DM or require it to be posted in a seperate channel
            });
        }
    }
    
});

