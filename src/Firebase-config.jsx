import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC-HWj4DkxHPoksQi0ECYIKmJGojr_07yQ",
  authDomain: "majorproject-1c9ac.firebaseapp.com",
  databaseURL:
    "https://majorproject-1c9ac-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "majorproject-1c9ac",
  storageBucket: "majorproject-1c9ac.appspot.com",
  messagingSenderId: "752548280164",
  appId: "1:752548280164:web:15f5d1f4622e624e872c71",
  measurementId: "G-K5GPEDB5TV",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
