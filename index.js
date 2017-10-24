const express = require('express');//framework
const passport = require('passport');//authentication
const GoogleStrategy = require('passport-google-oauth20').Strategy//export only 'Strategy' property
const keys = require('./keys.js');//google client auth keys
const app = express();

/*Must do following for Google Auth strategy to work:
go to console.developers.google.com
click enable APIs
create new project (app)
Search for Google+ (Authentication API)
click enable API
click create credentials(register the app)
*/

//google authetication
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSectret,
      callbackURL: '/auth/google/callback' //route that will be redirected to
    },
      accessToken =>{
        console.log(accessToken);
      }
    )
  );//make use of this strategy and create instance

app.get('/', function(req,res){
  res.send('this is the index route');
});

//configure redirect URIs in googleAPI dashboard so google
//can redirect to auth/google/callback with the user's key code for authetication
app.get('/auth/google', passport.authenticate('google',
{//'google' string is a strategy from GoogleStrategy
  scope: ['profile','email']//specifies what user data we are asking google for
}
));

//server listens on specified port number
const PORT = process.env.PORT || 5000;
 app.listen(PORT);

 console.log('the server has started');
