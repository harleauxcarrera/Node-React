/*to get server to auto restart /detect changes
use npm to insall nodemon
go to package.json scripts
add "dev": "nodemon index.js" to scripts
to start the script run npm run dev
*/

//**REQUIRED**//
const express = require('express');//framework
const mongoose = require('mongoose');

const keys = require('./keys');//use usr&password to connect to mongodb instance on line 17
const passport = require('passport');
const cookieSession = require('cookie-session');
const app = express();//create the express app
//get app to use cookies
app.use(passport.initialize());
app.use(passport.session());

                                //attatch 'app' object to external routes file
require('./routes/authRoutes')(app);//immediatley calls with app object
require('./models/User')//require in the User model file
require('./Services/passport');//no need to store constant bc there is no return

//connect to the mongoDB instance we made at Mlab.com using the standard MONGODB URI option
mongoose.connect('mongodb://harleauxcarrera:please313@ds151955.mlab.com:51955/nodereactudemy');

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]//use cookieKey from keys.js
  })
);



//**ROUTES**//
app.get('/', function(req,res){
  res.redirect('landing.html')
})


/*Must do following for Google Auth strategy to work:
        go to console.developers.google.com
        click enable APIs
        create new project (app)
        Search for Google+ (Authentication API)
        click enable API
        click create credentials(register the app)
*/

//server listens on specified port number
const PORT = process.env.PORT || 5000;
 app.listen(PORT);

 console.log('the server has started');
