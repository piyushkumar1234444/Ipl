// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcxpkpcw7K7hHZScRW47anNRVvsnE7ko8",
  authDomain: "iplresult1234.firebaseapp.com",
  databaseURL: "https://iplresult1234-default-rtdb.firebaseio.com",
  projectId: "iplresult1234",
  storageBucket: "iplresult1234.appspot.com",
  messagingSenderId: "469413021954",
  appId: "1:469413021954:web:48315912d0c8d0be495a1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

var UserInputRef=firebase.database().ref('year')
document.getElementById('result').addEventListener('submit', submitResult  );
function submitResult(f){
    f.preventDefault();
    var bd = getInputVal('2010')
}