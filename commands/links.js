function GetAllLinks(embed, callback) {
    if (embed && callback) {
            
            // Title
            embed.setTitle('Divided We Fall')

            // Author -- text and thummbnail
            .setAuthor('KAVA Game Studio', 'http://www.kavagamestudio.com/press/images/icon.png')
            /*
            * Alternatively, use '#00AE86', [0, 174, 134] or an integer number.
            */
            .setColor(0x00AE86)

            // Description
            .setDescription('Below you can find useful links for Divided We Fall')

            // Footer
            //.setFooter('Nice text at the bottom', 'https://goo.gl/hkFYh0')

            // Sets the image at the bottom
            .setImage('http://www.dividedwefall.co/images/logo.png')

            // Sets thumbnail on the right
            .setThumbnail('http://www.kavagamestudio.com/press/images/icon.png')
            
            /*
            * Takes a Date object, defaults to current date.
            */
            .setTimestamp()


            .setURL('http://dividedwefall.co/#/')
            
            .addField('\u200b', '\u200b', true)

            .addField('Steam page', 'http://store.steampowered.com/app/495580')            
            .addField('Forums', 'http://steamcommunity.com/app/495580/discussions/')
            .addField('Guides', 'http://steamcommunity.com/app/495580/guides')
            
            .addField('Subreddit', 'http://www.reddit.com/r/DividedWeFall')

            .addField('Youtube', 'https://gaming.youtube.com/c/KAVAGameStudio')
            .addField('Twitter', 'http://www.twitter.com')
            .addField('Facebook', 'http://facebook.com/dividedwefallgame')

            
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