//take in three args to modify incoming  request
//next is a function called when middleware is finished running
module.exports = (req,res,next) => {
//check if user is signed in
if(!req.user){
  //bail if no user signed in
  return res.status(401).send({error: "you must be logged in!"});
}
//continue
next();
};
