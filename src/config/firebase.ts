import {FirebaseOptions, initializeApp} from "firebase/app";
import * as auth from "firebase/auth";

const firebaseConfig = (): FirebaseOptions => {
    // leer las variables de entorno y asignarlas a las variables de firebase
    return {
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_PROJECT_ID,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_APP_ID
    }
};

export const appFirebase = initializeApp(firebaseConfig());
export const authFirebase = auth.initializeAuth(appFirebase);

