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

function UpdatePreviousStreamConfig(previousDate, previousLink, callback) {
    if (previousDate && moment(previousDate).isValid() && previousLink && callback) {
        
        config.stream.previous.date = previousDate;
        config.stream.previous.link = previousLink

        UpdateNextStreamDate();

        callback('Previous date updated with ', config.stream.previous.date + ' ' + config.stream.previous.link);
        
    } else {
        // return an error to the user
        // review requirements of passed in date, might be too strict like this
        callback('You supplied invalid data. Date should be in format DD-MM-YYYYTHH:mm:ss:SSSZ');
    }
}

function UpdateNextStreamDate(nextDate, callback) {    
    
    if (nextDate && moment(nextDate).isValid() && callback) {
        
        config.stream.next.date = moment(config.stream.previous.date).add(2, 'weeks');    

        callback('Next stream date updated with ', config.stream.next.date);

    } else {
        callback('You supplied invalid data. Date should be in format DD-MM-YYYYTHH:mm:ss:SSSZ');
    }
    
    WriteConfigToFile(config);

}

function WriteConfigToFile(configToWrite) {
    if (configToWrite) {
        fs.writeFile('./config.json', JSON.stringify(configToWrite), 'utf8', (err) => {
            if (err) {
                console.log('err', err);
                return;
            }
        
            console.log('Config file updated with: ', config);
        });
    }
    
}

module.exports = {
    
    GetDevStreamInfo: GetDevStreamInfo,
    UpdateNextStreamDate: UpdateNextStreamDate,
    UpdatePreviousStreamConfig: UpdatePreviousStreamConfig

}