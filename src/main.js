import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

/* code from our Firebase console */
var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  }

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const app = createApp(App)

app.use(router)

app.mount('#app')
