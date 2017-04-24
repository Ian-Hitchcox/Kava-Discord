function CheckIfAdmin(member) {
    
    // Check if member has admin role
    if (member.roles.find(r => r.name === 'Admin')) {
        return true;
    }
    
    return false;    
}

module.exports = {
    CheckIfAdmin: CheckIfAdmin
}