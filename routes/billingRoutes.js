const keys = require('../keys');

const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin  = require('../middlewares/requireLogin');
module.exports = app => {

//watch for posts request that are made to the /api/stripe route
 app.post('/api/stripe', requireLogin, async (req, res) => {
      //here is where the token that we dispatch in the token action creater will end up
   // logic: handle toke,  reach out to stripe API and finalize charge
   //and then update the user's amount of credits in the user model
   //check to see if the token is being recieved
    const charge = await stripe.charges.create({
      //amount u want to bill in cents ( five dollars
      amount: 500,
      currency: 'usd',
      description: '$5 for five credits',
      source: req.body.id
    });


    //take user who requested and add five credits and then
    //respond to the request with a newly updated user model back to Client

req.user.credits += 5;
//make sure to save the user model afer modifying it with 5 credits
// since we are saving a model this is an asyn request(it takes some time)
//so add the await keyword
const user = await req.user.save();
//send user model newly updated to the client
res.send(user);
 });
};
