//figure out what set of credentials to return keys.js

if(process.env.NODE_ENV == 'production'){
  //we are in production - return the prod set ok keys
  module.exports = require('./config/prod');
}else{
  //we are in development  -return the dev keys
  module.exports = require('./config/dev');
}
