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

    // after login callback route, passes control to pass.auth function, then respose redirecited by chained route handler
    app.get('/auth/google/callback',
     passport.authenticate('google'),
     (req, res) => {
       res.redirect('/surveys');
     }
   );

    //get current user route
    app.get('/api/current_user', (req,res) => {
      res.send(req.user);//passport attaches user to request in every route

    });

    app.get('/api/logout', (req,res) => {
      req.logout(); //passport attaches logout method to request in every routes
      res.redirect('/'); //redirect user to landing page when logged out
      res
    });


};
