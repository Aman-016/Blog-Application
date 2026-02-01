
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-application-ff2c2.firebaseapp.com",
  projectId: "blog-application-ff2c2",
  storageBucket: "blog-application-ff2c2.firebasestorage.app",
  messagingSenderId: "965216249320",
  appId: "1:965216249320:web:55740f4ce528ff11c6b05d",
  measurementId: "G-ZEV0NJ8Y60"
};

export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);