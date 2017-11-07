# dividedwefall-discord
Discord bots developed for Divided We Fall

# How to use
* Ensure node v6.0.0 or above is installed
* Create a discord bot
* Copy the bots secret token
* Edit line 11 of index.js with your bots secret token from above
* Run 'npm i' in your terminal at the project root to ensure the discord.js script is installed
* Ensure the correct server name is used in the config file
* To start up the bot use 'node index.js' then you can give it commands listed below


# Current commands

/dev-stream -- gives date and link to previous stream and date of next stream along with link where they can watch it

/leaderboard -- pulls current leaderboard data and displays it in a table (see known issues: 1)

/links -- creates an embedded object that displays links for DWF like the steam page, youtube, twitter etc

/looking-for-game -- gives the user the 'looking-for-game' role which turns their username green in discord and sorts them into a group on the right, making it easy for others to see who is looking for a game


# Known issues

1. Leaderboard returned data currently doesn't play nice on smaller screens. Looking into other ways the data could be displayed.
