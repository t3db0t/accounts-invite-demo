Template.acceptInvite.onCreated(function(){
  // template-level subscription to invite state
  var self = this;
  self.autorun(function() {
    var token = Router.current().params._token;
    self.subscribe('inviteTokens', token);
  });
});

Template.acceptInvite.helpers({
  "token":function(){
    return Router.current().params._token;
  }
});