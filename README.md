# dividedwefall-discord
Discord bots developed for Divided We Fall

# How to use
* Ensure node v6.0.0 or above is installed
* Create a discord bot
* Copy the bots secret token
* Edit line 13 of index.js with your bots secret token from above
* Run 'npm i' in your terminal at the project root to ensure the discord.js script is installed
* To start up the bot use 'node index.js' then you can give it commands listed below


# Current commands

/leaderboard -- pulls current leaderboard data and displays it in a table (see known issues: 1)

/links -- creates an embedded object that displays links for DWF like the steam page, youtube, twitter etc

/looking-for-group -- gives the user the 'looking-for-game' role which turns their username green in discord and sorts them into a group on the right, making it easy for others to see who is looking for a game


# Known issues

1. Leaderboard returned data currently doesn't play nice on smaller screens. Looking into other ways the data could be displayed.
2. You will currently have to edit line 45 of index.js to give it the name of the server you want to test on until I add a proper config file
