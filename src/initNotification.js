import firebase from "firebase";

export function initNotif() {
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
        body: 'Pontus är bäst!',
        icon: './logo.svg', 
        tag: 'Web-notis-test'
      }); 
    });
  });
}


