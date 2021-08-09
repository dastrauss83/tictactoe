import firebase from "firebase";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyD1PrEU63qiGEEiyCyCX7d7akunT1V1ryI",
  authDomain: "tictactoe-3e440.firebaseapp.com",
  projectId: "tictactoe-3e440",
  storageBucket: "tictactoe-3e440.appspot.com",
  messagingSenderId: "317728356626",
  appId: "1:317728356626:web:24cb7e7f382beb8ee75bcb",
});

export default app;

export const auth = app.auth();
