import React from "react";

import { FormInputLabel, Input, Group } from "./form-input.styles.jsx";

const FormInput = ({ id, label, ...inputProps }) => {
    return (
        <Group>
            <Input {...inputProps} />
            <FormInputLabel shrink={inputProps.value.length} htmlFor={id}>
                {label}:
            </FormInputLabel>
        </Group>
    );
};

export default FormInput;
