let config = require('../config.json');

function DisplayAllCommands(embed, callback) {
    if (embed && callback) {
        // Title
            embed.setTitle('Divided We Fall')

            // Author -- text and thummbnail
            .setAuthor('KAVA Game Studio', config.links.images.kavaLogo)
            /*
            * Alternatively, use '#00AE86', [0, 174, 134] or an integer number.
            */
            .setColor(0x00AE86)

            // Description
            .setDescription('How to use the kava-bot, type any of the following commands directly into the Discord chat to use them')

            // Footer
            //.setFooter('Nice text at the bottom', 'https://goo.gl/hkFYh0')

            // Sets the image at the bottom
            .setImage(config.links.images.dwfLogo)

            // Sets thumbnail on the right
            .setThumbnail(config.links.images.kavaLogo)
            
            /*
            * Takes a Date object, defaults to current date.
            */
            .setTimestamp()


            .setURL(config.links.website)
            
            .addField('\u200b', '\u200b', true)

            .addField('/looking-for-game', 'Changes your name colour in Discord and adds you to a seperate group so people can see who is wanting to play. Use the command again to turn it off.')
            .addField('/links', 'Displays useful links for Divided We Fall')
            .addField('/dev-stream', 'Displays the date and link to the previous stream and the date of the next one')
            .addField('/leaderboard', 'Displays the top 5 players on the leaderboard. Currently only supported on desktops is a work in progress')                    


        return embed;
   
     }

    return null;
}


module.exports = {
    DisplayAllCommands : DisplayAllCommands,
    Links: require('./links.js'),
    Members: require('./members.js'),
    Stats: require('./stats.js'),
    Streams: require('./streams.js')
}