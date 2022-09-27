import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC3z6AL6D0dULoDXXCPCpomGi7R21uJLfg",
    authDomain: "myblog-732a0.firebaseapp.com",
    projectId: "myblog-732a0",
    storageBucket: "myblog-732a0.appspot.com",
    messagingSenderId: "590992324161",
    appId: "1:590992324161:web:6c5c212f4fe4ca32da78c0"
};

const firebaseAApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseAApp.firestore();