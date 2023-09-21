localStorage.setItem('username','admin@bugtracker.com');
localStorage.setItem('password','password123');
function login() {
    
    var username = document.getElementById('username').value;

    password = document.getElementById("password").value;
    if(username == localStorage.getItem('username') && password == localStorage.getItem('password'))
    {
        window.location.href = "/application.html";
    }
    else
    {
        swal("","Invalid username or password","error");
    }
    firebase.auth().signInWithEmailAndPassword(username, password)
    .then((success) => {
        var user = firebase.auth().currentUser;
        var uid;
        if (user != null) {
            uid = user.uid;
        }
        var user_data  = 
        {
            email: username,
            password: password,
            uid: uid
        };
        var firebaseRef = firebase.database().ref();
        
        firebaseRef.child("user/"+uid).update(user_data);
        swal("Success" , "" , "success").then((value) => {
                setTimeout(function(){
                    window.location.href = "/application.html";
                    }, 1000)});
       
    }).catch((error) => 
        {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            swal(errorMessage , "" , "error");
            swal("",errorCode,"error");
            
        });
 
}