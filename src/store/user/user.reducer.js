// import { createSlice } from "@reduxjs/toolkit";
import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = { currentUser: null, isLoading: false, error: null };

export const userReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    if (type === USER_ACTION_TYPES.SIGN_IN_SUCCESS) {
        return { ...state, currentUser: payload };
    }

    if (type === USER_ACTION_TYPES.SIGN_IN_FAILED) {
        return { ...state, currentUser: payload };
    }

    return state;
};
