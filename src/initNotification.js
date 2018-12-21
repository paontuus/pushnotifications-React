import firebase from "firebase";
import React from 'react';
import { config } from "./push/firebaseConfig.jsx";


class InitNotification extends React.Component{  
  render(){

    firebase.initializeApp(config);

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('../firebase-messaging-sw.js')
      .then(function(registration) {
        console.log('Registration successful, scope is:', registration.scope);
      }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
      });
    }

    const messaging = firebase.messaging();

    messaging
       .requestPermission()
       .then(() => {
          console.log("Permission granted: ", messaging.getToken())
          return messaging.getToken();
        })
       .then(token => {
          console.log("FCM Token:", token);
        })
       .catch(error => {
          if (error.code === "messaging/permission-blocked") {
             console.log("Notifications blocked, please enable");
          } else {
             console.log("Error", error);
          }
         }); 
 
    messaging.onMessage(payload => {
      console.log("Notification Received", payload);
     //this is the function that gets triggered when you receive a 
     //push notification while you’re on the page. So you can 
     //create a corresponding UI for you to have the push 
     //notification handled. 
      navigator.serviceWorker.ready.then(function(registration) {
        registration.showNotification('Web-notis-firebase', {
          body: 'Web-notis-test',
          icon: '', 
          tag: 'Web-notis-test'
        }); 
      });
    });

   return null;

  } 
}

export default InitNotification;


