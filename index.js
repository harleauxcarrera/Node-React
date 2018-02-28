/*to get server to auto restart /detect changes
use npm to insall nodemon
go to package.json scripts
add "dev": "nodemon index.js" to scripts
to start the script run npm run dev
* add a comment here to see whats up..ayy/

//**REQUIRED**/
const express = require('express');//framework
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./keys');//use usr&password to connect to mongodb instance on line 17
require('./models/User')//require in the User model file
require('./Services/passport');//no need to store constant bc there is no return
//gets rid of some error in the terminal
mongoose.Promise = global.Promise;
//connect to the mongoDB instance we made at Mlab.com using the standard MONGODB URI option
mongoose.connect('mongodb://harleauxcarrera:please313@ds151955.mlab.com:51955/nodereactudemy');

const app = express();//create the express app


/* app.use() act as middleware to modify incoming requests
before they are sent off to route handlers*/
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]//use cookieKey from keys.js
  })
);
//get app to use cookies
app.use(passport.initialize());
app.use(passport.session());
                              //attatch 'app' object to external routes file
require('./routes/authRoutes')(app);//immediatley calls with app object

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

/*Must do following for Google Auth strategy to work:
        go to console.developers.google.com
        click enable APIs
        create new project (app)
        Search for Google+ (Authentication API)
        click enable API
        click create credentials(register the app)
*/

const path = require('path');
 app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
 });

//server listens on specified port number
const PORT = process.env.PORT || 5000;
 app.listen(PORT);

 console.log('the server has started');
