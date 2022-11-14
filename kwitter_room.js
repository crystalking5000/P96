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
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!!!";

function addRoom(){
      room_name = document.getElementById("room_name").value ; 
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding_room_name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #"+Room_names+"</div> <hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}