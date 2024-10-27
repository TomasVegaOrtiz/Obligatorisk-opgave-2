
import { getApps, initializeApp } from "firebase/app"; 
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb5wuE5sVXNw4tGPTZ5zJo0JVo2AIllTw",
  authDomain: "paratply-99346.firebaseapp.com",
  projectId: "paratply-99346",
  storageBucket: "paratply-99346.appspot.com",
  databaseURL: "https://paratply-99346-default-rtdb.europe-west1.firebasedatabase.app/",
  messagingSenderId: "345628346372",
  appId: "1:345628346372:web:861bc0e3b54af2e1c8cd51",
  measurementId: "G-DQSWFY3Z4K"
};
if (getApps().length < 1) {
    initializeApp(firebaseConfig);
    console.log("Firebase On!");
// Initialize other firebase products here
}


const db = getDatabase();

export {db}
