const http = require('http');

// Get reference to our utility functions
const Utils = require('../utils/utils.js');

function GetLeaderboard(callback) {    

    // Perform ajax request to get leaderboard data
    http.get('http://www.dividedwefall.co/API/Players/Leaderboard?page=0&count=5', (res) => {
        
        if (res.statusCode !== 200) {
            
            // An error occurred
            console.log('An error occurred')

        } else {
            
            // Parse data into readable format on discord
            res.setEncoding('utf8');
            
            // Temp data storage until we have received it all and can parse as JSON
            let rawData = '';
            res.on('data', (chunk) => { rawData += chunk; });
            res.on('end', () => {
                try {
                    // Store the returned data as JSON
                    const parsedData = JSON.parse(rawData);                                     

                    // Variables to be used in the loop
                    let rankNumber = 1;
                    let iterator = 0;
                    let dataLen = parsedData.length;
                    
                    // Keep reference to column lengths here for easy adjustments/calculations
                    let columnLengths = {            
                        rankNumber: 2,
                        name: 25,
                        points: 10,
                        efficiency: 5,
                        games: 5
                    };

                    // This is a pipe -> ' | '
                    let pipeLength = 3;
                    let lineLength = Utils.NumberHelper.CalculateLineLength(columnLengths, pipeLength);

                    // Hold the formatted text in a variable starting the code block
                    let leaderboardText = '``` \n';

                    // Minus pipeLength to accomodate the pipe offset
                    let dashedLine = Utils.StringHelper.RepeatCharacter('-', (lineLength - pipeLength)) + '\n';                
                    
                    // Set title
                    leaderboardText += 'Current Leaderboard \n';

                    // Top line
                    leaderboardText += dashedLine;

                    // Table headers - switch to calculating this properly when I have time
                    leaderboardText += '| # | Name' + Utils.StringHelper.RepeatCharacter(' ', 21) + ' | Eff' + Utils.StringHelper.RepeatCharacter(' ', 2) + ' | PPs' + Utils.StringHelper.RepeatCharacter(' ', 7) + ' | Games |\n';

                    // Another line under headers
                    leaderboardText += dashedLine;

                    for (iterator; iterator < dataLen; iterator++) {

                        let player = parsedData[iterator];

                        // Find out how many spaces to add to ensure names, PPs and games are all the same length                    
                        let spacesToAdd = {
                            name: columnLengths.name - player.PlayerName.length,
                            points: columnLengths.points - player.TotalPPs.toString().length,
                            games: columnLengths.games - player.RecentGames.toString().length
                        };

                        // Format the data so it all aligns in a table
                        let formattedData = {
                            name: player.PlayerName + Utils.StringHelper.RepeatCharacter(' ', spacesToAdd.name),
                            eff: player.Efficiency.toFixed(2),
                            points: player.TotalPPs + Utils.StringHelper.RepeatCharacter(' ', spacesToAdd.points),
                            games: player.RecentGames + Utils.StringHelper.RepeatCharacter(' ', spacesToAdd.games),
                        };

                        // Print the formatted row data
                        leaderboardText += '| ' + rankNumber + ' | ' + formattedData.name + ' | ' + formattedData.eff + ' | ' + formattedData.points + ' | ' + formattedData.games + ' | \n';  

                        // Increment the rank number for the next row of data
                        rankNumber++;
                    }

                    // Bottom line
                    leaderboardText += dashedLine;

                    // End the code block
                    leaderboardText += '```';

                    callback(leaderboardText);

                } catch (e) {
                    console.error(e.message);
                }
            });

        }
    }).on('error', (e) => {
        console.error(`Got error: ${e.message}`);
    });

}

function GetRegimentLeaderboard(callback, requestedMonth, requestedYear) {

    console.log('requestedMonth', requestedMonth);
    console.log('requestedYear', requestedYear);

    let today = new Date();
    let month = typeof requestedMonth !== 'undefined' ? requestedMonth : today.getMonth() + 1;
    let year = typeof requestedYear !== 'undefined' ? requestedYear : today.getFullYear();

    console.log('year', year);
    console.log('month', month);

    // Perform ajax request to get leaderboard data
    http.get('http://www.dividedwefall.co/API/Regiments/Competition/' + year + '/' + month, (res) => {
        
        if (res.statusCode !== 200) {
            
            // An error occurred
            console.log('An error occurred')

        } else {
            
            // Parse data into readable format on discord
            res.setEncoding('utf8');
            
            // Temp data storage until we have received it all and can parse as JSON
            let rawData = '';
            res.on('data', (chunk) => { rawData += chunk; });
            res.on('end', () => {
                try {
                    // Store the returned data as JSON
                    const parsedData = JSON.parse(rawData);

                    console.log('parsedData'. parsedData);                                     

                    // Variables to be used in the loop
                    /*let rankNumber = 1;
                    let iterator = 0;
                    let dataLen = parsedData.length;
                    
                    // Keep reference to column lengths here for easy adjustments/calculations
                    let columnLengths = {            
                        rankNumber: 2,
                        name: 25,
                        points: 10,
                        efficiency: 5,
                        games: 5
                    };

                    // This is a pipe -> ' | '
                    let pipeLength = 3;
                    let lineLength = Utils.NumberHelper.CalculateLineLength(columnLengths, pipeLength);

                    // Hold the formatted text in a variable starting the code block
                    let leaderboardText = '``` \n';

                    // Minus pipeLength to accomodate the pipe offset
                    let dashedLine = Utils.StringHelper.RepeatCharacter('-', (lineLength - pipeLength)) + '\n';                
                    
                    // Set title
                    leaderboardText += 'Current Leaderboard \n';

                    // Top line
                    leaderboardText += dashedLine;

                    // Table headers - switch to calculating this properly when I have time
                    leaderboardText += '| # | Name' + Utils.StringHelper.RepeatCharacter(' ', 21) + ' | Eff' + Utils.StringHelper.RepeatCharacter(' ', 2) + ' | PPs' + Utils.StringHelper.RepeatCharacter(' ', 7) + ' | Games |\n';

                    // Another line under headers
                    leaderboardText += dashedLine;

                    for (iterator; iterator < dataLen; iterator++) {

                        let player = parsedData[iterator];

                        // Find out how many spaces to add to ensure names, PPs and games are all the same length                    
                        let spacesToAdd = {
                            name: columnLengths.name - player.PlayerName.length,
                            points: columnLengths.points - player.TotalPPs.toString().length,
                            games: columnLengths.games - player.RecentGames.toString().length
                        };

                        // Format the data so it all aligns in a table
                        let formattedData = {
                            name: player.PlayerName + Utils.StringHelper.RepeatCharacter(' ', spacesToAdd.name),
                            eff: player.Efficiency.toFixed(2),
                            points: player.TotalPPs + Utils.StringHelper.RepeatCharacter(' ', spacesToAdd.points),
                            games: player.RecentGames + Utils.StringHelper.RepeatCharacter(' ', spacesToAdd.games),
                        };

                        // Print the formatted row data
                        leaderboardText += '| ' + rankNumber + ' | ' + formattedData.name + ' | ' + formattedData.eff + ' | ' + formattedData.points + ' | ' + formattedData.games + ' | \n';  

                        // Increment the rank number for the next row of data
                        rankNumber++;
                    }

                    // Bottom line
                    leaderboardText += dashedLine;

                    // End the code block
                    leaderboardText += '```';*/

                    callback(parsedData);

                } catch (e) {
                    console.error(e.message);
                }
            });

        }
    }).on('error', (e) => {
        console.error(`Got error: ${e.message}`);
    });

}

module.exports = {

    GetLeaderboard: GetLeaderboard,
    GetRegimentLeaderboard: GetRegimentLeaderboard

};