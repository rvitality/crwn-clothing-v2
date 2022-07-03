import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ id, label, ...inputProps }) => {
    return (
        <div className="group">
            <input className="form-input" {...inputProps} />
            <label
                className={`${inputProps.value.length ? "shrink" : ""} form-input-label`}
                htmlFor={id}
            >
                {label}:
            </label>
        </div>
    );
};

export default FormInput;
