let config = require('../config.json');

function GetAllLinks(embed, callback) {
    if (embed && callback) {
            
            // Title
            embed.setTitle('Divided We Fall')

            // Author -- text and thummbnail
            .setAuthor('KAVA Game Studio', config.links.images.dwfLogo)
            /*
            * Alternatively, use '#00AE86', [0, 174, 134] or an integer number.
            */
            .setColor(0x00AE86)

            // Description
            .setDescription('Below you can find useful links for Divided We Fall')

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

            .addField('Steam page', config.links.steam.store)
            .addField('Forums', config.links.steam.discussions)
            .addField('Guides', config.links.steam.guides)
            
            .addField('Subreddit', config.links.subreddit)

            .addField('Youtube', config.links.youtube)
            .addField('Twitter', config.links.twitter)
            .addField('Facebook', config.links.facebook)
            
            /*
            * Blank field, useful to create some space.
            */
            .addField('\u200b', '\u200b', true);


        return embed;
   
     }

     return null;
        
}

module.exports = {
    GetAllLinks: GetAllLinks
}