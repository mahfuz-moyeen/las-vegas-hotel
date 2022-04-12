import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCFf4R5XyZHZr7ij-OsEiEufmpP4KR57U4",
    authDomain: "lasvegas-hotel.firebaseapp.com",
    projectId: "lasvegas-hotel",
    storageBucket: "lasvegas-hotel.appspot.com",
    messagingSenderId: "1062683194403",
    appId: "1:1062683194403:web:035250bfe85f52224b2d96"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;