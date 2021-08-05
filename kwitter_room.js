
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
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
