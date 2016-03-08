Template.acceptInvite.onCreated(function(){
  // template-level subscription to invite state
  var self = this;
  self.autorun(function() {
    var token = Router.current().params._token;
    self.subscribe('invites-status', token);
  });
});

Template.acceptInvite.helpers({
  "token":function(){
    return Router.current().params._token;
  }
});

// Template.inviteLogin.onCreated(function(){
//   // template-level subscription to invite state
//   var self = this;
//   self.autorun(function() {
//     var token = Router.current().params._token;
//     console.log("inviteLogin.onCreated: token: "+token);
//     self.subscribe('invites-status', token);
//   });
// });

Template.inviteLogin.helpers({
  "inviteStatus":function(){
    // this.token must be set in data context in the implementing template,
    // i.e. {{> inviteLogin token=token}}
    var token = this.token;
    var invite = InvitesCollection.findOne({"token":token});
    if(!invite) return "inviteInvalid";
    if(invite.status == "invited"){
      // do Accounts-Invite login - but only do it once on token validation
      Meteor.call("invitesVisited", token);
      Meteor.loginWithInvite(token);
      return "inviteInvited";
    } else if(invite.status == "visited"){
      return "inviteVisited";
    } else if(invite.status == "claimed"){
      return "inviteClaimed";
    }
  }
});