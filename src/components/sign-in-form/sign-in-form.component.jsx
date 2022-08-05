import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { googleSignInStart, emailSignInStart } from "../../store/user/user.action";

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import { SignInContainer, Error, ButtonsContainer } from "./sign-in-form.styles.jsx";

const defaultFormFields = {
    email: "",
    password: "",
};

const SignInForm = () => {
    const dispatch = useDispatch();

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const [error, setError] = useState("");

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart());
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setFormFields(prevFormFields => ({ ...prevFormFields, [name]: value }));
    };

    const submitHandler = async e => {
        setError();
        e.preventDefault();

        try {
            dispatch(emailSignInStart(email, password));
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <SignInContainer>
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

                <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" onClick={signInWithGoogle} buttonType="google">
                        Sign in with Google
                    </Button>
                </ButtonsContainer>
            </form>

            <Error>{error}</Error>
        </SignInContainer>
    );
};

export default SignInForm;
