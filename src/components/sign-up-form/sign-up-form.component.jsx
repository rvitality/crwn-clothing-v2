import React, { useState } from "react";
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import { SignUpContainer, Error } from "./sign-up-form.styles.jsx";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const [error, setError] = useState("");

    const handleChange = event => {
        const { name, value } = event.target;
        setFormFields(prevFormFields => ({ ...prevFormFields, [name]: value }));
    };

    const submitHandler = async e => {
        setError();
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            const response = await createAuthUserWithEmailAndPassword(email, password);
            if (response) {
                // store user in firestore db
                await createUserDocumentFromAuth(response.user, { displayName });

                // reset form fields
                setFormFields(defaultFormFields);
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>Sign Up with your email and password.</span>
            <form onSubmit={submitHandler}>
                <FormInput
                    id="display-name"
                    label="Display Name"
                    name="displayName"
                    type="text"
                    onChange={handleChange}
                    value={displayName}
                    required
                />

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

                <FormInput
                    id="confirm-password"
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    onChange={handleChange}
                    value={confirmPassword}
                    required
                />

                <Button type="submit">Sign Up</Button>
            </form>

            <Error>{error}</Error>
        </SignUpContainer>
    );
};

export default SignUpForm;
