// Require modules
const Discord = require('discord.js');

const Stats = require('./commands/stats.js');
const Members = require('./commands/members.js');
const Links = require('./commands/links.js');
const Streams = require('./commands/streams.js');

// Set up constants
const client = new Discord.Client();
const prefix = '/';


client.login("MzA0NjgzOTgzOTQwMzU0MDQ4.C9qOnA.DuguWqeFdyeKxFIbrRBK5UHa1dY");

client.on('ready', () => {
  console.log('I am ready!');
});

client.on("message", (message) => {

    // Leaderboard
    if (message.content === prefix + 'leaderboard') {

        Stats.GetLeaderboard((data) => {

            // Fire off a message to the channel with the table data
            message.channel.sendMessage(data);
        });   

    }

    // Regiment Leaderboard
    if (message.content === prefix + 'regiment-leaderboard') {

        // Will need to parse any passed in args
        Stats.GetRegimentLeaderboard((data) => {            
            message.channel.sendMessage(data);
        });

    }

    // Looking for game
    if (message.content === prefix + 'looking-for-game') {

        let guild = client.guilds.find(g => g.name === 'testeen');        

        if (guild) {
            let member = guild.member(message.author);
                        
            Members.LookingForGame((data) => {                

            }, guild, member);                       
        }
        
    }

    // Links
    if (message.content === prefix + 'links') {
                    
        let embed = new Discord.RichEmbed();

        embed = Links.GetAllLinks(embed, (data) => {
            return data;
        });

        message.channel.sendEmbed(
        embed,
        '..gathering links...',
        { disableEveryone: true }
        );
    }

    if (message.content === prefix + 'dev-stream') {
        let embed = new Discord.RichEmbed();

        embed = Streams.GetDevStreamInfo(embed, (data) => {
            return data;
        });
        
        message.channel.sendEmbed(
        embed,
        '..gathering stream info...',
        { disableEveryone: true }
        );
    }

    if (message.content === prefix + 'dev-stream-update') {

        Streams.UpdateNextStreamDate();
    }
    
});
