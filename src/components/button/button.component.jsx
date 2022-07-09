import React from "react";

import { BaseButton, GoogleSignInButton, InvertedButton } from "./button.styles.jsx";

// .google-sign-in
// .inverted

// const BUTTON_TYPE_CLASSES = {
//     base: "base",
//     google: "google-sign-in",
//     inverted: "inverted",
// };

const getButton = (buttonType = "base") => {
    const buttons = {
        base: BaseButton,
        google: GoogleSignInButton,
        inverted: InvertedButton,
    };

    return buttons[buttonType];
};

const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);

    return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
