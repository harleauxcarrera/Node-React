//This the file that will take care of the passport google Authentication
//

const passport = require('passport');//authentication
const GoogleStrategy = require('passport-google-oauth20').Strategy//export only 'Strategy' property
const keys = require('./keys.js');//google client auth keys
//google authetication using passport
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSectret,
      callbackURL: '/auth/google/callback' //route that will be redirected to
    },
      (accessToken, refreshToken, profile, done) =>{
        console.log('acces token', accessToken);
        console.log('refresh token',refreshToken);
        console.log('profile',profile);
      }
    )
  );//make use of this strategy and create instance
