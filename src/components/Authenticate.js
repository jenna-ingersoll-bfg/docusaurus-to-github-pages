import React from 'react';
import Script from "react-inline-script";
 
export default function AddAuthScript() {
  {
    return (
      <div id="head">
        <Script>
          {`
            import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
            import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
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
            const app = initializeApp(firebaseConfig);
            const analytics = getAnalytics(app);
          `}
        </Script>
        <Script>
          {`
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
          `}
        </Script>
      </div>
    )
  }
}