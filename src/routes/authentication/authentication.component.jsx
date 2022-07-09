import React from "react";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import { AuthenticationContainer } from "./authentication.styles.jsx";

const Authentication = () => {
    return (
        <AuthenticationContainer>
            <SignUpForm />
            <SignInForm />
        </AuthenticationContainer>
    );
};

export default Authentication;
