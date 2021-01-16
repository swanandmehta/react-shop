import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBCmZGX7J3kjhq70Kyj85AOPyn2ShlfMfg",
    authDomain: "react-shop-8eb80.firebaseapp.com",
    projectId: "react-shop-8eb80",
    storageBucket: "react-shop-8eb80.appspot.com",
    messagingSenderId: "138003405661",
    appId: "1:138003405661:web:db255b3fea3acf540c26b4",
    measurementId: "G-F7R4S6V79T"
};

firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = async () => {
    await auth.signInWithPopup(provider);
};

export const userLogout = async () => {
    await auth.signOut();
}

export const getUserDataRef = async (user) => {
    if (user != null){
        const userDataLocationRef = firestore.doc(`user/${user.uid}`);
        const userDataRef = await userDataLocationRef.get();        

        if(!userDataRef.exists){
            const date = new Date();
            try {
                await userDataLocationRef.set({
                    name: user.displayName,
                    email: user.email,
                    creationDate: date,
                })
            }catch (e) {
                return null;
            }

        }

        return userDataRef;
    }

    return null;
}