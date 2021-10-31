
//ADD YOUR FIREBASE LINKS 
var firebaseConfig = {
      apiKey: "AIzaSyD8md0epburpniaaV1zho-tyko6Scq4cHE",
      authDomain: "kwitter-d18ef.firebaseapp.com",
      databaseURL: "https://kwitter-d18ef-default-rtdb.firebaseio.com",
      projectId: "kwitter-d18ef",
      storageBucket: "kwitter-d18ef.appspot.com",
      messagingSenderId: "1091087391644",
      appId: "1:1091087391644:web:57ac7117a10f16ca9fc659",
      measurementId: "G-442XLM1M6E"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     username=localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML="Welcome"+username+"!";

     function addroom(){
           roomname=document.getElementById("roomname").value;
           firebase.database().ref("/").child(roomname).update({
                 purpose:"addingroomname"
           });
           localStorage.setItem("roomname",roomname);
           window.location="kwitter_page.js";
     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("roomname-"+roomname);
       row="<div class='roomname' id="+roomname+" onclic='redirecttoroomname(this.id)'># "+roomname+"</div><hr>";
       document.getElementById("output").innerHTML=row;

  


      //End code
      });});}

getData();

function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("roomname",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html"
}

