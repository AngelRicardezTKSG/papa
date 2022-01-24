import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import {getFunctions,connectFunctionsEmulator} from "firebase/functions"
import firebaseOptions from "./firebase.config";

const firebaseApp = initializeApp(firebaseOptions);

const db = getFirestore(firebaseApp);
connectFirestoreEmulator(db, "localhost", 8080);

const func = getFunctions(firebaseApp)
connectFunctionsEmulator(func,"localhost",5001);

export { db,func };
