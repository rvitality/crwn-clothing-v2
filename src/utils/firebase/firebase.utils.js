import { initializeApp } from "firebase/app";

import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyChcQADQUw25obHiEB1cJI32P6cYTWfa_k",
    authDomain: "crwn-clothing-868ac.firebaseapp.com",
    projectId: "crwn-clothing-868ac",
    storageBucket: "crwn-clothing-868ac.appspot.com",
    messagingSenderId: "39141959810",
    appId: "1:39141959810:web:f100f9174d4655922eac9b",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async userAuth => {
    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (err) {
            console.log(err.message);
        }
    }

    return userDocRef;
};
