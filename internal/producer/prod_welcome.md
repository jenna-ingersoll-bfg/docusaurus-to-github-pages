<script type="module">// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB2XgojUXyIGu-GCyBUMj3qc--JHihzqYg",
    authDomain: "big-fish-static-web-sites.firebaseapp.com",
    databaseURL: "https://big-fish-static-web-sites.firebaseio.com",
    projectId: "big-fish-static-web-sites",
    storageBucket: "big-fish-static-web-sites.appspot.com",
    messagingSenderId: "132724797588",
    appId: "1:132724797588:web:5daa7ede3af500d0678481",
    measurementId: "G-0NY4EJB3HX"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
        
<script>
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // Show SDK Docs now, location:
      // /sdk/index.html
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
    });
</script>
# Producer Handbook

The Big Fish Producer Handbook walks through the internal processes for onboarding a new studio and game. In addition, you’ll find processes, resources and tips to help support game teams during the game development process.

:::info

Here, you’ll find some, but not all, of the internal processes needed to publish a game at Big Fish. If you find something missing, please reach out to the docs team to ensure that it gets added to this handbook.

:::
