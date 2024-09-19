import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCFapxLgpxnD9TzaFn07qFyRxz9TRzDeU8",
    authDomain: "react-firebase-auth-8d42d.firebaseapp.com",
    projectId: "react-firebase-auth-8d42d",
    storageBucket: "react-firebase-auth-8d42d.appspot.com",
    messagingSenderId: "779987727968",
    appId: "1:779987727968:web:66d3d5a18e3287ea2db505",
    measurementId: "G-B28NMVKX2D"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;