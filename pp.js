(function () {
    
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyBR70hFqGEoQj0tdolwFeuMyh9thHRf8Ug",
    authDomain: "insidebowen-6fc2d.firebaseapp.com",
    projectId: "insidebowen-6fc2d",
    storageBucket: "insidebowen-6fc2d.appspot.com",
    messagingSenderId: "787790307908",
    appId: "1:787790307908:web:f11a73e952f27104e35211"
    };
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
 
    //Get Elements
    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignup = document.getElementById("btnSignup");
  
    //Add Login Event
    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const password = txtPassword.value;
  
        const auth = firebase.auth();
  
        //sign in with firebase auth
        auth.signInWithEmailAndPassword(email, password).then(user =>{
            alert("Login Successful :)");
        }).catch(err => {
            alert(err.message);
        });
        
    });
  
    //Add Signup Event
    btnSignup.addEventListener('click', e => {
  
        //get email and password
        const email = txtEmail.value;
        const password = txtPassword.value;
  
        const auth = firebase.auth();
  
        //sign in with firebase auth
        const promise = auth.createUserWithEmailAndPassword(email, password).then(user => {
            alert("Signup Successful :)");
             window.location.href = 'index.html';
            window.location.href = 'index.html';
        }).catch(err => {
            alert(err.message);
        });
  
    });
  
  
  }());
