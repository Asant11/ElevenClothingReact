
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAqZOPBj9JFgdpEQDJkZ0YZFB3oRrMJHgc",
    authDomain: "elevenclothingreact.firebaseapp.com",
    projectId: "elevenclothingreact",
    storageBucket: "elevenclothingreact.appspot.com",
    messagingSenderId: "793019197994",
    appId: "1:793019197994:web:ef7a3236852439d42eb153"
};


const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);