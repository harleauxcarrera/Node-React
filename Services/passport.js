//This the file that will take care of the passport google Authentication
//

const passport = require('passport');//authentication
const GoogleStrategy = require('passport-google-oauth20').Strategy//export only 'Strategy' property
const keys = require('../keys');//google client auth keys
const mongoose = require('mongoose');

const User = mongoose.model('users');//require the User model by saving to const
//google authetication using passport
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSectret,
      callbackURL: '/auth/google/callback' //route that will be redirected to
    },
      (accessToken, refreshToken, profile, done) =>{//call done when finished creating user
        //first check in the User collection if someone already has this incoming profile id saved as their google id
        User.findOne({googleId: profile.id}).then ((existingUser) => {//returns a 'promise' (chained on .then)
            if(existingUser){//if user already exists dont re create
              
              done(null, existingUser);//need to call done method when finished creating User, use null to indicate no error
            }else{
              //create new user:
              new User({ googleId: profile.id }).save()//create and save User instance with googleId property
                .then(user => done(null, user)); //chain on .then with returned promise 'user' and call done method with that new user
            }

          });

      }
    )
  );//make use of this strategy and create instance
