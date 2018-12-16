import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import firebase from "firebase";
import { config } from "./push/firebaseConfig.jsx";
import { initNotif } from "./initNotification";

console.log(config);
firebase.initializeApp(config);
initNotif();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
    .then(function(registration) {
      console.log('Registration successful, scope is:', registration.scope);
    }).catch(function(err) {
      console.log('Service worker registration failed, error:', err);
    });
  }
//navigator.serviceWorker.ready();
/*registration.showNotification('sample', {
    body : 'buzz',
    tag: 'sample',
    title
});*/
//requestNotificationPermission();
//if("Notification" in window && Notification.permission === "granted")
ReactDOM.render(<App />, document.getElementById('root'));
