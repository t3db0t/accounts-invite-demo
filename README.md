# accounts-invite-demo

Live demo: http://accounts-invite-demo.meteor.com/

Many apps will want a way to control user account creation, for instance during a beta testing phase.  This demonstrates a powerful way to do this with the [`t3db0t:accounts-invite`](https://github.com/t3db0t/meteor-accounts-invite) (account validation) and [`t3db0t:invites`](https://github.com/t3db0t/meteor-invites) (beta invitations) packages.

## How to use the demo

1. Visit the root and try to login. You won't be allowed to create an account.
1. Visit `/invites` and create an invitation for yourself. Click on the `token` link to go to:
1. `/acceptInvite/:token`, where you will be allowed to create an account, whereas you couldn't before.
1. Check `/invites` again to see the changed status of your invite.

## How it works

1. Use `t3db0t:invites` or similar to track beta invitations with unique tokens
1. Configure the `validateToken` callback to return true for valid tokens
1. Setup a route (with your router of choice) to check an invitation's status and when appropriate call `Meteor.loginWithInvite`, which will:
    1. Create a temporary / 'guest' account
    1. Allow the user to add a login service if the `validateToken` callback passes.

## Requirements
- [`t3db0t:accounts-invite`](https://github.com/t3db0t/meteor-accounts-invite)
- [`t3db0t:invites`](https://github.com/t3db0t/meteor-invites)
- `accounts-ui` or similar
- `accounts-facebook`, `password` or other login service