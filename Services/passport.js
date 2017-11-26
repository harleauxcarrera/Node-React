//This the file that will take care of the passport google Authentication
//

const passport = require('passport');//authentication
const GoogleStrategy = require('passport-google-oauth20').Strategy//export only 'Strategy' property
const keys = require('../keys');//google client auth keys
const mongoose = require('mongoose');


const User = mongoose.model('users');//require the User model by saving to const
//give user cookie
passport.serializeUser((user, done) => {
  done(null, user.id);//get unique mongo id
});
//check user cookie
passport.deserializeUser((id, done) => {//check mongo id
  User.findById(id).then(user => {//continue with user if found
      done(null, user);//return user

    });
});

//google authetication using passport
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSectret,
      callbackURL: '/auth/google/callback', //route that will be redirected to

    },
    //declare as async function, add await to each returned promise instead of using .then()s
      async (accessToken, refreshToken, profile, done) =>{//call done when finished creating user
        //first check in the User collection if someone already has this incoming profile id saved as their google id
        const existingUser = await User.findOne({googleId: profile.id})//returns a 'promise' (chained on .then)
            if(existingUser){//if user already exists dont re create
              return done(null, existingUser);//need to call done method when finished creating User, use null to indicate no error
            }
              //create new user:
            const user = new User({ googleId: profile.id }).save()//create and save User instance with googleId property
            done(null, user); //chain on .then with returned promise 'user' and call done method with that new user
      }
    )
  );//make use of this strategy and create instance
