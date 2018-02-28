//production keys go here
//do not commit this, dev.js
// values pulled from Heroku environment vars
module.exports={
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSectret:process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY, //added string to encrypt cookie
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY
};
