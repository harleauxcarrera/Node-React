const passport = require('passport');//require passport module
module.exports = app => { //short hand to export this file to app

    /**configure redirect URIs in googleAPI dashboard so google
        can redirect to auth/google/callback with the user's key code for authetication
      **/


    //google auth route
    app.get('/auth/google', passport.authenticate('google',
    {//'google' string is a strategy from GoogleStrategy
      scope: ['profile','email']//specifies what user data we are asking google for
    }
    ));

    //call back route
    app.get('/auth/google/callback', passport.authenticate('google'));

    //get current user route
    app.get('/api/current_user', (req,res) => {
      res.send(req.user + "hey there");//passport attaches user to request in every route
    });

    app.get('/api/logout', (req,res) => {
      req.logout(); //passport attaches logout method to request in every routes
      res.send("logged out, current user is: " +req.user);              //logout() kills the cookie and logs user out
    });


};
