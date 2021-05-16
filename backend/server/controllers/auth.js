const { firebase } = require('../utils/settings/firebase-settings');


module.exports.createUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const result = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    const user = result.user;
    return res.send(user);
  } catch (error){
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(`У вас произошла ошибка: ${errorCode} ${errorMessage}`);
  }
  next()
};

module.exports.loginUser = async (req, res, next) => {
  const {email, password} = req.body;
  try{
    const result = await firebase.auth().signInWithEmailAndPassword(email, password)
    const user = result.user;
    return res.send(user)
  }
  catch(error){
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(`У вас произошла ошибка: ${errorCode} ${errorMessage}`);
  }
  next()
}