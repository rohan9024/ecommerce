
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDU7BktNuwRHTXA20uwLjbtDdENeKE66nk",
    authDomain: "e-com-463c2.firebaseapp.com",
    projectId: "e-com-463c2",
    storageBucket: "e-com-463c2.appspot.com",
    messagingSenderId: "171422193847",
    appId: "1:171422193847:web:456e3ab15fe201611e5532",
    measurementId: "G-SZSESMQ1H7"
};


const app = initializeApp(firebaseConfig);
const storage = getStorage(app)
const auth = getAuth(app)
const db = getFirestore(app);

export { db, auth, storage };
