import { getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD69lrlPaI6CAhFGJrO0-0o4Z4o2xA5Fss",
    authDomain: "food-delivery-app-softbrain.firebaseapp.com",
    databaseURL: "https://food-delivery-app-softbrain-default-rtdb.firebaseio.com",
    projectId: "food-delivery-app-softbrain",
    storageBucket: "food-delivery-app-softbrain.appspot.com",
    messagingSenderId: "59210704833",
    appId: "1:59210704833:web:4579b171ca8e9e78b8f140",
    measurementId: "G-TZZ23CW293"
}

const app = getApp.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, firestore, storage};