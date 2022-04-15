import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKcElFO-sZUHdTVyTKIuqfnJ-FhyHoh34",
  authDomain: "router-firebase-integrat-adcc1.firebaseapp.com",
  projectId: "router-firebase-integrat-adcc1",
  storageBucket: "router-firebase-integrat-adcc1.appspot.com",
  messagingSenderId: "847815044164",
  appId: "1:847815044164:web:d51a7953225d1461fea011"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export default app; 