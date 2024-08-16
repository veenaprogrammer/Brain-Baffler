import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/ firebase/app";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.1/firebase/analytics";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.1/firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase/auth";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.1/firebase/auth";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.1/firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDrRoho3XTGXUIj48XBrNtlYCy4-U2-RXg",
    authDomain: "brain-baffler.firebaseapp.com",
    databaseURL: "https://brain-baffler-default-rtdb.firebaseio.com",
    projectId: "brain-baffler",
    storageBucket: "brain-baffler.appspot.com",
    messagingSenderId: "708597164227",
    appId: "1:708597164227:web:e7a51751e9a66057ba5a76",
    measurementId: "G-JHH5DDQW33"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore()

export{db}
export{auth}