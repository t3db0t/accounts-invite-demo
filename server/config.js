AccountsInvite.register({
	validateToken: validateToken,
	onCreatedAccount: onCreatedAccount
});

function validateToken(token){
	if(InvitesCollection.findOne({"token":token})) return true;
	else return false;
}

function onCreatedAccount(token){
	// Update user's invitation status to "claimed"
    console.log("--> claiming invite");
	InvitesCollection.update({"token":token}, {$set:{"status":"claimed"}});
}