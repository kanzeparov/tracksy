const { admin } = require('../utils/settings/firebase-settings');

module.exports.createUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await admin.auth().createUser({
      email,
      password,
    });

    return res.send(user);
  } catch (err) {
    console.log(err);
  }
  next();
};
