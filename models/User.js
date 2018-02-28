const mongoose = require('mongoose');
const { Schema } = mongoose;//get the 'schema' object out of mongoose library

//create a schema to model the user
const userSchema =  new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
});

//command to make a model  (collection) called 'users' that uses the schema 'userSchema' defined uptop
mongoose.model('users', userSchema);
