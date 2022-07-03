import React, { useState } from "react";
import {
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
    email: "",
    password: "",
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const [error, setError] = useState("");

    const signInWithGoogle = async () => {
        const response = await signInWithGooglePopup();
        createUserDocumentFromAuth(response.user);
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setFormFields(prevFormFields => ({ ...prevFormFields, [name]: value }));
    };

    const submitHandler = async e => {
        setError();
        e.preventDefault();

        try {
            const response = await signInAuthWithEmailAndPassword(email, password);
            console.log(response);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign In with your email and password.</span>
            <form onSubmit={submitHandler}>
                <FormInput
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    onChange={handleChange}
                    value={email}
                    required
                />

                <FormInput
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    onChange={handleChange}
                    value={password}
                    required
                />

                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" onClick={signInWithGoogle} buttonType="google">
                        Sign in with Google
                    </Button>
                </div>
            </form>

            <p className="error">{error}</p>
        </div>
    );
};

export default SignInForm;
