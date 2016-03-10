AccountsInvite.register({
	validateToken: validateToken,
	onCreatedAccount: onCreatedAccount
});

function validateToken(token){
	if(InvitesCollection.findOne({"token":token})) return true;
	else return false;
}

function onCreatedAccount(token){
	InvitesCollection.update({"token":token}, {$set:{"status":"claimed"}});
}