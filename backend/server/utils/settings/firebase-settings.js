const admin = require("firebase-admin");
const serviceAccount = require("../service-accountKey.json");
const firebase = require('firebase')

const firebaseConfig = {
  apiKey: "AIzaSyCfOzMbIS4nycAA1llbLYfEDDJojQZELKc",
  authDomain: "test-71799.firebaseapp.com",
  projectId: "test-71799",
  storageBucket: "test-71799.appspot.com",
  messagingSenderId: "931137656454",
  appId: "1:931137656454:web:ba223854f628ad4ffa2307",
  measurementId: "G-5TCPL5S35B"
};
firebase.initializeApp(firebaseConfig);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = {admin, firebase}


// firebase отвечает за логин и регистрацию. Админ нужен для администрирования всем этим делом, возможно пригодится. 