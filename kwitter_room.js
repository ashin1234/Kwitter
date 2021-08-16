
 // Your web app's Firebase configuration

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
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
  
  function addRoom(){
    room_name=document.getElementById("room_name").value;
    localStorage.setItem("room_name",room_name);
    firebase.database().ref("/").child(room_name).update({
      room_name:room_name,
      purpose:"adding room name"
    });
    window.location="kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("ROOM NAME-"+Room_names);
     row='<div class="room_name" id="'+Room_names+'" onclick="redirectToRoomname(this.id)"> #'+Room_names+'</div><hr>';
     document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomname(name){
   localStorage.setItem("room_name",name);
   firebase.database().ref("/").child(name).update({
    room_name:name,
    purpose:"adding room name"
  });
  window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}
