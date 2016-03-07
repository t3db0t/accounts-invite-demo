AccountsInvite.register({
	onCreatedAccount: onCreatedAccount
});

function onCreatedAccount(token){
	// Update user's invitation status to "claimed"
    console.log("--> claiming invite");
	BetaInvites.update({"token":token}, {$set:{"status":"claimed"}});
}