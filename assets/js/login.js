
function logingoogle(){
	var provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
  console.log(user)
  console.log(user.displayName)
  window.location.href = '../../../template.html';
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...

});
}


window.onload = function() {


// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDvGEU4qdHpUs_ufL5MjZfbUZqZa70D-iY",
    authDomain: "autosalsopi-9492a.firebaseapp.com",
    databaseURL: "https://autosalsopi-9492a.firebaseio.com",
    projectId: "autosalsopi-9492a",
    storageBucket: "autosalsopi-9492a.appspot.com",
    messagingSenderId: "66873426142"
  };
  firebase.initializeApp(config);
};



