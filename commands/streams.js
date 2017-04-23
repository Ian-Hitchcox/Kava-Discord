let config = require('../config.json');
let moment = require('moment');
let fs = require('fs');

let previousDate = moment(config.stream.previous.date).format('DD-MM-YYYY HH:mm');
let nextDate = moment(config.stream.next.date).format('DD-MM-YYYY HH:mm');

function GetDevStreamInfo(embed, callback) {
    
    if (embed && callback) {
            
        embed.setTitle('Divided We Fall -- Dev stream info')

            .setAuthor('KAVA Game Studio', config.links.images.dwfLogo)

            .setColor(0x00AE86)
            
            .setDescription('We hold a live DEV stream every two weeks on Wednesdays around 7pm GMT+1(Amsterdam)')

            .setImage(config.links.images.dwfLogo)

            .setThumbnail(config.links.images.kavaLogo)           

            .setURL(config.stream.next.link)

            .addField('Previous stream', previousDate + '\n' + config.stream.previous.link)

            .addField('Upcoming stream', nextDate + '\n' + config.stream.next.link)
                        
        return embed;
   
     }

     return null;
}

function UpdateNextStreamDate() {    
    
    config.stream.next.date = moment(config.stream.previous.date).add(2, 'weeks').format('DD-MM-YYYY HH:mm');

    console.log('config', config);

    fs.writeFileSync('../config.json', JSON.stringify(config), 'utf8', () => {
        console.log('File written');
    });
}

module.exports = {
    
    GetDevStreamInfo: GetDevStreamInfo,
    UpdateNextStreamDate: UpdateNextStreamDate

}