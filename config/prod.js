//production keys go here
//do not commit this, dev.js
module.exports={
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSectret:process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY //added string to encrypt cookie
};
