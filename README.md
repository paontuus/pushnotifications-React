# pushnotifications-React

A Push notification module made with React and Firebase Cloud Messaging. 
There are two different modes from this push notification module, the module can detect if the browser is in use or in background and can send different notifications depending on that state.

### How to install
Put firebase-messaging-sw.js into your public folder, put initNotification.js and firebaseConfig.js into your utils folder ( or equivalent of what you use ).

### How to configure
Put your Firebase credentials into firebaseConfig.js and into firebase-messaging-sw.js. Import and call the function inside initNotifications.
