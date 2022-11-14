const firebaseConfig = {
    apiKey: "AIzaSyAeDRfnRpaOaCVcyesRZTyZ0fFAaVzY9Xw",
    authDomain: "p93-509e3.firebaseapp.com",
    databaseURL: "https://p93-509e3-default-rtdb.firebaseio.com",
    projectId: "p93-509e3",
    storageBucket: "p93-509e3.appspot.com",
    messagingSenderId: "357460535675",
    appId: "1:357460535675:web:c1d061e1dc3f6e667935de"
  };

  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
      msg = document.getElementById("msg").value ;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();