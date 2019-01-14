# pushnotifications-React

A push notification module made with React and Firebase Cloud Messaging. 
There are two different modes from this push notification module, the module can detect if the browser is in use or in background and can send different notifications depending on that state.

### How to install
Put firebase-messaging-sw.js into your public folder, put initNotification.js and firebaseConfig.js into your utils folder ( or equivalent of what you use ).

### How to configure
Put your Firebase credentials into firebaseConfig.js and into firebase-messaging-sw.js. Import and call the function inside initNotifications from your index.js/app.js.

### How to use
Send a Curl command with your fcm auth key and the firebase token that will be generated in the console when the website is loaded (use and handle that token for your own needs).

When the Curl command is received, a notification will be shown and it will show the messaging.onMessage() example inside initNotification.js (edit for your own needs).
However, if the browser is in the background it will use the template used in your CURL commando. For example:

curl -X POST --header "Authorization: key=Put-your-auth-key-here" --header "Content-Type: application/json" -d "{\"to\":\"Put-your-FCM-token-here\",\"priority\":\"high\",\"notification\":{\"body\": \"FOO BAR BLA BLA\"}}" "https://fcm.googleapis.com/fcm/send"
