const User = require('../model/User')

const handleLogout = async (req, res) => {
  //on client also delete the accessToken

  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); //no content
  const refreshToken = cookies.jwt;

  //is refreshtoken in db?
  
  const foundUser = await User.findOne({refreshToken}).exec();
  if (!foundUser) {
    res.clearCokkie('jwt', {httpOnly: true, sameSite: 'None', secure: true});
    return res.sendStatus(204);
  } 

  foundUser.refreshToken = '';
  const result = await foundUser.save();
  console.log(result);

  res.clearCookie('jwt', {httpOnly: true, sameSite: 'None', secure: true}); // secure: true -only serves on https
  res.sendStatus(204);
}

module.exports = { handleLogout }