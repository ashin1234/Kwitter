//YOUR FIREBASE LINKS
var firebaseConfig = {

      apiKey: "AIzaSyC2A-rLDMBy0OdRjXtD2MJ6fmkBXyfkaE8",
      authDomain: "kwitter-6dd13.firebaseapp.com",
      databaseURL: "https://kwitter-6dd13-default-rtdb.firebaseio.com",
      projectId: "kwitter-6dd13",
      storageBucket: "kwitter-6dd13.appspot.com",
      messagingSenderId: "473485048657",
      appId: "1:473485048657:web:465f0d17f3ff73d9363170"
    };
  
    // Initialize Firebase
  
    firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  function send(){
        msg=document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });
        document.getElementById("msg").value="";
  }
  function logout(){
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location="index.html";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
