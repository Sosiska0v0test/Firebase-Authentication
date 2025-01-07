import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwyRhCwLMxRBTcWFU4PJdu6IRIvwee2So",
  authDomain: "firebase-authentication-1tvf.vercel.app",
  projectId: "fir-authentication-8fec3",
  storageBucket: "fir-authentication-8fec3.appspot.com",
  messagingSenderId: "613286786106",
  appId: "1:613286786106:web:f69a3a0bb76a7b918f3103",
  measurementId: "G-TK8LK3VT87",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
