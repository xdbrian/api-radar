const  firebase = require("firebase");
const firebaseconfig = {
      apiKey: "AIzaSyBHVA1H7en_yKKCNxIS3bQ201SFz7LzMXQ",
      authDomain: "firechat-ef0de.firebaseapp.com",
      databaseURL: "https://firechat-ef0de-default-rtdb.firebaseio.com",
      projectId: "firechat-ef0de",
      storageBucket: "firechat-ef0de.appspot.com",
      messagingSenderId: "779540722689",
      appId: "1:779540722689:web:caab861e662e4f915d3c00"
  };
  firebase.initializeApp(firebaseconfig);
  const db =firebase.firestore();
  const Users = db.collection("Users");
  module.exports = Users;