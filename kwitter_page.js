//YOUR FIREBASE LINKS

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
     username=localStorage.getItem("username")
     room_name=localStorage.getItem("roomname")


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warnning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>" ;
span_tag="<span class='glyphicon glyphicon-thumbs-up'>like:" +like+ "</span> </button>";
row=name_tag+message_tag+like_button+span_tag;
document.getElementById("output").innerHTML=row;



//End code
      } });  }); }
function updatelike(message_id){
      console.log("clicked on like button-"+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updatelike=Number(likes)+1;
      console.log(updatelikes);
      firebase.database().ref(room_name).child(message_id).update({
            like:updatelikes

      });
}

getData();
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:username,
            message:msg,
            likes:0
      });
      document.getElementById("msg").value="";
}