function LookingForGame(callback, guild, member) {

    let lfg = 'looking-for-game';    

    // Ensure we passed in correct params
    if (callback && guild && member) {

        // Try to find the role in the guild
        let lfgRole = guild.roles.find(r => r.name.indexOf(lfg) > -1);        

        if (lfgRole) {            
            
            // If the user already has the role we remove it, otherwise add it
            if (member.roles.find(r => r.name === lfgRole.name)) {                
                
                member.removeRole(lfgRole).then((member) => {                    
                    callback('removed');
                });

            } else {
                
                member.addRole(lfgRole).then((member) => {                    
                    callback('added');
                });
                
            }
        }
    }
}

module.exports = {
    
    LookingForGame : LookingForGame

};