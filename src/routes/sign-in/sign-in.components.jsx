import React from "react";
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleuser = async () => {
        const response = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(response.user);
    };

    return (
        <div>
            <h1>SignIn</h1>
            <button onClick={logGoogleuser}>Sign in with Google Popup</button>
        </div>
    );
};

export default SignIn;
