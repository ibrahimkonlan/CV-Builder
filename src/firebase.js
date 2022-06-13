import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD4Kc1iIGyKRKEYWmuBrJs5BZnRRapAFuo",
  authDomain: "cv-builder-956d4.firebaseapp.com",
  projectId: "cv-builder-956d4",
  storageBucket: "cv-builder-956d4.appspot.com",
  messagingSenderId: "853479372033",
  appId: "1:853479372033:web:79ecdb2428a751881d1700",
  measurementId: "G-JSPPKELLBN",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)