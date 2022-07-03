import React from "react";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    auth,
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
            <SignUpForm />
        </div>
    );
};

export default SignIn;
