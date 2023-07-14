import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9CFIalIWWikavm55uJgUlDFrFPzuLHoQ",
  authDomain: "clube-ecommerce.firebaseapp.com",
  projectId: "clube-ecommerce",
  storageBucket: "clube-ecommerce.appspot.com",
  messagingSenderId: "350177450522",
  appId: "1:350177450522:web:e888a7508658b39cba4fa3",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
