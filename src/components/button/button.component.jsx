import React from "react";

import "./button.styles.scss";

// .google-sign-in
// .inverted

const BUTTON_TYPE_CLASSES = {
    google: "google-sign-in",
    inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <button
            className={`${BUTTON_TYPE_CLASSES[buttonType] || ""} button-container`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
