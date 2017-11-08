const passport = require('passport');
module.exports = app => {

    //configure redirect URIs in googleAPI dashboard so google
    //can redirect to auth/google/callback with the user's key code for authetication
    app.get('/auth/google', passport.authenticate('google',
    {//'google' string is a strategy from GoogleStrategy
      scope: ['profile','email']//specifies what user data we are asking google for
    }
    ));

    app.get('/auth/google/callback', passport.authenticate('google'));



};
